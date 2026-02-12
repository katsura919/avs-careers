"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  color: string;
  readTime?: string;
}

interface SidebarProps {
  relatedPosts: BlogPost[];
}

const Sidebar = ({ relatedPosts }: SidebarProps) => {
  return (
    <div className="lg:col-span-1">
      <AnimatedSection delay={0.2}>
        <div className="sticky top-24 space-y-8">
          {/* Related Resources */}
          {relatedPosts.length > 0 && (
            <Card className="border-2 border-gray-100 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#024466] mb-4">
                  Related Resources
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-12 h-12 rounded-lg bg-linear-to-br ${relatedPost.color} flex items-center justify-center shrink-0 text-2xl`}
                        >
                          {relatedPost.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-[#024466] group-hover:text-[#FF6B35] transition-colors line-clamp-2 mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {relatedPost.readTime || "5 min read"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Newsletter Signup */}
          <Card className="border-2 border-[#FF6B35]/20 shadow-lg bg-linear-to-br from-[#FF6B35]/5 to-[#FF6B35]/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#024466] mb-2">
                Get Exclusive Access
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Be the first to know about hiring and training opportunities
              </p>
              <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Sidebar;
