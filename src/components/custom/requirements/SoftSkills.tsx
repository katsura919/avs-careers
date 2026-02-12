import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { softSkills } from "@/data/requirements/requirements.data";

const SoftSkills = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Essential Soft Skills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These soft skills are crucial for success as a virtual assistant
              and thriving in a remote work environment.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4">
          {softSkills.map((skill, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="flex items-center gap-4 bg-[#f5f9fb] p-5 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#024466] flex items-center justify-center shrink-0">
                  <skill.icon className="text-white" size={20} />
                </div>
                <p className="text-gray-700 font-medium">{skill.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
