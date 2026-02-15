import React from "react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const HowItWorks = () => {
  {
    /* How It Works Section */
  }
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            Your Path to Becoming a VA
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Getting started is easy. Follow these simple steps and begin your
            new career journey today.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Apply Online",
              desc: "Submit your application through our simple online form with your resume.",
            },
            {
              step: "02",
              title: "Get Assessed",
              desc: "Complete a quick skills assessment so we can match you with the right clients.",
            },
            {
              step: "03",
              title: "Get Trained",
              desc: "Access our free training modules to sharpen your skills and prepare for success.",
            },
            {
              step: "04",
              title: "Start Working",
              desc: "Get matched with a client and begin earning while working from home.",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative text-center group">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#024466] to-[#0891b2] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-[#024466]/20" />
                )}
                <h3 className="text-lg font-bold text-[#024466] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
