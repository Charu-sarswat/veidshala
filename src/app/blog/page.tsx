"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroJournal from "@/components/HeroJournal";
import SearchFilter from "@/components/SearchFilter";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleGrid from "@/components/ArticleGrid";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import { initialArticles, Category } from "@/data/articles";

export default function HealthJournalPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroJournal />

        {/* Search & Category Filter Bar */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Featured Article Card */}
        <FeaturedArticle />

        {/* 6 Articles Grid & Load More */}
        <ArticleGrid articles={filteredArticles} />

        {/* Pre-Footer Consultation CTA */}
        <ConsultationCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
