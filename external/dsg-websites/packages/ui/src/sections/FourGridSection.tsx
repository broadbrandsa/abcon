import * as React from "react";
import Image from "next/image";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface FourGridItem {
    variant: "testimonial-dark" | "testimonial-light" | "stat";
    label: string;
    headingOrQuote: string;
    statValue?: string;
    supportingText?: string;
    authorName?: string;
    authorRole?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export interface FourGridSectionProps {
    items: FourGridItem[];
}

export function FourGridSection({ items }: FourGridSectionProps) {
    // Ensure we only render up to 4 items
    const displayItems = items.slice(0, 4);

    return (
        <section className="bg-background py-16 md:py-24">
            <Container>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12">
                    {displayItems.map((item, index) => {
                        const isWide = index % 2 === 0;
                        return (
                            <Card
                                key={index}
                                item={item}
                                className={
                                    isWide
                                        ? "md:col-span-5 lg:col-span-8"
                                        : "md:col-span-3 lg:col-span-4"
                                }
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

function Card({ item, className }: { item: FourGridItem; className?: string }) {
    const isDark = item.variant === "testimonial-dark";
    const isStat = item.variant === "stat";

    // Base classes
    const baseClasses =
        "flex h-full min-h-[320px] flex-col justify-between rounded-block p-8 transition-colors";

    // Variant specific classes
    const variantClasses = {
        "testimonial-dark": "bg-foreground text-background",
        "testimonial-light": "bg-muted text-foreground",
        stat: "bg-secondary text-secondary-foreground",
    };

    return (
        <div
            className={cn(
                baseClasses,
                variantClasses[item.variant],
                className
            )}
        >
            {/* Top Label */}
            <div className="mb-6">
                <Text
                    className={cn(
                        "text-xs font-medium uppercase tracking-widest",
                        isDark ? "text-background/70" : "text-muted-foreground"
                    )}
                >
                    {item.label}
                </Text>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                {isStat ? (
                    <div className="mb-4">
                        <Heading
                            level={2}
                            className="text-6xl font-light tracking-tighter sm:text-7xl"
                        >
                            {item.statValue}
                        </Heading>
                        <Heading level={4} className="mt-2 font-normal opacity-90">
                            {item.headingOrQuote}
                        </Heading>
                    </div>
                ) : (
                    <Heading
                        level={3}
                        className={cn(
                            "mb-6 font-light leading-snug",
                            // Visual matching for quote size
                            "text-2xl sm:text-3xl"
                        )}
                    >
                        {item.headingOrQuote}
                    </Heading>
                )}

                {item.supportingText && (
                    <Text
                        className={cn(
                            "mt-2",
                            isDark ? "text-background/80" : "text-muted-foreground"
                        )}
                    >
                        {item.supportingText}
                    </Text>
                )}
            </div>

            {/* Footer / Attribution / Image */}
            <div className="mt-8 space-y-6">
                {(item.authorName || item.authorRole) && (
                    <div>
                        <Text className="font-semibold">{item.authorName}</Text>
                        <Text
                            className={cn(
                                "text-sm",
                                isDark ? "text-background/60" : "text-muted-foreground"
                            )}
                        >
                            {item.authorRole}
                        </Text>
                    </div>
                )}

                {item.imageSrc && (
                    <div className="relative h-48 w-full overflow-hidden rounded-block bg-background/10 sm:h-64">
                        <Image
                            src={item.imageSrc}
                            alt={item.imageAlt || ""}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
