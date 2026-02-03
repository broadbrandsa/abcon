import {
    DifferenceCardsSection,
    Container,
    GridSection,
    Heading,
    Hero,
    ShowcaseGridSection,
    SplitSection,
    ThreeFeatureGrid,
} from "@repo/ui";
import { Section } from "@/components/ui/Section";

export default function StrivePage() {
    return (
        <main className="flex flex-col">
            <Hero
                title="Strive Prop, built for leasing performance, not just listings."
                description="Strive manages 90+ commercial, retail, industrial, and consumer letting assets within the Abcon group. The brand handles everything from tenant management to ongoing asset performance."
                image={{ src: "/Images/Strive 4.jpg", alt: "Strive Property Specialists" }}
            />

            <GridSection
                title="Executive Summary"
                variant="editorial"
                heading="Executive Summary"
                headingAlignment="left"
                items={[
                    {
                        title: "The current reality",
                        description:
                            "Strive has strong operational capability and portfolio depth, but its digital presence functions primarily as a contact layer rather than a structured demand engine.",
                        imageSrc: "/Images/Strive 1.jpg",
                        imageAlt: "The current reality",
                    },
                    {
                        title: "The impact",
                        description:
                            "This results in unqualified enquiries, slower leasing cycles, and unnecessary manual effort for leasing teams.",
                        imageSrc: "/Images/Strive 2.jpg",
                        imageAlt: "The impact",
                    },
                    {
                        title: "The opportunity",
                        description:
                            "By improving positioning, qualification, and routing, Strive can increase lead quality and conversion without increasing operational complexity.",
                        imageSrc: "/Images/Strive 3.jpg",
                        imageAlt: "The opportunity",
                    },
                ]}
            />
            <Section className="relative overflow-hidden bg-muted/50">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/Images/Strive%205.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                </div>
                <div className="relative z-10">
                    <Container>
                        <Heading level={2} className="mb-8">Creative Audit</Heading>
                    </Container>
                    <ShowcaseGridSection
                        className="bg-muted/50"
                        items={[
                            { title: "Brand Perception", description: "The visual identity is corporate and functional but lacks distinction. It communicates \"we manage buildings\" rather than \"we enable business success\" (commercial) or \"we provide quality living\" (residential). The imagery is generic, and the tone of voice is administrative rather than commercial." },
                            { title: "Website", description: "Functional but dated. Serves as a digital brochure rather than a lead generation tool." },
                            { title: "Search Visibility", description: "Low. The brand does not appear for key commercial or retail leasing searches in its target nodes." },
                            { title: "Lead Generation", description: "Passive. Reliant on aggregator platforms and brokers." },
                        ]}
                    />
                </div>
            </Section>

            <SplitSection
                title="Unique Selling Proposition (USP)"
                description={`"Direct Access to Prime Space." Strive offers tenants direct access to a managed portfolio, removing friction and ensuring professional management. The value proposition should shift from "management" to "access and performance."`}
                image={{
                    src: "/Images/Strive%201.jpg",
                    alt: "Unique Selling Proposition (USP)",
                }}
                imagePosition="right"
            />

            <GridSection
                title="Audience Segmentation"
                description="Strive serves two distinct audiences with different needs."
                columns={2}
                items={[
                    {
                        title: "Commercial Tenants",
                        description: "Business owners and corporate decision-makers. They prioritize location, cost-efficiency, and operational stability."
                    },
                    {
                        title: "Residential Tenants",
                        description: "Individuals and families. They prioritize safety, affordability, lifestyle amenities, and trustworthy management."
                    }
                ]}
            />

            <DifferenceCardsSection
                heading="Channel Strategy"
                items={[
                    { label: "Google Search (SEO & PPC)", description: "Capture high-intent queries like \"office space to rent Centurion\" or \"apartments in Hertford.\" Essential for capturing active demand." },
                    { label: "LinkedIn (Commercial)", description: "Target decision-makers in specific industries for commercial vacancies. Use account-based marketing tactics for high-value properties." },
                    { label: "Meta/Instagram (Residential)", description: "Showcase lifestyle and apartment visuals to consumer audiences. Visual-first approach to drive residential enquiries." },
                    { label: "CRM/Email", description: "Reactivate past tenants and nurture current leads. Keep the brand top-of-mind for future space requirements." },
                ]}
            />

            <ThreeFeatureGrid
                items={[
                    {
                        label: "Speed to first response",
                        description: "Measure response time from enquiry to first meaningful contact. Faster responses increase conversion to site visits and reduce drop-off.",
                    },
                    {
                        label: "Lead quality signals",
                        description: "Track what percentage of enquiries include usable intent signals (use-case, size, area, timeline). The goal is fewer, better-fit leads.",
                    },
                    {
                        label: "Enquiry to viewing conversion",
                        description: "Measure the proportion of enquiries that progress to a viewing or site assessment. This is the clearest indicator of demand quality.",
                    },
                ]}
            />

            <SplitSection
                title="Retail and commercial demand behave differently"
                description="The strategy must split early. Retail tenants need operational fit and footfall confidence. Commercial tenants need governance confidence and long-term stability. The digital journey should qualify and route these paths separately. Retail letting: Focus on tenant mix fit, visibility, operational requirements, and speed to occupation (especially QSR and food-led operators). Commercial letting: Focus on credibility, clarity, decision confidence, and frictionless progression from enquiry to viewing."
                image={{
                    src: "/Images/Strive%203.jpg",
                    alt: "Retail and commercial demand behave differently",
                }}
                imagePosition="left"
            />

        </main>
    );
}
