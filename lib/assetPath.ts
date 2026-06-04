/** Prefix public asset paths when deployed under a GitHub Pages base path. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function assetPath(path: string): string {
  if (!path.startsWith('/')) {
    return `${basePath}/${path}`;
  }
  return `${basePath}${path}`;
}
