import * as React from "react";
import { cn } from "./utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({
    className,
    level = 1,
    children,
    ...props
}: HeadingProps) {
    const Component = `h${level}` as any;
    return (
        <Component
            className={cn(
                "font-heading text-foreground tracking-tight",
                {
                    "text-[length:var(--text-h1)] font-medium leading-tight": level === 1,
                    "text-[length:var(--text-h2)] font-light leading-tight": level === 2,
                    "text-[length:var(--text-h3)] font-light leading-snug": level === 3,
                    "text-[length:var(--text-h4)] font-normal leading-snug": level === 4,
                    "text-[length:var(--text-h5)] font-bold uppercase tracking-wider leading-none": level === 5,
                    "text-base font-medium": level === 6,
                },
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    dimmed?: boolean;
}

export function Text({ className, dimmed, children, ...props }: TextProps) {
    return (
        <p
            className={cn(
                "font-sans leading-relaxed font-light",
                dimmed ? "text-muted-foreground" : "text-foreground",
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
}
