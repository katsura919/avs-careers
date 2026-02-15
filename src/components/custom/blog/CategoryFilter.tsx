"use client";
import { blogCategories, BlogCategory } from "@/data/blog/blog-config.data";

interface DataRender {
  All: string;
  Freelancing: string;
  VA_CAREERS: string;
  REMOTE_WORK_TIPS: string;
  SUCCESS_STORIES: string;
}

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: BlogCategory) => void;
}

const CategoryFilter = ({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {Object.entries(blogCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => onCategoryChange(key as BlogCategory)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === key
                  ? "bg-[#024466] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
