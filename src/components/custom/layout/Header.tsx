"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const array = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Requirements", href: "/requirements" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Apply Here", href: "/apply-here" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-[#044467] text-white py-4 px-8 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              src="/avs-logo-tagline.png"
              alt="AVS Logo"
              width={105}
              height={0}
              className="object-contain **:cursor-pointer"
            />
          </Link>
        </div>
        {/* Navigation links on the right */}
        <nav className="flex gap-2 text-md items-center">
          {array.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-1 rounded transition-colors duration-200 font-semibold ${
                  isActive
                    ? "bg-white text-[#024466] font-semibold"
                    : "hover:bg-[#024466] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
