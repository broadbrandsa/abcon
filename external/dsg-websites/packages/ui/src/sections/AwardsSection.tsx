import * as React from "react";
import Image from "next/image";
import { cn } from "../utils";
import { Container } from "../container";
import { Heading, Text } from "../typography";

export interface AwardItem {
    icon: string;
    title: string;
    description: string;
    year: string;
    iconClassName?: string;
}

export interface AwardsSectionProps {
    heading: string;
    items: AwardItem[];
}

export function AwardsSection({ heading, items }: AwardsSectionProps) {
    return (
        <section className="bg-background py-16 md:py-24">
            <Container>
                {/* Heading */}
                <div className="mb-12 max-w-4xl">
                    <Heading
                        level={2}
                        className="text-4xl font-light tracking-tight sm:text-5xl"
                    >
                        {heading}
                    </Heading>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                    {items.map((item, index) => (
                        <AwardCard key={index} item={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

function AwardCard({ item }: { item: AwardItem }) {
    return (
        <div className="flex h-[30vh] flex-col justify-between items-start rounded-block bg-muted/30 p-6 transition-colors hover:bg-muted/50">
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
                    style={{ width: "auto" }}
                />
            </div>

            {/* Bottom: Content */}
            <div className="flex w-full flex-col gap-1">
                <Text dimmed className="line-clamp-2 text-sm text-left">
                    {item.description}
                </Text>
            </div>
        </div>
    );
}
