import {
    AccordionSection,
    DifferenceCardsSection,
    GridSection,
    Hero,
    LargeSliderSection,
    StatsSection,
    Text,
    ThreeFeatureGrid,
} from "@repo/ui";

export default function HomePage() {
    return (
        <main className="flex flex-col">
            <Hero
                title="Unlocking Digital Growth Across the Abcon Group"
                description="Strong assets. Proven delivery. Untapped digital leverage."
                image={{ src: "/Images/Abcon%20Hero.jpg", alt: "Abcon Group" }}
            />

            <StatsSection
                highlight={{
                    label: "Market Context: Why Digital Matters Now",
                    title: "Property decision-making has changed.",
                    description: "Across residential, retail, and commercial property, research now begins long before a conversation takes place. Buyers, tenants, and partners arrive informed, comparative, and time-conscious. They expect clear information upfront, proof of delivery and credibility, fast, direct responses, and confidence before commitment. Digital has become the first filter. Those who communicate clearly, demonstrate authority, and respond quickly enter consideration early. Those who do not are often filtered out before a conversation ever begins. For property groups with strong fundamentals, this shift represents an opportunity rather than a threat. Digital, when used intentionally, accelerates trust instead of replacing relationships.",
                }}
                stacked
                stats={[
                    {
                        value: "Clarity upfront",
                        description: "Decision-makers expect the basics to be answered before they engage.",
                    },
                    {
                        value: "Proof before trust",
                        description: "Credibility needs to be visible early, not only explained later.",
                    },
                    {
                        value: "Speed matters",
                        description: "Fast, direct responses influence who stays in consideration.",
                    },
                ]}
            />

            <ThreeFeatureGrid
                badgeClassName="bg-muted"
                items={[
                    {
                        label: "Alignment",
                        description: "Board-level clarity. A shared view of what matters most, what to prioritise first, and how digital can most effectively drive value across the group.",
                    },
                    {
                        label: "Prioritisation",
                        description: "Brand-level focus. Each brand requires a distinct approach. This proposal separates the portfolios clearly, so decisions and investment can be made with confidence.",
                    },
                    {
                        label: "Direction first",
                        description: "Clarity before complexity. Insights are based on publicly available information, observable market behaviour, competitor context, and South African property sector benchmarks. Execution detail, budgets, and performance targets follow once direction is agreed.",
                    },
                ]}
            />

            <LargeSliderSection
                eyebrow="The Abcon Group Portfolio"
                items={[
                    {
                        imageSrc: "/Images/Strive%201.jpg",
                        imageAlt: "Strive Property Specialists",
                        heading: "Strive Property Specialists",
                        description: "The operational engine of the group. Responsible for property management, letting, and asset performance across retail, commercial, industrial, and residential portfolios.",
                    },
                    {
                        imageSrc: "/Images/Abcon%203.jpg",
                        imageAlt: "Abcon Developments",
                        heading: "Abcon Developments",
                        description: "The value creation arm. Focused on the delivery of commercial, retail, industrial, motor, and mixed-use developments through partnerships and joint ventures.",
                    },
                    {
                        imageSrc: "/Images/craft%20home%202.jpg",
                        imageAlt: "Craft Homes",
                        heading: "Craft Homes",
                        description: "The residential brand. Delivering homes across a wide range of price points, with a focus on quality, longevity, and trust for first-time buyers and growing families.",
                    },
                ]}
            />

            <ThreeFeatureGrid
                badgeClassName="bg-muted"
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
        </main>
    );
}
