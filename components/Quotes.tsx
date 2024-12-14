"use client";

import { useState } from "react";
import { IQuote } from "../lib/quotes";
import Quote from "@/components/Quote";

function searchFilter(searchKeywords: string[], quote: IQuote): boolean {
  if (searchKeywords.length === 0) return true;
  return searchKeywords.map((keyword) => keyword.toUpperCase()).some((keyword) => {
    return quote.text.toUpperCase().includes(keyword)
      || quote.author.toUpperCase().includes(keyword)
      || (quote.source?.name.toUpperCase().includes(keyword) ?? false);
  });
}

export default function Quotes({ quotes }: { quotes: IQuote[] }) {
  const [search, setSearch] = useState("");
  const searchKeywords = search.split(/\s+/).filter(Boolean);

  return (
    <>
      <search className="flex justify-end">
        <input className="px-2 py-0.5 border" type="text" placeholder="Search quotes" onChange={(e) => setSearch(e.target.value)} />
      </search>
      {quotes.filter((quote) => searchFilter(searchKeywords, quote)).map((quote, index) => {
        const href = `/quotes/${index}`;
        return (
          <a key={index} href={href}>
            <Quote className="mt-4 p-4 focus:bg-gray-200 hover:bg-gray-200 transition-colors" quote={quote} />
          </a>
        );
      })}
    </>
  );
}