import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { systemRequirements } from "@/data/requirements/requirements.data";
import { CheckCircle2 } from "lucide-react";

const SystemRequirements = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              System & Technical Requirements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To ensure smooth operations and excellent service delivery, all
              VAs must have reliable equipment and internet.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemRequirements.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-100">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#024466] to-[#0891b2] flex items-center justify-center mb-4">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#024466] mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#FF6B35] mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemRequirements;
