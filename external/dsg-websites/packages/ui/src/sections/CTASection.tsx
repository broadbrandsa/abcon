import * as React from "react";
import { Button } from "../button";
import { Container } from "../container";
import { Heading, Text } from "../typography";

export interface CTASectionProps {
    title: string;
    description: string;
    primaryAction: {
        label: string;
        href: string;
        onClick?: () => void;
    };
    secondaryAction?: {
        label: string;
        href: string;
        onClick?: () => void;
    };
}

export function CTASection({
    title,
    description,
    primaryAction,
    secondaryAction,
}: CTASectionProps) {
    return (
        <section className="bg-muted py-16 md:py-24">
            <Container>
                <div className="flex flex-col items-center text-center">
                    <Heading level={2} className="mb-4">
                        {title}
                    </Heading>
                    <Text className="mb-8 max-w-2xl text-lg text-muted-foreground">
                        {description}
                    </Text>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            variant="primary"
                            onClick={primaryAction.onClick}
                            {...(primaryAction.href
                                ? { as: "a", href: primaryAction.href }
                                : {})}
                        >
                            {primaryAction.label}
                        </Button>
                        {secondaryAction && (
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={secondaryAction.onClick}
                                {...(secondaryAction.href
                                    ? { as: "a", href: secondaryAction.href }
                                    : {})}
                            >
                                {secondaryAction.label}
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
