
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "../utils";
import { Container } from "../container";
import { Button } from "../button";

interface HeroTripleCardVideoProps {
    left: {
        title: string;
        description: string;
        videoSrc?: string;
        posterSrc?: string;
        ctaLabel: string;
        scrollToId: string;
    };
    rightTop: {
        title: string;
        description?: string; // Added description based on user content "Supporting line"
        href: string;
        bg?: string;
        buttonLabel?: string;
        icon?: React.ReactNode;
    };
    rightBottom: {
        title: string;
        description?: string; // Added description based on user content
        href: string;
        bg?: string;
        buttonLabel?: string;
        icon?: React.ReactNode;
    };
    className?: string; // Allow custom classes for flexibility
}

export function HeroTripleCardVideo({
    left,
    rightTop,
    rightBottom,
    className,
}: HeroTripleCardVideoProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={cn("py-12 md:py-20 pt-16 md:pt-24", className)}>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[calc(90vh-20px)]">
                    {/* Left Card (Primary Hero) */}
                    <div className="lg:col-span-8 relative rounded-[32px] overflow-hidden bg-slate-900 text-white flex flex-col justify-between p-8 md:p-12 group">
                        {/* Video Background */}
                        <div className="absolute inset-0 z-0">
                            {left.videoSrc ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster={left.posterSrc}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700"
                                >
                                    <source src={left.videoSrc} type="video/mp4" />
                                </video>
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" />
                            )}
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-2xl mt-auto">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                                {left.title}
                            </h2>
                            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed">
                                {left.description}
                            </p>
                        </div>

                        {/* Bottom CTA */}
                        <div className="relative z-10 pt-8">
                            <button
                                onClick={() => scrollToSection(left.scrollToId)}
                                className="inline-flex items-center gap-2 text-sm font-medium hover:text-white/80 transition-colors uppercase tracking-wide"
                            >
                                {left.ctaLabel}
                                <ArrowDown className="size-4" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                        {/* Right Top Card */}
                        <div
                            className={cn(
                                "flex-1 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-lg",
                                rightTop.bg || "bg-slate-100" // Default neutral
                            )}
                        >
                            {/* Top Row: Icon Left, Button Right */}
                            <div className="relative z-10 flex justify-between items-start w-full mb-4">
                                <div className="self-start">
                                    {rightTop.icon}
                                </div>
                                <Link href={rightTop.href}>
                                    <Button
                                        variant="primary"
                                        className="rounded-full px-6 gap-2"
                                    >
                                        {rightTop.buttonLabel || "View"} <ArrowRight className="size-4" />
                                    </Button>
                                </Link>
                            </div>

                            {/* Content Bottom Left */}
                            <div className="relative z-10 mt-auto w-full flex flex-col items-start gap-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-black">
                                        {rightTop.title}
                                    </h3>
                                    {rightTop.description && (
                                        <p className="text-sm text-black/80 leading-relaxed font-light">
                                            {rightTop.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Bottom Card */}
                        <div
                            className={cn(
                                "flex-1 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-lg",
                                rightBottom.bg || "bg-[#D4F238] text-slate-900" // Default lime-ish
                            )}
                        >
                            {/* Top Row: Icon Left, Button Right */}
                            <div className="relative z-10 flex justify-between items-start w-full mb-4">
                                <div className="self-start">
                                    {rightBottom.icon}
                                </div>
                                <Link href={rightBottom.href}>
                                    <Button
                                        variant="ghost"
                                        className="rounded-full gap-2 hover:bg-black/5"
                                    >
                                        {rightBottom.buttonLabel || "Explore"} <ArrowRight className="size-4" />
                                    </Button>
                                </Link>
                            </div>

                            {/* Content Bottom Left */}
                            <div className="relative z-10 mt-auto w-full flex flex-col items-start gap-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">
                                        {rightBottom.title}
                                    </h3>
                                    {rightBottom.description && (
                                        <p className="text-sm opacity-80 leading-relaxed font-light">
                                            {rightBottom.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
