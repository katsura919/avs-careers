"use client";
import { Eye, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

const VisionMission = () => {
  return (
    <section className="py-20 bg-[#f5f9fb]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466]">
            Our Vision & Mission
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <Card className="border-0 shadow-lg h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-linear-to-r from-[#FF6B35] to-[#ff8c5a] p-8 text-white">
                  <Eye size={36} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-white/90 leading-relaxed">
                    To empower Filipinos in the BPO Industry with exceptional
                    opportunities to the world, equipping them with the
                    knowledge they need to succeed in their careers and be
                    worthy of world-class opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="border-0 shadow-lg h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-linear-to-r from-[#024466] to-[#035a82] p-8 text-white">
                  <Target size={36} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Advocate for Virtual Assistants and aim at utilizing team
                    culture within business by offering dedicated support for
                    Virtual Assistants based in the Philippines, fostering
                    growth and professional excellence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
