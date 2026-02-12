"use client";
import Hero from "@/components/custom/requirements/Hero";
import SystemRequirements from "@/components/custom/requirements/SystemRequirements";
import ProfessionalRequirements from "@/components/custom/requirements/ProfessionalRequirements";
import SoftSkills from "@/components/custom/requirements/SoftSkills";
import CTA from "@/components/custom/requirements/CTA";

export default function RequirementsPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SystemRequirements />
      <ProfessionalRequirements />
      <SoftSkills />
      <CTA />
    </div>
  );
}
