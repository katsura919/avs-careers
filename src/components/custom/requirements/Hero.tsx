import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-[#0A3B5C] to-[#0d4a6f] text-white pt-10 pb-20 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-5xl font-bold mb-4">
            Here's What We're Looking For
          </h1>
        </div>

        <p className="text-lg text-gray-200">
          Join our team of talented virtual assistants
        </p>
      </div>
    </section>
  );
};

export default Hero;
