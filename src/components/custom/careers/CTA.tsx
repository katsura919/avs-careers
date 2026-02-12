import React from "react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Briefcase, Star } from "lucide-react";
import Link from "next/link";

// CTA Section
const CTA = () => {
  return (
    <section className="py-20 bg-linear-to-r from-[#FF6B35] to-[#ff8c5a] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="flex justify-center mb-6">
            <Star
              size={48}
              className="text-white/80 fill-white/80 animate-pulse"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your VA Career?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for the opportunity — create it. Join Advance
            Virtual Staff PH today and take the first step towards your dream
            career.
          </p>
          <Link href="/apply-here">
            <Button
              size="lg"
              className="bg-white text-[#FF6B35] hover:bg-white/90 h-14 px-10 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Briefcase size={20} className="mr-2" />
              Apply Now — It&apos;s Free
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
