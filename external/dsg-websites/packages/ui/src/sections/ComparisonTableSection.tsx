import * as React from "react";
import { Check, X, Minus } from "lucide-react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../utils";

export interface ComparisonRow {
    feature: string;
    icon?: React.ReactNode;
    modernValue: React.ReactNode | string | boolean;
    traditionalValue: React.ReactNode | string | boolean;
}

export interface ComparisonTableSectionProps {
    heading: string;
    description?: string;
    modernHeader: string;
    traditionalHeader: string;
    rows: ComparisonRow[];
    className?: string;
    id?: string;
}

export function ComparisonTableSection({
    heading,
    description,
    modernHeader,
    traditionalHeader,
    rows,
    className,
    id,
}: ComparisonTableSectionProps) {
    return (
        <section id={id} className={cn("bg-background py-16 md:py-24", className)}>
            <Container>
                {/* Section Header */}
                <div className="mb-12 text-center md:mb-16">
                    <Heading level={2} className="mb-4 font-heading font-medium text-3xl md:text-4xl text-foreground">
                        {heading}
                    </Heading>
                </div>

                <div className="w-full md:max-w-[60%] mx-auto">
                    {description && (
                        <div className="mb-8 grid grid-cols-12 gap-4 font-heading text-xs font-light tracking-widest text-muted-foreground uppercase md:text-sm">
                            <div className="col-span-4 text-left">Feature</div>
                            <div className="col-span-4 text-center text-foreground font-light">{modernHeader}</div>
                            <div className="col-span-4 text-left md:pl-4">{traditionalHeader}</div>
                        </div>
                    )}

                    <div className="comparison_wrapper w-full relative isolate">
                        {/* Continuous Blue Block Background for Center Column */}
                        <div className="absolute top-0 bottom-0 left-0 right-0 md:left-[33.333%] md:right-[33.333%] -z-10 hidden rounded-2xl bg-primary shadow-2xl md:block" />

                        <div className="comparison_component w-full flex flex-col">
                            {/* Data Rows */}
                            {rows.map((row, index) => (
                                <div key={index} className="comparison_item first grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border/50 md:border-white/10 py-6 items-start md:items-center last:border-0">
                                    {/* Col 1: Feature */}
                                    <div className="comparison_cell flex flex-col md:flex-row items-center gap-4 text-center md:text-left pl-0 md:pl-6">
                                        {row.icon && (
                                            <div className="comparison_icon size-8 md:size-6 text-primary shrink-0">
                                                {row.icon}
                                            </div>
                                        )}
                                        <div className="text-size-regular u-weight-500 font-medium text-foreground">{row.feature}</div>
                                    </div>

                                    {/* Col 2: Modern (Main) */}
                                    <div className="comparison_cell main first flex flex-col items-center justify-center p-4 relative overflow-hidden">
                                        <div className="comparison_main_content first flex flex-col items-center z-10 gap-2">
                                            <div className="comparison_icon_main text-primary-foreground">
                                                {renderValue(row.modernValue, true)}
                                            </div>
                                            <div className="comparison_caption_wrapper md:hidden">
                                                <h3 className="caption u-neutral-500 text-[10px] font-bold uppercase tracking-wider text-primary">{modernHeader}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Col 3: Traditional */}
                                    <div className="comparison_cell third flex flex-row items-center justify-between w-full text-left gap-4 text-muted-foreground pl-0 md:pl-4">
                                        <div className="text-size-regular u-weight-500 text-sm break-words max-w-full">
                                            {renderTextValue(row.traditionalValue)}
                                        </div>
                                        <div className="comparison_icon hide-mobile-landscape text-muted-foreground ml-auto">
                                            <X className="size-4" />
                                        </div>
                                        <div className="comparison_caption_wrapper md:hidden">
                                            <h3 className="caption u-neutral-500 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">Others</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function renderValue(value: React.ReactNode | string | boolean, isModern: boolean) {
    if (typeof value === "boolean") {
        if (value) {
            return (
                <div className={cn(
                    "flex size-4 md:size-5 items-center justify-center rounded-full",
                    isModern ? "bg-white text-primary" : "bg-muted text-muted-foreground"
                )}>
                    <Check className="size-2.5 md:size-3" strokeWidth={4} />
                </div>
            );
        }
        return <Minus className="size-4 opacity-50" />;
    }

    if (typeof value === "string") {
        if (value === "✓") {
            return (
                <div className={cn(
                    "flex size-4 md:size-5 items-center justify-center rounded-full",
                    isModern ? "bg-white text-primary" : "bg-muted text-muted-foreground"
                )}>
                    <Check className="size-2.5 md:size-3" strokeWidth={4} />
                </div>
            );
        }
        return <Text className={cn("text-lg font-bold", isModern ? "text-primary-foreground" : "")}>{value}</Text>;
    }

    return value;
}

function renderTextValue(value: React.ReactNode | string | boolean) {
    if (typeof value === "string" && value !== "✓") return value;
    if (typeof value === "boolean" && !value) return "Not supported";
    if (typeof value === "boolean" && value) return "Supported";
    return value;
}
