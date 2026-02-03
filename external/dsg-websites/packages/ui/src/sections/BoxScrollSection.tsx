"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface BoxScrollItemType {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface BoxScrollSectionProps {
    heading: React.ReactNode;
    description: string;
    items: BoxScrollItemType[];
    imageSrc?: string;
    imageAlt?: string;
    imageClassName?: string;
    iconWrapperClassName?: string;
    backgroundClassName?: string;
    overlayClassName?: string;
    descriptionClassName?: string;
    itemTitleClassName?: string;
    itemDescriptionClassName?: string;
}

export function BoxScrollSection({
    heading,
    description,
    items,
    imageSrc,
    imageAlt,
    imageClassName,
    iconWrapperClassName,
    backgroundClassName,
    overlayClassName,
    descriptionClassName,
    itemTitleClassName,
    itemDescriptionClassName
}: BoxScrollSectionProps) {
    return (
        <section className={cn("relative bg-background py-16 md:py-24", backgroundClassName)}>
            {backgroundClassName && (
                <>
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={imageAlt || ""}
                            fill
                            className="object-cover z-0"
                            priority={false}
                        />
                    )}
                    {overlayClassName && <div className={cn("absolute inset-0 z-0", overlayClassName)} />}
                </>
            )}
            <Container className={cn(backgroundClassName && "relative z-10")}>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-start">
                    {/* Left Column: Heading - Sticky */}
                    <div className="flex flex-col lg:sticky lg:top-32 lg:self-start lg:h-[calc(100vh-8rem)]">
                        <div className="mb-6">
                            {typeof heading === 'string' ? <Heading level={2}>{heading}</Heading> : heading}
                        </div>
                        <Text className={cn("text-lg md:text-xl max-w-lg", descriptionClassName)}>
                            {description}
                        </Text>

                        {!backgroundClassName && imageSrc && (
                            <div className={cn("relative mt-12 w-full", imageClassName)}>
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt || ""}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>

                    {/* Right Column: Items */}
                    <div className="flex flex-col gap-0">
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <BoxScrollItem
                                    title={item.title}
                                    description={item.description}
                                    iconLeft={item.icon}
                                    iconWrapperClassName={iconWrapperClassName}
                                    titleClassName={itemTitleClassName}
                                    descriptionClassName={itemDescriptionClassName}
                                />
                                {index < items.length - 1 && <Separator />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Separator() {
    return (
        <div className="h-px w-full bg-border" />
    );
}

function BoxScrollItem({
    title,
    description,
    iconLeft,
    iconWrapperClassName,
    titleClassName,
    descriptionClassName
}: {
    title: string;
    description: string;
    iconLeft: React.ReactNode;
    iconWrapperClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}) {
    return (
        <div className="flex min-h-[50vh] flex-col justify-center gap-6 py-12">
            <div className="flex w-full items-center gap-2">
                {/* Icon Grid */}
                <div className="flex items-center gap-2">
                    <Square icon={iconLeft} className={iconWrapperClassName} />
                </div>
            </div>

            <div className="space-y-4">
                <Heading level={4} className={titleClassName}>
                    {title}
                </Heading>
                <Text className={cn("max-w-md", descriptionClassName)}>
                    {description}
                </Text>
            </div>
        </div>
    );
}

function Square({ icon, className }: { icon: React.ReactNode; className?: string }) {
    return (
        <div className={cn("relative flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#FFCFCC] text-blue-600", className)}>
            {/* Main Icon */}
            <div className="size-5">
                {icon}
            </div>
        </div>
    );
}
