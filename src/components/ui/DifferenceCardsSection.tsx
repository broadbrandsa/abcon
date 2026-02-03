"use client";

import * as React from "react";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { cn } from "@/lib/utils";

export type DifferenceCardVariant = "default" | "light-blue" | "dark-blue" | "light" | "green" | "salmon" | "grey" | "midnight";

export interface DifferenceCardItem {
    label: string;
    description: string;
    imageSrc?: string;
    variant?: DifferenceCardVariant;
}

export interface DifferenceCardsSectionProps {
    heading?: string;
    eyebrow?: string;
    items: DifferenceCardItem[];
    className?: string;
}

const variantStyles: Record<DifferenceCardVariant, string> = {
    default: "bg-card text-card-foreground border-border",
    "light-blue": "bg-blue-50 border-blue-100 text-blue-900",
    "dark-blue": "bg-blue-950 text-white border-blue-900",
    light: "bg-white text-gray-900 border-gray-200",
    green: "bg-green-50 text-green-900 border-green-100",
    salmon: "bg-[#FFCFCC] border-[#FFCFCC] text-[#111729]",
    grey: "bg-muted border-border text-foreground",
    midnight: "bg-[#111729] border-[#111729] text-white",
};

const labelStyles: Record<DifferenceCardVariant, string> = {
    default: "bg-muted text-muted-foreground",
    "light-blue": "bg-blue-100 text-blue-700",
    "dark-blue": "bg-blue-800 text-blue-100",
    light: "bg-gray-100 text-gray-700",
    green: "bg-green-100 text-green-700",
    salmon: "bg-white/50 text-[#111729]",
    grey: "bg-background text-foreground",
    midnight: "bg-white/20 text-white",
};

export function DifferenceCardsSection({ items, heading, eyebrow, className }: DifferenceCardsSectionProps) {
    return (
        <section className={cn("py-16 md:py-24 overflow-hidden", className)}>
            <Container>
                {eyebrow && (
                    <Heading level={4} className="mb-4 font-semibold text-primary">
                        {eyebrow}
                    </Heading>
                )}
                {heading && (
                    <Heading level={2} className="mb-12">
                        {heading}
                    </Heading>
                )}
            </Container>

            <div className="w-full overflow-x-auto pb-8 -mb-8 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <Container className="px-0 md:px-8">
                    <div className="flex gap-4 md:gap-6 min-w-min pr-4 md:pr-12">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex-none w-[300px] md:w-[400px] flex flex-col justify-between rounded-[24px] border p-6 md:p-8 transition-transform hover:-translate-y-1 duration-300 overflow-hidden",
                                    variantStyles[item.variant || "default"]
                                )}
                            >
                                <div className="space-y-6">
                                    <span className={cn(
                                        "inline-block px-3 py-1 rounded-full text-sm",
                                        labelStyles[item.variant || "default"]
                                    )}>
                                        {item.label}
                                    </span>
                                    <Text className={cn(
                                        "text-xl md:text-2xl leading-tight",
                                        item.variant === "dark-blue" ? "text-white" : "text-current"
                                    )}>
                                        {item.description}
                                    </Text>
                                </div>

                                {item.imageSrc && (
                                    <div className={cn(
                                        "mt-8 -mb-6 md:-mb-8 relative h-64",
                                        (["WHAT", "TRAVEL", "SETUP", "SUPPORT"].includes(item.label)) ? "-mx-6 md:-mx-8" : ""
                                    )}>
                                        <img
                                            src={item.imageSrc}
                                            alt=""
                                            className="w-full h-full object-cover object-top"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
