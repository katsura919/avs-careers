import Image from "next/image";
import { Music, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const RequirementsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[#024466] mb-4 leading-tight">
                Scale Your Business with Our Advanced Virtual Staffing Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Fast Growing Virtual Staffing Agency in the Philippines
              </p>
              <div className="flex gap-4">
                <Link
                  href="/apply-here"
                  className="text-2xl font-semibold bg-[#024466] text-white px-8 py-3 rounded-lg hover:bg-[#02334a] transition-colors"
                >
                  Home
                </Link>
              </div>
            </div>
            <div className="relative h-125">
              <Image
                src="/model_1.png"
                width={550}
                height={0}
                alt="Model 1"
                className="object-fit items-center justify-center mx-auto"
              />

              {/* Image container with border */}
              {/* <div className="relative h-full border-4 border-[#024466] rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 z-10"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section 1 - Slanted Gradient Background */}
      <section className="relative w-full">
        {/* 1. The Slanted Gradient Box */}
        <div
          className="max-w-full bg-linear-to-b from-[#7a9bb0] to-white"
          style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)" }}
        >
          {/* 2. The Content Wrapper */}
          <div className="flex flex-col items-center justify-center pt-40 px-4 text-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#024466] mb-2">
                Why Choose Advanced Virtual Staff?
              </h2>
              <p className="text-gray-600">
                Here are some signs it's time to hire a virtual assistant:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto py-5">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Music className="w-16 h-16 text-[#024466] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-[#024466] mb-2 text-center">
                  Why Choose Advanced Virtual Staff?
                </h3>
                <p className="text-gray-600 text-center">
                  Here are some signs it's time to hire a virtual assistant:
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <Music className="w-16 h-16 text-[#024466] mx-auto mb-6" />
                <h3 className="text-xl font-bold text-[#024466] mb-2 text-center">
                  Why Choose Advanced Virtual Staff?
                </h3>
                <p className="text-gray-600 text-center">
                  Here are some signs it's time to hire a virtual assistant:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section 2 - Three Cards */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#024466] mb-2">
              Why Choose Advanced Virtual Staff?
            </h2>
            <p className="text-gray-600">
              Here are some signs it's time to hire a virtual assistant:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#024466] text-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">
                Why Choose Advanced Virtual Staff?
              </h3>
              <p>Here are some signs it's time to hire a virtual assistant:</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border">
              <Music className="w-16 h-16 text-[#024466] mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#024466] mb-2 text-center">
                Why Choose Advanced Virtual Staff?
              </h3>
              <p className="text-gray-600 text-center">
                Here are some signs it's time to hire a virtual assistant:
              </p>
            </div>

            <div className="bg-[#024466] text-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">
                Why Choose Advanced Virtual Staff?
              </h3>
              <p>Here are some signs it's time to hire a virtual assistant:</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#f5f9fb"
          />
        </svg>
      </div>

      {/* Alternating Content Section 1 - Image Left, Content Right */}
      <section className="bg-[#f5f9fb] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-400">Image Placeholder</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#024466] mb-4">
                Do I need a virtual assistant?
              </h2>
              <p className="text-gray-600 mb-6">
                Here are some signs it's time to hire a virtual assistant:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#024466] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Here are some signs it's time to hire a virtual assistant:
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#024466] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Here are some signs it's time to hire a virtual assistant:
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#024466] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Here are some signs it's time to hire a virtual assistant:
                  </span>
                </li>
              </ul>
              <button className="bg-[#0a2540] text-white px-8 py-3 rounded-lg hover:bg-[#083050] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Content Section 2 - Content Left, Image Right */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#024466] mb-4">
                Do I need a virtual assistant?
              </h2>
              <p className="text-gray-600 mb-6">
                Here are some signs it's time to hire a virtual assistant:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#024466] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Here are some signs it's time to hire a virtual assistant:
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#024466] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Here are some signs it's time to hire a virtual assistant:
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#024466] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Here are some signs it's time to hire a virtual assistant:
                  </span>
                </li>
              </ul>
              <button className="bg-[#0a2540] text-white px-8 py-3 rounded-lg hover:bg-[#083050] transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-400">Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Content Section 3 - Image Left, Content Right */}
      <section className="bg-[#f5f9fb] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-400">Image Placeholder</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#024466] mb-4">
                Do I need a virtual assistant?
              </h2>
              <p className="text-gray-600 mb-6">
                Here are some signs it's time to hire a virtual assistant:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#024466] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Here are some signs it's time to hire a virtual assistant:
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#024466] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Here are some signs it's time to hire a virtual assistant:
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#024466] mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    Here are some signs it's time to hire a virtual assistant:
                  </span>
                </li>
              </ul>
              <button className="bg-[#0a2540] text-white px-8 py-3 rounded-lg hover:bg-[#083050] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RequirementsPage;
