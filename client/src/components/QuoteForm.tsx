import { useEffect } from "react";

export default function QuoteForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]" data-testid="quote-form-container">
      <iframe
        data-tally-src="https://tally.so/embed/68LR2O?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="100%"
        frameBorder={0}
        title="견적 신청"
        style={{ flex: 1, minHeight: 'calc(100vh - 64px)' }}
      />
    </div>
  );
}
