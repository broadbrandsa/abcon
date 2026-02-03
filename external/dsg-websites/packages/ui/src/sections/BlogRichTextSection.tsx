import { Container } from "../container";
import { cn } from "../utils";

export interface BlogRichTextSectionProps {
    html: string;
}

export function BlogRichTextSection({ html }: BlogRichTextSectionProps) {
    return (
        <section className="bg-background py-16 md:py-24">
            <Container>
                <div
                    className={cn(
                        "prose prose-lg mx-auto dark:prose-invert",
                        "prose-headings:font-light prose-headings:tracking-tight",
                        "prose-h1:text-4xl prose-h1:font-light",
                        "prose-p:text-muted-foreground prose-p:leading-relaxed",
                        "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
                        "prose-img:rounded-3xl"
                    )}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </Container>
        </section>
    );
}
