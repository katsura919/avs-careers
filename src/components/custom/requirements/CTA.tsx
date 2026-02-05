import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-[#f8fafc] py-20 px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Want to start your freelancing journey with us?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Join our growing community of talented virtual assistants
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6 h-auto"
        >
          <Link href="/requirements/apply-here">Apply Here</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
