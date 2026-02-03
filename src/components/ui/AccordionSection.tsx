"use client";

import * as React from "react";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { cn } from "@/lib/utils";

export interface AccordionItem {
    id: string;
    indexLabel?: string;
    title: string;
    content: React.ReactNode;
}

export interface AccordionSectionProps {
    items: AccordionItem[];
    defaultOpenId?: string;
    allowMultiple?: boolean;
    className?: string;
    eyebrow?: string;
    variant?: "default" | "dark";
}

export function AccordionSection({
    items,
    defaultOpenId,
    allowMultiple = false,
    className,
    eyebrow,
    variant = "default",
}: AccordionSectionProps) {
    const isDark = variant === "dark";

    const eyebrowClass = isDark ? "text-blue-200" : "text-primary";
    const labelClass = isDark ? "text-blue-300" : "text-muted-foreground";
    const titleClass = isDark ? "text-white" : "";
    const contentClass = isDark ? "text-blue-100" : "text-muted-foreground";
    const iconClass = isDark ? "text-blue-300" : "text-muted-foreground";
    const borderClass = isDark ? "border-blue-800" : "border-border";
    const buttonHoverClass = isDark ? "hover:bg-blue-900 focus-visible:ring-blue-400" : "hover:bg-muted/50 focus-visible:ring-primary";
    const buttonActiveClass = isDark ? "bg-blue-900/50" : "bg-muted/30";

    const [openIds, setOpenIds] = React.useState<string[]>(
        defaultOpenId ? [defaultOpenId] : []
    );

    const toggleItem = (id: string) => {
        setOpenIds((prev) => {
            if (prev.includes(id)) {
                return prev.filter((i) => i !== id);
            }
            if (allowMultiple) {
                return [...prev, id];
            }
            return [id];
        });
    };

    return (
        <section className={cn(
            "py-16 md:py-24",
            isDark ? "bg-blue-950 text-white" : "bg-background",
            className
        )}>
            <Container>
                {eyebrow && (
                    <Heading level={4} className={cn("mb-8 font-semibold", eyebrowClass)}>
                        {eyebrow}
                    </Heading>
                )}
                <div className={cn("flex flex-col border-t", borderClass)}>
                    {items.map((item, index) => {
                        const isOpen = openIds.includes(item.id);
                        const label =
                            item.indexLabel || (index + 1).toString().padStart(2, "0");

                        return (
                            <div key={item.id} className={cn("border-b", borderClass)}>
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className={cn(
                                        "flex w-full items-center justify-between py-6 sm:py-8 text-left transition-colors focus-visible:outline-none focus-visible:ring-2",
                                        buttonHoverClass,
                                        isOpen ? buttonActiveClass : ""
                                    )}
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-6 sm:gap-12">
                                        <span className={cn("text-lg font-medium w-8", labelClass)}>
                                            {label}
                                        </span>
                                        <Heading level={4} className={cn("text-xl font-medium sm:text-2xl", titleClass)}>
                                            {item.title}
                                        </Heading>
                                    </div>

                                    <div
                                        className={cn(
                                            "flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300",
                                            iconClass,
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
                                            className="size-6"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    className={cn(
                                        "grid transition-[grid-template-rows] duration-300 ease-out",
                                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <div className={cn("py-12 border-t", isDark ? "border-blue-800" : "border-border/50", contentClass)}>
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
