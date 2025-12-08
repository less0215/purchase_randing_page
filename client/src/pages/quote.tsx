import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-quote">
      <Header showBack />
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
