"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { cn } from "@/lib/utils";

export interface ShowcaseItem {
    title: string;
    description: string;
}

export interface ShowcaseGridSectionProps {
    items: ShowcaseItem[];
    className?: string;
    backgroundImage?: string;
    overlayClassName?: string;
    variant?: "default" | "inverse";
}

export function ShowcaseGridSection({
    items,
    className,
    backgroundImage,
    overlayClassName,
    variant = "default"
}: ShowcaseGridSectionProps) {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

    return (
        <section className={cn("relative w-full py-20 lg:py-32 bg-background overflow-hidden", className)}>
            {backgroundImage && (
                <>
                    <Image
                        src={backgroundImage}
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                    {overlayClassName && (
                        <div className={cn("absolute inset-0 z-0", overlayClassName)} />
                    )}
                </>
            )}

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row min-h-[60vh] border border-border/20 rounded-[20px] overflow-hidden backdrop-blur-sm bg-white/5">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "relative flex-1 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/20 last:border-0 transition-all duration-300 ease-in-out cursor-pointer group",
                                activeIndex === index
                                    ? (variant === "inverse" ? "bg-white/10 grow-[1.5]" : "bg-primary/5 grow-[1.5]")
                                    : "bg-transparent hover:bg-white/5"
                            )}
                            onMouseEnter={() => setActiveIndex(index)}
                            onFocus={() => setActiveIndex(index)}
                            onClick={() => setActiveIndex(index)}
                            tabIndex={0}
                            role="button"
                            aria-expanded={activeIndex === index}
                        >
                            <div className="flex flex-col justify-center h-full gap-4">
                                <Heading
                                    level={3}
                                    className={cn(
                                        "text-2xl transition-colors",
                                        variant === "inverse"
                                            ? "text-white"
                                            : (activeIndex === index ? "text-primary" : "text-foreground")
                                    )}
                                >
                                    {item.title}
                                </Heading>
                                <Text
                                    className={cn(
                                        "transition-colors",
                                        variant === "inverse"
                                            ? "text-slate-200"
                                            : (activeIndex === index ? "text-muted-foreground" : "text-muted-foreground/70")
                                    )}
                                >
                                    {item.description}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
