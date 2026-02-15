import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { CheckCircle2 } from "lucide-react";
// Company Culture Section
const CompanyCulture = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-6">
              More Than a Job — <span className="text-[#FF6B35]">A Family</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Advance Virtual Staff PH, we believe that great work happens
              when people feel valued and supported. Our VAs are not just
              employees — they&apos;re part of a thriving community that learns,
              grows, and celebrates together.
            </p>
            <div className="space-y-4">
              {[
                "Free training and professional development programs",
                "Active community of 7,000+ VAs in our AVS Hub",
                "Regular team activities, contests, and recognition",
                "Dedicated support team always ready to help",
                "Competitive pay with growth-based increases",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-500 mt-0.5 shrink-0"
                  />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#024466]/20 to-[#FF6B35]/20 rounded-3xl blur-2xl" />
              <div className="relative bg-linear-to-br from-[#f5f9fb] to-white rounded-3xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#024466] text-white rounded-2xl p-6 text-center">
                    <p className="text-3xl font-bold mb-1">7K+</p>
                    <p className="text-blue-200 text-sm">Community Members</p>
                  </div>
                  <div className="bg-[#FF6B35] text-white rounded-2xl p-6 text-center">
                    <p className="text-3xl font-bold mb-1">50+</p>
                    <p className="text-orange-100 text-sm">Training Courses</p>
                  </div>
                  <div className="bg-linear-to-br from-emerald-500 to-teal-500 text-white rounded-2xl p-6 text-center">
                    <p className="text-3xl font-bold mb-1">4.9★</p>
                    <p className="text-emerald-100 text-sm">VA Satisfaction</p>
                  </div>
                  <div className="bg-linear-to-br from-violet-500 to-purple-500 text-white rounded-2xl p-6 text-center">
                    <p className="text-3xl font-bold mb-1">100%</p>
                    <p className="text-violet-100 text-sm">Remote Work</p>
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

export default CompanyCulture;
