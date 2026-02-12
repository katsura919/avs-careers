"use client";

import React, { useState } from "react";
import Hero from "@/components/custom/blog/Hero";
import CategoryFilter from "@/components/custom/blog/CategoryFilter";
import BlogGrid from "@/components/custom/blog/BlogGrid";
import CTA from "@/components/custom/blog/CTA";
import { blogPosts } from "@/data/blog/blog.data";

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
      <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <BlogGrid posts={filteredPosts} />
      <CTA />
    </div>
  );
};

export default Blog;
