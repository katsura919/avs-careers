"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const CTA = () => {
  return (
    <section className="py-16 bg-linear-to-br from-[#024466] to-[#0891b2]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to start your Freelancing journey with us?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join our team of talented virtual assistants and work with amazing
            clients
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-8 py-6 rounded-full"
          >
            <Link href="/apply-here">Apply Now</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
