// Images are served from stable public URLs for both the hosted site and GitHub Pages.
// This helper is kept for backward compatibility but simply passes through the URL.
export function resolveImagePath(path: string): string {
  return path;
}
