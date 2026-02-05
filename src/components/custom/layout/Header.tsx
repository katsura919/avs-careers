import Image from "next/image";
import Link from "next/link";

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
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="hover:text-gray-300 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            href="/requirements"
            className="hover:text-gray-300 transition-colors font-medium"
          >
            Requirements
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-300 transition-colors font-medium"
          >
            Blog
          </Link>
          <Link
            href="/requirements/apply-here"
            className="hover:text-gray-300 transition-colors font-medium"
          >
            Apply Here
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
