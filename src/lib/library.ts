export type LibraryType = "book" | "article" | "practical" | "story" | "video";
export type LibraryStatus = "published" | "in-progress" | "evolving";
export const libraryTypeLabels: Record<LibraryType, string> = { book:"Книги", article:"Статті та есе", practical:"Практичні матеріали", story:"Оповідання та притчі", video:"Відео" };
export const libraryStatusLabels: Record<LibraryStatus, string> = { published:"Опубліковано", "in-progress":"У роботі", evolving:"Продовжує змінюватися" };
