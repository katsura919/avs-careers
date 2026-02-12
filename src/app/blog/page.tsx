"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import WaveDivider from "@/components/custom/shared/WaveDivider";

import { blogPosts } from "@/data/blog/blog.data";

const categories = [
  "All",
  "Freelancing",
  "VA Careers",
  "Remote Work Tips",
  "Success Stories",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" ||
      post.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <BookOpen size={16} className="text-[#FF6B35]" />
              <span className="text-white/90 text-sm font-medium">
                Insights & Resources
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AVS{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF6B35] to-yellow-400">
                Blog
              </span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Tips, guides, and success stories to help you build a thriving VA
              career. Stay updated with the latest in remote work.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
              />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        <WaveDivider color="white" />
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#024466] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.08}>
                  <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full overflow-hidden hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-0">
                      {/* Image/Color Area */}
                      <div
                        className={`h-44 bg-linear-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}
                      >
                        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                          {post.image}
                        </span>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <Badge className="mb-3 bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20 text-xs font-semibold">
                          {post.category}
                        </Badge>
                        <h3 className="text-lg font-bold text-[#024466] mb-2 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                          {post.description}
                        </p>
                        <div className="flex items-center text-[#024466] text-sm font-semibold group-hover:text-[#FF6B35] transition-colors">
                          Read More
                          <ArrowRight
                            size={14}
                            className="ml-1 group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f5f9fb]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-[#024466] mb-4">
              Want to Share Your VA Story?
            </h2>
            <p className="text-gray-600 mb-6">
              We love featuring success stories from our VAs. If you&apos;ve
              built an amazing career with AVS, we&apos;d love to hear from you!
            </p>
            <Button className="bg-[#024466] hover:bg-[#02334a] text-white px-8 h-12 font-semibold rounded-xl">
              Share Your Story
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blog;
