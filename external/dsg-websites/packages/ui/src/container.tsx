import * as React from "react";
import { cn } from "./utils";

export function Container({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "mx-auto w-full !px-5 min-[750px]:!px-[100px]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
