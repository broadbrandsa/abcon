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
import { Building2, Users, Shield } from "lucide-react";

export default function CraftHomesPage() {
    return (
        <main className="flex flex-col">
            <Hero
                title="Craft Homes, strong brand visibility, uneven conversion efficiency."
                description="Craft Homes operates in the most competitive part of the property funnel: individual buyers. Awareness is not the problem. The opportunity lies in improving lead readiness, buyer confidence, and conversion from enquiry to viewing to sale."
                image={{ src: "/Images/craft home 2.jpg", alt: "Craft Homes" }}
                className="pb-12"
            />

            <ThreeFeatureGrid
                badgeClassName="bg-muted"
                items={[
                    {
                        label: "Consumer-facing strength",
                        description: "Craft already has meaningful visibility across portals and social, outperforming the group in top-of-funnel presence."
                    },
                    {
                        label: "High intent, high anxiety buyers",
                        description: "Residential buyers arrive informed but cautious. Confidence-building is now as important as availability."
                    },
                    {
                        label: "Conversion gap",
                        description: "Without structured guidance, many enquiries stall before reaching a viewing or sale-ready stage."
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
                            "Craft operates in a high-intent but high-anxiety residential market, where buyers are informed yet cautious.",
                        imageSrc: "/Images/craft home 2.jpg",
                        imageAlt: "The current reality",
                    },
                    {
                        title: "The friction",
                        description:
                            "Many enquiries stall due to uncertainty around affordability, process, and next steps, despite product-market fit.",
                        imageSrc: "/Images/craft home 3.jpg",
                        imageAlt: "The friction",
                    },
                    {
                        title: "The opportunity",
                        description:
                            "By reducing uncertainty earlier and guiding buyers more clearly, Craft can improve conversion from enquiry to viewing to sale.",
                        imageSrc: "/Images/craft home 4.jpg",
                        imageAlt: "The opportunity",
                    },
                ]}
            />

            <AccordionSection
                eyebrow="What Craft is selling"
                items={[
                    {
                        id: "item-1",
                        title: "Entry-level and first-time buyer homes",
                        content: (
                            <Text>
                                Homes aimed at young professionals entering the market, where affordability, bond confidence, and trust in the developer are critical.
                            </Text>
                        ),
                    },
                    {
                        id: "item-2",
                        title: "Mid-market homes",
                        content: (
                            <Text>
                                Products for buyers upgrading or starting families, where lifestyle fit, security, and long-term value influence decisions.
                            </Text>
                        ),
                    },
                    {
                        id: "item-3",
                        title: "Premium homes",
                        content: (
                            <Text>
                                Higher-value offerings where exclusivity, finishes, location, and confidence in execution matter more than price sensitivity.
                            </Text>
                        ),
                    },
                    {
                        id: "item-4",
                        title: "A guided buying journey",
                        content: (
                            <Text>
                                Beyond product, Craft sells reassurance: clarity on process, expectations, and what happens after purchase.
                            </Text>
                        ),
                    },
                ]}
            />

            <Section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/Images/craft%20home%203.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                </div>
                <div className="relative z-10">
                    <Container>
                        <Heading level={2} className="mb-8 text-white">Creative Audit</Heading>
                    </Container>
                    <ShowcaseGridSection
                        className="bg-transparent"
                        panelClassName="bg-muted/20"
                        variant="inverse"
                        items={[
                            { title: "What’s working", description: "Craft already has visibility and recognisability in the residential market, supported by portal presence and social content." },
                            { title: "What’s missing", description: "A structured system that educates, reassures, and qualifies buyers before sales engagement." },
                            { title: "Why it matters", description: "Buyers who lack confidence delay decisions or disengage entirely, even when the product is suitable." },
                            { title: "Creative direction", description: "Shift from availability-led content to confidence-led storytelling that explains the journey, not just the unit." },
                        ]}
                    />
                </div>
            </Section>

            <EditorialDoubleCardSection
                introText=""
                cards={[
                    { id: "1", eyebrow: "Objective", title: "Build trust earlier", description: "Ensure buyers feel confident in Craft before they submit an enquiry or attend a viewing." },
                    { id: "2", eyebrow: "Objective", title: "Improve sales readiness", description: "Increase the proportion of enquiries that are financially and emotionally ready to proceed." },
                    { id: "3", eyebrow: "Objective", title: "Shorten decision cycles", description: "Reduce drop-off between enquiry, viewing, and purchase through better guidance." },
                    { id: "4", eyebrow: "Objective", title: "Support sales teams", description: "Reduce manual explanation by answering buyer questions digitally, upfront." },
                    { id: "5", eyebrow: "Objective", title: "Protect brand equity", description: "Compete on quality and confidence, not just price or promotions." },
                ]}
            />

            <FeatureMosaicGrid
                heading="Competitive Positioning"
                rows={[
                    {
                        imageCard: {
                            image: "/Images/Home%201.jpg",
                            description: "Craft’s long-standing presence provides reassurance in a market where buyers fear developer risk.",
                            icon: <Shield className="h-8 w-8" />,
                        },
                        textCard: {
                            title: "Range of offerings",
                            description: "Craft spans multiple price points, allowing buyers to grow with the brand over time.",
                        },
                    },
                    {
                        imageCard: {
                            image: "/Images/Home%202.jpg",
                            description: "Being part of a broader property group provides stability and operational depth.",
                            icon: <Users className="h-8 w-8" />,
                        },
                        textCard: {
                            title: "Underused digitally",
                            description: "These strengths are real, but not consistently translated into early-stage buyer confidence online.",
                        },
                    },
                    {
                        imageCard: {
                            image: "/Images/Home%20%203.jpg",
                            description: "Craft’s long-standing presence provides reassurance in a market where buyers fear developer risk.",
                            icon: <Building2 className="h-8 w-8" />,
                        },
                        textCard: {
                            title: "Longevity and delivery",
                            description: "Craft’s long-standing presence provides reassurance in a market where buyers fear developer risk.",
                        },
                    },
                ]}
            />

            <ThreeFeatureGrid
                badgeClassName="bg-muted"
                items={[
                    { label: "First-time buyers", description: "Young professionals seeking affordability, clarity, and reassurance about the buying process." },
                    { label: "Upgraders and families", description: "Buyers prioritising space, security, and long-term value." },
                    { label: "Premium buyers", description: "Buyers seeking quality, exclusivity, and confidence in execution." },
                ]}
                className="bg-muted/50"
            />

            <GridSection
                title="How demand is captured in residential"
                variant="editorial"
                heading="How demand is captured in residential"
                headingAlignment="left"
                items={[
                    {
                        title: "High-intent discovery",
                        description:
                            "Search and portals capture buyers actively comparing areas, affordability, and developers.",
                        imageSrc: "/Images/craft home 1.jpg",
                        imageAlt: "High-intent discovery",
                    },
                    {
                        title: "Confidence building",
                        description:
                            "Social content and retargeting reinforce trust while buyers take time to decide.",
                        imageSrc: "/Images/craft home 4.jpg",
                        imageAlt: "Confidence building",
                    },
                    {
                        title: "Conversion channels",
                        description:
                            "Fast, clear WhatsApp-based follow-up moves buyers toward viewings and decisions.",
                        imageSrc: "/Images/craft home 5.jpg",
                        imageAlt: "Conversion channels",
                    },
                ]}
            />

            <AccordionSection
                eyebrow="Buyer anxiety and reassurance"
                items={[
                    {
                        id: "buyer-anxiety-1",
                        title: "Can I afford this, really?",
                        content: (
                            <Text>
                                Buyers worry about repayments, hidden costs, and approval risk. The journey should clarify steps, costs, and realistic pathways.
                            </Text>
                        ),
                    },
                    {
                        id: "buyer-anxiety-2",
                        title: "What happens after I enquire?",
                        content: (
                            <Text>
                                Buyers fear pushy follow-up or unclear processes. Clear next steps and respectful guidance increase confidence and reduce drop-off.
                            </Text>
                        ),
                    },
                    {
                        id: "buyer-anxiety-3",
                        title: "Is the developer reliable?",
                        content: (
                            <Text>
                                Confidence increases when proof is visible early: track record, process clarity, and reassurance about after-sales support.
                            </Text>
                        ),
                    },
                    {
                        id: "buyer-anxiety-4",
                        title: "How long will this take?",
                        content: (
                            <Text>
                                Timelines reduce anxiety. The journey should set expectations clearly, so buyers feel in control.
                            </Text>
                        ),
                    },
                ]}
            />

            <ThreeFeatureGrid
                badgeClassName="bg-muted"
                items={[
                    { label: "Buyer education pages", description: "Create clear content explaining the buying process, costs, and timelines." },
                    { label: "Guided enquiry flows", description: "Capture budget, timeline, and intent upfront to improve lead quality." },
                    { label: "Nurture before pressure", description: "Keep buyers engaged with helpful content until they are ready to proceed." },
                ]}
            />

            <DifferenceCardsSection
                heading="Channel Strategy"
                items={[
                    { label: "Property portals", description: "Primary intent capture, but must route into guided journeys rather than generic enquiries." },
                    { label: "Search", description: "Capture affordability, area, and comparison intent earlier in the journey." },
                    { label: "Social (Instagram)", description: "Visual proof and lifestyle signalling." },
                    { label: "WhatsApp", description: "Expected conversion channel for fast, personal responses." },
                    { label: "Retargeting", description: "Keep Craft top-of-mind for buyers not yet ready to commit." },
                ]}
            />

        </main>
    );
}
