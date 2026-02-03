"use client";

import * as React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { Button } from "../button";
import { cn } from "../utils";

export interface PricingCardItem {
    title: string;
    price: string;
    frequency?: string;
    description?: string;
    features: string[];
    buttonLabel?: string;
    href: string;
    recommended?: boolean;
}

export interface PricingCardsSectionProps {
    heading?: string;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    items: PricingCardItem[];
    className?: string;
}

export function PricingCardsSection({ items, heading, headingLevel = 2, className }: PricingCardsSectionProps) {
    return (
        <section className={cn("py-16 md:py-24 overflow-hidden", className)}>
            <Container>
                {heading && (
                    <Heading level={headingLevel} className="mb-12">
                        {heading}
                    </Heading>
                )}
            </Container>

            {/* Scroll Container */}
            <div className="w-full overflow-x-auto pb-12 -mb-12 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <Container className="px-0 md:px-8">
                    <div className="flex gap-6 min-w-min pr-4 md:pr-12">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex-none w-[320px] flex flex-col justify-between rounded-[24px] border border-border bg-white p-8 transition-all hover:shadow-xl duration-300"
                                )}
                            >
                                <div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl font-bold tracking-tight">{item.price}</span>
                                        {item.frequency && (
                                            <span className="text-muted-foreground text-sm font-medium">
                                                {item.frequency}
                                            </span>
                                        )}
                                    </div>

                                    {item.description && (
                                        <p className="text-sm text-muted-foreground mb-8">
                                            {item.description}
                                        </p>
                                    )}

                                    <div className="space-y-4 mb-8">
                                        {item.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="rounded-full bg-black/5 p-1 flex-shrink-0 mt-0.5">
                                                    <Check className="size-3 text-black" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm font-medium text-foreground/90">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link href={item.href} className="w-full">
                                    <Button
                                        className="w-full bg-[#DC2626] hover:bg-[#DC2626]/90 text-white rounded-lg h-12 font-semibold"
                                    >
                                        {item.buttonLabel || `Choose ${item.title}`} <ArrowRight className="ml-2 size-4" />
                                    </Button>
                                </Link>
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
