import PageLayout from "@/components/PageLayout";
import { quotes } from "../../lib/quotes";
import Quotes from "../../components/Quotes";

export default function Page() {
  return (
    <PageLayout>
      <Quotes quotes={quotes} />
    </PageLayout>
  );
}