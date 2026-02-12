"use client";
import { coreValues } from "@/data/about-us/about-us.data";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const CoreValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            Our Culture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466]">
            The <span className="text-[#FF6B35]">AVS</span> Way
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
            Our core values define who we are and how we work together to
            achieve excellence.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreValues.map((value, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#024466]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#024466] transition-colors duration-300">
                    <value.icon
                      size={24}
                      className="text-[#024466] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-[#024466] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
