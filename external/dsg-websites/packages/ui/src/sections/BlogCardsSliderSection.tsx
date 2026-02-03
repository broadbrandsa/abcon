
"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { Button } from "../button";
import { cn } from "../utils";

export interface BlogCard {
    title: string;
    excerpt: string;
    imageSrc: string;
    logoSrc?: string;
    category?: { label: string; icon?: React.ReactNode };
    href?: string;
}

export interface BlogCardsSliderSectionProps {
    title: string;
    description: string;
    cards: BlogCard[];
    className?: string;
}

export function BlogCardsSliderSection({
    title,
    description,
    cards,
    className,
}: BlogCardsSliderSectionProps) {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null); // Renamed ref

    const scrollLeft = () => { // Split scroll function
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => { // Split scroll function
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <section className={cn("py-16 md:py-24", className)}>
            <Container>
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        {title && ( // Conditional rendering
                            <Heading level={2} className="mb-4">
                                {title}
                            </Heading>
                        )}
                        {description && ( // Conditional rendering
                            <Text className="text-lg text-muted-foreground">
                                {description}
                            </Text>
                        )}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4">
                        <Button // Changed to Button component
                            variant="outline"
                            onClick={scrollLeft} // Updated onClick
                            aria-label="Scroll left"
                            className="h-12 w-12 rounded-full border-muted bg-background hover:bg-muted"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <Button // Changed to Button component
                            variant="outline"
                            onClick={scrollRight} // Updated onClick
                            aria-label="Scroll right"
                            className="h-12 w-12 rounded-full border-muted bg-background hover:bg-muted"
                        >
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Slider Container - Fixed Alignment & Bleed */}
            <div
                className="w-full overflow-x-auto pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory px-0 scroll-pl-5 min-[750px]:scroll-pl-[100px]"
                ref={scrollContainerRef}
            >
                {/* 
                   We use explicit padding-left (!pl) to match the global container alignment (!px-[100px]).
                   We use small padding-right (!pr) to allow the "full bleed" scrolling effect.
                   Using explicit pl/pr avoids issues with overriding 'px' shorthands.
                */}
                <Container className="!pl-5 !pr-5 min-[750px]:!pl-[100px] min-[750px]:!pr-12">
                    <div className="flex gap-6 min-w-min">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="group relative flex h-[460px] w-[85vw] flex-shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[20px] bg-muted transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg md:h-[520px] md:w-[35vw] lg:w-[30vw]"
                            >
                                {/* Background Image */}
                                {card.imageSrc ? (
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-muted" />
                                )}

                                {/* Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                {/* Top Left: Logo (no pillbox) */}
                                {card.logoSrc && (
                                    <div className="absolute left-6 top-6 z-10">
                                        <img
                                            src={card.logoSrc}
                                            alt="Brand Logo"
                                            className="h-8 w-auto object-contain brightness-0 invert"
                                        />
                                    </div>
                                )}

                                {/* Top Right: Link Arrow */}
                                {card.href && (
                                    <div className="absolute right-6 top-6 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <a
                                            href={card.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground backdrop-blur-md transition-colors hover:bg-primary"
                                        >
                                            <ArrowRight className="h-5 w-5 -rotate-45" />
                                        </a>
                                    </div>
                                )}

                                {/* Always visible secondary arrow on Top Right */}
                                <div className="absolute right-6 top-6 z-10 group-hover:opacity-0 transition-opacity duration-300">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                                        <ArrowRight className="h-5 w-5 -rotate-45" />
                                    </div>
                                </div>


                                {/* Content */}
                                <div className="relative z-10 p-8 text-white">
                                    {/* Category (Text only) */}
                                    {card.category && (
                                        <div className="mb-3 text-sm font-medium text-white/80">
                                            {card.category.label}
                                        </div>
                                    )}

                                    <Heading level={3} className="mb-3 text-2xl font-bold leading-tight text-white md:text-3xl">
                                        {card.title}
                                    </Heading>

                                    <Text className="line-clamp-2 text-white/80">
                                        {card.excerpt}
                                    </Text>
                                </div>

                                {/* Full card clickable overlay */}
                                {card.href && (
                                    <a href={card.href} className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[20px]">
                                        <span className="sr-only">Visit {card.title}</span>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </section >
    );
}
