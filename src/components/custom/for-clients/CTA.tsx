"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Get started today and hire your ideal Virtual Assistant in as fast
            as 48 hours. Let us handle the staffing while you focus on growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply-here">
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#e85a28] text-white h-13 px-10 text-base font-semibold rounded-xl shadow-lg shadow-orange-500/25"
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/about-us">
              <Button
                size="lg"
                variant="outline"
                className="border-[#024466] text-[#024466] hover:bg-[#024466] hover:text-white h-13 px-10 text-base font-semibold rounded-xl"
              >
                Learn More About AVS
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
