"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const CTA = () => {
  return (
    <section className="py-20 bg-[#f5f9fb]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            We Love Working at AVS
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We believe that you will too. Start your journey with us today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply-here">
              <Button
                size="lg"
                className="bg-[#024466] hover:bg-[#02334a] text-white h-13 px-10 text-base font-semibold rounded-xl shadow-lg"
              >
                See All Open Positions
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                size="lg"
                variant="outline"
                className="border-[#024466] text-[#024466] hover:bg-[#024466] hover:text-white h-13 px-10 text-base font-semibold rounded-xl"
              >
                Explore Careers
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
