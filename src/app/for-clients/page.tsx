"use client";
import Hero from "@/components/custom/for-clients/Hero";
import Services from "@/components/custom/for-clients/Services";
import WhyChooseAVS from "@/components/custom/for-clients/WhyChooseAVS";
import HowItWorks from "@/components/custom/for-clients/HowItWorks";
import Testimonials from "@/components/custom/for-clients/Testimonials";
import CTA from "@/components/custom/for-clients/CTA";

export default function ForClientsPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <WhyChooseAVS />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
}
