"use client";

import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { Button } from "../button";
import { cn } from "../utils";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram, Globe, X, Music2 } from "lucide-react";

export interface ContactHeroWithFormSectionProps {
    kicker?: string;
    heading: string;
    description: string;
    tone?: "light" | "dark";
    contactDetails?: {
        phone?: {
            label: string;
            value: string;
            href?: string;
        };
        email?: {
            label: string;
            value: string;
            href?: string;
        };
        location?: {
            label: string;
            value: React.ReactNode;
        };
        socials?: {
            label: string;
            networks: {
                icon: "facebook" | "twitter" | "linkedin" | "youtube" | "instagram" | "x" | "tiktok" | "website";
                href: string;
            }[];
        };
    };
    form?: {
        title: string;
        description: string;
        placeholders?: {
            name?: string;
            email?: string;
            subject?: string;
            message?: string;
        };
        buttonText?: string;
        onSubmit?: (data: any) => void;
    };
    className?: string;
}

export function ContactHeroWithFormSection({
    kicker = "Get in touch",
    heading,
    description,
    tone = "light",
    contactDetails,
    form,
    className,
}: ContactHeroWithFormSectionProps) {
    const isDark = tone === "dark";
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // No-op for now, or call form.onSubmit if provided
        console.log("Form submitted");
    };

    const SocialIcon = ({ type }: { type: string }) => {
        switch (type) {
            case "facebook": return <Facebook className="w-5 h-5" />;
            case "twitter": return <Twitter className="w-5 h-5" />;
            case "linkedin": return <Linkedin className="w-5 h-5" />;
            case "youtube": return <Youtube className="w-5 h-5" />;
            case "instagram": return <Instagram className="w-5 h-5" />;
            case "x": return <X className="w-5 h-5" />;
            case "tiktok": return <Music2 className="w-5 h-5" />;
            case "website": return <Globe className="w-5 h-5" />;
            default: return null;
        }
    };

    return (
        <section className={cn("py-16 md:py-24", className)}>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Content + Contact Details */}
                    <div>
                        {kicker && (
                            <Text
                                className={cn(
                                    "text-sm font-medium uppercase tracking-wider mb-4",
                                    isDark ? "text-white/70" : "text-muted-foreground"
                                )}
                            >
                                {kicker}
                            </Text>
                        )}
                        <Heading
                            level={1}
                            className={cn(
                                "text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6",
                                isDark ? "text-white" : ""
                            )}
                        >
                            {heading}
                        </Heading>
                        <Text
                            className={cn(
                                "text-lg md:text-xl mb-12 max-w-lg",
                                isDark ? "text-white/70" : "text-muted-foreground"
                            )}
                        >
                            {description}
                        </Text>

                        {contactDetails && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                                {contactDetails.phone && (
                                    <div>
                                        <Heading
                                            level={4}
                                            className={cn(
                                                "text-base font-semibold mb-4",
                                                isDark ? "text-white" : "text-foreground"
                                            )}
                                        >
                                            {contactDetails.phone.label}
                                        </Heading>
                                        <Text className={cn("text-base", isDark ? "text-white/80" : "text-muted-foreground")}>
                                            {contactDetails.phone.value}
                                        </Text>
                                        {contactDetails.phone.href && (
                                            <a
                                                href={contactDetails.phone.href}
                                                className={cn(
                                                    "text-sm mt-1 inline-block transition-colors",
                                                    isDark ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"
                                                )}
                                            >
                                                {contactDetails.phone.href}
                                            </a>
                                        )}
                                    </div>
                                )}

                                {contactDetails.location && (
                                    <div>
                                        <Heading
                                            level={4}
                                            className={cn(
                                                "text-base font-semibold mb-4",
                                                isDark ? "text-white" : "text-foreground"
                                            )}
                                        >
                                            {contactDetails.location.label}
                                        </Heading>
                                        <div className={cn("text-base", isDark ? "text-white/80" : "text-muted-foreground")}>
                                            {contactDetails.location.value}
                                        </div>
                                    </div>
                                )}

                                {contactDetails.email && (
                                    <div>
                                        <Heading
                                            level={4}
                                            className={cn(
                                                "text-base font-semibold mb-4",
                                                isDark ? "text-white" : "text-foreground"
                                            )}
                                        >
                                            {contactDetails.email.label}
                                        </Heading>
                                        <a
                                            href={`mailto:${contactDetails.email.value}`}
                                            className={cn(
                                                "text-base transition-colors",
                                                isDark ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            {contactDetails.email.value}
                                        </a>
                                    </div>
                                )}

                                {contactDetails.socials && (
                                    <div>
                                        <Heading
                                            level={4}
                                            className={cn(
                                                "text-base font-semibold mb-4",
                                                isDark ? "text-white" : "text-foreground"
                                            )}
                                        >
                                            {contactDetails.socials.label}
                                        </Heading>
                                        <div className="flex gap-4">
                                            {contactDetails.socials.networks.map((social, idx) => (
                                                <a
                                                    key={idx}
                                                    href={social.href}
                                                    className={cn(
                                                        "transition-colors",
                                                        isDark ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
                                                    )}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <SocialIcon type={social.icon} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="bg-white rounded-[32px] p-8 md:p-10 border border-border/50 shadow-sm">
                        <div className="mb-8">
                            <Heading level={3} className="text-2xl font-medium mb-3">
                                {form?.title || "Get in Touch"}
                            </Heading>
                            <Text className="text-muted-foreground">
                                {form?.description || "Send us a message and we'll get back to you."}
                            </Text>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder={form?.placeholders?.name || "Full name"}
                                    className="w-full bg-transparent border-b border-border py-3 text-base outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/70"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder={form?.placeholders?.email || "Email"}
                                    className="w-full bg-transparent border-b border-border py-3 text-base outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/70"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={form?.placeholders?.subject || "Subject"}
                                    className="w-full bg-transparent border-b border-border py-3 text-base outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/70"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder={form?.placeholders?.message || "Message"}
                                    rows={4}
                                    className="w-full bg-transparent border-b border-border py-3 text-base outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/70 resize-none"
                                    required
                                />
                            </div>

                            <div className="pt-2">
                                <Button type="submit" className="rounded-full px-8">
                                    {form?.buttonText || "Send a message"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}
