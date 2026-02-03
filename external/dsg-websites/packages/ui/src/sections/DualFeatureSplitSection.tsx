import * as React from "react";
import Image from "next/image";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface DualFeatureSplitSectionProps {
    leftImage: string;
    leftEyebrow: string;
    leftHeading: string;
    rightEyebrow: string;
    rightHeading?: string;
    rightBody: string;
    className?: string;
    id?: string;
}

export function DualFeatureSplitSection({
    leftImage,
    leftEyebrow,
    leftHeading,
    rightEyebrow,
    rightHeading,
    rightBody,
    className,
    id,
}: DualFeatureSplitSectionProps) {
    return (
        <section id={id} className={cn("w-full py-20 lg:py-32", className)}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                    {/* Left Block (Image) */}
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-[20px]">
                        <Image
                            src={leftImage}
                            alt=""
                            fill
                            className="object-cover"
                            priority={false}
                        />
                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12 bg-gradient-to-b from-black/20 to-black/60">
                            {leftEyebrow ? (
                                <Heading level={5} className="text-white/90">
                                    {leftEyebrow}
                                </Heading>
                            ) : <div></div>}
                            <Heading
                                level={3}
                                className="text-white max-w-[80%] whitespace-pre-line"
                            >
                                {leftHeading}
                            </Heading>
                        </div>
                    </div>

                    {/* Right Block (Content) */}
                    <div className="flex flex-col justify-between rounded-[20px] bg-secondary p-8 lg:p-12">
                        <Heading level={5} className="text-muted-foreground font-medium uppercase tracking-wider">
                            {rightEyebrow}
                        </Heading>
                        <div className="mt-auto pt-16">
                            {rightHeading && (
                                <Heading level={4} className="mb-4 text-foreground">
                                    {rightHeading}
                                </Heading>
                            )}
                            <Text
                                className="text-[length:var(--text-p1)] text-foreground max-w-md whitespace-pre-line"
                            >
                                {rightBody}
                            </Text>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
