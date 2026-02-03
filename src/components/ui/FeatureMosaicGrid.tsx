import * as React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { cn } from "@/lib/utils";

export interface FeatureMosaicGridRow {
    imageCard: {
        image: string;
        description: string;
        icon?: React.ReactNode;
    };
    textCard: {
        title: string;
        description?: string;
    };
}

export interface FeatureMosaicGridProps {
    heading?: string;
    rows: [FeatureMosaicGridRow, FeatureMosaicGridRow, FeatureMosaicGridRow];
    className?: string;
}

export function FeatureMosaicGrid({
    heading,
    rows,
    className,
}: FeatureMosaicGridProps) {
    return (
        <section className={cn("w-full py-20 lg:py-32", className)}>
            <Container>
                <div className="flex flex-col gap-8 lg:gap-12">
                    {heading && (
                        <Heading level={2} className="max-w-3xl">
                            {heading}
                        </Heading>
                    )}

                    <div className="flex flex-col gap-6 lg:gap-8">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[65fr_35fr] lg:gap-8">
                            <ImageCard content={rows[0].imageCard} className="min-h-[320px] lg:min-h-[60vh]" />
                            <TextCard content={rows[0].textCard} />
                        </div>

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[35fr_65fr] lg:gap-8">
                            <ImageCard
                                content={rows[1].imageCard}
                                className="min-h-[320px] lg:order-last lg:min-h-[60vh]"
                            />
                            <TextCard content={rows[1].textCard} />
                        </div>

                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[65fr_35fr] lg:gap-8">
                            <ImageCard content={rows[2].imageCard} className="min-h-[320px] lg:min-h-[60vh]" />
                            <TextCard content={rows[2].textCard} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ImageCard({
    content,
    className,
}: {
    content: FeatureMosaicGridRow["imageCard"];
    className?: string;
}) {
    return (
        <div className={cn("relative w-full overflow-hidden rounded-[20px]", className)}>
            <Image
                src={content.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors hover:bg-black/20" />

            <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                {content.icon && (
                    <div className="mb-4 text-white">
                        {content.icon}
                    </div>
                )}
                <Heading level={3} className="text-white max-w-lg">
                    {content.description}
                </Heading>
            </div>
        </div>
    );
}

function TextCard({
    content,
    className,
}: {
    content: FeatureMosaicGridRow["textCard"];
    className?: string;
}) {
    return (
        <div className={cn("flex flex-col justify-between rounded-[20px] bg-secondary p-8 lg:p-10 text-secondary-foreground", className)}>
            <div className="space-y-4">
                <Heading level={4} className="text-secondary-foreground">{content.title}</Heading>
                {content.description && (
                    <Text className="text-secondary-foreground/80">
                        {content.description}
                    </Text>
                )}
            </div>
        </div>
    );
}
