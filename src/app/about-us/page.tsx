"use client";
import Link from "next/link";
import {
  Trophy,
  Heart,
  Briefcase,
  Users,
  Target,
  Lightbulb,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Eye,
  Rocket,
  Star,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Users,
    title: "Collaborative",
    desc: "We work together as a team to achieve greater success.",
  },
  {
    icon: Heart,
    title: "Supportive",
    desc: "Creating a positive and productive work environment.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    desc: "We embrace creativity and innovation to stay ahead.",
  },
  {
    icon: Zap,
    title: "Hard-working",
    desc: "We value diversity and respect different perspectives.",
  },
  {
    icon: Target,
    title: "Transparent",
    desc: "We foster open communication and accountability.",
  },
  {
    icon: TrendingUp,
    title: "Empowering",
    desc: "We support growth and development of our team.",
  },
  {
    icon: Award,
    title: "Dynamic",
    desc: "We embrace change and excel in fast-paced environments.",
  },
  {
    icon: Rocket,
    title: "Agile",
    desc: "Flexible enough to adapt to quick changes that may occur.",
  },
  {
    icon: Star,
    title: "Passionate",
    desc: "Driven by purpose and the love we have for career growth.",
  },
];

export default function AboutUs() {
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
              <Globe size={16} className="text-[#FF6B35]" />
              <span className="text-white/90 text-sm font-medium">
                Always On The Go
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
                Advance Virtual Staff PH
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering Filipino Virtual Assistants to build meaningful careers
              and achieve their full potential in the global remote workforce.
            </p>
          </motion.div>
        </div>

        <WaveDivider color="white" />
      </section>

      {/* Our Story Section */}
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
                {[
                  {
                    icon: Trophy,
                    title: "The Best Growing VA Agency",
                    desc: "Growth-focused and world-class opportunities.",
                  },
                  {
                    icon: Heart,
                    title: "Best Treatment for VAs",
                    desc: "Employee-focused with world-class support.",
                  },
                  {
                    icon: Briefcase,
                    title: "Remote Jobs & Opportunities",
                    desc: "Fully remote positions with global clients.",
                  },
                ].map((item, i) => (
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
                      <div className="bg-white/10 rounded-2xl p-5 text-center">
                        <p className="text-3xl font-bold">500+</p>
                        <p className="text-blue-200 text-sm">VAs Placed</p>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-5 text-center">
                        <p className="text-3xl font-bold">150+</p>
                        <p className="text-blue-200 text-sm">Happy Clients</p>
                      </div>
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

      {/* Vision and Mission */}
      <section className="py-20 bg-[#f5f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466]">
              Our Vision & Mission
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="border-0 shadow-lg h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-linear-to-r from-[#FF6B35] to-[#ff8c5a] p-8 text-white">
                    <Eye size={36} className="mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-white/90 leading-relaxed">
                      To empower Filipinos in the BPO Industry with exceptional
                      opportunities to the world, equipping them with the
                      knowledge they need to succeed in their careers and be
                      worthy of world-class opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="border-0 shadow-lg h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-linear-to-r from-[#024466] to-[#035a82] p-8 text-white">
                    <Target size={36} className="mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Advocate for Virtual Assistants and aim at utilizing team
                      culture within business by offering dedicated support for
                      Virtual Assistants based in the Philippines, fostering
                      growth and professional excellence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Letter from Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
                A Message For You
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#024466]">
                A Letter From{" "}
                <span className="text-[#FF6B35]">Our Founder</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative bg-linear-to-br from-[#024466] to-[#035a82] text-white rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-24 h-24 bg-[#FF6B35] rounded-full opacity-20 blur-xl" />
              <div className="absolute right-8 top-8 w-16 h-16 bg-cyan-400 rounded-full opacity-10 blur-xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">
                  Dear aspiring virtual staff,
                </h3>
                <div className="space-y-4 text-blue-100 leading-relaxed">
                  <p>
                    I am thrilled to connect with you today and share the
                    passion for virtual staffing and recruitment. As the proud
                    owner of a staffing agency, I understand the unique
                    challenges and opportunities that come with this dynamic
                    industry.
                  </p>
                  <p>
                    At AVS, we pride ourselves on placing individuals in roles
                    that align with their unique skills, passions, and
                    aspirations. We believe that Virtual Assistants deserve
                    better — better training, better support, and better
                    opportunities to shine.
                  </p>
                  <p>
                    We&apos;re not just filling positions; we&apos;re creating
                    pathways to success. Through our hiring program, I am
                    ensuring families get the support they need by ensuring
                    employers provide sustainable compensation packages to each
                    candidate placed in opportunities.
                  </p>
                  <p>
                    Your opportunities are not just a commodity — you&apos;re an
                    investment. Growth starts with you, and we want to invest in
                    you throughout the duration of your career with us.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white/80">
                      Best regards,
                    </p>
                    <p className="text-[#FF6B35] text-2xl font-bold">
                      Eri Yanson
                    </p>
                    <p className="text-blue-300 text-sm">Founder & CEO</p>
                  </div>
                  <div className="w-16 h-16 bg-linear-to-br from-[#FF6B35] to-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">EY</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AVS Hub Community */}
      <section className="py-20 bg-linear-to-br from-[#024466] to-[#035a82] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm mx-auto">
              <Users size={16} className="text-[#FF6B35]" />
              <span className="text-white/90 text-sm font-medium">
                AVS Hub Community
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Thriving Community
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              A community of empowered Virtual Assistants & partners who help
              each other succeed. With over 7,000 members sharing expertise
              every day!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
              {[
                "Exclusive training & free courses",
                "FREE resources to grow professionally",
                "Network with like-minded professionals",
                "Daily tips and career opportunities",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-left">
                  <CheckCircle2 size={18} className="text-[#FF6B35] shrink-0" />
                  <span className="text-blue-100 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-2xl font-bold text-white mb-8">
              ✨ 7,326 Members and Counting ✨
            </p>

            <Button
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#e85a28] text-white h-13 px-8 font-semibold rounded-xl shadow-lg shadow-orange-500/25"
            >
              Join Our Community
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* The AVS Way - Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466]">
              The <span className="text-[#FF6B35]">AVS</span> Way
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
              Our core values define who we are and how we work together to
              achieve excellence.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#024466]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#024466] transition-colors duration-300">
                      <value.icon
                        size={24}
                        className="text-[#024466] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-[#024466] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f5f9fb]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              We Love Working at AVS
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We believe that you will too. Start your journey with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/apply-here">
                <Button
                  size="lg"
                  className="bg-[#024466] hover:bg-[#02334a] text-white h-13 px-10 text-base font-semibold rounded-xl shadow-lg"
                >
                  See All Open Positions
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#024466] text-[#024466] hover:bg-[#024466] hover:text-white h-13 px-10 text-base font-semibold rounded-xl"
                >
                  Explore Careers
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
