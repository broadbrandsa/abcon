import { ReactNode } from "react";
import { Container } from "../container";
import { SocialShare, SocialShareProps } from "../components/SocialShare";

export interface BlogPostContentSectionProps {
    children: ReactNode;
    socialOnSide?: boolean;
    socialShareProps?: SocialShareProps;
}

export function BlogPostContentSection({
    children,
    socialOnSide = true,
    socialShareProps,
}: BlogPostContentSectionProps) {
    return (
        <section className="pb-24 pt-8 md:pb-32">
            <Container>
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Sidebar / Social */}
                    {socialOnSide && (
                        <aside className="lg:col-span-2 lg:col-start-2">
                            <div className="sticky top-24 hidden lg:block">
                                <SocialShare {...socialShareProps} />
                            </div>
                            {/* Mobile social share at top or bottom? usually top is better handled by header or bottom fixed, keeping it simple for now */}
                            <div className="mb-8 lg:hidden">
                                <SocialShare {...socialShareProps} className="flex-row" />
                            </div>
                        </aside>
                    )}

                    {/* Main Content */}
                    <div className={socialOnSide ? "lg:col-span-8" : "lg:col-span-8 lg:col-start-3"}>
                        <div className="prose prose-lg prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-3xl">
                            {children}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
