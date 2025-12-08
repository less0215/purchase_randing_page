import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden" data-testid="page-quote">
      <Header showBack showCta={false} centered />
      <QuoteForm />
    </div>
  );
}
