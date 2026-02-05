"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import { jobListings } from "@/data/apply-here/listing.data";

const ApplyHere = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    // Handle newsletter submission
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-[#0c4a6e] to-[#0e7490] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Apply Now</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Decorative Wave */}
        <div className="flex justify-center mb-8">
          <svg
            width="100"
            height="20"
            viewBox="0 0 100 20"
            className="text-blue-600"
          >
            <path
              d="M0 10 Q 25 0, 50 10 T 100 10"
              stroke="currentColor"
              fill="none"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            This is your starting point
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Job posted for common roles our clients are looking for and we are
            always hiring for these roles. Once you qualify we will reach you
            using the contact info you provided.
          </p>
          <p className="text-gray-700 dark:text-gray-400 font-medium mb-2">
            Can't find any that suits your skills?
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            You can also join our waitlist for us to contact you in case we're
            hiring for the skills you have.
          </p>
        </div>

        {/* Job Listings and Waitlist Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Job Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobListings.map((job) => (
              <Card
                key={job.id}
                className={`hover:shadow-lg transition-shadow ${
                  job.featured ? "border-2 border-dashed border-gray-300" : ""
                }`}
              >
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-orange-100 text-orange-600 hover:bg-orange-100">
                    {job.category}
                  </Badge>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Apply Here
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Waitlist Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 bg-white dark:bg-zinc-900">
              <CardHeader className="text-center">
                <CardTitle className="text-xl bg-blue-600 text-white py-3 -mx-6 -mt-6 mb-4 rounded-t-lg">
                  Join Our Waitlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name *
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
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
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
                      className="block text-sm font-medium mb-2"
                    >
                      Phone *
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
                      className="block text-sm font-medium mb-2"
                    >
                      Position *
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
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Send Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="flex justify-center mb-8">
          <svg
            width="100"
            height="20"
            viewBox="0 0 100 20"
            className="text-blue-600"
          >
            <path
              d="M0 10 Q 25 0, 50 10 T 100 10"
              stroke="currentColor"
              fill="none"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Company Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            AVSPH is committed to
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            providing work from home to Filipinos anywhere in the Philippines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Family</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We treat all our virtual staff as family.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Openness</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We highly encourage everyone to speak their minds.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-dashed border-red-200 hover:border-red-400 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Equality</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We don't discriminate, everyone is welcome with open arms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter Section */}
        <Card className="bg-linear-to-r from-blue-600 to-blue-700 text-white border-0 mb-8">
          <CardContent className="py-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Get Exclusive Access
                </h3>
                <p className="text-blue-100">
                  Be the first to know about new career opportunities. So, what
                  are you waiting for?
                </p>
              </div>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex-1 w-full md:w-auto"
              >
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-white text-gray-900"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>

        {/* Footer Section */}
        <div className="bg-linear-to-r from-[#0c4a6e] to-[#0e7490] text-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 mt-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">A</span>
                </div>
                <span className="font-bold text-lg">AVSPH</span>
              </div>
              <p className="text-sm text-blue-100">
                AVSPH is a Filipino Virtual Assistants in realizing their full
                potential by providing a platform for building their
                work-from-home dreams and achieving their dreams.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-blue-100 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="text-blue-100 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/requirements"
                    className="text-blue-100 hover:text-white"
                  >
                    Requirements
                  </a>
                </li>
                <li>
                  <a
                    href="/training"
                    className="text-blue-100 hover:text-white"
                  >
                    Training
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-blue-100">
                <p>Submit your application now but, make sure to first:</p>
                <p className="flex items-center gap-2">
                  📧 hiring@avsvirtualstaff.com
                </p>
                <p>⏰ 8 A.M. - 5 P.M., Monday - Saturday</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-white">
                    📘
                  </a>
                  <a href="#" className="hover:text-white">
                    ▶️
                  </a>
                  <a href="#" className="hover:text-white">
                    💼
                  </a>
                  <a href="#" className="hover:text-white">
                    📷
                  </a>
                  <a href="#" className="hover:text-white">
                    🎵
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-blue-500 text-sm text-blue-100">
            AVSPH Virtual Assistance Services © 2025. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyHere;
