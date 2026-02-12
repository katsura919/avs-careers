"use client";
import { blogCategories } from "@/data/blog/blog-config.data";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
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
  );
};

export default CategoryFilter;
