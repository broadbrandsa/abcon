import Image from "next/image";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface AuthorBlurbProps {
    name: string;
    role?: string;
    bio?: string;
    avatarSrc?: string;
    className?: string;
}

export function AuthorBlurb({
    name,
    role,
    bio,
    avatarSrc,
    className,
}: AuthorBlurbProps) {
    return (
        <div className={cn("flex flex-col gap-6 rounded-2xl bg-muted/50 p-8 md:flex-row md:items-center md:gap-8", className)}>
            {avatarSrc && (
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-muted">
                    <Image
                        src={avatarSrc}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="flex flex-col gap-2 text-center md:text-left">
                <div>
                    <Heading level={4} className="text-lg font-bold">{name}</Heading>
                    {role && <span className="text-sm font-medium text-muted-foreground">{role}</span>}
                </div>
                {bio && (
                    <Text className="text-muted-foreground">
                        {bio}
                    </Text>
                )}
            </div>
        </div>
    );
}
