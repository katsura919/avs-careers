"use client";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Calendar,
  MessageSquare,
  FileText,
  ShoppingCart,
  TrendingUp,
  Headphones,
  Code,
  Palette,
  BarChart3,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Heart,
  Globe,
  DollarSign,
  Users,
  Rocket,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const vaRoles = [
  {
    icon: Headphones,
    title: "Customer Support VA",
    desc: "Handle calls, emails, and chat support for global clients.",
  },
  {
    icon: Calendar,
    title: "Admin / Executive VA",
    desc: "Manage calendars, emails, travel, and day-to-day operations.",
  },
  {
    icon: Palette,
    title: "Social Media Manager",
    desc: "Create content, manage accounts, and grow online presence.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce VA",
    desc: "Handle product listings, order management, and customer inquiries.",
  },
  {
    icon: Code,
    title: "Web Developer",
    desc: "Build and maintain websites, web apps, and digital solutions.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing VA",
    desc: "Run ad campaigns, SEO, email marketing, and analytics.",
  },
  {
    icon: FileText,
    title: "Bookkeeper / Accounting VA",
    desc: "Manage finances, invoices, payroll, and reporting.",
  },
  {
    icon: MessageSquare,
    title: "Sales & Lead Gen VA",
    desc: "Generate leads, cold call, and support sales pipelines.",
  },
];

const growthPaths = [
  {
    level: "Entry Level",
    title: "Junior Virtual Assistant",
    desc: "Start with basic admin tasks, data entry, and customer support. Get paired with a mentor.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    level: "Mid Level",
    title: "Specialized VA",
    desc: "Develop expertise in a niche like social media, bookkeeping, or tech support.",
    color: "from-[#FF6B35] to-amber-500",
  },
  {
    level: "Senior Level",
    title: "Team Lead / Manager",
    desc: "Lead a team of VAs, manage client accounts, and drive performance.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    level: "Expert Level",
    title: "VA Trainer / Consultant",
    desc: "Train new VAs, consult with clients, and shape the future of remote work.",
    color: "from-violet-500 to-purple-500",
  },
];

const whyAVS = [
  {
    icon: Heart,
    title: "We Treat You Like Family",
    desc: "Our VAs are valued members of our community, not just employees.",
  },
  {
    icon: GraduationCap,
    title: "Free Training Programs",
    desc: "Access 50+ courses and certifications to grow your skills.",
  },
  {
    icon: Globe,
    title: "International Clients",
    desc: "Work with clients from the US, UK, Australia, and beyond.",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    desc: "Earn competitive rates with transparent payment schedules.",
  },
  {
    icon: Users,
    title: "Thriving Community",
    desc: "Join 7,000+ VAs in our AVS Hub for support and networking.",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    desc: "Clear growth paths from entry-level to expert positions.",
  },
];

export default function CareersPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-amber-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/50 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Rocket size={16} className="text-[#FF6B35]" />
              <span className="text-white/90 text-sm font-medium">
                Start Your VA Career Today
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Become a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-yellow-400">
                Virtual Assistant
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover a rewarding career working remotely for international
              clients. No commute, no limits — just your skills and our support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/apply-here">
                <Button
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#e85a28] text-white h-13 px-8 text-base font-semibold rounded-xl shadow-lg shadow-orange-500/25"
                >
                  Apply Now
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="#what-is-va">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 h-13 px-8 text-base font-semibold rounded-xl"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <WaveDivider color="white" />
      </section>

      {/* What is a VA Section */}
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
                entrepreneurs worldwide. VAs work from the comfort of their
                homes, using digital tools to deliver high-quality services.
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

      {/* VA Roles Section */}
      <section className="py-20 bg-[#f5f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              VA Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Explore VA Career Paths
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you&apos;re a creative, a tech enthusiast, or a people
              person — there&apos;s a VA role that fits your skills perfectly.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vaRoles.map((role, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#024466]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#024466] transition-colors duration-300">
                      <role.icon
                        size={24}
                        className="text-[#024466] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-[#024466] mb-2">
                      {role.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{role.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With AVS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Why AVS?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Why Work With Advance Virtual Staff PH?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We&apos;re not just a staffing agency — we&apos;re your partner in
              building a successful remote career.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyAVS.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-4 p-6 rounded-2xl bg-[#f5f9fb] hover:bg-[#eef4f8] transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#024466] flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#024466] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth Path */}
      <section className="py-20 bg-linear-to-br from-[#024466] to-[#035a82] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Career Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Career Growth at AVS
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              We invest in your growth with clear career progression paths.
              Start anywhere — grow everywhere.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthPaths.map((path, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <Card className="bg-white/10 border-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${path.color} text-white mb-4`}
                    >
                      {path.level}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {path.title}
                    </h3>
                    <p className="text-blue-200 text-sm">{path.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Application Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              How to Apply
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our hiring process is simple, fast, and transparent. Here&apos;s
              what to expect.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: 1,
                title: "Submit Your Application",
                desc: "Fill out our online application form with your resume, skills, and preferred role. It takes less than 5 minutes.",
              },
              {
                step: 2,
                title: "Skills Assessment",
                desc: "Complete a brief skills test tailored to your chosen role. This helps us match you with the best client opportunities.",
              },
              {
                step: 3,
                title: "Interview & Orientation",
                desc: "Our team will reach out for a quick interview and onboarding orientation to prepare you for success.",
              },
              {
                step: 4,
                title: "Get Matched & Start Working",
                desc: "Once approved, you'll be matched with a client and can start your VA career from home right away!",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#024466] to-[#0891b2] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-[#024466] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-[#ff8c5a] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-6">
              <Star
                size={48}
                className="text-white/80 fill-white/80 animate-pulse"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your VA Career?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Don&apos;t wait for the opportunity — create it. Join Advance
              Virtual Staff PH today and take the first step towards your dream
              career.
            </p>
            <Link href="/apply-here">
              <Button
                size="lg"
                className="bg-white text-[#FF6B35] hover:bg-white/90 h-14 px-10 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Briefcase size={20} className="mr-2" />
                Apply Now — It&apos;s Free
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
