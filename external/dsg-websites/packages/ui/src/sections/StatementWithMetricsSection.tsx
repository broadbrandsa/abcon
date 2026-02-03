import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface MetricItem {
    value: string;
    label: string;
}

export interface StatementWithMetricsSectionProps {
    heading: string;
    description: string;
    metrics: MetricItem[];
    className?: string;
}

export function StatementWithMetricsSection({
    heading,
    description,
    metrics,
    className,
}: StatementWithMetricsSectionProps) {
    return (
        <section className={cn("py-16 md:py-24", className)}>
            <Container>
                {/* Editorial Block */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <Heading level={2} className="mb-6">
                        {heading}
                    </Heading>
                    <Text className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
                        {description}
                    </Text>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-start rounded-[20px] border border-border bg-card p-8"
                        >
                            <span className="mb-2 block font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                                {metric.value}
                            </span>
                            <Text className="text-base text-muted-foreground">
                                {metric.label}
                            </Text>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
