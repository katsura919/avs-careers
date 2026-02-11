"use client";
import {
  Monitor,
  Wifi,
  Headphones,
  Home,
  CheckCircle2,
  Trophy,
  GraduationCap,
  Briefcase,
  Users,
  Clock,
  Globe,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const systemRequirements = [
  {
    icon: Monitor,
    title: "Computer Specs",
    requirements: [
      "Intel Core i3 or AMD equivalent (minimum)",
      "8GB RAM or higher",
      "Windows 10/11 or macOS 10.14+",
      "Webcam for virtual meetings",
    ],
  },
  {
    icon: Wifi,
    title: "Internet Connection",
    requirements: [
      "Minimum 25 Mbps download speed",
      "Minimum 5 Mbps upload speed",
      "Backup connection recommended",
      "Stable, wired connection preferred",
    ],
  },
  {
    icon: Headphones,
    title: "Audio Equipment",
    requirements: [
      "USB headset with noise cancellation",
      "Clear microphone quality",
      "Backup headset recommended",
      "Quiet working environment",
    ],
  },
  {
    icon: Home,
    title: "Workspace Setup",
    requirements: [
      "Dedicated, distraction-free space",
      "Ergonomic desk and chair",
      "Good lighting for video calls",
      "Professional background for meetings",
    ],
  },
];

const professionalRequirements = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "At least high school diploma or equivalent. College degree is a plus but not always required depending on the role.",
  },
  {
    icon: Briefcase,
    title: "Work Experience",
    description:
      "1-2 years of relevant experience in your field. Fresh graduates with strong skills are also welcome to apply.",
  },
  {
    icon: Globe,
    title: "English Proficiency",
    description:
      "Strong written and verbal English communication skills. Ability to communicate clearly and professionally with clients.",
  },
  {
    icon: Clock,
    title: "Availability",
    description:
      "Willingness to work flexible hours based on client timezone. Most positions require availability during US/UK business hours.",
  },
];

const softSkills = [
  { icon: Users, text: "Excellent communication and interpersonal skills" },
  { icon: Trophy, text: "Self-motivated with strong work ethic" },
  { icon: CheckCircle2, text: "Attention to detail and accuracy" },
  { icon: Clock, text: "Strong time management and organization" },
  { icon: Monitor, text: "Tech-savvy and quick learner" },
  { icon: Briefcase, text: "Professional and reliable attitude" },
];

export default function RequirementsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-0 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <CheckCircle2 size={16} className="text-[#FF6B35]" />
              <span className="text-white/90 text-sm font-medium">
                Ready to Join?
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Requirements to Become a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-yellow-400">
                Virtual Assistant
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Make sure you meet these requirements before applying. We&apos;re
              looking for dedicated, skilled professionals ready to excel in a
              remote work environment.
            </p>
            <Link href="/apply-here">
              <Button className="bg-[#FF6B35] hover:bg-[#e55a28] text-white px-8 h-12 text-base font-semibold rounded-xl">
                Check Open Positions
                <Send className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        <WaveDivider color="white" />
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
                System & Technical Requirements
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                To ensure smooth operations and excellent service delivery, all
                VAs must have reliable equipment and internet.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemRequirements.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-100">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#024466] to-[#0891b2] flex items-center justify-center mb-4">
                      <item.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#024466] mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="text-[#FF6B35] mt-0.5 shrink-0"
                          />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Requirements */}
      <section className="py-16 bg-[#f5f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
                Professional Qualifications
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beyond equipment, we look for professionals with the right
                background and commitment to remote work excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {professionalRequirements.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-[#FF6B35] to-[#ff8a5c] flex items-center justify-center shrink-0">
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#024466] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
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

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#024466] to-[#0891b2] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF6B35]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet All The Requirements?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Great! Take the next step and submit your application. Our team
              will review your profile and reach out if you're a good fit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/apply-here">
                <Button className="bg-[#FF6B35] hover:bg-[#e55a28] text-white px-8 h-12 text-base font-semibold rounded-xl">
                  Apply Now
                  <Send className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href="/faqs">
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#024466] backdrop-blur-sm px-8 h-12 text-base font-semibold rounded-xl"
                >
                  View FAQs
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
