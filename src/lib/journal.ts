import { getCollection } from "astro:content";

export const journalTypeLabels: Record<string, string> = {
  event: "Зустріч",
  library: "Бібліотека",
  research: "Дослідження",
  project: "Проєкт",
  "field-note": "Спостереження",
  process: "У процесі",
  social: "Суспільна діяльність",
  "womens-space": "Жіночий простір",
  icra: "ICRA",
  update: "Новини ICRA",
};

export const getPublishedJournal = async () => {
  const entries = await getCollection("journal", ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
};

export const journalSlug = (id: string) => id.replace(/\/index\.md$/, "");

export const formatJournalDate = (date: Date) =>
  new Intl.DateTimeFormat("uk-UA", { day: "numeric", month: "long", year: "numeric" }).format(date);
