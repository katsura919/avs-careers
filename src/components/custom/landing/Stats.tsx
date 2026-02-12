import { stats } from "@/data/landing/landing.data";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

// stats sections for the landing page
const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-[#024466]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-[#024466]" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#024466] mb-1">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
