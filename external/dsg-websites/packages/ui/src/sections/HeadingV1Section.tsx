import * as React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface HeadingV1SectionProps {
    heading: string;
    text: string;
    className?: string;
    id?: string;
}

export function HeadingV1Section({ heading, text, className, id }: HeadingV1SectionProps) {
    return (
        <section id={id} className={cn("bg-background py-16", className)}>
            <Container>
                <div className="grid grid-cols-4 gap-y-12 md:grid-cols-8 md:gap-y-24 lg:grid-cols-12">
                    {/* Heading Block: Top Left */}
                    <div className="col-span-4 self-start md:col-span-5 lg:col-span-5">
                        <Heading level={2}>{heading}</Heading>
                    </div>

                    {/* Text Block: Bottom Right */}
                    <div className="col-span-4 self-end md:col-start-5 md:col-span-4 lg:col-start-8 lg:col-span-5">
                        <Text className="text-[length:var(--text-p1)] leading-relaxed">
                            {text}
                        </Text>
                    </div>
                </div>
            </Container>
        </section>
    );
}
