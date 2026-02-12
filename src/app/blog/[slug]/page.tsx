import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog/blog.data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, User, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts from the same category
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 5);

  // Get randomized recommended articles
  const recommendedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4); // Show 4 random posts

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#024466] to-[#0891b2] text-white py-20">
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

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                {/* Featured Image/Emoji */}
                <div
                  className={`h-64 bg-linear-to-br ${post.color} rounded-2xl mb-8 flex items-center justify-center`}
                >
                  <span className="text-8xl">{post.image}</span>
                </div>

                {/* Article Body */}
                <article className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed space-y-6">
                    {post.content ? (
                      post.content.split("\n\n").map((paragraph, index) => {
                        if (paragraph.startsWith("## ")) {
                          return (
                            <h2
                              key={index}
                              className="text-2xl font-bold text-[#024466] mt-8 mb-4"
                            >
                              {paragraph.replace("## ", "")}
                            </h2>
                          );
                        } else if (paragraph.trim()) {
                          return (
                            <p key={index} className="text-gray-700">
                              {paragraph}
                            </p>
                          );
                        }
                        return null;
                      })
                    ) : (
                      <p className="text-gray-700">{post.description}</p>
                    )}
                  </div>
                </article>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
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
                        Be the first to know about hiring and training
                        opportunities
                      </p>
                      <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                        Subscribe Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-[#024466] to-[#0891b2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to start your Freelancing journey with us?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Join our team of talented virtual assistants and work with amazing
              clients
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-8 py-6 rounded-full"
            >
              <Link href="/apply-here">Apply Now</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Recommended Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#024466] text-center mb-12">
              Recommended Articles Just for You
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedPosts.map((recPost, index) => (
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
    </div>
  );
};

export default BlogDetailPage;
