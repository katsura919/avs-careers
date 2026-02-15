import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// CTA Section
const CTA = () => {
  return (
    <section className="py-20 bg-[#f5f9fb]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
            Your Future Starts Here
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an experienced VA or just starting out, we have
            the tools, training, and opportunities to help you succeed. Take the
            first step today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply-here">
              <Button
                size="lg"
                className="bg-[#024466] hover:bg-[#02334a] text-white h-13 px-10 text-base font-semibold rounded-xl shadow-lg"
              >
                <Briefcase size={18} className="mr-2" />
                Apply Now
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                size="lg"
                variant="outline"
                className="border-[#024466] text-[#024466] hover:bg-[#024466] hover:text-white h-13 px-10 text-base font-semibold rounded-xl"
              >
                Learn More About VA Careers
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
