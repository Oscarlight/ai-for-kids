// Maps manus-storage image paths to local paths for GitHub Pages deployment
declare const __GITHUB_PAGES__: boolean;

const isGitHubPages = typeof __GITHUB_PAGES__ !== "undefined" && __GITHUB_PAGES__;

const imageMap: Record<string, string> = {
  "/manus-storage/course1_hero_18658186.png": "/ai-for-kids/images/course1_hero.png",
  "/manus-storage/course2_hero_970803c8.png": "/ai-for-kids/images/course2_hero.png",
  "/manus-storage/course3_hero_8ceefbd1.png": "/ai-for-kids/images/course3_hero.png",
  "/manus-storage/course4_hero_912bb3f7.png": "/ai-for-kids/images/course4_hero.png",
  "/manus-storage/course5_hero_84fcd995.png": "/ai-for-kids/images/course5_hero.png",
  "/manus-storage/course6_hero_26d18d8f.png": "/ai-for-kids/images/course6_hero.png",
  "/manus-storage/course7_hero_a6ba8736.png": "/ai-for-kids/images/course7_hero.png",
  "/manus-storage/course8_hero_ddfeaecc.png": "/ai-for-kids/images/course8_hero.png",
  "/manus-storage/course9_hero_c47211a0.png": "/ai-for-kids/images/course9_hero.png",
  "/manus-storage/course10_hero_de4cad9a.png": "/ai-for-kids/images/course10_hero.png",
};

export function resolveImagePath(path: string): string {
  if (isGitHubPages && imageMap[path]) {
    return imageMap[path];
  }
  return path;
}
