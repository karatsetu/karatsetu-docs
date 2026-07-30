import { translations, type Lang } from "./i18n";

const moduleIds = [
  "design-costing",
  "orders",
  "procurement",
  "raw-inventory",
  "production",
  "hallmarking",
  "finished-inventory",
  "sales",
  "crm",
  "accounts",
  "hr",
  "admin",
  "reports",
] as const;

export const moduleMeta = moduleIds.map((id, index) => ({
  id,
  number: String(index + 1).padStart(2, "0"),
  ...translations.en.moduleCards[index],
}));

export type ModuleMeta = (typeof moduleMeta)[number];

export function getModuleMeta(lang: Lang): ModuleMeta[] {
  return moduleIds.map((id, index) => ({
    id,
    number: String(index + 1).padStart(2, "0"),
    ...translations[lang].moduleCards[index],
  }));
}
