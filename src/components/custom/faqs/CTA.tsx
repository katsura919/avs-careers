"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const CTA = () => {
  return (
    <section className="py-16 bg-[#f5f9fb]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-[#024466] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Feel free to reach out or start your
            application today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply-here">
              <Button className="bg-[#024466] hover:bg-[#02334a] text-white px-8 h-12 font-semibold rounded-xl">
                Apply Now
              </Button>
            </Link>
            <a href="mailto:admin@advancedvirtualstaff.com">
              <Button
                variant="outline"
                className="border-[#024466] text-[#024466] hover:bg-[#024466] hover:text-white px-8 h-12 font-semibold rounded-xl"
              >
                Contact Us
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
