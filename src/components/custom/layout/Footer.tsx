import { Fragment } from "react";
import Image from "next/image";
import Newsletter from "../shared/Newsletter";

const Footer = () => {
  return (
    <Fragment>
      <Newsletter />
      <footer className="bg-[#08324A] text-white py-12 px-8">
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
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Apply Here
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Training
                  </a>
                </li>
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
                    📘
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    💼
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    ▶️
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    📷
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    🎵
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
