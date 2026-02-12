"use client";
import { whyHire } from "@/data/for-clients/for-clients.data";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const WhyChooseAVS = () => {
  return (
    <section className="py-20 bg-[#f5f9fb]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            Why Choose AVS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            Why Hire From Advance Virtual Staff PH?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We go beyond placement — we ensure quality, reliability, and
            long-term success for your business.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyHire.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#024466] to-[#0891b2] flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#024466] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAVS;
