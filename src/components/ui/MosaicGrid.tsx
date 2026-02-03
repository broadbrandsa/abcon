import * as React from "react";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { cn } from "@/lib/utils";

export interface MosaicItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
    colSpan?: 1 | 2; // For varying widths
}

export interface MosaicGridProps {
    title: string;
    description?: string;
    items: MosaicItem[];
    className?: string;
}

export function MosaicGrid({
    title,
    description,
    items,
    className,
}: MosaicGridProps) {
    return (
        <section className={cn("py-16 md:py-24", className)}>
            <Container>
                <div className="mb-12 text-center">
                    <Heading level={2} className="mb-4">
                        {title}
                    </Heading>
                    {description && (
                        <Text dimmed className="mx-auto max-w-2xl text-lg">
                            {description}
                        </Text>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md",
                                item.colSpan === 2 && "md:col-span-2"
                            )}
                        >
                            {item.icon && (
                                <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                    <div className="text-primary group-hover:text-white">
                                        {item.icon}
                                    </div>
                                </div>
                            )}
                            <Heading level={3} className="mb-3 !text-xl font-bold">
                                {item.title}
                            </Heading>
                            <Text className="text-muted-foreground">
                                {item.description}
                            </Text>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
