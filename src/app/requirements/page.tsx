import Hero from "@/components/custom/requirements/Hero";
import SysRequirements from "@/components/custom/requirements/SysRequirements";
import Qualifications from "@/components/custom/requirements/Qualifications";
import Application from "@/components/custom/requirements/Application";
import ExperienceRequirements from "@/components/custom/requirements/ExperienceRequirements";
import CTA from "@/components/custom/requirements/CTA";

const Requirements = () => {
  return (
    // override global css kay naka red ang background
    <main className="min-h-screen bg-[#ffffff] font-sans">
      {/* Hero Section */}
      <Hero />

      {/* System Requirements */}
      <SysRequirements />

      {/* Top 3 Qualifications */}
      <Qualifications />

      {/* Application Requirements */}
      <Application />

      {/* Basic Skills / Experience */}
      <ExperienceRequirements />

      {/* Call to action Section */}
      <CTA />
    </main>
  );
};

export default Requirements;
