// Images are now served from absolute CDN URLs that work on both Manus hosting and GitHub Pages.
// This helper is kept for backward compatibility but simply passes through the URL.
export function resolveImagePath(path: string): string {
  return path;
}
