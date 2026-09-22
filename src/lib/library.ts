export type LibraryType = "book" | "article" | "practical" | "story" | "research" | "video";
export type LibraryStatus = "published" | "in-progress" | "evolving";
export const libraryTypeLabels: Record<LibraryType, string> = { book:"Книги", article:"Статті", practical:"Практичні матеріали", story:"Оповідання та притчі", research:"Дослідження", video:"Відео" };
export const libraryStatusLabels: Record<LibraryStatus, string> = { published:"Опубліковано", "in-progress":"У роботі", evolving:"Продовжує змінюватися" };
