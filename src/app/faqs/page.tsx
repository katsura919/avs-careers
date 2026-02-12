"use client";
import Hero from "@/components/custom/faqs/Hero";
import FAQList from "@/components/custom/faqs/FAQList";
import CTA from "@/components/custom/faqs/CTA";

export default function FAQs() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FAQList />
      <CTA />
    </div>
  );
}
