"use client";

import { cn } from "../utils";

export interface SocialShareProps {
    className?: string;
    url?: string;
    title?: string;
    showLabels?: boolean;
}

export function SocialShare({ className, url = "", title = "", showLabels = false }: SocialShareProps) {
    return (
        <div className={cn("flex flex-col gap-4", className)}>
            {/* Placeholder helper text - hidden in this design or kept? Screenshot doesn't show "Share" label explicitly, but we can keep it hidden or styled differently. Let's keep it but maybe minimal. */}
            {!showLabels && (
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Share
                </span>
            )}

            <div className={cn("flex gap-2 text-muted-foreground", showLabels ? "flex-col items-start" : "md:flex-col")}>
                {/* Twitter / X */}
                <a
                    href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        "flex items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted hover:text-foreground",
                        showLabels ? "h-10 px-6 gap-2 w-auto" : "h-10 w-10"
                    )}
                    aria-label="Share on Twitter"
                >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    {showLabels && <span className="text-sm font-medium text-foreground">Twitter</span>}
                </a>

                {/* LinkedIn */}
                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        "flex items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted hover:text-foreground",
                        showLabels ? "h-10 px-6 gap-2 w-auto" : "h-10 w-10"
                    )}
                    aria-label="Share on LinkedIn"
                >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    {showLabels && <span className="text-sm font-medium text-foreground">LinkedIn</span>}
                </a>

                {/* Link Copy */}
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(url);
                        // In a real app we'd show a toast here
                    }}
                    className={cn(
                        "flex items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted hover:text-foreground",
                        showLabels ? "h-10 w-14" : "h-10 w-10"
                    )}
                    aria-label="Copy Link"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
