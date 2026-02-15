import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog/blog.data";
import Hero from "@/components/custom/blog/slug/Hero";
import Content from "@/components/custom/blog/slug/Content";
import Sidebar from "@/components/custom/blog/slug/Sidebar";
import CTA from "@/components/custom/blog/slug/CTA";
import Recommended from "@/components/custom/blog/slug/Recommended";

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
      <Hero post={post} />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <Content post={post} />
            <Sidebar relatedPosts={relatedPosts} />
          </div>
        </div>
      </section>

      <CTA />
      <Recommended posts={recommendedPosts} />
    </div>
  );
};

export default BlogDetailPage;
