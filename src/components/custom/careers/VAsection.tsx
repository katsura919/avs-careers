import { CheckCircle2, Monitor } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

// What is a VA Section
const VAsection = () => {
  return (
    <section id="what-is-va" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              What Is a Virtual Assistant?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-6">
              Your Skills. Your Schedule.{" "}
              <span className="text-[#FF6B35]">Your Career.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A Virtual Assistant (VA) is a remote professional who provides
              administrative, technical, or creative support to businesses and
              entrepreneurs worldwide. VAs work from the comfort of their homes,
              using digital tools to deliver high-quality services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From managing emails and social media to web development and
              bookkeeping — VAs are the backbone of modern remote businesses.
              The demand for skilled VAs is growing rapidly, making it one of
              the most promising career paths today.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Flexible Hours",
                "Work From Home",
                "No Commute",
                "Global Opportunities",
                "Skill Development",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#f5f9fb] text-[#024466] text-sm font-medium rounded-full border border-[#024466]/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#024466]/10 to-[#FF6B35]/10 rounded-3xl blur-2xl" />
              <div className="relative bg-linear-to-br from-[#024466] to-[#035a82] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Monitor size={22} className="text-[#FF6B35]" /> Common VA
                  Tasks
                </h3>
                <div className="space-y-3">
                  {[
                    "Email & Calendar Management",
                    "Social Media Management",
                    "Data Entry & Research",
                    "Customer Support & Chat",
                    "Bookkeeping & Invoicing",
                    "Content Writing & Editing",
                    "Web Development & Design",
                    "Project Management",
                  ].map((task, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-[#FF6B35] shrink-0"
                      />
                      <span className="text-blue-100">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VAsection;
