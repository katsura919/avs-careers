"use client";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, User } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  author?: string;
  date?: string;
  readTime?: string;
  image: string;
  color: string;
}

interface HeroProps {
  post: BlogPost;
}

const Hero = ({ post }: HeroProps) => {
  return (
    <section className="relative pt-32 bg-linear-to-br from-[#024466] to-[#0891b2] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white border-0 text-xs font-semibold px-4 py-1.5">
              {post.category.replace(/_/g, " ")}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author || "AVS Team"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date || "February 13, 2026"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime || "5 min read"}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
