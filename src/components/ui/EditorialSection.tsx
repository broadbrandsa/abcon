import * as React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { cn } from "@/lib/utils";

export interface EditorialSectionProps {
    title: string;
    subtitle?: string; // e.g. "Strategic Intent"
    description: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    reversed?: boolean;
    children?: React.ReactNode; // Extra content like lists or buttons
    className?: string;
}

export function EditorialSection({
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt = "",
    reversed = false,
    children,
    className,
}: EditorialSectionProps) {
    return (
        <section className={cn("py-16 md:py-24", className)}>
            <Container>
                <div className={cn("grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start", className)}>
                    {/* Content Side - Span 7 */}
                    <div className={cn("lg:col-span-7 space-y-6", reversed && "lg:order-2")}>
                        {subtitle && (
                            <div className="flex items-center gap-2 text-primary mb-4 uppercase font-bold tracking-[0.2em] text-xs">
                                <span className="w-8 h-[1px] bg-primary"></span>
                                {subtitle}
                            </div>
                        )}
                        <Heading level={2} className="text-3xl font-bold leading-tight mb-6">{title}</Heading>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            {typeof description === 'string' ? <Text>{description}</Text> : description}
                        </div>
                        {children}
                    </div>

                    {/* Media Side - Span 5 */}
                    <div className={cn("lg:col-span-5 relative", reversed && "lg:order-1")}>
                        {imageSrc ? (
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl relative group">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        ) : (
                            <div className="aspect-[4/5] w-full rounded-2xl bg-muted/20" />
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
