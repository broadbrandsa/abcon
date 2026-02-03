import * as React from "react";
import Image from "next/image";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface GridItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
}

export interface GridSectionProps {
    title: string;
    description?: string;
    items: GridItem[];
    columns?: 2 | 3 | 4;
    variant?: "default" | "editorial";
    heading?: string;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    headingAlignment?: "left" | "center" | "right";
    id?: string;
    className?: string;
}

export function GridSection({
    title,
    description,
    items,
    columns = 3,
    variant = "default",
    heading,
    headingLevel = 2,
    headingAlignment = "right",
    id,
    className,
}: GridSectionProps) {
    if (variant === "editorial") {
        return (
            <section id={id} className={cn("bg-background py-16 md:py-24", className)}>
                <Container>
                    {heading && (
                        <div
                            className={cn(
                                "mb-12 flex",
                                headingAlignment === "right" && "justify-end",
                                headingAlignment === "center" && "justify-center",
                                headingAlignment === "left" && "justify-start"
                            )}
                        >
                            <Heading
                                level={headingLevel}
                                className={cn(
                                    "max-w-2xl",
                                    headingAlignment === "right" && "text-right",
                                    headingAlignment === "center" && "text-center",
                                    headingAlignment === "left" && "text-left"
                                )}
                            >
                                {heading}
                            </Heading>
                        </div>
                    )}
                    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                {/* Image Area */}
                                <div className="relative h-[80vh] w-full overflow-hidden rounded-block bg-muted">
                                    {item.imageSrc && (
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt || ""}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                {/* Content Area */}
                                <div className="mt-6 flex flex-col space-y-2">
                                    <Heading level={4}>{item.title}</Heading>
                                    <Text className="text-[length:var(--text-p1)]">
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

    return (
        <section id={id} className={cn("bg-background py-16 md:py-24", className)}>
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-xl border border-border bg-card p-6"
                        >
                            {item.icon && <div className="mb-4">{item.icon}</div>}
                            <Heading level={4} className="mb-2">
                                {item.title}
                            </Heading>
                            <Text dimmed>{item.description}</Text>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
