import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceRequirements = () => {
  return (
    <section className="bg-muted/30 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-center justify-center">
                <div className="bg-muted w-full h-64 rounded-lg flex items-center justify-center border-2 border-dashed">
                  <span className="text-muted-foreground">
                    Image placeholder
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Basic Skills / Experience
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                    <span>For newbie, willing and available for trainings</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                    <span>Fluent in English both written and verbal</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                    <span>Those with prior experience in WFH set up</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                    <span>
                      Read 1 year of experience in the job you're applying for
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                    <span>
                      Has experience working on graveyard shift for at least 3
                      months
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                    <span>
                      Team player is willing to work in the evening time
                      tracking tool and productivity tracking
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                    <span>
                      Amenable to work in the evening. Applying for specialist
                      positions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceRequirements;
