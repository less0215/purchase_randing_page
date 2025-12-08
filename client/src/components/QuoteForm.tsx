import { useEffect } from "react";

export default function QuoteForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="flex-1 w-full px-4 py-6"
      data-testid="quote-form-container"
    >
      <iframe
        data-tally-src="https://tally.so/embed/68LR2O?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="800"
        frameBorder={0}
        title="견적 신청"
        style={{ border: 'none' }}
      />
    </div>
  );
}
