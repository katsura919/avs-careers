import { Monitor, Apple, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const SysRequirements = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-[#FF6B35]">System</span> Requirements
        </h2>
        <p className="text-muted-foreground">
          Minimum specifications to join our team
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Windows Requirements */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Monitor className="w-10 h-10 text-[#FF6B35]" />
              <CardTitle className="text-2xl">Windows</CardTitle>
            </div>
            <CardDescription>
              System requirements for Windows users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  2 Fully Functioning 64 bit Laptop/Desktop (For Backout)
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Windows Vista or Later OS/ 64 bit
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">Microsoft Office 2005 or later</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Intel Core i3 or higher (or AMD equivalent) is required
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  4 GB RAM/Memory/ 8 GB or more/ for multitasking requirement
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  USB Headset with Noise cancelling feature
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Internet Service 5 Mbps and up (DSL, Broadband, Cable)
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Backup Internet service of 3 Mbps or more
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Workstation Free from any Noise and Distractions
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Backup for Power- Outage/ Generator/UPS or Alternative
                  location
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Webcam with Full HD (1080p) video capture
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Mac Requirements */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Apple className="w-10 h-10 text-[#FF6B35]" />
              <CardTitle className="text-2xl">Mac</CardTitle>
            </div>
            <CardDescription>System requirements for Mac users</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  2 Fully Functioning 64 bit Laptop/Desktop (For Backout)
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Accepted Mac OS: High Sierra or up to Monterey
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Microsoft Office 2005 or Microsoft office 2010 or higher
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Intel Core i3 or higher (or AMD equivalent) is required
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  4 GB RAM/Memory/ 8 GB or more/ for multitasking requirement
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  USB Headset with Noise cancelling feature
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Internet Service 5 Mbps and up (DSL, Broadband, Cable)
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Backup Internet service of 3 Mbps or more
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Workstation Free from any Noise and Distractions
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Backup for Power- Outage/ Generator/UPS or Alternative
                  location
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                <span className="text-sm">
                  Webcam with Full HD (1080p) video capture
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SysRequirements;
