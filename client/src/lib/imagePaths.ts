// Maps manus-storage image paths to local paths for GitHub Pages deployment
declare const __GITHUB_PAGES__: boolean;

const isGitHubPages = typeof __GITHUB_PAGES__ !== "undefined" && __GITHUB_PAGES__;

const imageMap: Record<string, string> = {
  "/manus-storage/course1_hero_68851049.png": "/ai-for-kids/images/course1_hero.png",
  "/manus-storage/course2_hero_0f5a7a4d.png": "/ai-for-kids/images/course2_hero.png",
  "/manus-storage/course3_hero_4cb2ad46.png": "/ai-for-kids/images/course3_hero.png",
  "/manus-storage/course4_hero_b04393aa.png": "/ai-for-kids/images/course4_hero.png",
  "/manus-storage/course5_hero_df29f667.png": "/ai-for-kids/images/course5_hero.png",
  "/manus-storage/course6_hero_da6f9600.png": "/ai-for-kids/images/course6_hero.png",
  "/manus-storage/course7_hero_f2085447.png": "/ai-for-kids/images/course7_hero.png",
  "/manus-storage/course8_hero_bf45749d.png": "/ai-for-kids/images/course8_hero.png",
  "/manus-storage/course9_hero_e816dbfe.png": "/ai-for-kids/images/course9_hero.png",
  "/manus-storage/course10_hero_41a03514.png": "/ai-for-kids/images/course10_hero.png",
};

export function resolveImagePath(path: string): string {
  if (isGitHubPages && imageMap[path]) {
    return imageMap[path];
  }
  return path;
}
