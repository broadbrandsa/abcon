import {
    AccordionSection,
    Container,
    DifferenceCardsSection,
    EditorialDoubleCardSection,
    GridSection,
    Heading,
    HeadingV1Section,
    Hero,
    Text,
    ThreeFeatureGrid,
} from "@repo/ui";
import { Section } from "@/components/ui/Section";

export default function HomePage() {
    return (
        <main className="flex flex-col">
            <Hero
                title="Unlocking Digital Growth Across the Abcon Group"
                description="Strong assets. Proven delivery. Untapped digital leverage."
                image={{ src: "/Images/Abcon%20Hero.jpg", alt: "Abcon Group" }}
            />

            <Section className="bg-muted">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <Heading level={2} className="mb-6">
                                Market Context: Why Digital Matters Now
                            </Heading>
                            <Text className="mb-6">
                                Property decision-making has changed.
                            </Text>
                            <Text className="mb-6">
                                Across residential, retail, and commercial property, research now begins long before a conversation takes place. Buyers, tenants, and partners arrive informed, comparative, and time-conscious.
                            </Text>
                            <Text className="mb-4 font-medium">They expect:</Text>
                            <ul className="mb-6 list-disc space-y-2 pl-6">
                                <li className="text-muted-foreground font-light">Clear information upfront</li>
                                <li className="text-muted-foreground font-light">Proof of delivery and credibility</li>
                                <li className="text-muted-foreground font-light">Fast, direct responses</li>
                                <li className="text-muted-foreground font-light">Confidence before commitment</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center rounded-xl bg-background p-8 shadow-sm">
                            <Heading level={3} className="mb-4">
                                Digital has become the first filter.
                            </Heading>
                            <Text className="mb-4">
                                Those who communicate clearly, demonstrate authority, and respond quickly enter consideration early. Those who do not are often filtered out before a conversation ever begins.
                            </Text>
                            <Text>
                                For property groups with strong fundamentals, this shift represents an opportunity rather than a threat. Digital, when used intentionally, accelerates trust instead of replacing relationships.
                            </Text>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="mx-auto max-w-4xl text-center">
                        <Heading level={2} className="mb-6">
                            Our Strategic Lens
                        </Heading>
                        <Text className="mb-8 text-lg">
                            This proposal has been developed as a topline digital strategy.
                        </Text>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-lg border p-6">
                                <Heading level={4} className="mb-2">Board-level alignment</Heading>
                            </div>
                            <div className="rounded-lg border p-6">
                                <Heading level={4} className="mb-2">Brand-level prioritisation</Heading>
                            </div>
                            <div className="rounded-lg border p-6">
                                <Heading level={4} className="mb-2">Informed discussion about where digital can most effectively drive value</Heading>
                            </div>
                        </div>
                        <Text className="mt-12 text-muted-foreground">
                            The approach is deliberately directional. Insights are based on publicly available information, observable market behaviour, competitor context, and South African property sector benchmarks. No internal analytics, CRM data, or historical media performance has been used at this stage.
                        </Text>
                        <Text className="mt-4 text-muted-foreground">
                            The objective is clarity before complexity. Execution detail, budgets, and performance targets can follow once strategic direction is agreed.
                        </Text>
                    </div>
                </Container>
            </Section>

            <GridSection
                title="The Abcon Group Portfolio"
                description="The Abcon Group operates through three distinct but complementary brands, each serving a different role across the property lifecycle."
                items={[
                    {
                        title: "Strive Property Specialists",
                        description: "The operational engine of the group. Responsible for property management, letting, and asset performance across retail, commercial, industrial, and residential portfolios.",
                    },
                    {
                        title: "Abcon Developments",
                        description: "The value creation arm. Focused on the delivery of commercial, retail, industrial, motor, and mixed-use developments through partnerships and joint ventures.",
                    },
                    {
                        title: "Craft Homes",
                        description: "The residential brand. Delivering homes across a wide range of price points, with a focus on quality, longevity, and trust for first-time buyers and growing families.",
                    },
                ]}
            />

            <Section className="bg-muted">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <Heading level={2} className="mb-6">How to Read This Proposal</Heading>
                        <Text className="mb-6">This website is structured to allow focused consideration of each brand.</Text>
                        <Text className="mb-4 font-medium">Each brand page includes:</Text>
                        <ul className="mb-8 space-y-2 text-muted-foreground">
                            <li>Context on current digital positioning and visibility</li>
                            <li>Directional performance and creative observations</li>
                            <li>Audience segmentation and behavioural insight</li>
                            <li>A go-to-market approach aligned to how decisions are made</li>
                            <li>Topline recommendations to increase awareness and quality demand</li>
                        </ul>
                        <Text className="italic">
                            The intent is not to prescribe immediate execution. Instead, this proposal provides a shared strategic foundation from which phased, measurable, and brand-appropriate digital initiatives can be developed over time.
                        </Text>
                    </div>
                </Container>
            </Section>

            <GridSection
                title="Context and constraints"
                variant="editorial"
                heading="Context and constraints"
                headingAlignment="left"
                items={[
                    {
                        title: "What we reviewed",
                        description:
                            "This proposal is based on publicly visible brand assets, digital touchpoints, positioning, and channel presence across the Abcon Group. We assessed how each brand currently presents itself to the market and how demand is captured, qualified, and progressed.",
                        imageSrc: "/Images/Abcon%201.webp",
                        imageAlt: "What we reviewed",
                    },
                    {
                        title: "What we did not have access to",
                        description:
                            "At this stage, we did not have access to internal CRM data, historical campaign performance, lead quality metrics, or conversion rates. As a result, this proposal is directional rather than optimisation-led.",
                        imageSrc: "/Images/craft%20home%201.jpg",
                        imageAlt: "What we did not have access to",
                    },
                    {
                        title: "What happens after approval",
                        description:
                            "Once approved, internal data will be used to validate assumptions, refine targets, and move from strategic alignment into execution and optimisation.",
                        imageSrc: "/Images/Strive%202.jpg",
                        imageAlt: "What happens after approval",
                    },
                ]}
            />

            <AccordionSection
                eyebrow="Proposal clarity"
                items={[
                    {
                        id: "proposal-clarity-1",
                        title: "What this proposal is not",
                        content: (
                            <Text>
                                This is not a creative refresh, a website redesign for its own sake, or a volume-lead generation plan. It is a demand and conversion system proposal, designed to improve lead quality, speed to conversion, and confidence at decision points.
                            </Text>
                        ),
                    },
                    {
                        id: "proposal-clarity-2",
                        title: "Why this approach across all three brands",
                        content: (
                            <Text>
                                While each brand serves a different market, the underlying problems are shared: unclear positioning early in the journey, weak qualification, and manual follow-up. A consistent system reduces complexity while allowing brand-specific execution.
                            </Text>
                        ),
                    },
                    {
                        id: "proposal-clarity-3",
                        title: "What success looks like",
                        content: (
                            <Text>
                                Success is not traffic or impressions. Success is fewer, better enquiries, faster progression to site visits or viewings, and reduced operational friction for leasing and sales teams.
                            </Text>
                        ),
                    },
                    {
                        id: "proposal-clarity-4",
                        title: "What happens after approval",
                        content: (
                            <Text>
                                Approval triggers a structured discovery phase where internal data, systems, and constraints are validated before final execution plans are locked.
                            </Text>
                        ),
                    },
                ]}
            />

            <ThreeFeatureGrid
                items={[
                    {
                        label: "Positioning clarity",
                        description:
                            "Clear articulation of what each brand sells, who it is for, and why it wins, before a conversation starts.",
                    },
                    {
                        label: "Demand quality",
                        description:
                            "Shift from unqualified enquiries to intent-led, routed demand that sales and leasing teams can act on quickly.",
                    },
                    {
                        label: "Operational leverage",
                        description:
                            "Digital systems that reduce repetitive explanation, manual qualification, and follow-up burden.",
                    },
                ]}
            />



            <DifferenceCardsSection
                heading="Dependencies & risks"
                items={[
                    {
                        label: "Data access",
                        description:
                            "CRM, enquiry, and conversion data will be required to move from directional strategy to optimisation.",
                    },
                    {
                        label: "Internal ownership",
                        description:
                            "Clear accountability is required across marketing, leasing, and sales to ensure follow-up discipline.",
                    },
                    {
                        label: "Speed to lead",
                        description:
                            "Conversion uplift depends on response time as much as media or messaging.",
                    },
                    {
                        label: "Consistency",
                        description:
                            "The system only works if applied consistently across brands and channels.",
                    },
                ]}
            />

            <HeadingV1Section
                heading="Decision required"
                text="Approve the direction, sequencing, and operating principles outlined in this proposal. Once aligned, we move immediately into validation and rollout, starting with the lowest-hanging opportunities across the group."
            />
        </main>
    );
}
