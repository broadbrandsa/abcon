import * as React from "react";
import Image from "next/image";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface TestimonialWithStatsProps {
    tag?: string;
    quote: React.ReactNode;
    stats: [
        { value: string; description: string },
        { value: string; description: string },
        { value: string; description: string }
    ];
    className?: string;
}

export function TestimonialWithStats({
    tag,
    quote,
    stats,
    className,
}: TestimonialWithStatsProps) {
    return (
        <section className={cn("w-full py-20 lg:py-32 bg-secondary", className)}>
            <Container>
                <div className="flex flex-col gap-8 lg:gap-16 items-start">
                    {/* Tag */}
                    {tag && (
                        <div className="inline-block rounded-full border border-border px-4 py-1">
                            <Text className="text-sm font-medium">{tag}</Text>
                        </div>
                    )}

                    {/* Quote */}
                    <div className="space-y-6 max-w-4xl">
                        <Heading level={2} className="font-heading text-4xl lg:text-5xl leading-tight">
                            {quote}
                        </Heading>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col space-y-4 bg-background p-8 rounded-[20px]"
                        >
                            <Heading level={1} className="text-6xl lg:text-7xl font-light tracking-tight">
                                {stat.value}
                            </Heading>
                            <Text className="text-[length:var(--text-p1)] text-muted-foreground">
                                {stat.description}
                            </Text>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

