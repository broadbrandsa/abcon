"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "./button";
import { Container } from "./container";
import { cn } from "./utils";

export interface HeaderProps {
    logo: React.ReactNode;
    items: {
        label: string;
        href: string;
        subItems?: {
            label: string;
            href: string;
        }[];
    }[];
    actions?: {
        label: string;
        href: string;
        variant?: "primary" | "secondary" | "ghost";
        onClick?: () => void;
    }[];
    cta?: {
        label: string;
        href: string;
        onClick?: () => void;
        className?: string;
    };
    tagline?: string;
    className?: string;
}

export function Header({ logo, items, cta, actions, tagline, className }: HeaderProps) {
    const [isVisible, setIsVisible] = React.useState(true);
    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                if (currentScrollY > lastScrollY.current) {
                    setIsVisible(false); // Scroll Down -> Hide
                } else {
                    setIsVisible(true); // Scroll Up -> Show
                }
            } else {
                setIsVisible(true); // Top -> Show
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full border-b border-border/40 bg-background transition-transform duration-300",
                isVisible ? "translate-y-0" : "-translate-y-full",
                className
            )}
        >
            <Container className="flex h-20 items-center">
                <div className="mr-8 flex items-center gap-2">
                    <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        {logo}
                    </a>
                </div>
                {tagline && (
                    <div className="mr-8 hidden max-w-sm whitespace-pre-line text-[10px] font-medium leading-tight text-white md:block">
                        {tagline}
                    </div>
                )}
                <nav className="hidden items-center gap-6 text-sm font-light font-heading md:flex">
                    {items.map((item, index) => (
                        <div key={index} className="group relative">
                            <a
                                href={item.href}
                                className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                            >
                                {item.label}
                                {item.subItems && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="ml-1 transition-transform group-hover:rotate-180"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                )}
                            </a>
                            {item.subItems && (
                                <div className="absolute left-0 top-full hidden w-64 pt-2 group-hover:block">
                                    <div className="flex flex-col rounded-xl border border-border/40 bg-background p-2 shadow-lg ring-1 ring-black/5">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href={subItem.href}
                                                className="rounded-lg px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                                            >
                                                {subItem.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="ml-auto flex items-center gap-2">
                    {actions && actions.map((action, index) => (
                        <Button
                            key={index}
                            onClick={action.onClick}
                            {...(action.href ? { as: "a", href: action.href } : {})}
                            variant={action.variant || "primary"}
                            className={cn(
                                "rounded-full text-[10px] font-medium transition-colors h-[40px] px-6",
                                // Primary styling (Icon button)
                                (!action.variant || action.variant === "primary") && "p-[5px] pl-[20px] bg-[#DC2626] text-white hover:bg-[#DC2626]/90",
                                // Secondary styling (Text center)
                                action.variant === "secondary" && "bg-slate-100 text-foreground hover:bg-slate-200",
                                // Ghost styling (Text center)
                                action.variant === "ghost" && "bg-transparent text-foreground hover:bg-muted",
                            )}
                        >
                            <span className={cn((!action.variant || action.variant === "primary") && "mr-2")}>
                                {action.label}
                            </span>
                            {(!action.variant || action.variant === 'primary') && (
                                <div className="flex size-[30px] items-center justify-center rounded-full bg-white p-[8px] text-black">
                                    <Image
                                        src="/arrow-right.png"
                                        alt=""
                                        width={14}
                                        height={14}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            )}
                        </Button>
                    ))}
                    {!actions && cta && (
                        <Button
                            onClick={cta.onClick}
                            {...(cta.href ? { as: "a", href: cta.href } : {})}
                            className={cn(
                                "h-auto rounded-full bg-black p-[5px] pl-[20px] text-[10px] font-medium text-white hover:bg-black/90",
                                cta.className
                            )}
                        >
                            <span className="mr-2">{cta.label}</span>
                            <div className="flex size-[30px] items-center justify-center rounded-full bg-white p-[8px] text-black">
                                <Image
                                    src="/arrow-right.png"
                                    alt=""
                                    width={14}
                                    height={14}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </Button>
                    )}
                </div>
            </Container>
        </header>
    );
}
