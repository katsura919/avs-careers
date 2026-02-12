import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { professionalRequirements } from "@/data/requirements/requirements.data";

const ProfessionalRequirements = () => {
  return (
    <section className="py-16 bg-[#f5f9fb]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Professional Qualifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond equipment, we look for professionals with the right
              background and commitment to remote work excellence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {professionalRequirements.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-[#FF6B35] to-[#ff8a5c] flex items-center justify-center shrink-0">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#024466] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalRequirements;
