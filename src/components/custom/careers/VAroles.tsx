import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { vaRoles } from "@/data/careers/careers.data";

// VA Roles Section
const VAroles = () => {
  return (
    <section className="py-20 bg-[#f5f9fb]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            VA Opportunities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            Explore VA Career Paths
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you&apos;re a creative, a tech enthusiast, or a people
            person — there&apos;s a VA role that fits your skills perfectly.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vaRoles.map((role, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#024466]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#024466] transition-colors duration-300">
                    <role.icon
                      size={24}
                      className="text-[#024466] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-[#024466] mb-2">
                    {role.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{role.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VAroles;
