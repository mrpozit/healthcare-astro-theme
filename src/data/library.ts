export type LibraryType = "book" | "article" | "practical" | "story" | "research" | "video";
export type LibraryStatus = "published" | "in-progress" | "evolving";
export type LibraryAccess = "free" | "paid";

export interface LibraryLink {
  label: string;
  href: string;
  kind?: "read" | "download" | "external";
}

export interface LibraryItem {
  title: string;
  slug: string;
  author: string;
  type: LibraryType;
  topics: string[];
  language: string;
  status?: LibraryStatus;
  access?: LibraryAccess;
  cover?: string;
  coverAlt?: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  externalLinks?: LibraryLink[];
  relatedItems?: string[];
  featured?: boolean;
  featuredOrder?: number;
  editorialOrder?: number;
  whyInIcra?: string[];
}

export const libraryTypeLabels: Record<LibraryType, string> = {
  book: "Книги",
  article: "Статті",
  practical: "Практичні матеріали",
  story: "Оповідання та притчі",
  research: "Дослідження",
  video: "Відео",
};

export const libraryStatusLabels: Record<LibraryStatus, string> = {
  published: "Опубліковано",
  "in-progress": "У роботі",
  evolving: "Продовжує змінюватися",
};

export const libraryItems: LibraryItem[] = [
  {
    title: "Місто навшпиньках",
    slug: "misto-navshpynkah",
    author: "Brann Solen",
    type: "book",
    topics: ["терапевтичні тексти", "арт-терапія"],
    language: "uk",
    description:
      "Книга, окремі глави якої Патриція використовує для налаштування груп перед арт-терапевтичною роботою.",
    featured: true,
    featuredOrder: 1,
    editorialOrder: 1,
    whyInIcra: [
      "Окремі глави цієї книги Патриція використовує для налаштування груп перед арт-терапевтичною роботою.",
      "Після таких зустрічей учасники неодноразово самі запитували, де можна прочитати або завантажити книгу цілком. Саме тому їй природно бути в Бібліотеці ICRA.",
    ],
  },
];

export const getLibraryItem = (slug: string) => libraryItems.find((item) => item.slug === slug);
