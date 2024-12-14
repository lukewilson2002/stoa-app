import { quotes } from "@/lib/quotes";
import style from "./page.module.scss";
import PageLayout from "@/components/PageLayout";
import NavLinks from "./NavLinks";
import Quote from "@/components/Quote";

export async function generateStaticParams(): Promise<{ id: string; }[]> {
  return quotes.map((quote, index) => ({
    id: index.toString(),
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string; }> }) {
  const { id } = await params;
  const index = parseInt(id, 10);
  const quote = quotes[parseInt(id, 10)];

  return (
    <PageLayout>
      <article className={style.article}>
        {quote ? <>
          <Quote className={style.blockquote} quote={quote} />
          <NavLinks id={index} max={quotes.length} />
        </> : <p>Quote not found</p>}
        
      </article>
    </PageLayout>
  );
}
