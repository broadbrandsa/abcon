import { Container } from "../container";
import { Heading, Text } from "../typography";
import { PostCard, type PostCardProps } from "../components/PostCard";

export interface BlogIndexSectionProps {
    title: string;
    description?: string;
    featured?: PostCardProps;
    posts: PostCardProps[];
}

export function BlogIndexSection({
    title,
    description,
    featured,
    posts,
}: BlogIndexSectionProps) {
    return (
        <section className="bg-background py-16 md:py-24">
            <Container>
                <div className="mb-12 md:mb-16">
                    <Heading level={1} className="mb-4">
                        {title}
                    </Heading>
                    {description && (
                        <Text dimmed className="max-w-3xl text-lg md:text-xl">
                            {description}
                        </Text>
                    )}
                </div>

                {featured && (
                    <div className="mb-16 md:mb-24">
                        <PostCard {...featured} className="md:grid md:grid-cols-2 md:gap-8 bg-transparent hover:bg-transparent" />
                    </div>
                )}

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                    {posts.map((post, index) => (
                        <PostCard key={index} {...post} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
