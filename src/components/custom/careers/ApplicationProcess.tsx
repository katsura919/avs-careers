import AnimatedSection from "@/components/custom/shared/AnimatedSection";

// Application Process Section
const ApplicationProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            Application Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            How to Apply
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our hiring process is simple, fast, and transparent. Here&apos;s
            what to expect.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              step: 1,
              title: "Submit Your Application",
              desc: "Fill out our online application form with your resume, skills, and preferred role. It takes less than 5 minutes.",
            },
            {
              step: 2,
              title: "Skills Assessment",
              desc: "Complete a brief skills test tailored to your chosen role. This helps us match you with the best client opportunities.",
            },
            {
              step: 3,
              title: "Interview & Orientation",
              desc: "Our team will reach out for a quick interview and onboarding orientation to prepare you for success.",
            },
            {
              step: 4,
              title: "Get Matched & Start Working",
              desc: "Once approved, you'll be matched with a client and can start your VA career from home right away!",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#024466] to-[#0891b2] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-[#024466] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
