"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "What is a Virtual Assistant (VA)?",
    a: "A Virtual Assistant is a remote professional who provides administrative, technical, or creative support to businesses and entrepreneurs. VAs work from home using digital tools to deliver high-quality services.",
  },
  {
    q: "How do I apply to become a VA with AVS?",
    a: "Simply visit our Apply Now page, fill out the application form with your details, and submit your resume. Our team will review your application and reach out for the next steps.",
  },
  {
    q: "Is there a fee to apply?",
    a: "No! Applying to Advance Virtual Staff PH is completely free. We never charge our VAs any placement or application fees.",
  },
  {
    q: "What qualifications do I need?",
    a: "Basic requirements include a reliable internet connection, a computer or laptop, strong communication skills, and relevant experience for your desired role. We also provide training to help you get started.",
  },
  {
    q: "Do I need prior VA experience?",
    a: "Not necessarily. While experience is a plus, we welcome applicants who are eager to learn. We offer free training programs to help you develop the skills needed for your role.",
  },
  {
    q: "What kind of roles are available?",
    a: "We hire for a wide range of roles including Admin/Executive VA, Customer Support, Social Media Management, Bookkeeping, Web Development, Digital Marketing, Sales, and more.",
  },
  {
    q: "How much can I earn as a VA?",
    a: "Compensation varies based on the role, experience level, and client requirements. We ensure all our VAs receive competitive and fair compensation packages.",
  },
  {
    q: "What are the working hours?",
    a: "Working hours depend on the client's requirements. Some roles follow US/UK/AU business hours, while others offer flexible scheduling. Details are shared during the matching process.",
  },
  {
    q: "What equipment do I need?",
    a: "You'll typically need a laptop/desktop with at least 8GB RAM, a stable internet connection (at least 25 Mbps), a headset with microphone, and a quiet workspace.",
  },
  {
    q: "How long does the hiring process take?",
    a: "Our hiring process is fast and efficient. From application to placement, it can take as little as 1-2 weeks depending on the role and your qualifications.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <HelpCircle size={16} className="text-[#FF6B35]" />
              <span className="text-white/90 text-sm font-medium">
                Got Questions?
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-yellow-400">
                Questions
              </span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Everything you need to know about working with Advance Virtual
              Staff PH. Can&apos;t find your answer? Reach out to us!
            </p>
          </motion.div>
        </div>

        <WaveDivider color="white" />
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                    openIndex === i
                      ? "border-[#024466]/20 shadow-md"
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-[#024466] pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[#024466] shrink-0 transition-transform duration-200 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f5f9fb]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-[#024466] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Feel free to reach out or start your
              application today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/apply-here">
                <Button className="bg-[#024466] hover:bg-[#02334a] text-white px-8 h-12 font-semibold rounded-xl">
                  Apply Now
                </Button>
              </Link>
              <a href="mailto:admin@advancedvirtualstaff.com">
                <Button
                  variant="outline"
                  className="border-[#024466] text-[#024466] hover:bg-[#024466] hover:text-white px-8 h-12 font-semibold rounded-xl"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
