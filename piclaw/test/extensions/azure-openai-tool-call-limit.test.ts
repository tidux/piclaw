import { expect, test } from "bun:test";

const { applyToolCallLimit } = await import("../../src/utils/azure-tool-call-limit");

const config = {
  limit: 1,
  summaryMax: 2,
  outputChars: 40,
  dedupeToolOutputSearch: true,
};

const makeCall = (callId: string, name: string, args: Record<string, unknown>) => ({
  type: "function_call",
  call_id: callId,
  name,
  arguments: JSON.stringify(args),
});

const makeOutput = (callId: string, output: string) => ({
  type: "function_call_output",
  call_id: callId,
  output,
});

test("applyToolCallLimit trims oldest tool calls and inserts summary", () => {
  const messages = [
    makeCall("call1", "bash", { command: "ls" }),
    makeOutput("call1", "first output"),
    makeCall("call2", "tool_output_search", { handle: "out_1", query: "foo" }),
    makeOutput("call2", "second output"),
  ];

  const result = applyToolCallLimit(messages, config);

  expect(result.toolCallTotal).toBe(2);
  expect(result.toolCallRemoved).toBe(1);
  expect(result.toolCallKept).toBe(1);

  const callIds = result.messages
    .filter((item) => item?.type === "function_call")
    .map((item) => item.call_id);
  expect(callIds).toEqual(["call2"]);

  const summary = result.messages.find((item) => item?.type === "message" && item?.role === "assistant");
  expect(summary).toBeTruthy();
  expect(summary?.content?.[0]?.text || "").toContain("Earlier tool calls (1)");
});

test("applyToolCallLimit dedupes tool_output_search calls", () => {
  const messages = [
    makeCall("call1", "tool_output_search", { handle: "out_2", query: "alpha" }),
    makeOutput("call1", "first result"),
    makeCall("call2", "tool_output_search", { handle: "out_2", query: "alpha" }),
    makeOutput("call2", "second result"),
  ];

  const result = applyToolCallLimit(messages, config);

  expect(result.toolCallTotal).toBe(2);
  expect(result.toolCallDeduped).toBe(1);
  expect(result.toolCallRemoved).toBe(1);

  const callIds = result.messages
    .filter((item) => item?.type === "function_call")
    .map((item) => item.call_id);
  expect(callIds).toEqual(["call1"]);

  const summary = result.messages.find((item) => item?.type === "message" && item?.role === "assistant");
  expect(summary).toBeTruthy();
  expect(summary?.content?.[0]?.text || "").toContain("Earlier tool calls (1)");
});
