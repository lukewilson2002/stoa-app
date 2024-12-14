import { IQuote } from "@/lib/quotes";

interface IQuoteProps {
  quote: IQuote;
  className?: string;
}

export default function Quote({ quote, className }: IQuoteProps) {
  if (!quote) return null;
  return (
    <blockquote className={className}>
      <p>{quote.text}</p>
      <footer>
        — <span className="mx-1">{quote.author}</span> {quote.source ?
          <span>(<a className="underline" href={quote.source.url}>{quote.source.name}</a>)</span>
          : null}
        <br />
      </footer>
    </blockquote>
  );
}
