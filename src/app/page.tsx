"use client";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Globe,
  TrendingUp,
  Users,
  Star,
  Shield,
  Laptop,
  HeartHandshake,
  Clock,
  Award,
  CheckCircle2,
  Rocket,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { number: "500+", label: "Virtual Assistants Placed", icon: Users },
  { number: "150+", label: "Happy Clients Worldwide", icon: Globe },
  { number: "98%", label: "Client Satisfaction Rate", icon: Star },
  { number: "24/7", label: "Support Available", icon: Clock },
];

const benefits = [
  {
    icon: Laptop,
    title: "Work From Home",
    description:
      "Enjoy the freedom of working remotely from anywhere in the Philippines.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Access training programs and mentorship to level up your professional skills.",
    color: "from-[#FF6B35] to-amber-500",
  },
  {
    icon: Shield,
    title: "Stable Income",
    description:
      "Enjoy competitive compensation packages and reliable payment schedules.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Community",
    description:
      "Join a family of 7,000+ VAs who support and uplift each other daily.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Professional Development",
    description:
      "Free access to courses, certifications, and hands-on training materials.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Fast-Track Hiring",
    description:
      "Our streamlined process gets you matched with clients quickly and efficiently.",
    color: "from-yellow-500 to-orange-500",
  },
];

const testimonials = [
  {
    name: "Maria Santos",
    role: "Executive Virtual Assistant",
    text: "AVS changed my life. I went from a regular office job to earning more while spending time with my family. The support and training are incredible!",
    rating: 5,
  },
  {
    name: "John Reyes",
    role: "Full Stack Developer",
    text: "The team at AVS truly cares about their VAs. They matched me with an amazing client, and I've been growing professionally ever since.",
    rating: 5,
  },
  {
    name: "Ana Cruz",
    role: "Social Media Manager",
    text: "I started with no experience in social media management. AVS provided the training I needed, and now I manage accounts for clients in the US and Australia.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[500px] rounded-full border border-amber-400/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[500px] rounded-full border border-amber-400/30"
          />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#FF6B35] rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-yellow-400/30 rounded-full animate-pulse delay-500" />
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
                #1 VA Staffing Agency in the Philippines
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your Dream{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-yellow-400">
                VA Career
              </span>{" "}
              With Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join Advance Virtual Staff PH and unlock world-class remote
              opportunities. We empower Filipino professionals to thrive in the
              global digital workforce.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/apply-here">
                <Button
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#e85a28] text-white h-13 px-8 text-base font-semibold rounded-xl shadow-lg shadow-orange-500/25"
                >
                  Apply as a VA
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 h-13 px-8 text-base font-semibold rounded-xl"
                >
                  Explore VA Careers
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block relative mt-10"
          >
            {/* Hero Illustration - Abstract/Decorative Card Cluster */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-br from-[#FF6B35]/20 to-cyan-400/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: "💻",
                      label: "Remote Work",
                      sub: "Work from anywhere",
                    },
                    {
                      icon: "📈",
                      label: "Career Growth",
                      sub: "Level up skills",
                    },
                    {
                      icon: "🌍",
                      label: "Global Clients",
                      sub: "US, UK, AU & more",
                    },
                    {
                      icon: "💰",
                      label: "Great Pay",
                      sub: "Competitive rates",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                      className="bg-white/10 rounded-2xl p-4 text-center hover:bg-white/20 transition-colors duration-300"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-white font-semibold text-sm">
                        {item.label}
                      </p>
                      <p className="text-blue-200 text-xs mt-1">{item.sub}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 bg-white/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold text-sm">
                    7K+
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      AVS Hub Community
                    </p>
                    <p className="text-blue-200 text-xs">
                      Active members helping each other
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <WaveDivider color="white" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#024466]/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} className="text-[#024466]" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-[#024466] mb-1">
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AVS Section */}
      <section className="py-20 bg-[#f5f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Benefits of Being an AVS Virtual Assistant
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We don&apos;t just find you a job — we build your career.
              Here&apos;s what makes AVS the best place for aspiring Virtual
              Assistants.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                  <CardContent className="p-7">
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#024466] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Your Path to Becoming a VA
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Getting started is easy. Follow these simple steps and begin your
              new career journey today.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                desc: "Submit your application through our simple online form with your resume.",
              },
              {
                step: "02",
                title: "Get Assessed",
                desc: "Complete a quick skills assessment so we can match you with the right clients.",
              },
              {
                step: "03",
                title: "Get Trained",
                desc: "Access our free training modules to sharpen your skills and prepare for success.",
              },
              {
                step: "04",
                title: "Start Working",
                desc: "Get matched with a client and begin earning while working from home.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="relative text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#024466] to-[#0891b2] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-[#024466]/20" />
                  )}
                  <h3 className="text-lg font-bold text-[#024466] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Company Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-6">
                More Than a Job —{" "}
                <span className="text-[#FF6B35]">A Family</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Advance Virtual Staff PH, we believe that great work happens
                when people feel valued and supported. Our VAs are not just
                employees — they&apos;re part of a thriving community that
                learns, grows, and celebrates together.
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
                      <p className="text-orange-100 text-sm">
                        Training Courses
                      </p>
                    </div>
                    <div className="bg-linear-to-br from-emerald-500 to-teal-500 text-white rounded-2xl p-6 text-center">
                      <p className="text-3xl font-bold mb-1">4.9★</p>
                      <p className="text-emerald-100 text-sm">
                        VA Satisfaction
                      </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#f5f9fb]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Your Future Starts Here
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Whether you&apos;re an experienced VA or just starting out, we
              have the tools, training, and opportunities to help you succeed.
              Take the first step today.
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
    </div>
  );
}
