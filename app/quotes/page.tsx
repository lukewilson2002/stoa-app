import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import { quotes } from "../../lib/quotes";
import Quotes from "../../components/Quotes";

export const metadata: Metadata = {
  title: "Quotes",
  description: "A collection of stoic quotes",
};

export default function Page() {
  return (
    <PageLayout>
      <Quotes quotes={quotes} />
    </PageLayout>
  );
}
