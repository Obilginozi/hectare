export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string) {
  return `${basePath}${path}`;
}

export function canonicalPath(path: string) {
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return withBase(withSlash);
}
