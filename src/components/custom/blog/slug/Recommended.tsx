"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  color: string;
}

interface RecommendedProps {
  posts: BlogPost[];
}

const Recommended = ({ posts }: RecommendedProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-[#024466] text-center mb-12">
            Recommended Articles Just for You
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((recPost, index) => (
              <AnimatedSection key={recPost.id} delay={index * 0.1}>
                <Link href={`/blog/${recPost.slug}`}>
                  <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full overflow-hidden hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-0">
                      <div
                        className={`h-32 bg-linear-to-br ${recPost.color} flex items-center justify-center relative overflow-hidden`}
                      >
                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                          {recPost.image}
                        </span>
                      </div>
                      <div className="p-4">
                        <Badge className="mb-2 bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20 text-xs font-semibold">
                          {recPost.category.replace(/_/g, " ")}
                        </Badge>
                        <h3 className="text-sm font-bold text-[#024466] mb-2 line-clamp-2 group-hover:text-[#0891b2] transition-colors">
                          {recPost.title}
                        </h3>
                        <div className="flex items-center text-[#024466] text-xs font-semibold group-hover:text-[#FF6B35] transition-colors">
                          Read More
                          <ArrowRight
                            size={12}
                            className="ml-1 group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Recommended;
