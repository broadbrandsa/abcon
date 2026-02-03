"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { cn } from "@/lib/utils";

interface CardData {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    href?: string;
}

export interface EditorialDoubleCardSectionProps {
    introText: string;
    cards: CardData[];
    imageSrc?: string;
    imageAlt?: string;
    imageClassName?: string;
    className?: string;
    variant?: "default" | "dark";
}

export function EditorialDoubleCardSection({
    introText,
    cards,
    imageSrc,
    imageAlt,
    imageClassName,
    className,
    variant = "default",
}: EditorialDoubleCardSectionProps) {
    const isDark = variant === "dark";

    const textMutedClass = isDark ? "text-blue-200" : "text-muted-foreground";
    const cardBgClass = isDark ? "bg-blue-900/50 border-blue-800" : "bg-muted/20 border-border";
    const cardTitleClass = isDark ? "text-white" : "";

    return (
        <section className={cn("py-16 md:py-24", isDark ? "bg-blue-950 text-white" : "bg-background", className)}>
            <Container>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
                    <div className={cn("flex flex-col lg:col-span-1", imageSrc ? "justify-between" : "justify-end")}>
                        {imageSrc && (
                            <div className={cn("relative mb-8 h-64 w-full overflow-hidden rounded-[20px] lg:mb-0 lg:h-auto lg:aspect-[4/3]", imageClassName)}>
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt || ""}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <Text className={cn("text-lg md:text-xl", textMutedClass)}>
                            {introText}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-2">
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                bgClass={cardBgClass}
                                textMutedClass={textMutedClass}
                                titleClass={cardTitleClass}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Card({
    card,
    bgClass,
    textMutedClass,
    titleClass
}: {
    card: CardData;
    bgClass: string;
    textMutedClass: string;
    titleClass: string;
}) {
    return (
        <div
            className={cn("flex min-h-[320px] lg:min-h-[420px] flex-col rounded-[20px] p-6 lg:p-10 border", bgClass)}
        >
            <Text className={cn("font-mono text-[10px] font-bold uppercase tracking-wider mb-4", textMutedClass)}>
                {card.eyebrow}
            </Text>

            <div className="flex-1" />

            <div className="flex flex-col gap-4">
                <Heading level={3} className={cn("text-2xl font-medium sm:text-3xl", titleClass)}>
                    {card.title}
                </Heading>
                <Text className={cn("text-sm md:text-base mt-2", textMutedClass)}>
                    {card.description}
                </Text>
            </div>
        </div>
    );
}
