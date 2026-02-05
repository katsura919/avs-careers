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
      </div>
    </div>
  );
};

export default Blog;
