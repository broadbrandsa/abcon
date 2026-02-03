"use client";

import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { Button } from "../button";
import { cn } from "../utils";

export interface ServiceScrollItem {
    id: string;
    icon: string; // "01", "02", etc.
    title: string;
    description: string;
}

export interface ServiceScrollSectionProps {
    heading: string;
    description: string;
    items: ServiceScrollItem[];
    className?: string;
}

export function ServiceScrollSection({
    heading,
    description,
    items,
    className,
}: ServiceScrollSectionProps) {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const cardWidth = 300 + 24; // approx card width + gap
            const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const scrollToItem = (index: number) => {
        if (scrollRef.current) {
            // Basic calculation: width of card * index. 
            // Ideally we find the element and scrollIntoView or use offsetLeft
            const container = scrollRef.current;
            const card = container.children[index] as HTMLElement;
            if (card) {
                // center alignment
                const scrollLeft = card.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                })
            }
        }
    };

    // Update active index on scroll
    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const center = container.scrollLeft + container.clientWidth / 2;

            let closestIndex = 0;
            let minDistance = Infinity;

            Array.from(container.children).forEach((child, index) => {
                const htmlChild = child as HTMLElement;
                const childCenter = htmlChild.offsetLeft + htmlChild.clientWidth / 2;
                const distance = Math.abs(center - childCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });
            setActiveIndex(closestIndex);
        }
    };

    return (
        <section className={cn("relative py-20 lg:py-32 overflow-hidden bg-secondary", className)}>
            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div className="space-y-4 max-w-2xl">
                        <Heading level={5} className="text-secondary-foreground/70 uppercase tracking-widest font-semibold text-sm">
                            What we do
                        </Heading>
                        <Heading level={2} className="text-secondary-foreground text-4xl lg:text-5xl">
                            {heading}
                        </Heading>
                        <Text className="text-secondary-foreground/70 text-lg">
                            {description}
                        </Text>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            onClick={() => scroll("left")}
                            variant="secondary"
                            className="size-12 rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary-foreground/10 p-0"
                            aria-label="Previous service"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Button>
                        <Button
                            onClick={() => scroll("right")}
                            variant="secondary"
                            className="size-12 rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary-foreground/10 p-0"
                            aria-label="Next service"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Button>
                    </div>
                </div>

                {/* Slider Track */}
                <div className="bg-background/50 backdrop-blur-md rounded-[20px] border border-border p-6 lg:p-8">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch"
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex-none w-[85vw] sm:w-[350px] lg:w-[400px] snap-center rounded-[20px] p-8 border border-transparent transition-all duration-300",
                                    activeIndex === index
                                        ? "bg-background shadow-lg scale-100"
                                        : "bg-background/40 scale-95 opacity-60"
                                )}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center justify-center size-12 rounded-xl bg-primary text-primary-foreground font-semibold">
                                        {item.icon}
                                    </div>
                                    <Heading level={3} className="text-foreground text-2xl">
                                        {item.title}
                                    </Heading>
                                </div>
                                <Text className="text-muted-foreground">
                                    {item.description}
                                </Text>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="flex flex-wrap gap-2 mt-8">
                        {items.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToItem(index)}
                                className={cn(
                                    "flex items-center justify-center size-12 rounded-full border text-sm font-semibold transition-all",
                                    activeIndex === index
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                                )}
                            >
                                {item.icon}
                            </button>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
