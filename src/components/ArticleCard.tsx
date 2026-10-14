import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col justify-between transition-all duration-200">
      <div>
        {/* Image Container */}
        <div className="overflow-hidden rounded-xl">
          <ImagePlaceholder
            label={article.imageLabel}
            subLabel="Aspect: 16:10"
            aspectRatio="aspect-[16/10]"
            className="w-full"
            src={article.imageSrc}
            alt={article.imageAlt}
          />
        </div>

        {/* Title */}
        <h3 className="mt-4 font-serif text-[22px] sm:text-[24px] font-medium leading-[1.25] text-[#0D3226] group-hover:text-[#185340] transition-colors">
          <Link href={`/#article-${article.id}`}>
            {article.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-2.5 text-[15px] sm:text-[15.5px] leading-[1.6] text-[#55645B]">
          {article.excerpt}
        </p>
      </div>

      {/* Read Article Link */}
      <div className="mt-5 pt-1">
        <Link
          href={`/#article-${article.id}`}
          className="inline-flex items-center gap-1.5 text-[14px] sm:text-[14.5px] font-semibold text-[#0E382B] transition-colors hover:text-[#195642]"
        >
          <span className="border-b-[1.5px] border-[#C5A969] pb-0.5">Read Article</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
