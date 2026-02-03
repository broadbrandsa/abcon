"use client";

import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface FAQItemData {
    question: string;
    answer: string;
}

export interface FAQSectionProps {
    heading: string;
    subheading?: string;
    items: FAQItemData[];
    className?: string;
    backgroundImage?: string;
}

// Helper to determine text colors based on background presence
export function FAQSection({ heading, subheading, items, className, backgroundImage }: FAQSectionProps) {
    const isDarkBackground = !!backgroundImage;
    const headingClass = isDarkBackground ? "text-white" : "";
    const subheadingClass = isDarkBackground ? "text-blue-100" : "";
    const itemBgClass = isDarkBackground ? "bg-white/10 hover:bg-white/20" : "bg-muted/30 hover:bg-muted/50";
    const questionClass = isDarkBackground ? "text-white" : "";
    const answerClass = isDarkBackground ? "text-blue-100" : "text-muted-foreground";
    const iconBaseClass = isDarkBackground ? "bg-white/20 text-white" : "bg-background text-muted-foreground";

    return (
        <section
            className={cn("relative py-16 md:py-24 overflow-hidden", className)}
        >
            {/* Background Image & Overlay */}
            {backgroundImage && (
                <>
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950/95 to-blue-800/90" /> {/* Dark blue gradient overlay replacement */}
                </>
            )}

            <Container className="relative z-10">
                <div className="mx-auto max-w-3xl">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <Heading level={2} className={cn("mb-4", headingClass)}>
                            {heading}
                        </Heading>
                        {subheading && (
                            <Text dimmed className={cn("text-lg", subheadingClass)}>
                                {subheading}
                            </Text>
                        )}
                    </div>

                    {/* List */}
                    <div className="flex flex-col gap-4">
                        {items.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                bgClass={itemBgClass}
                                questionClass={questionClass}
                                answerClass={answerClass}
                                iconBaseClass={iconBaseClass}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function FAQItem({
    item,
    bgClass,
    questionClass,
    answerClass,
    iconBaseClass
}: {
    item: FAQItemData;
    bgClass: string;
    questionClass: string;
    answerClass: string;
    iconBaseClass: string;
}) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={cn("overflow-hidden rounded-block transition-colors", bgClass)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
                aria-expanded={isOpen}
            >
                <Heading level={4} className={cn("text-lg font-medium sm:text-x", questionClass)}>
                    {item.question}
                </Heading>
                <span
                    className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300",
                        iconBaseClass,
                        isOpen && "rotate-180"
                    )}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </span>
            </button>
            <div
                className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                        <Text className={answerClass}>{item.answer}</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
