import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface StatsSectionProps {
    highlight?: {
        label: string;
        title: string;
        description: string;
    };
    stacked?: boolean;
    stats: {
        value: string;
        description: string;
    }[];
}

export function StatsSection({ highlight, stats, stacked = false }: StatsSectionProps) {
    return (
        <section className="bg-background py-16 md:py-24">
            <Container>
                {/* Outer Wrapper: Neutral background, large radius */}
                <div className="flex flex-col gap-6 rounded-[20px] bg-muted p-8 md:grid md:grid-cols-8 md:gap-6 md:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12">

                    {/* Left Highlight Card */}
                    {highlight && (
                        <div
                            className={cn(
                                "flex flex-col justify-center rounded-[20px] bg-secondary p-8 md:col-span-3 lg:col-span-3",
                                stacked && "md:col-span-6 lg:col-span-8"
                            )}
                        >
                            <Heading level={2} className="mb-2 text-primary">
                                {highlight.label}
                            </Heading>
                            <Heading level={4} className="mb-4">
                                {highlight.title}
                            </Heading>
                            <Text>
                                {highlight.description}
                            </Text>
                        </div>
                    )}

                    {/* Right Stats Row */}
                    <div className={cn(
                        "flex flex-col justify-center gap-6",
                        highlight
                            ? stacked
                                ? "rounded-[20px] bg-background p-6 md:col-span-2 md:p-8 lg:col-span-3"
                                : "md:col-span-5 md:gap-6 lg:col-span-9 lg:grid lg:grid-cols-3 lg:gap-10"
                            : stacked
                                ? "md:col-span-8 lg:col-span-12"
                                : "md:col-span-8 lg:col-span-12 md:grid md:grid-cols-2 lg:grid-cols-4"
                    )}>
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col">
                                <Heading level={3} className="mb-2">
                                    {stat.value}
                                </Heading>
                                <Text dimmed>
                                    {stat.description}
                                </Text>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}
