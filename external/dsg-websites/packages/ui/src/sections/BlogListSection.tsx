"use client";

import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { PostCard } from "../components/PostCard";
import { type Post } from "@repo/content-client";
import { cn } from "../utils";

export interface BlogListSectionProps {
    initialPosts: Post[];
    title: string;
    description: string;
    heroClassName?: string;
    brandId?: number;
}

export function BlogListSection({ initialPosts, title, description, heroClassName, brandId = 1 }: BlogListSectionProps) {
    const [search, setSearch] = React.useState("");
    const [selectedTag, setSelectedTag] = React.useState("");

    // Extract all unique tags
    const allTags = React.useMemo(() => {
        const tags = new Set<string>();
        initialPosts.forEach(post => {
            post.tags?.forEach(tag => tags.add(tag.name));
        });
        return Array.from(tags).sort();
    }, [initialPosts]);

    const filteredPosts = React.useMemo(() => {
        return initialPosts.filter(post => {
            const matchesSearch =
                search === "" ||
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                (post.meta_description || "").toLowerCase().includes(search.toLowerCase());

            const matchesTag =
                selectedTag === "" ||
                post.tags?.some(tag => tag.name === selectedTag);

            return matchesSearch && matchesTag;
        });
    }, [initialPosts, search, selectedTag]);

    return (
        <>
            {/* Editorial Header Section */}
            <section className={cn("flex h-[70vh] min-h-[500px] flex-col justify-between bg-[#E77975] pt-24 text-white transition-all", heroClassName)}>
                <Container className="flex flex-1 flex-col justify-center">
                    <div className="max-w-4xl">
                        <Heading level={1} className="mb-8 font-heading text-5xl font-medium leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
                            {title}
                        </Heading>

                        {/* Description where tags usually are */}
                        <div className="max-w-2xl text-xl text-white/70">
                            {description}
                        </div>
                    </div>
                </Container>

                {/* Filter/Search Bar (Replacing Author/Date area) */}
                <div className="border-t border-white/20 py-8">
                    <Container>
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            {/* Left: Search (Replacing Author) */}
                            <div className="flex flex-1 items-center gap-4">
                                <div className="relative w-full max-w-sm">
                                    <input
                                        type="text"
                                        placeholder="Search posts..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="h-10 w-full rounded-lg border border-white/20 bg-white/5 px-4 pl-10 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                                    />
                                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Filters (Replacing Dates) */}
                            <div className="flex gap-4">
                                <div className="relative">
                                    <select
                                        value={selectedTag}
                                        onChange={(e) => setSelectedTag(e.target.value)}
                                        className="h-10 w-full appearance-none rounded-lg border border-white/20 bg-white/5 px-4 pr-10 text-sm text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors md:w-48"
                                    >
                                        <option value="" className="text-black">All Topics</option>
                                        {allTags.map(tag => (
                                            <option key={tag} value={tag} className="text-black">{tag}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            {/* Results Grid */}
            <div className="bg-background py-16 md:py-24">
                <Container>
                    {filteredPosts.length === 0 ? (
                        <div className="py-20 text-center">
                            <Text dimmed>No posts found matching your criteria.</Text>
                            <button
                                onClick={() => { setSearch(""); setSelectedTag(""); }}
                                className="mt-4 text-sm font-medium text-black underline underline-offset-4"
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post) => (
                                <PostCard
                                    key={post.id}
                                    title={post.title}
                                    href={`/blog/${post.publications.find(p => p.brand_id === brandId || p.slug)?.slug}`}
                                    date={new Date(post.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                    excerpt={post.meta_description || ""}
                                    imageSrc={post.hero_image_id.startsWith("http") ? post.hero_image_id : `/assets/${post.hero_image_id}`}
                                    imageAlt={post.title}
                                // authorName={post.authors?.[0]?.name} // Verify author data availability
                                // Post type definition in content-client might need strict check.
                                />
                            ))}
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
}
