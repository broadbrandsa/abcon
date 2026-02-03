import * as React from "react";
import Image from "next/image";
import { Container } from "../container";
import { Heading } from "../typography";
import { cn } from "../utils";

export interface ClientLogo {
    src: string;
    alt?: string;
}

export interface ClientLogosSectionProps {
    heading: string;
    logos: ClientLogo[];
    grayscale?: boolean;
    gap?: string;
    logoHeight?: string;
    id?: string;
}

export function ClientLogosSection({
    heading,
    logos,
    grayscale = true,
    gap = "gap-16",
    logoHeight = "h-16 md:h-20",
    id,
}: ClientLogosSectionProps) {
    // Duplicate logos to ensure seamless infinite scroll
    const allLogos = [...logos, ...logos];

    return (
        <section id={id} className="bg-background py-16 md:py-24 overflow-hidden">
            <Container>
                {/* Heading */}
                <div className="mb-12 text-center">
                    <Heading level={5} className="text-muted-foreground">
                        {heading}
                    </Heading>
                </div>

                {/* Logo Row Wrapper with Fade Edges */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    {/* Scrolling Track */}
                    <div
                        className={cn("flex w-max animate-scroll hover:[animation-play-state:paused]", gap)}
                        style={{
                            // Ensure the animation duration scales with the number of logos roughly
                            animationDuration: `${logos.length * 5}s`,
                        }}
                    >
                        {allLogos.map((logo, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "relative flex w-auto items-center justify-center transition-all duration-300",
                                    logoHeight,
                                    grayscale ? "grayscale hover:grayscale-0" : ""
                                )}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt || ""}
                                    height={80}
                                    width={240} // Aspect ratio placeholder, object-contain handles it
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Local Styles for Animation */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll linear infinite;
                }
            `,
                }}
            />
        </section>
    );
}
