"use client";

import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface MarqueeAwardItem {
    year?: string;
    result: "Winner" | "Finalist" | "Ranked" | "AVAILABLE" | "COMING SOON";
    resultLabel?: string;
    title: string;
    meta: string;
    description?: string;
}

export interface AwardsMarqueeSectionProps {
    heading?: string;
    items: MarqueeAwardItem[];
    className?: string;
    cardClassName?: string;
}

export function AwardsMarqueeSection({ items, heading, className, cardClassName }: AwardsMarqueeSectionProps) {
    return (
        <section className={cn("w-full py-16 overflow-hidden bg-background", className)}>
            {heading && (
                <Container className="mb-12 text-center">
                    <Text className="text-muted-foreground max-w-2xl mx-auto">
                        {heading}
                    </Text>
                </Container>
            )}

            <div className="relative flex w-full overflow-hidden">
                <div className="flex animate-marquee gap-6 min-w-full">
                    {[...items, ...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex-none w-[280px] p-6 rounded-[24px] border border-border bg-gradient-to-br from-primary/5 to-transparent hover:-translate-y-1 transition-transform duration-300",
                                cardClassName
                            )}
                        >
                            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider mb-3">
                                {item.year && <span className="text-primary">{item.year}</span>}
                                <span className={cn(
                                    "px-2.5 py-0.5 rounded-full border text-[11px]",
                                    item.result === "Winner" && "bg-primary/10 border-primary/20 text-foreground",
                                    item.result === "Finalist" && "bg-transparent border-primary/20 text-muted-foreground",
                                    item.result === "Ranked" && "bg-primary/5 border-primary/20 text-primary",
                                    item.result === "AVAILABLE" && "bg-green-500/10 border-green-500/20 text-green-600",
                                    item.result === "COMING SOON" && "bg-blue-500/10 border-blue-500/20 text-blue-600"
                                )}>
                                    {item.resultLabel || item.result}
                                </span>
                            </div>
                            <Heading level={4} className="text-lg mb-2 line-clamp-2">
                                {item.title}
                            </Heading>
                            <Text className="text-sm font-medium text-foreground mb-1">
                                {item.meta}
                            </Text>
                            {item.description && (
                                <Text className="text-sm text-muted-foreground line-clamp-2">
                                    {item.description}
                                </Text>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
