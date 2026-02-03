import { Container } from "../container";
import { Heading } from "../typography";
import { PostCard, type PostCardProps } from "../components/PostCard";

export interface BlogRelatedPostsSectionProps {
    title?: string;
    posts: PostCardProps[];
}

export function BlogRelatedPostsSection({
    title = "Related Posts",
    posts,
}: BlogRelatedPostsSectionProps) {
    return (
        <section className="bg-muted/30 py-16 md:py-24">
            <Container>
                <div className="mb-12 md:mb-16">
                    <Heading level={2}>{title}</Heading>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                    {posts.slice(0, 3).map((post, index) => (
                        <PostCard key={index} {...post} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
