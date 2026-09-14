/** Only same-site paths are allowed as a post-login redirect. */
export function safeNext(value: string | string[] | undefined): string {
  const s = Array.isArray(value) ? value[0] : value;
  if (!s || !s.startsWith("/") || s.startsWith("//") || s.startsWith("/\\")) return "/";
  return s;
}
