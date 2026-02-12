"use client";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  content?: string;
  image: string;
  color: string;
}

interface ContentProps {
  post: BlogPost;
}

const Content = ({ post }: ContentProps) => {
  return (
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
  );
};

export default Content;
