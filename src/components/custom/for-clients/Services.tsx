"use client";
import { services } from "@/data/for-clients/for-clients.data";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            Virtual Staffing Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From admin support to technical roles, we provide skilled Virtual
            Assistants for every business need.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <CardContent className="p-7">
                  <div className="w-14 h-14 rounded-2xl bg-[#024466]/10 flex items-center justify-center mb-5 group-hover:bg-[#024466] transition-colors duration-300">
                    <service.icon
                      size={24}
                      className="text-[#024466] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#024466] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
