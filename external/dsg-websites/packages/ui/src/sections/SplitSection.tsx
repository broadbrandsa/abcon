import * as React from "react";
import Image from "next/image";
import { cn } from "../utils";
import { Button } from "../button";
import { Container } from "../container";
import { Heading, Text } from "../typography";

export interface SplitSectionProps {
    title: string;
    description: string;
    image?: {
        src: string;
        alt: string;
    };
    imagePosition?: "left" | "right";
    cta?: {
        label: string;
        href: string;
        onClick?: () => void;
    };
}

export function SplitSection({
    title,
    description,
    image,
    imagePosition = "left",
    cta,
}: SplitSectionProps) {
    return (
        <section className="bg-background py-16 md:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div
                        className={cn(
                            "relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted",
                            imagePosition === "right" && "lg:order-last"
                        )}
                    >
                        {image && (
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Heading level={2}>{title}</Heading>
                        <Text dimmed className="text-lg">
                            {description}
                        </Text>
                        {cta && (
                            <div className="pt-4">
                                <Button
                                    size="lg"
                                    onClick={cta.onClick}
                                    {...(cta.href ? { as: "a", href: cta.href } : {})}
                                >
                                    {cta.label}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
