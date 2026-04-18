declare module "web-push" {
  export interface WebPushVapidDetails {
    subject: string;
    publicKey: string;
    privateKey: string;
  }

  export interface WebPushRequestOptions {
    TTL?: number;
    urgency?: "very-low" | "low" | "normal" | "high";
    vapidDetails?: WebPushVapidDetails;
    [key: string]: unknown;
  }

  export interface WebPushGeneratedRequestDetails {
    endpoint: string;
    method?: string;
    headers?: Record<string, string | number>;
    body?: BodyInit | null;
    timeout?: number;
  }

  export function sendNotification(
    subscription: unknown,
    payload?: string | Buffer | null,
    options?: WebPushRequestOptions,
  ): Promise<unknown>;

  export function generateRequestDetails(
    subscription: unknown,
    payload?: string | Buffer | null,
    options?: WebPushRequestOptions,
  ): WebPushGeneratedRequestDetails;

  const api: {
    sendNotification: typeof sendNotification;
    generateRequestDetails: typeof generateRequestDetails;
  };

  export default api;
}
