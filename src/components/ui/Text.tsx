import * as React from "react";
import { cn } from "@/lib/utils";

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
