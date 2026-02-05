import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Application = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl">Application Requirements</CardTitle>
          <CardDescription>
            Make sure to submit your application with the following items below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-12">
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Badge
                  variant="outline"
                  className="shrink-0 bg-[#FF6B35] text-white border-[#FF6B35]"
                >
                  1
                </Badge>
                <span>
                  Updated CV and make sure each experience you had has a list of
                  tasks you did with the company
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Badge
                  variant="outline"
                  className="shrink-0 bg-[#FF6B35] text-white border-[#FF6B35]"
                >
                  2
                </Badge>
                <span>Audio or Video self-introduction</span>
              </li>
              <li className="flex gap-3 items-start">
                <Badge
                  variant="outline"
                  className="shrink-0 bg-[#FF6B35] text-white border-[#FF6B35]"
                >
                  3
                </Badge>
                <span>
                  Please follow the application requirements. Take above
                  sections
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Badge
                  variant="outline"
                  className="shrink-0 bg-[#FF6B35] text-white border-[#FF6B35]"
                >
                  4
                </Badge>
                <span>Previous basic skills and experience below</span>
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <div className="bg-muted w-full h-64 rounded-lg flex items-center justify-center border-2 border-dashed">
                <span className="text-muted-foreground">Image placeholder</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Application;
