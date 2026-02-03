import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface TeamSectionPerson {
    name: string;
    title: string;
    imageSrc?: string | null;
    linkedinUrl?: string | null;
}

export interface TeamSectionProps {
    heading: string;
    description: string;
    people: TeamSectionPerson[];
}

export function TeamSection({ heading, description, people }: TeamSectionProps) {
    const isCmsImage = (src?: string | null) => {
        if (!src) return false;
        return src.includes("/uploads/") || src.includes("127.0.0.1") || src.includes("localhost") || src.includes("cms-api");
    };

    return (
        <section className="bg-background py-16 md:py-24">
            <Container>
                <div className="mb-10">
                    <Heading level={4} className="text-xl font-light tracking-normal md:text-2xl">
                        {heading}
                    </Heading>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {people.map((person) => (
                        <div
                            key={person.name}
                            className={cn(
                                "group relative overflow-hidden rounded-[20px] bg-muted shadow-sm transition-all",
                                "hover:-translate-y-1 hover:shadow-lg"
                            )}
                        >
                            <div className="relative aspect-[4/5] w-full overflow-hidden">
                                {person.imageSrc ? (
                                    <Image
                                        src={person.imageSrc}
                                        alt={person.name}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        unoptimized={isCmsImage(person.imageSrc)}
                                    />
                                ) : (
                                    <div className="h-full w-full bg-muted" />
                                )}
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex items-center justify-between gap-4 rounded-[16px] bg-white px-4 py-3 shadow-sm">
                                    <div>
                                        <div className="text-sm font-semibold text-foreground">{person.name}</div>
                                        <div className="text-xs text-muted-foreground">{person.title}</div>
                                    </div>
                                    {person.linkedinUrl ? (
                                        <a
                                            href={person.linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Open LinkedIn profile for ${person.name}`}
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            <Linkedin className="h-4 w-4" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
