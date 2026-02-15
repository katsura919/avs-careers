import { benefits } from "@/data/landing/landing.data";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
const ChooseUs = () => {
  return (
    <section className="py-20 bg-[#f5f9fb]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            Benefits of Being an AVS Virtual Assistant
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don&apos;t just find you a job — we build your career.
            Here&apos;s what makes AVS the best place for aspiring Virtual
            Assistants.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-7">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#024466] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
