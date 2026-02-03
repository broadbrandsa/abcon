"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { Button } from "../button";

export interface LargeSliderItem {
    imageSrc: string;
    imageAlt?: string;
    heading: string;
    description: string;
}

export interface LargeSliderSectionProps {
    items: LargeSliderItem[];
    eyebrow?: string;
}

export function LargeSliderSection({ items, eyebrow }: LargeSliderSectionProps) {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth * 0.6;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="flex h-screen flex-col justify-center overflow-hidden bg-background py-12">
            <Container className="relative">
                {/* Section Eyebrow */}
                <div className="flex items-center justify-between mb-8 lg:mb-12">
                    {eyebrow && (
                        <div className="inline-block rounded-small bg-muted px-4 py-2 opacity-100">
                            <Heading level={5}>{eyebrow}</Heading>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                        <Button
                            onClick={() => scroll("left")}
                            variant="secondary"
                            className="size-10 p-0"
                            aria-label="Scroll left"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 12H5M5 12L12 19M5 12L12 5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                        <Button
                            onClick={() => scroll("right")}
                            variant="secondary"
                            className="size-10 p-0"
                            aria-label="Scroll right"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>

                {/* Breakout Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex w-[100vw] snap-x snap-mandatory gap-6 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:gap-10"
                    style={{
                        marginLeft: "calc(50% - 50vw)",
                        marginRight: "calc(50% - 50vw)",
                        paddingLeft: "calc(50vw - 50%)",
                        paddingRight: "calc(50vw - 50%)",
                    }}
                >


                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex h-[70vh] w-[50vw] flex-none snap-center flex-col shadow-none"
                        >
                            {/* Image Area: Fixed height, Block Radius (20px) */}
                            <div className="relative h-[400px] shrink-0 w-full overflow-hidden rounded-block bg-muted">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt || ""}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Text Area */}
                            <div className="mt-6 flex flex-col items-start space-y-2 w-1/2">
                                <Heading level={4}>
                                    {item.heading}
                                </Heading>
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
