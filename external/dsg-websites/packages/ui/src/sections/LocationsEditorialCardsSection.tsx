"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

interface LocationCardData {
    kicker?: string;
    title: string;
    address: string;
    googleMapsUrl: string;
    imageSrc?: string | null;
}

export interface LocationsEditorialCardsSectionProps {
    heading: string;
    cards: LocationCardData[];
    className?: string;
}

export function LocationsEditorialCardsSection({
    heading,
    cards,
    className,
}: LocationsEditorialCardsSectionProps) {
    const isScrollable = cards.length > 2;

    return (
        <section className={cn("py-16 md:py-24 bg-background", className)}>
            <Container>
                <Heading level={2} className="mb-12 text-3xl md:text-4xl font-light">
                    {heading}
                </Heading>
            </Container>

            {/* 
               If scrollable, we break out of container on the right side on mobile/desktop
               but keep left alignment with container.
            */}
            <div className={cn(
                "w-full",
                isScrollable
                    ? "overflow-x-auto pb-8 -mb-8 px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-pl-5 min-[750px]:scroll-pl-[100px]"
                    : ""
            )}>
                <Container className={cn(
                    isScrollable ? "!pl-5 !pr-5 min-[750px]:!pl-[100px] min-[750px]:!pr-12 w-auto" : ""
                )}>
                    <div className={cn(
                        isScrollable
                            ? "flex gap-6 min-w-min items-stretch"
                            : "grid grid-cols-1 md:grid-cols-2 gap-6"
                    )}>
                        {cards.map((card, index) => (
                            <LocationCard
                                key={index}
                                card={card}
                                className={cn(
                                    isScrollable
                                        ? "w-[93vw] md:w-[48vw] lg:w-[33vw] flex-shrink-0 snap-start"
                                        : "w-full"
                                )}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    );
}

function LocationCard({
    card,
    className,
}: {
    card: LocationCardData;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "group relative flex h-[276px] flex-col justify-end overflow-hidden rounded-[20px] bg-muted transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
                className
            )}
        >
            {/* Background Image */}
            {card.imageSrc ? (
                <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={card.imageSrc.includes("/uploads/") || card.imageSrc.includes("127.0.0.1") || card.imageSrc.includes("localhost")}
                />
            ) : (
                <div className="absolute inset-0 bg-muted" />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Top Right Button */}
            <div className="absolute right-6 top-6 z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                <a
                    href={card.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
                >
                    Get directions
                    <ArrowRight className="h-4 w-4 -rotate-45" />
                </a>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 text-white">
                <Heading level={3} className="mb-3 text-2xl font-light text-white md:text-3xl">
                    {card.title}
                </Heading>

                <Text className="text-white/80 line-clamp-2">
                    {card.address}
                </Text>
            </div>
        </div>
    );
}
