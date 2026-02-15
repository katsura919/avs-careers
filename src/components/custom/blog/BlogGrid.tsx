"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  image: string;
  color: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  if (posts.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`}>
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
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
