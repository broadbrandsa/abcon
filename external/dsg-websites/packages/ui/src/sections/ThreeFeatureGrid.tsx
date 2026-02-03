import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface ThreeFeatureGridItem {
    label: string;
    description: string;
}

export interface ThreeFeatureGridProps {
    items: ThreeFeatureGridItem[];
    className?: string;
    badgeClassName?: string;
}

export function ThreeFeatureGrid({ items, className, badgeClassName }: ThreeFeatureGridProps) {
    return (
        <section className={cn("bg-background py-16 md:py-24", className)}>

            <Container>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <div className={cn("mb-4 inline-block rounded-full bg-white px-4 py-2", badgeClassName)}>
                                <Heading level={5} className="text-[#111729]">
                                    {item.label}
                                </Heading>
                            </div>
                            <Text className="text-lg leading-relaxed">
                                {item.description}
                            </Text>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
