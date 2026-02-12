import React from "react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/data/landing/landing.data";

/* Testimonials Section */

const Testimonials = () => {
  return (
    <section className="py-20 bg-linear-to-br from-[#024466] to-[#035a82] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Virtual Assistants Say
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Hear from real VAs who&apos;ve transformed their careers with
            Advance Virtual Staff PH.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <Card className="bg-white/10 border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-7">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6 italic">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#FF6B35] to-amber-400 flex items-center justify-center text-white font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-blue-300 text-xs">{t.role}</p>
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

export default Testimonials;
