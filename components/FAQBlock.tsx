"use client";

import { useState } from "react";
import type { FAQ } from "@/types";
import JsonLd from "./JsonLd";

interface FAQBlockProps {
  faqs: FAQ[];
}

export default function FAQBlock({ faqs }: FAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="my-8">
      <JsonLd schema={faqSchema} />
      <h2 className="mb-4 text-2xl font-bold text-primary">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-slate-200 rounded-lg border border-slate-200">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-primary hover:bg-slate-50"
            >
              <span>{faq.question}</span>
              <span className="ml-4 shrink-0 text-slate-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-slate-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
