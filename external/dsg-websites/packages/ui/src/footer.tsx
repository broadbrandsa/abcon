import * as React from "react";
import Image from "next/image";
import { Container } from "./container";
import { Heading, Text } from "./typography";
import { Button } from "./button";
import { cn } from "./utils";

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
    maxLinksPerColumn?: number;
}

export interface FooterProps {
    brand: {
        logo: React.ReactNode;
        description: string;
        socials?: {
            platform: string;
            href: string;
            icon: React.ReactNode;
        }[];
        badge?: React.ReactNode;
    };
    columns: FooterColumn[];
    newsletter: {
        title: string;
        description: string;
        placeholder?: string;
        buttonLabel?: string;
        onSubscribe?: (email: string) => void;
    };
    cta?: {
        heading: string;
        text: string;
        buttonLabel: string;
        buttonHref: string;
    };
    legal: {
        copyright: string;
        links: FooterLink[];
        logo?: React.ReactNode;
    };
    className?: string;
}

export function Footer({ brand, columns, newsletter, cta, legal, className }: FooterProps) {
    return (
        <footer className={cn("bg-secondary pt-16 pb-8", className)}>
            <Container>
                {/* 1. Top CTA Band */}
                {cta && (
                    <div className="mb-16 flex flex-col items-center justify-center rounded-[20px] bg-[#DC2626] px-6 py-12 text-center md:px-12 md:py-16">
                        <Heading level={4} className="mb-4 text-3xl font-light text-background">
                            {cta.heading}
                        </Heading>
                        <Text className="mb-8 max-w-2xl text-[length:var(--text-p1)] whitespace-pre-line text-background/80">
                            {cta.text}
                        </Text>
                        <a
                            href={cta.buttonHref}
                            className="inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-auto rounded-full bg-background p-[5px] pl-[20px] text-[10px] font-medium text-foreground hover:bg-background/90"
                        >
                            <span className="mr-2 text-base">{cta.buttonLabel.replace(" >", "")}</span>
                            <div className="flex size-[40px] items-center justify-center rounded-full bg-foreground p-[10px] text-background">
                                <Image
                                    src="/arrow-right.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="h-full w-full object-contain invert"
                                />
                            </div>
                        </a>
                    </div>
                )}

                {/* 2. Main Footer Content */}
                <div className="grid grid-cols-1 gap-12 border-b border-border/40 pb-16 md:grid-cols-4 md:gap-8 lg:grid-cols-12 lg:gap-10">
                    {/* Brand Column */}
                    <div className="flex flex-col space-y-6 lg:col-span-3">
                        <div className="flex items-center gap-2">
                            {brand.logo}
                        </div>
                        <Text className="text-[length:var(--text-p2)] max-w-xs" dimmed>
                            {brand.description}
                        </Text>
                        {brand.badge && (
                            <div className="mt-4">
                                {brand.badge}
                            </div>
                        )}
                        {brand.socials && (
                            <div className="flex gap-4">
                                {brand.socials.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                        aria-label={social.platform}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Link Columns */}
                    {columns.map((col, idx) => (
                        <div key={idx} className="flex flex-col space-y-6 lg:col-span-2">
                            {col.title ? (
                                <Heading level={6} className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                    {col.title}
                                </Heading>
                            ) : null}
                            {col.maxLinksPerColumn ? (
                                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                                    {Array.from({ length: Math.ceil(col.links.length / col.maxLinksPerColumn!) }).map((_, columnIdx) => (
                                        <div key={columnIdx} className="flex flex-col space-y-4">
                                            {col.links
                                                .slice(columnIdx * col.maxLinksPerColumn!, columnIdx * col.maxLinksPerColumn! + col.maxLinksPerColumn!)
                                                .map((link, linkIdx) => (
                                                    <a
                                                        key={`${columnIdx}-${linkIdx}`}
                                                        href={link.href}
                                                        className="text-[length:var(--text-p2)] text-muted-foreground transition-colors hover:text-foreground"
                                                    >
                                                        {link.label}
                                                    </a>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col space-y-4">
                                    {col.links.map((link, linkIdx) => (
                                        <a
                                            key={linkIdx}
                                            href={link.href}
                                            className="text-[length:var(--text-p2)] text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Newsletter Column */}
                    <div className="flex flex-col space-y-6 lg:col-span-4 lg:col-end-13 lg:items-end lg:text-right">
                        <Heading level={6} className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            {newsletter.title}
                        </Heading>
                        <Text className="text-[length:var(--text-p2)]" dimmed>
                            {newsletter.description}
                        </Text>
                        <div className="flex w-full items-center gap-2 rounded-[200px] border border-input bg-background p-1 pr-1 focus-within:ring-1 focus-within:ring-ring">
                            <input
                                type="email"
                                placeholder={newsletter.placeholder || "Email address"}
                                className="flex-1 bg-transparent px-4 py-2 text-sm text-left outline-none placeholder:text-muted-foreground"
                            />
                            <Button size="sm">
                                {newsletter.buttonLabel || "Subscribe"}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Legal Bar */}
                <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[length:var(--text-p2)] text-muted-foreground md:flex-row">
                    <div>
                        {legal.copyright}
                    </div>
                    <div className="flex items-center gap-8">
                        {legal.links.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                        {legal.logo && (
                            <div className="flex items-center">
                                {legal.logo}
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
