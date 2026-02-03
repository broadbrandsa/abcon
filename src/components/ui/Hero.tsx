import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Text } from "./Text";

export interface HeroProps {
    title: string;
    description: string;
    image?: {
        src: string;
        alt: string;
    };
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    cta?: {
        label: string;
        href?: string;
        onClick?: () => void;
    };
    secondaryCta?: {
        label: string;
        href?: string;
        onClick?: () => void;
    };
    video?: string;
    videoOverlay?: boolean;
    className?: string;
    variant?: "default" | "inverse";
    appStoreButtons?: boolean;
    overlayClassName?: string;
}

export function Hero({
    title,
    description,
    image,
    cta,
    secondaryCta,
    headingLevel = 1,
    video,
    videoOverlay,
    className,
    variant = "default",
    appStoreButtons,
    overlayClassName,
}: HeroProps) {
    return (
        <section className="relative flex min-h-[97vh] w-full flex-col justify-center overflow-hidden bg-background">
            <div className="absolute inset-0 size-full">
                {video ? (
                    <>
                        <video
                            src={video}
                            poster={image?.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-hidden="true"
                            className="size-full object-cover motion-reduce:hidden"
                        />
                        {videoOverlay && (
                            <div className="absolute inset-0 bg-black/60 motion-reduce:hidden" />
                        )}
                        {image && (
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover hidden motion-reduce:block"
                                priority
                            />
                        )}
                    </>
                ) : (
                    image && (
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority
                        />
                    )
                )}

                {overlayClassName && (
                    <div className={cn("absolute inset-0 z-0", overlayClassName)} />
                )}

                {!video && !image && (
                    <div className="size-full bg-muted" />
                )}
            </div>

            <Container className={cn("relative z-10 flex flex-col items-center text-center", className)}>
                <Heading
                    level={headingLevel}
                    className={cn(
                        "mb-6",
                        variant === "inverse" && "text-white"
                    )}
                >
                    {title}
                </Heading>
                <Text
                    className={cn(
                        "mb-8 max-w-[704px] text-lg md:text-xl",
                        variant === "inverse" ? "text-slate-200" : "text-muted-foreground"
                    )}
                >
                    {description}
                </Text>
                {(appStoreButtons || cta || secondaryCta) && (
                    <div className="mb-12 flex flex-col gap-4 sm:flex-row justify-center">
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
                                {cta && (
                                    <Button
                                        size="lg"
                                        onClick={cta.onClick}
                                        {...(cta.href ? { as: "a", href: cta.href } : {})}
                                    >
                                        {cta.label}
                                    </Button>
                                )}
                                {secondaryCta && (
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        onClick={secondaryCta.onClick}
                                        {...(secondaryCta.href
                                            ? { as: "a", href: secondaryCta.href }
                                            : {})}
                                    >
                                        {secondaryCta.label}
                                    </Button>
                                )}
                            </>
                        )}
                    </div>
                )}
            </Container>
        </section>
    );
}
