"use client";

import { Container } from "../container";
import { Text } from "../typography";
import { cn } from "../utils";

export interface PlainTextTwoColSectionProps {
    left: string;
    right: string;
    className?: string;
}

export function PlainTextTwoColSection({
    left,
    right,
    className,
}: PlainTextTwoColSectionProps) {
    return (
        <section className={cn("bg-background py-[60px]", className)}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div className="flex flex-col">
                        <Text className="text-sm md:text-base text-foreground leading-relaxed">
                            {left}
                        </Text>
                    </div>
                    <div className="flex flex-col">
                        <Text className="text-sm md:text-base text-foreground leading-relaxed">
                            {right}
                        </Text>
                    </div>
                </div>
            </Container>
        </section>
    );
}
