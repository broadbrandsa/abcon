
import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface DualFeatureVideoSectionProps {
    videoSrc: string;
    videoOverlayHeading?: string;
    videoOverlayEyebrow?: string;
    contentEyebrow: string;
    contentHeading?: string;
    contentBody: string;
    className?: string;
}

export function DualFeatureVideoSection({
    videoSrc,
    videoOverlayHeading,
    videoOverlayEyebrow,
    contentEyebrow,
    contentHeading,
    contentBody,
    className,
}: DualFeatureVideoSectionProps) {
    return (
        <section className={cn("w-full py-20 lg:py-32", className)}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                    {/* Left Block (Content) */}
                    <div className="flex flex-col justify-between rounded-[20px] bg-secondary p-8 lg:p-12">
                        <Heading level={5} className="text-muted-foreground font-medium uppercase tracking-wider">
                            {contentEyebrow}
                        </Heading>
                        <div className="mt-auto pt-16">
                            {contentHeading && (
                                <Heading level={4} className="mb-4 text-foreground">
                                    {contentHeading}
                                </Heading>
                            )}
                            <Text
                                className="text-[length:var(--text-p1)] text-foreground max-w-md whitespace-pre-line"
                            >
                                {contentBody}
                            </Text>
                        </div>
                    </div>

                    {/* Right Block (Video) */}
                    <div className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden rounded-[20px]">
                        <video
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
