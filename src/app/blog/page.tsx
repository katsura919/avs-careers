"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import { blogPosts } from "@/data/blog/blog.data";

const Blog = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      {/* Hero Section */}
      <div className="relative bg-linear-to-b from-[#0c4a6e] to-[#0e7490] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-0 shadow-md"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image Section */}
                  <div
                    className={`w-full sm:w-2/5 bg-linear-to-br ${post.color} flex items-center justify-center p-8 relative`}
                  >
                    <div className="text-6xl">{post.image}</div>
                    <div className="absolute top-4 left-4">
                      <svg
                        width="20"
                        height="20"
                        className="text-gray-700 opacity-50"
                      >
                        <circle cx="10" cy="10" r="3" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="absolute top-4 right-4">
                      <svg
                        width="30"
                        height="30"
                        className="text-white opacity-50"
                      >
                        <path d="M15 5 L25 15 L15 25 Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 bg-orange-100 text-orange-600 hover:bg-orange-100 text-xs">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
                  Be the first to know about hiring and training opportunities.
                  So, what are you waiting for?
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
                <li>
                  <a href="/blog" className="text-blue-100 hover:text-white">
                    Apply Here
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

export default Blog;
