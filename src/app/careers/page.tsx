"use client";

// components
import Hero from "@/components/custom/careers/Hero";
import VAsection from "@/components/custom/careers/VAsection";
import VAroles from "@/components/custom/careers/VAroles";
import WhyWorkWithAVS from "@/components/custom/careers/WhyWorkWithAVS";
import CareerGrowthPath from "@/components/custom/careers/CareerGrowthPath";
import ApplicationProcess from "@/components/custom/careers/ApplicationProcess";
import CTA from "@/components/custom/careers/CTA";

export default function CareersPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <VAsection />
      <VAroles />
      <WhyWorkWithAVS />
      <CareerGrowthPath />
      <ApplicationProcess />
      <CTA />
    </div>
  );
}
