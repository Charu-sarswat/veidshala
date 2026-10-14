"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import ArticleCard from "./ArticleCard";
import { Article } from "@/data/articles";

interface ArticleGridProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const displayedArticles = articles.slice(0, visibleCount);

  return (
    <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-2.5 sm:pt-3 pb-8 sm:pb-10">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
          Explore the Journal
        </span>
        <h2 className="mt-2.5 font-serif text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D3226]">
          Articles for a more conscious, balanced life.
        </h2>
      </div>

      {/* Grid of Articles */}
      {displayedArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-base text-[#758279]">
          No articles found matching your criteria.
        </div>
      )}

      {/* Editorial Notice & Load More Action */}
      <div className="mt-14 flex flex-col items-center justify-center space-y-4">
        <p className="text-center text-[13px] text-[#7E8A81]">
          Illustrative article previews — editorial content to be finalised.
        </p>
        <button
          onClick={handleLoadMore}
          className="group inline-flex items-center gap-2.5 rounded-md border border-[#D0C9BD] bg-white px-8 py-3.5 text-[14px] font-medium text-[#0E382B] shadow-sm transition-all hover:border-[#0E382B] hover:bg-[#F9F7F2]"
        >
          <span>Load More Articles</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}
