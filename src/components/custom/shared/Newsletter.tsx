"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-linear-to-r from-[#024466] to-[#0a6e8a] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-3">
          Ready to Start Your VA Career?
        </h3>
        <p className="text-blue-100 mb-8 text-lg">
          Subscribe to get the latest job openings, career tips, and exclusive
          opportunities delivered straight to your inbox.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 text-base"
          />
          <Button className="h-12 px-8 bg-[#FF6B35] hover:bg-[#e85a28] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 shrink-0">
            <Send size={16} className="mr-2" />
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
