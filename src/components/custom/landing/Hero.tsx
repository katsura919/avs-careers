import { motion } from "framer-motion";
import WaveDivider from "@/components/custom/shared/WaveDivider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

// Hero Section with animated background and call-to-action buttons */

const Hero = () => {
  return (
    <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-200 h-150 rounded-full border border-amber-400/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-150 h-150 rounded-full border border-amber-400/30"
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
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
                className="border-white/30 bg-cyan-500 text-white hover:bg-white/50 h-13 px-8 text-base font-semibold rounded-xl"
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
            </div>
          </div>
        </motion.div>
      </div>

      <WaveDivider color="white" />
    </section>
  );
};

export default Hero;
