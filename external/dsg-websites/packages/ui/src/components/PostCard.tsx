import Link from "next/link";
import Image from "next/image";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface PostCardProps {
    title: string;
    href: string;
    date: string;
    excerpt: string;
    imageSrc?: string;
    imageAlt?: string;
    authorName?: string;
    className?: string;
}

export function PostCard({
    title,
    href,
    date,
    excerpt,
    imageSrc,
    imageAlt,
    authorName,
    className
}: PostCardProps) {
    return (
        <Link href={href} className={cn("group flex flex-col gap-4 overflow-hidden rounded-[20px] bg-card transition-all hover:bg-muted/50 hover:-translate-y-1 hover:shadow-lg", className)}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-muted">
                {imageSrc && imageSrc.trim().length > 0 ? (
                    <Image
                        src={imageSrc}
                        alt={imageAlt || title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized={imageSrc.includes("/uploads/") || imageSrc.includes("127.0.0.1") || imageSrc.includes("localhost")}
                    />
                ) : null}
            </div>
            <div className="flex flex-col gap-2 p-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{date}</span>
                    {authorName && <span>{authorName}</span>}
                </div>
                <Heading level={4} className="group-hover:text-primary transition-colors">
                    {title}
                </Heading>
                <Text dimmed className="line-clamp-2 text-sm">
                    {excerpt}
                </Text>
            </div>
        </Link>
    );
}
