import { UserCircle, Heart, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Qualifications = () => {
  return (
    <section className="bg-muted/30 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-[#FF6B35]">Top 3</span> Qualifications
          </h2>
          <p className="text-muted-foreground">The foundation of our team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#0A3B5C] text-white border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <UserCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Character</h3>
            </CardContent>
          </Card>
          <Card className="bg-[#0A3B5C] text-white border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Attitude</h3>
            </CardContent>
          </Card>
          <Card className="bg-[#0A3B5C] text-white border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <Clock className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Reliability</h3>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg">
          Here at AVS, we believe that everything can be taught and learned but
          these 3 things are the mostly innate.
        </p>
      </div>
    </section>
  );
};

export default Qualifications;
