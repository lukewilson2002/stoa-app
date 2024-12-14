import { readJsonFile } from "@/lib/json";

export interface IQuote {
  text: string;
  author: string;
  source?: {
    name: string;
    url: string;
  };
}

async function getQuotes(): Promise<IQuote[]> {
  return readJsonFile<IQuote[]>(process.cwd() + "/data/quotes.json");
}

export const quotes = await getQuotes();
  