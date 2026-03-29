export function appendUniqueStringRef(
  previous: string[] | null | undefined,
  value: unknown,
): string[] {
  if (typeof value !== 'string') {
    return Array.isArray(previous) ? previous : [];
  }

  const normalized = value.trim();
  if (!normalized) {
    return Array.isArray(previous) ? previous : [];
  }

  const current = Array.isArray(previous) ? previous : [];
  if (current.includes(normalized)) {
    return current;
  }

  return [...current, normalized];
}

export function removeStringRef(
  previous: string[] | null | undefined,
  value: unknown,
): string[] {
  const current = Array.isArray(previous) ? previous : [];
  if (typeof value !== 'string') {
    return current;
  }

  const normalized = value.trim();
  if (!normalized) {
    return current;
  }

  if (!current.includes(normalized)) {
    return current;
  }

  return current.filter((item) => item !== normalized);
}

export function normalizeComposeRefs(next: unknown): string[] {
  if (!Array.isArray(next)) {
    return [];
  }

  const deduped: string[] = [];
  const seen = new Set<string>();

  for (const value of next) {
    if (typeof value !== 'string') continue;
    const normalized = value.trim();
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    deduped.push(normalized);
  }

  return deduped;
}
