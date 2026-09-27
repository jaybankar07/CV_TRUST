export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("CV-TRUST Diagnostic Logger:", error, context);
}
