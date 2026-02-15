"use client";
import { Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { communityFeatures } from "@/data/about-us/about-us.data";

const AVSCommunity = () => {
  return (
    <section className="py-20 bg-linear-to-br from-[#024466] to-[#035a82] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm mx-auto">
            <Users size={16} className="text-[#FF6B35]" />
            <span className="text-white/90 text-sm font-medium">
              AVS Hub Community
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            A community of empowered Virtual Assistants & partners who help each
            other succeed. With over 7,000 members sharing expertise every day!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
            {communityFeatures.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-left">
                <CheckCircle2 size={18} className="text-[#FF6B35] shrink-0" />
                <span className="text-blue-100 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-2xl font-bold text-white mb-8">
            ✨ 7,326 Members and Counting ✨
          </p>

          <Button
            size="lg"
            className="bg-[#FF6B35] hover:bg-[#e85a28] text-white h-13 px-8 font-semibold rounded-xl shadow-lg shadow-orange-500/25"
          >
            Join Our Community
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AVSCommunity;
