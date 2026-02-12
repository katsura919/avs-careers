import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { whyAVS } from "@/data/careers/careers.data";
// Why Work With AVS Section
const WhyWorkWithAVS = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            Why AVS?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            Why Work With Advance Virtual Staff PH?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We&apos;re not just a staffing agency — we&apos;re your partner in
            building a successful remote career.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyAVS.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex gap-4 p-6 rounded-2xl bg-[#f5f9fb] hover:bg-[#eef4f8] transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#024466] flex items-center justify-center shrink-0">
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

export default WhyWorkWithAVS;
