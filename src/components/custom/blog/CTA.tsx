"use client";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const CTA = () => {
  return (
    <section className="py-16 bg-[#f5f9fb]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-[#024466] mb-4">
            Want to Share Your VA Story?
          </h2>
          <p className="text-gray-600 mb-6">
            We love featuring success stories from our VAs. If you&apos;ve built
            an amazing career with AVS, we&apos;d love to hear from you!
          </p>
          <Button className="bg-[#024466] hover:bg-[#02334a] text-white px-8 h-12 font-semibold rounded-xl">
            Share Your Story
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
