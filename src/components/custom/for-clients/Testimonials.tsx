"use client";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { testimonials } from "@/data/for-clients/for-clients.data";

const Testimonials = () => {
  return (
    <section className="py-20 bg-linear-to-br from-[#024466] to-[#035a82] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <Card className="bg-white/10 border-white/10 backdrop-blur-sm h-full">
                <CardContent className="p-7">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed mb-5 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-blue-300 text-xs">
                      {testimonial.company}
                    </p>
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

export default Testimonials;
