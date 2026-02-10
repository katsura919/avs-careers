"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Music } from "lucide-react";

const ApplyHere = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            This is your starting point
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Advanced virtual staff helps find and train the best talent anywhere
            in the Philippines, so you can focus on what matters most.
          </p>
        </div>
      </section>

      {/* Why Choose Section with Masonry Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Side - 6 Cards in 2x3 Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Light with icon */}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <Music className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Why Choose Advanced Virtual Staff?
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We provide vetted Filipino talents who are reliable, skilled,
                      and eager to excel in their roles.
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                    Apply Here
                  </Button>
                </CardContent>
              </Card>

              {/* Card 2 - Dark Blue */}
              <Card className="bg-slate-900 border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Why Choose Advanced Virtual Staff?
                    </h3>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      All our virtual staff are carefully screened, professionally
                      trained, and ready to contribute from their first day on the job.
                    </p>
                  </div>
                  <Button className="w-full bg-white hover:bg-slate-100 text-slate-900 mt-4">
                    Apply Here
                  </Button>
                </CardContent>
              </Card>

              {/* Card 3 - Light with icon */}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <Music className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Why Choose Advanced Virtual Staff?
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Meet the best candidate for your role with a personalized
                      talent selection service.
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                    Apply Here
                  </Button>
                </CardContent>
              </Card>

              {/* Card 4 - Light with icon */}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <Music className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Why Choose Advanced Virtual Staff?
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Get dedicated support with our experienced project management
                      team always ready to help.
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                    Apply Here
                  </Button>
                </CardContent>
              </Card>

              {/* Card 5 - Light with icon */}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <Music className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Why Choose Advanced Virtual Staff?
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Save money with competitive rates while maintaining exceptional
                      quality standards.
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                    Apply Here
                  </Button>
                </CardContent>
              </Card>

              {/* Card 6 - Dark Blue with icon */}
              <Card className="bg-blue-900 border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <Music className="w-12 h-12 text-blue-300 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Why Choose Advanced Virtual Staff?
                    </h3>
                    <p className="text-blue-50 text-sm leading-relaxed">
                      More than staffing—it's a complete solution tailored to your
                      business needs and growth.
                    </p>
                  </div>
                  <Button className="w-full bg-white hover:bg-slate-100 text-blue-900 mt-4">
                    Apply Here
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Application Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Send an Application
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Name*
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Phone*
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Position*
                      </label>
                      <Input
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Send Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Scale Your Business with Our Advanced Staffing Solutions
            </h2>
            <p className="text-lg text-slate-600">
              Hiring and managing talent has never been easier. Let us help you
              build the best team for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-slate-600">📊</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Expert Selection
                </h3>
                <p className="text-slate-600">
                  Our team carefully evaluates every candidate to ensure they meet
                  your specific requirements.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-slate-600">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Dedicated Support
                </h3>
                <p className="text-slate-600">
                  We provide ongoing support and management to ensure your virtual
                  team thrives.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-slate-600">💡</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Seamless Integration
                </h3>
                <p className="text-slate-600">
                  Your virtual staff integrate smoothly into your existing team and
                  workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join thousands of businesses that have already scaled with our virtual
            staffing solutions.
          </p>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-6 text-lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ApplyHere;
