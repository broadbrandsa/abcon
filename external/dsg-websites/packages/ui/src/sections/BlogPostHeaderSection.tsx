import Image from "next/image";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface BlogPostHeaderSectionProps {
    title: string;
    eyebrow?: string;
    excerpt?: string;
    date?: string;
    publishedDate?: string;
    updatedDate?: string;
    tags?: string[];
    authors?: {
        name: string;
        role?: string;
        href?: string;
        avatarSrc?: string;
    }[];
    heroImageSrc?: string;
    heroImageAlt?: string;
    variant?: "default" | "editorial";
    className?: string;
}

export function BlogPostHeaderSection({
    title,
    eyebrow,
    excerpt,
    date,
    publishedDate,
    updatedDate,
    tags,
    authors,
    heroImageSrc,
    heroImageAlt,
    variant = "default",
    className,
}: BlogPostHeaderSectionProps) {
    const isCmsImage = (src?: string) => {
        if (!src) return false;
        return src.includes("/uploads/") || src.includes("127.0.0.1") || src.includes("localhost");
    };
    const hasAuthors = Boolean(authors && authors.length > 0);
    const renderAuthorLinks = (list: BlogPostHeaderSectionProps["authors"]) => {
        if (!list || list.length === 0) return null;
        return list.map((author, index) => (
            <span key={`${author.name}-${index}`}>
                {index > 0 ? ", " : ""}
                {author.href ? (
                    <a
                        href={author.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                    >
                        {author.name}
                    </a>
                ) : (
                    <span className="font-medium text-foreground">{author.name}</span>
                )}
            </span>
        ));
    };
    const getInitials = (name: string) =>
        name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase())
            .join("");

    if (variant === "editorial") {
        if (variant === "editorial") {
            return (
                <section className={cn("bg-[#E77975] text-white pt-24 pb-12 md:pb-24", className)}>
                    <Container>
                        {/* Top Content: Grid for Content + Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-12">
                            {/* Left Column: Content */}
                            <div className="flex flex-col justify-between">
                                <div>
                                    {/* Breadcrumbs */}
                                    <div className="flex items-center gap-2 mb-6 text-sm font-medium text-white/80">
                                        <a href="/" className="hover:text-white transition-colors">Home</a>
                                        <span>/</span>
                                        <a href="/blog" className="hover:text-white transition-colors">Blog</a>
                                    </div>

                                    {eyebrow && (
                                        <div className="mb-6">
                                            <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                                                {eyebrow}
                                            </span>
                                        </div>
                                    )}

                                    <Heading level={1} className="mb-8 font-heading text-5xl font-medium leading-[1.1] tracking-tight text-white md:text-6xl">
                                        {title}
                                    </Heading>
                                    {/* Tags */}
                                    {tags && tags.length > 0 && (
                                        <div className="flex flex-wrap gap-4">
                                            {tags.map((tag, index) => (
                                                <span key={index} className="border-b border-white/30 pb-0.5 text-sm font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Column: Image */}
                            {heroImageSrc && (
                                <div className="relative w-full min-h-[300px] lg:h-auto overflow-hidden rounded-[40px] bg-muted">
                                    <Image
                                        src={heroImageSrc}
                                        alt={heroImageAlt || title}
                                        fill
                                        className="object-cover"
                                        priority
                                        unoptimized={isCmsImage(heroImageSrc)}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Author Bar (Full Width) */}
                        <div className="border-t border-white/20 pt-8">
                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                {hasAuthors ? (
                                    <div className="flex flex-wrap items-center gap-6">
                                        {authors?.map((author, index) => (
                                            <div key={`${author.name}-${index}`} className="flex items-center gap-3">
                                                {author.avatarSrc ? (
                                                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/10">
                                                        <Image
                                                            src={author.avatarSrc}
                                                            alt={author.name}
                                                            fill
                                                            className="object-cover"
                                                            unoptimized={isCmsImage(author.avatarSrc)}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                                                        {getInitials(author.name)}
                                                    </div>
                                                )}
                                                <div className="flex flex-col">
                                                    <span className="text-base font-bold text-white">
                                                        {author.href ? (
                                                            <a href={author.href} target="_blank" rel="noreferrer" className="hover:underline">
                                                                {author.name}
                                                            </a>
                                                        ) : (
                                                            author.name
                                                        )}
                                                    </span>
                                                    {author.role ? (
                                                        <span className="text-sm text-white/70">
                                                            {author.role}
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}

                                <div className="flex gap-8 text-sm text-white/70">
                                    {(publishedDate || date) && (
                                        <div className="flex gap-1">
                                            <span className="font-bold text-white">Published:</span>
                                            <time>{publishedDate || date}</time>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            );
        }
    }

    return (
        <section className={cn("bg-background pt-24 pb-12 md:pt-32 md:pb-16", className)}>
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    {eyebrow && (
                        <div className="mb-6 flex justify-center">
                            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                                {eyebrow}
                            </span>
                        </div>
                    )}

                    <Heading level={1} className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        {title}
                    </Heading>
                    {excerpt && (
                        <Text className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">
                            {excerpt}
                        </Text>
                    )}

                    {tags && tags.length > 0 && (
                        <div className="mb-8 flex flex-wrap justify-center gap-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="rounded-md border bg-muted/30 px-2 py-1 text-xs font-medium text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mb-12 flex flex-col items-center justify-center gap-6 border-y py-6 md:flex-row md:gap-12">
                        {hasAuthors ? (
                            <div className="flex flex-wrap items-center justify-center gap-6 text-left">
                                {authors?.map((author, index) => (
                                    <div key={`${author.name}-${index}`} className="flex items-center gap-3">
                                        {author.avatarSrc ? (
                                            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                                                <Image
                                                    src={author.avatarSrc}
                                                    alt={author.name}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized={isCmsImage(author.avatarSrc)}
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                                                {getInitials(author.name)}
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-foreground">
                                                {author.href ? (
                                                    <a href={author.href} target="_blank" rel="noreferrer" className="hover:underline">
                                                        {author.name}
                                                    </a>
                                                ) : (
                                                    author.name
                                                )}
                                            </span>
                                            {author.role ? (
                                                <span className="text-xs text-muted-foreground">
                                                    {author.role}
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : null}

                        <div className="flex gap-8 text-left">
                            {(publishedDate || date) && (
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium uppercase text-muted-foreground">
                                        Published
                                    </span>
                                    <time className="text-sm font-medium text-foreground">
                                        {publishedDate || date}
                                    </time>
                                </div>
                            )}
                            {updatedDate && (
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium uppercase text-muted-foreground">
                                        Last Updated
                                    </span>
                                    <time className="text-sm font-medium text-foreground">
                                        {updatedDate}
                                    </time>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {heroImageSrc && (
                    <div className="mt-8 md:mt-12">
                        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-3xl bg-muted">
                            <Image
                                src={heroImageSrc}
                                alt={heroImageAlt || title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}
