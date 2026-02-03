import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Monitor,
  Apple,
  CheckCircle2,
  UserCircle,
  Heart,
  Clock,
} from "lucide-react";

const Requirements = () => {
  return (
    // override global css kay naka red ang background
    <div className="min-h-screen bg-[#ffffff] font-sans">
      {/* Header Section */}
      {/* <header className="bg-[#0A3B5C] text-white py-4 px-8 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors">About Us</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Quickbooks</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Training</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Apply Here</a>
            <a href="#" className="hover:text-gray-300 transition-colors">FAQs</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Blog</a>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A3B5C] to-[#0d4a6f] text-white pt-10 pb-20 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/avs-logo-tagline.png"
              alt="AVS Logo"
              width={200}
              height={40}
              className="object-contain mb-4"
            />
            <h1 className="text-5xl font-bold mb-4">
              Here's What We're Looking For
            </h1>
          </div>

          <p className="text-lg text-gray-200">
            Join our team of talented virtual assistants
          </p>
        </div>
      </section>

      {/* System Requirements */}
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
                  <span className="text-sm">
                    Microsoft Office 2005 or later
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

          {/* Mac Requirements */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Apple className="w-10 h-10 text-[#FF6B35]" />
                <CardTitle className="text-2xl">Mac</CardTitle>
              </div>
              <CardDescription>
                System requirements for Mac users
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

      {/* Top 3 Qualifications */}
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
            Here at AVS, we believe that everything can be taught and learned
            but these 3 things are the mostly innate.
          </p>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="max-w-7xl mx-auto py-16 px-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">Application Requirements</CardTitle>
            <CardDescription>
              Make sure to submit your application with the following items
              below
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
                    Updated CV and make sure each experience you had has a list
                    of tasks you did with the company
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
                  <span className="text-muted-foreground">
                    Image placeholder
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Basic Skills / Experience */}
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
                      <span>
                        For newbie, willing and available for trainings
                      </span>
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

      {/* CTA Section */}
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
            Apply Here
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#0A3B5C] text-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-transparent border-white/20 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Get Exclusive Access
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Be the first to know about hiring and exciting
                    opportunities! So, what are you waiting for?
                  </p>
                </div>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 bg-white text-gray-900 border-white"
                  />
                  <Button className="bg-[#FF6B35] hover:bg-[#ff5522] border-none shrink-0">
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08324A] text-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/avs-logo-tagline.png"
                alt="AVS Logo"
                width={120}
                height={40}
                className="mb-4 object-contain"
              />
              <p className="text-sm text-gray-300 leading-relaxed">
                Empowering Filipino Virtual Assistants in achieving success and
                reaching their potential by providing a platform that fosters
                productivity, growth and achieving their professional goals.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Apply Here
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Training
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Send us an email at:</li>
                <li className="text-[#FF6B35]">
                  admin@advancedvirtualstaff.com
                </li>
                <li className="mt-4">Business Hours:</li>
                <li>⏰ 8 AM - 5 PM, Monday - Friday (Philippine Time)</li>
                <li className="flex gap-3 mt-4">
                  <a href="#" className="hover:text-[#FF6B35]">
                    📘
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    💼
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    ▶️
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    📷
                  </a>
                  <a href="#" className="hover:text-[#FF6B35]">
                    🎵
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">
              AVSPH Virtual Assistance Services. © 2025. All rights reserved.
            </p>
            <Image
              src="/avs-logo-tagline.png"
              alt="Footer Logo"
              width={80}
              height={30}
              className="mx-auto mt-4 object-contain opacity-50"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Requirements;
