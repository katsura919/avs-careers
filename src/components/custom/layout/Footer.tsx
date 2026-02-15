import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTikTok,
} from "react-icons/ai";
import { Mail, Clock, MapPin } from "lucide-react";
import Newsletter from "../shared/Newsletter";

const QuickLinks = [
  { name: "Home", href: "/" },
  { name: "Careers", href: "/careers" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "For Clients", href: "/for-clients" },
  { name: "Apply Now", href: "/apply-here" },
];

const Resources = [
  { name: "FAQs", href: "/faqs" },
  { name: "Requirements", href: "/requirements" },
  { name: "Blog", href: "/blog" },
];

const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer className="bg-[#011e33] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Image
                src="/avs-logo-tagline.png"
                alt="Advance Virtual Staff PH"
                width={130}
                height={45}
                className="mb-5 object-contain"
              />
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Empowering Filipino Virtual Assistants to achieve success and
                reach their full potential. We are{" "}
                <span className="text-[#FF6B35] font-semibold italic">
                  &quot;always on the go.&quot;
                </span>
              </p>
              <div className="flex gap-3">
                {[
                  { icon: AiFillFacebook, href: "#" },
                  { icon: AiFillLinkedin, href: "#" },
                  { icon: AiFillInstagram, href: "#" },
                  { icon: AiFillTikTok, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#FF6B35] transition-colors duration-200"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {QuickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">
                Resources
              </h4>
              <ul className="space-y-3">
                {Resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#FF6B35] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 text-[#FF6B35] shrink-0" />
                  <a
                    href="mailto:admin@advancedvirtualstaff.com"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    admin@advancedvirtualstaff.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 text-[#FF6B35] shrink-0" />
                  <span>8 AM – 5 PM, Mon–Fri (PHT)</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 text-[#FF6B35] shrink-0"
                  />
                  <span>Philippines (Remote)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Advance Virtual Staff PH. All
              rights reserved.
            </p>
            <Image
              src="/avs-logo-tagline.png"
              alt="Advance Virtual Staff PH"
              width={70}
              height={25}
              className="object-contain opacity-30"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
