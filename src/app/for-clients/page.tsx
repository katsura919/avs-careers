"use client";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Clock,
  Sparkles,
  Target,
  Users,
  CheckCircle2,
  Globe,
  DollarSign,
  Headphones,
  Star,
  Zap,
  BarChart3,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Dedicated VAs to handle calls, emails, and live chat with professionalism.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "SEO, social media management, email campaigns, and content creation.",
  },
  {
    icon: Sparkles,
    title: "Admin & Executive Assistance",
    desc: "Calendar management, travel booking, data entry, and more.",
  },
  {
    icon: DollarSign,
    title: "Bookkeeping & Accounting",
    desc: "Financial reporting, invoicing, payroll, and expense tracking.",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    desc: "Full-stack developers to build and maintain your digital products.",
  },
  {
    icon: Target,
    title: "Sales & Lead Generation",
    desc: "Cold calling, lead qualification, CRM management, and pipeline support.",
  },
];

const whyHire = [
  {
    icon: Shield,
    title: "Pre-Vetted Talent",
    desc: "Every VA goes through skills assessment, training, and background verification.",
  },
  {
    icon: Clock,
    title: "Fast Deployment",
    desc: "Get matched with a qualified VA in as fast as 48 hours.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    desc: "Save up to 70% on staffing costs compared to local hires.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "Our team provides ongoing support and performance monitoring.",
  },
  {
    icon: Zap,
    title: "Flexible Scaling",
    desc: "Scale your team up or down based on your business needs.",
  },
  {
    icon: Star,
    title: "Quality Guarantee",
    desc: "98% client satisfaction rate with free replacement guarantee.",
  },
];

const process = [
  {
    step: "01",
    title: "Tell Us Your Needs",
    desc: "Share your requirements, preferred skill sets, and working hours.",
  },
  {
    step: "02",
    title: "We Match You",
    desc: "Our team selects the best-fit VAs from our pre-vetted talent pool.",
  },
  {
    step: "03",
    title: "Interview & Select",
    desc: "Meet your shortlisted candidates and choose the best fit for your team.",
  },
  {
    step: "04",
    title: "Onboard & Start",
    desc: "We handle onboarding and setup so your VA can start contributing from day one.",
  },
];

export default function ForClientsPage() {
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
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Building2 size={16} className="text-[#FF6B35]" />
                <span className="text-white/90 text-sm font-medium">
                  For Businesses & Entrepreneurs
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Hire World-Class{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
                  Virtual Assistants
                </span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                Scale your business with pre-vetted, trained, and dedicated
                Filipino Virtual Assistants. Save time, reduce costs, and focus
                on what matters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/apply-here">
                  <Button
                    size="lg"
                    className="bg-[#FF6B35] hover:bg-[#e85a28] text-white h-13 px-8 text-base font-semibold rounded-xl shadow-lg shadow-orange-500/25"
                  >
                    Hire a VA
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <a href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 h-13 px-8 text-base font-semibold rounded-xl"
                  >
                    View Services
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-bold text-white">70%</p>
                    <p className="text-blue-200 text-sm">Cost Savings</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-bold text-white">48h</p>
                    <p className="text-blue-200 text-sm">Fast Matching</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-bold text-white">500+</p>
                    <p className="text-blue-200 text-sm">VAs Available</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 text-center">
                    <p className="text-3xl font-bold text-white">98%</p>
                    <p className="text-blue-200 text-sm">Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <WaveDivider color="white" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Virtual Staffing Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From admin support to technical roles, we provide skilled Virtual
              Assistants for every business need.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                  <CardContent className="p-7">
                    <div className="w-14 h-14 rounded-2xl bg-[#024466]/10 flex items-center justify-center mb-5 group-hover:bg-[#024466] transition-colors duration-300">
                      <service.icon
                        size={24}
                        className="text-[#024466] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#024466] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire From AVS */}
      <section className="py-20 bg-[#f5f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Why Choose AVS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Why Hire From Advance Virtual Staff PH?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We go beyond placement — we ensure quality, reliability, and
              long-term success for your business.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyHire.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#024466] to-[#0891b2] flex items-center justify-center shrink-0">
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              How to Hire a VA
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Getting your perfect VA is simple. We handle the hard work so you
              don&apos;t have to.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, i) => (
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

      {/* Social Proof */}
      <section className="py-20 bg-linear-to-br from-[#024466] to-[#035a82] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Miller",
                company: "Digital Marketing Agency, US",
                text: "AVS provided us with an incredible social media manager. Our online presence has grown 300% since hiring through them.",
              },
              {
                name: "James Cooper",
                company: "E-Commerce Store, Australia",
                text: "Finding a reliable VA used to be so hard. AVS matched us perfectly, and the VA has become an essential part of our team.",
              },
              {
                name: "David Chen",
                company: "Tech Startup, UK",
                text: "The quality of VAs from AVS is outstanding. Our developer has been with us for 2 years and consistently exceeds expectations.",
              },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <Card className="bg-white/10 border-white/10 backdrop-blur-sm h-full">
                  <CardContent className="p-7">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed mb-5 italic">
                      &quot;{t.text}&quot;
                    </p>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-blue-300 text-xs">{t.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Ready to Scale Your Business?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get started today and hire your ideal Virtual Assistant in as fast
              as 48 hours. Let us handle the staffing while you focus on growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/apply-here">
                <Button
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#e85a28] text-white h-13 px-10 text-base font-semibold rounded-xl shadow-lg shadow-orange-500/25"
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/about-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#024466] text-[#024466] hover:bg-[#024466] hover:text-white h-13 px-10 text-base font-semibold rounded-xl"
                >
                  Learn More About AVS
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
