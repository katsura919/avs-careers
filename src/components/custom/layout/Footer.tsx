import { Fragment } from "react";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTikTok,
} from "react-icons/ai";
import Newsletter from "../shared/Newsletter";

const QuickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Apply Here", href: "/apply-here" },
  { name: "Requirements", href: "/requirements" },
  { name: "FAQs", href: "/faqs" },
  { name: "Training", href: "/training" },
];

const Footer = () => {
  return (
    <Fragment>
      <Newsletter />
      <footer className="bg-[#08324a] text-white py-5 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/avs-logo-tagline.png"
                alt="AVS Logo"
                width={120}
                height={40}
                className="mb-4 object-contain"
              />
              <p className="text-sm text-gray-300 leading-relaxed">
                Empowering Filipino Virtual Assistants in achieving success and
                reaching their potential by providing a platform that fosters
                productivity, growth and achieving their professional goals.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {QuickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Send us an email at:</li>
                <li className="text-[#FF6B35]">
                  admin@advancedvirtualstaff.com
                </li>
                <li className="mt-4">Business Hours:</li>
                <li>⏰ 8 AM - 5 PM, Monday - Friday (Philippine Time)</li>
                <li className="flex gap-3 mt-4">
                  <a href="#" className="hover:text-[#FF6B35]">
                    <AiFillFacebook size={20} />
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    <AiFillLinkedin size={20} />
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    <AiFillInstagram size={20} />
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    <AiFillTikTok size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">
              AVSPH Virtual Assistance Services. © 2025. All rights reserved.
            </p>
            <Image
              src="/avs-logo-tagline.png"
              alt="Footer Logo"
              width={80}
              height={30}
              className="mx-auto mt-4 object-contain opacity-50"
            />
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
