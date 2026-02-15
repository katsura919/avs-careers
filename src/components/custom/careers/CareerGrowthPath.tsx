import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { growthPaths } from "@/data/careers/careers.data";

// Career Growth Path Section
const CareerGrowthPath = () => {
  return (
    <section className="py-20 bg-linear-to-br from-[#024466] to-[#035a82] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            Career Growth
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Career Growth at AVS
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            We invest in your growth with clear career progression paths. Start
            anywhere — grow everywhere.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthPaths.map((path, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <Card className="bg-white/10 border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-linear-to-r ${path.color} text-white mb-4`}
                  >
                    {path.level}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {path.title}
                  </h3>
                  <p className="text-blue-200 text-sm">{path.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerGrowthPath;
