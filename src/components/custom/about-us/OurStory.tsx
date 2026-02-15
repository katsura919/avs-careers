"use client";
import { storyHighlights, storyStats } from "@/data/about-us/about-us.data";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Trophy } from "lucide-react";

const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-6">
              Find Your Next <span className="text-[#FF6B35]">Dream Job</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Empowering Filipino Virtual Assistants to reach their full
              potential. We provide a platform for qualified, keen, and eager
              Filipino professionals to work and develop their skills in the
              global workforce.
            </p>
            <div className="space-y-5">
              {storyHighlights.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#024466]/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-[#024466]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#024466]">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#024466]/20 to-[#FF6B35]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden">
                <div className="bg-linear-to-br from-[#024466] to-[#035a82] p-8 text-white">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {storyStats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white/10 rounded-2xl p-5 text-center"
                      >
                        <p className="text-3xl font-bold">{stat.number}</p>
                        <p className="text-blue-200 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#FF6B35] rounded-2xl p-5 text-center">
                    <Trophy className="w-10 h-10 mx-auto mb-2" />
                    <p className="font-bold text-lg">
                      The Best VA Hiring Agency
                    </p>
                    <p className="text-orange-100 text-sm">
                      Trusted by businesses worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
