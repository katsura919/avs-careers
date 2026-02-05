import Image from "next/image";
import Link from "next/link";

const array = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Requirements", href: "/requirements" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Apply Here", href: "/apply-here" },
];

const Header = () => {
  return (
    <header className="bg-[#0A3B5C] text-white py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              src="/avs-logo-tagline.png"
              alt="AVS Logo"
              width={105}
              height={0}
              className="object-contain mb-4 cursor-pointer"
            />
          </Link>
        </div>
        {/* Navigation links on the right */}
        <nav className="flex gap-8 text-sm items-center">
          {array.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
