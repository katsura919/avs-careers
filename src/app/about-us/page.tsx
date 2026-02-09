import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  Heart,
  Briefcase,
  Users,
  Target,
  Lightbulb,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#053f5c] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Join the family of exceptional Filipino Virtual Assistants and
            unlock your greatest career opportunities with AVS
          </p>
        </div>
      </section>

      {/* Find Your Next Job Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Image
                src="/placeholder-team.jpg"
                alt="Team member"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
                <Trophy className="w-12 h-12 mx-auto mb-2" />
                <p className="font-bold text-lg">The Best Hiring Agency</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Find Your Next Job</h2>
              <p className="text-gray-600 mb-8">
                Empowering Filipinos, Virtual Assistants to reaching their full
                potential. We provide a platform for qualified, keen and eager
                Filipino professionals to work and develop their skills.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Trophy className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      The Best Growing VS Agency
                    </h3>
                    <p className="text-gray-600">
                      Growth focused and World-Class
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Best Treatment to VS</h3>
                    <p className="text-gray-600">
                      Employee focused and World-Class
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      Remote Jobs & Opportunities
                    </h3>
                    <p className="text-gray-600">
                      Looking for fully remote opportunities?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Image
              src="/placeholder-team-meeting.jpg"
              alt="Team meeting"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full object-cover"
            />
            <div className="space-y-6">
              <div className="bg-orange-500 text-white p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p>
                  To empower Filipinos in the BPO Industry with exceptional
                  opportunities to the world, equipping them with the knowledge
                  they need to succeed in their careers and be worthy of world
                  class opportunities.
                </p>
              </div>
              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p>
                  Advocate for Virtual Assistants and aim at utilizing Team
                  culture within business by offering a dedicated support for
                  Virtual Assistants based in the Philippines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Letter from Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            A Letter From <span className="text-orange-500">Our Founder</span>
          </h2>
          <div className="bg-[#053f5c] text-white rounded-3xl p-12 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500 rounded-full -translate-x-1/2"></div>
            <div className="absolute left-8 top-1/2 -translate-y-1/2">
              <div className="text-6xl font-bold text-white opacity-20">
                AVS
              </div>
            </div>
            <div className="relative z-10 text-left max-w-3xl ml-auto">
              <h3 className="text-2xl font-bold mb-6">
                Dear aspiring virtual staff
              </h3>
              <div className="space-y-4 text-gray-200">
                <p>
                  I am thrilled to connect with you today and share the passion
                  for virtual staffing and recruitment. As the proud owner of a
                  staffing agency, I understand the unique challenges and
                  opportunities that come with this dynamic industry.
                </p>
                <p>
                  At AVS, we pride ourselves on placing individuals in roles
                  that align with their unique skills, passions, and
                  aspirations. We believe that Virtual Assistants deserve
                  better—better training, better support, and better
                  opportunities to shine.
                </p>
                <p>
                  We're not just filling positions; we're creating pathways to
                  success. Through our hiring program, I am ensuring families
                  get the support they need by ensuring that the employers
                  provide engage and sustainable compensation packages to each
                  Candidates that get placed in job opportunities.
                </p>
                <p>
                  As we open these new realms, I want you to know that you
                  opportunities are not just a commodity—you're an investment.
                  Growth starts with you, and we want to invest in you, not just
                  once, but throughout the duration of your careers with us.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="text-xl font-bold">Best regards,</p>
                  <p className="text-orange-500 text-2xl font-bold">
                    Eri Yanson
                  </p>
                </div>
                <div className="w-24 h-24 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join AVS Hub Section */}
      <section className="py-20 bg-[#053f5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-blue-600 text-white mb-4">AVS Team Call</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Join our AVS Hub community of talented professionals today!
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            A community of empowered Virtual Assistants & partners to create a
            virtual team of experts, who help each other succeed and have fun
            along the way! With over 100 members sharing expertise everyday!
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-lg">
              <CheckCircle2 className="inline w-5 h-5 mr-2" />
              We are passionate, Are you ready?
            </p>
            <p className="text-lg">
              <CheckCircle2 className="inline w-5 h-5 mr-2" />
              Get Access to exclusive training, and free training courses in one
              community
            </p>
            <p className="text-lg">
              <CheckCircle2 className="inline w-5 h-5 mr-2" />
              FREE Resources to help you grow professionally and personally
            </p>
            <p className="text-lg">
              <CheckCircle2 className="inline w-5 h-5 mr-2" />
              Opportunity to network with other like-minded working-moms
            </p>
          </div>
          <p className="text-2xl font-bold mb-6">
            ✨✨ 7,326 MEMBERS AND COUNTING ✨✨
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Join us group
          </Button>
        </div>
      </section>

      {/* The AVS Way Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            The <span className="text-orange-500">AVS</span> Way
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaborative</h3>
                <p className="text-gray-600">
                  We work together as a team to achieve greater success
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Supportive</h3>
                <p className="text-gray-600">
                  Creating a positive and productive work environment
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovative</h3>
                <p className="text-gray-600">
                  We embrace creativity and innovation to stay ahead of the
                  curve
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hard-working</h3>
                <p className="text-gray-600">
                  We value Diversity and respect different perspectives
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent</h3>
                <p className="text-gray-600">
                  We foster open communication and accountability
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Empowering</h3>
                <p className="text-gray-600">
                  We support growth and development of our team and business
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dynamic</h3>
                <p className="text-gray-600">
                  We embrace change and use it to excel in a fast-paced
                  environment
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Agile</h3>
                <p className="text-gray-600">
                  We are flexible enough to adapt to quick changes that may
                  occur
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passionate</h3>
                <p className="text-gray-600">
                  We are fired by the love and driven by the purpose that we
                  have for career
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* We Love Working at AVS Section */}
      <section className="py-20 bg-[#053f5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">We love working at AVS</h2>
          <p className="text-xl mb-8">We believe that you will too</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            See all open positions
          </Button>
        </div>
      </section>

      {/* Stay in the Loop Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Stay in the loop
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-linear-to-br from-orange-400 to-pink-400">
                  <Badge className="absolute top-4 left-4 bg-orange-500">
                    Marketing
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    How 7 lines of code turned into $42 Billion Apple and Intel
                  </h3>
                  <Button variant="link" className="p-0 h-auto text-blue-600">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Read more article
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
