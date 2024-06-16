const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ja: () => import('./ja.json').then((module) => module.default),
  zh: () => import('./zh.json').then((module) => module.default),
} as Record<string, () => Promise<Record<string, string>>>;

export const getDictionary = async (locale: string) => dictionaries[locale]();
