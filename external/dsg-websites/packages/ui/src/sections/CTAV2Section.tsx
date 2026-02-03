import * as React from "react";
import { Button } from "../button";
import { Container } from "../container";
import { Heading } from "../typography";
import { cn } from "../utils";

export interface CTAV2SectionProps {
    heading?: string;
    description?: string;
    appStoreButtons?: boolean;
    primaryAction?: {
        label: string;
        href: string;
        onClick?: () => void;
    };
    secondaryAction?: {
        label: string;
        href: string;
        onClick?: () => void;
    };
    id?: string;
    className?: string;
}

export function CTAV2Section({
    heading,
    description,
    appStoreButtons,
    primaryAction,
    secondaryAction,
    id,
    className,
}: CTAV2SectionProps) {
    return (
        <section id={id} className={cn("bg-background py-16 md:py-24", className)}>
            <Container>
                <div className="flex flex-col justify-between gap-8 rounded-block bg-[#DC2626] px-8 py-8 text-background md:flex-row md:items-center md:px-12 md:py-10">
                    <div className="max-w-3xl">
                        <Heading
                            level={3}
                            className="text-3xl font-light leading-tight text-background md:text-[32px]"
                        >
                            {heading}
                        </Heading>
                        {description && (
                            <p className="mt-4 text-lg text-background/80 md:text-xl">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        {appStoreButtons ? (
                            <>
                                <a href="#" className="transition-opacity hover:opacity-80">
                                    <img
                                        src="/assets/images/App Store.png"
                                        alt="Download on the App Store"
                                        className="h-12 w-auto object-contain"
                                    />
                                </a>
                                <a href="#" className="transition-opacity hover:opacity-80">
                                    <img
                                        src="/assets/images/Play store.png"
                                        alt="Get it on Google Play"
                                        className="h-12 w-auto object-contain"
                                    />
                                </a>
                            </>
                        ) : (
                            <>
                                <Button
                                    size="lg"
                                    variant="primary"
                                    onClick={primaryAction?.onClick}
                                    {...(primaryAction?.href
                                        ? { as: "a", href: primaryAction.href }
                                        : {})}
                                >
                                    {primaryAction?.label}
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
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
