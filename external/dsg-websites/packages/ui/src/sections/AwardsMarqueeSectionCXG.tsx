"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface CXGAwardItem {
    icon: string;
    title: string;
    description: string;
    year: string;
    iconClassName?: string;
}

export interface AwardsMarqueeSectionCXGProps {
    heading?: string;
    items: CXGAwardItem[];
    className?: string;
}

export function AwardsMarqueeSectionCXG({ items, heading, className }: AwardsMarqueeSectionCXGProps) {
    return (
        <section className={cn("w-full py-16 overflow-hidden bg-background", className)}>
            {heading && (
                <Container className="mb-12 text-left">
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
                            className="flex-none w-[280px] flex flex-col justify-between items-start rounded-block bg-muted/30 p-6 transition-colors hover:bg-muted/50 hover:translate-y-[-4px] duration-300"
                        >
                            {/* Top: Tag */}
                            <Text
                                className="font-mono text-xs text-muted-foreground"
                                aria-label={`Category ${item.year}`}
                            >
                                {item.year}
                            </Text>

                            {/* Middle: Icon */}
                            <div className="mt-4 mb-2 shrink-0">
                                <Image
                                    src={item.icon}
                                    alt=""
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className={cn("h-8 w-auto object-contain", item.iconClassName)}
                                />
                            </div>

                            {/* Bottom: Content */}
                            <div className="flex w-full flex-col gap-1">
                                <Text dimmed className="line-clamp-2 text-sm text-left">
                                    {item.description}
                                </Text>
                            </div>
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
