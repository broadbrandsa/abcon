"use client";

import * as React from "react";
import Image from "next/image";

import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface TabItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

export interface TabsSectionProps {
    heading: string;
    cta?: {
        label: string;
        href: string;
    };
    tabs: TabItem[];
}

export function TabsSection({ heading, cta, tabs }: TabsSectionProps) {
    const [activeTab, setActiveTab] = React.useState(0);

    // Limit to 3 items as per design constraint "Render exactly 3 tabs"
    // But allow robust handling if fewer or more are passed (though layout assumes 3)
    const displayTabs = tabs.slice(0, 3);

    return (
        <section className="bg-background py-16 md:py-24">
            <Container>
                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <Heading
                        level={2}
                        className="max-w-2xl text-4xl font-light tracking-tight sm:text-5xl"
                    >
                        {heading}
                    </Heading>
                    {cta && (
                        <a
                            href={cta.href}
                            className={cn(
                                "inline-flex items-center justify-center rounded-[200px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                                "bg-primary text-primary-foreground hover:bg-primary/90",
                                "h-10 px-4 py-2",
                                "w-full shrink-0 sm:w-auto"
                            )}
                        >
                            {cta.label}
                        </a>
                    )}
                </div>

                {/* Content Grid */}
                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
                    {/* Tabs Column */}
                    <div className="flex flex-col gap-2">
                        {displayTabs.map((tab, index) => {
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={cn(
                                        "group flex w-full flex-col gap-4 rounded-xl border-l-4 p-6 text-left transition-all duration-300",
                                        isActive
                                            ? "border-foreground bg-muted/50"
                                            : "border-transparent hover:bg-muted/20"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "flex items-center gap-2",
                                            isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground group-hover:text-foreground"
                                        )}
                                    >
                                        <div className="size-6 shrink-0">{tab.icon}</div>
                                        <Heading
                                            level={4}
                                            className="text-lg font-medium tracking-tight"
                                        >
                                            {tab.title}
                                        </Heading>
                                    </div>
                                    <Text
                                        className={cn(
                                            "pl-8", // Align with text start (icon width + gap)
                                            isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {tab.description}
                                    </Text>
                                </button>
                            );
                        })}
                    </div>

                    {/* Image Column */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-block bg-muted lg:aspect-square xl:aspect-[4/3]">
                        {displayTabs.map((tab, index) => (
                            <Image
                                key={index}
                                src={tab.image}
                                alt=""
                                fill
                                className={cn(
                                    "object-cover transition-opacity duration-500",
                                    activeTab === index ? "opacity-100" : "opacity-0"
                                )}
                                priority={index === 0}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
