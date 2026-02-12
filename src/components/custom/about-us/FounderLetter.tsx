"use client";
import { founderLetter } from "@/data/about-us/about-us.data";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const FounderLetter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              A Message For You
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466]">
              A Letter From <span className="text-[#FF6B35]">Our Founder</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative bg-linear-to-br from-[#024466] to-[#035a82] text-white rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-24 h-24 bg-[#FF6B35] rounded-full opacity-20 blur-xl" />
            <div className="absolute right-8 top-8 w-16 h-16 bg-cyan-400 rounded-full opacity-10 blur-xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">
                {founderLetter.salutation}
              </h3>
              <div className="space-y-4 text-blue-100 leading-relaxed">
                {founderLetter.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white/80">
                    {founderLetter.signature.closing}
                  </p>
                  <p className="text-[#FF6B35] text-2xl font-bold">
                    {founderLetter.signature.name}
                  </p>
                  <p className="text-blue-300 text-sm">
                    {founderLetter.signature.title}
                  </p>
                </div>
                <div className="w-16 h-16 bg-linear-to-br from-[#FF6B35] to-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {founderLetter.signature.initials}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FounderLetter;
