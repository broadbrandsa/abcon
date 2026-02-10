import {
    AccordionSection,
    Container,
    DifferenceCardsSection,
    EditorialDoubleCardSection,
    FeatureMosaicGrid,
    GridSection,
    Heading,
    Hero,
    ShowcaseGridSection,
    Text,
    ThreeFeatureGrid,
} from "@repo/ui";
import { Section } from "@/components/ui/Section";
import { Users, CheckCircle2, Building2 } from "lucide-react";

export default function AbconDevelopmentsPage() {
    return (
        <main className="flex flex-col">
            <Hero
                title="Abcon Developments, built to deliver at scale, positioned too quietly."
                description="Abcon develops and delivers complex assets across multiple categories. The delivery capability and track record are strong, but the digital presence does not yet function as an authority engine that supports partnerships, tenant demand, and high-confidence inbound."
                image={{ src: "/Images/Abcon%201.webp", alt: "Abcon Developments" }}
                cta={{
                    label: "Demo Brand Story",
                    href: "https://preview.nws.ai/broadbrand_za/abcon/#0",
                }}
                className="pb-12"
            />

            <ThreeFeatureGrid
                badgeClassName="bg-muted"
                items={[
                    {
                        label: "Delivery-led credibility",
                        description: "Abcon’s primary competitive advantage is execution. Digital should make that credibility visible before the first meeting.",
                    },
                    {
                        label: "Partnership-first growth",
                        description: "In this category, the goal is not mass leads. It’s fewer, higher-quality inbound conversations with aligned partners, tenants, and operators.",
                    },
                    {
                        label: "Authority gap",
                        description: "Abcon’s story exists in networks and relationships. The opportunity is to turn that into structured proof assets that travel across channels.",
                    },
                ]}
                className="pt-12 md:pt-16"
            />

            <GridSection
                title="Executive summary"
                variant="editorial"
                heading="Executive summary"
                headingAlignment="left"
                items={[
                    {
                        title: "The current reality",
                        description:
                            "Abcon’s credibility is driven by delivery and relationships, but that proof largely exists offline and within established networks.",
                        imageSrc: "/Images/Abcon 3.jpg",
                        imageAlt: "The current reality",
                    },
                    {
                        title: "The limitation",
                        description:
                            "This reduces discoverability, slows new relationship formation, and limits inbound confidence beyond existing referrals.",
                        imageSrc: "/Images/Abcon 4.jpg",
                        imageAlt: "The limitation",
                    },
                    {
                        title: "The opportunity",
                        description:
                            "A structured digital authority system can surface proof early and create high-quality inbound engagement aligned with Abcon’s operating model.",
                        imageSrc: "/Images/Abcon 5.jpg",
                        imageAlt: "The opportunity",
                    },
                ]}
            />

            <AccordionSection
                eyebrow="Development Capabilities"
                items={[
                    {
                        id: "item-1",
                        title: "Retail development",
                        content: (
                            <Text>
                                Development capability for retail environments where tenant mix, precinct logic, and long-term performance matter. Digital must communicate suitability and credibility to both tenants and partner stakeholders.
                            </Text>
                        ),
                    },
                    {
                        id: "item-2",
                        title: "Commercial and office development",
                        content: (
                            <Text>
                                Complex projects where governance confidence, delivery certainty, and long-term asset thinking are essential. Digital should communicate process discipline and proof of outcomes.
                            </Text>
                        ),
                    },
                    {
                        id: "item-3",
                        title: "Industrial development",
                        content: (
                            <Text>
                                Function-led projects where infrastructure, access, and operational clarity drive decision-making. Digital should reduce uncertainty and accelerate fit assessment.
                            </Text>
                        ),
                    },
                    {
                        id: "item-4",
                        title: "Motor and specialist development",
                        content: (
                            <Text>
                                Specialist assets with unique operational needs. Digital should express category expertise and reduce qualification friction for operators and partners.
                            </Text>
                        ),
                    },
                ]}
            />

            <EditorialDoubleCardSection
                introText=""
                cards={[
                    { id: "1", eyebrow: "Objective", title: "Establish visible authority", description: "Ensure Abcon’s credibility is discoverable digitally so confidence is built before introductions and meetings." },
                    { id: "2", eyebrow: "Objective", title: "Create fewer, higher-value conversations", description: "Generate inbound engagement from the right stakeholders, not volume-based enquiries that don’t match Abcon’s delivery model." },
                    { id: "3", eyebrow: "Objective", title: "Attract aligned retail operators", description: "Build a repeatable narrative that makes Abcon compelling to national retail tenants and food-led operators." },
                    { id: "4", eyebrow: "Objective", title: "Strengthen institutional confidence", description: "Make Abcon’s process, governance readiness, and delivery discipline easier to validate." },
                    { id: "5", eyebrow: "Objective", title: "Accelerate fit and reduce uncertainty", description: "Clarify capability and suitability early, so inbound leads are better aligned and move faster." },
                ]}
            />

            <Section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/Images/Abcon%205.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                </div>
                <div className="relative z-10">
                    <Container>
                        <Heading level={2} className="mb-8 text-white">Creative Audit</Heading>
                    </Container>
                    <ShowcaseGridSection
                        className="bg-transparent"
                        variant="inverse"
                        items={[
                            { title: "What’s working", description: "Abcon’s credibility is rooted in delivery. The story is strong, it just isn’t structured and visible enough online." },
                            { title: "What’s missing", description: "A proof library that shows outcomes, scale, and process discipline by category, not just broad positioning." },
                            { title: "Why it matters", description: "If credibility isn’t immediate, prospects rely on hearsay or referrals, which narrows inbound opportunity and slows new relationship formation." },
                            { title: "Creative direction", description: "Build a “project proof system”: category pages, project pages, partnership narrative, and a consistent authority cadence that makes Abcon easy to validate." },
                        ]}
                    />
                </div>
            </Section>

            <FeatureMosaicGrid
                heading="Competitive Positioning"
                rows={[
                    {
                        imageCard: {
                            image: "/Images/House.jpg",
                            description: "Abcon’s strongest differentiator is disciplined execution. Digital should translate that into confidence quickly.",
                            icon: <CheckCircle2 className="h-8 w-8" />,
                        },
                        textCard: {
                            title: "Multi-category capability",
                            description: "Abcon operates across multiple development types. Digital should package this by category so audiences see relevance immediately.",
                        },
                    },
                    {
                        imageCard: {
                            image: "/Images/Abcon%204.jpg",
                            description: "Abcon’s growth is relationship-driven. Digital should support this with proof assets and partner-ready narratives that reduce friction.",
                            icon: <Users className="h-8 w-8" />,
                        },
                        textCard: {
                            title: "Under-leveraged visibility",
                            description: "Abcon’s strengths exist operationally, but are not yet presented as structured, searchable, shareable proof online.",
                        },
                    },
                    {
                        imageCard: {
                            image: "/Images/Abcon%203.jpg",
                            description: "Abcon’s primary competitive advantage is execution. Digital should make that credibility visible before the first meeting.",
                            icon: <Building2 className="h-8 w-8" />,
                        },
                        textCard: {
                            title: "Delivery certainty",
                            description: "Abcon’s strongest differentiator is disciplined execution. Digital should translate that into confidence quickly.",
                        },
                    },
                ]}
            />

            <ThreeFeatureGrid
                badgeClassName="bg-muted"
                items={[
                    { label: "Institutional and C-suite stakeholders", description: "Decision-makers focused on governance confidence, long-term value, risk management, and certainty of delivery." },
                    { label: "B2B tenants and tenant reps", description: "Operators and brokers seeking fit-for-purpose assets, clear timelines, and a developer they can trust." },
                    { label: "QSR and food-led retail operators", description: "Expansion teams looking for strong nodes, operational suitability, and fast pathways from interest to site assessment." },
                ]}
                className="bg-muted/30"
            />

            <DifferenceCardsSection
                heading="Who this is not for"
                items={[
                    {
                        label: "Low-commitment enquiries",
                        description: "Abcon is not optimised for casual, low-intent conversations. The system is designed to attract serious partners and aligned stakeholders.",
                    },
                    {
                        label: "Commodity comparisons",
                        description: "If the decision is purely price-led with no value placed on delivery certainty and governance, Abcon will not be the best fit.",
                    },
                    {
                        label: "Short-term opportunism",
                        description: "The brand is built for long-term value creation and disciplined execution, not one-off, transactional engagement.",
                    },
                ]}
            />

            <GridSection
                title="From first conversation to deal"
                variant="editorial"
                heading="From first conversation to deal"
                headingAlignment="left"
                items={[
                    {
                        title: "Establish credibility",
                        description:
                            "Early engagement is supported by clear category positioning and proof assets that build confidence before meetings.",
                        imageSrc: "/Images/Home%201.jpg",
                        imageAlt: "Establish credibility",
                    },
                    {
                        title: "Route engagement",
                        description:
                            "Inbound interest is directed into the correct pathway, ensuring relevance and reducing wasted effort.",
                        imageSrc: "/Images/Home%202.jpg",
                        imageAlt: "Route engagement",
                    },
                    {
                        title: "Progress with certainty",
                        description:
                            "Clear next steps and shared proof reduce friction through due diligence and alignment.",
                        imageSrc: "/Images/Home%205.jpg",
                        imageAlt: "Progress with certainty",
                    },
                ]}
            />

            <ThreeFeatureGrid
                badgeClassName="bg-muted"
                items={[
                    { label: "Build a proof library", description: "Create structured pages for flagship projects and category capability. This becomes the foundation for all marketing and partnership conversations." },
                    { label: "Launch an authority cadence", description: "A consistent rhythm of delivery updates, category insights, and proof drops that builds confidence over time." },
                    { label: "Make inbound intentional", description: "Replace generic contact pathways with structured intent capture and routing aligned to Abcon’s actual deal flows." },
                ]}
            />

            <DifferenceCardsSection
                heading="Channel Strategy"
                items={[
                    { label: "LinkedIn", description: "Primary channel to establish credibility with decision-makers, partners, and brokers through consistent authority content." },
                    { label: "Search", description: "Capture high-intent discovery around development categories and locations with proof-led landing pages." },
                    { label: "Earned media loop", description: "Turn interviews, articles, and announcements into structured proof pages that continue converting long after publication." },
                    { label: "Partner enablement", description: "Equip brokers and stakeholders with project packs and one-pagers that make Abcon easier to recommend and defend." },
                    { label: "Direct outreach support", description: "Use proof assets to power targeted outreach to tenant reps, partners, and operators with relevance-first messaging." },
                ]}
            />
        </main>
    );
}
