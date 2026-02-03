import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { digitalAgencyTheme } from "@repo/themes";

function getStaticVariables(theme: typeof digitalAgencyTheme) {
    const vars: Record<string, string> = {};
    Object.entries(theme.colors).forEach(([k, v]) => {
        vars[`--color-${k}`] = v;
    });
    Object.entries(theme.borderRadius).forEach(([k, v]) => {
        vars[`--radius-${k}`] = v;
    });
    return vars;
}

function getResponsiveCss(theme: typeof digitalAgencyTheme) {
    if (!theme.fontSize) return "";

    let css = ":root {\\n";
    Object.entries(theme.fontSize).forEach(([k, v]) => {
        // @ts-ignore - v is inferred as string | object but we know it's object now
        css += `  --text-${k}: ${v.default};\\n`;
    });
    css += "}\\n";

    css += "@media (max-width: 1024px) {\\n  :root {\\n";
    Object.entries(theme.fontSize).forEach(([k, v]) => {
        // @ts-ignore
        if (v.tablet) css += `    --text-${k}: ${v.tablet};\\n`;
    });
    css += "  }\\n}\\n";

    css += "@media (max-width: 640px) {\\n  :root {\\n";
    Object.entries(theme.fontSize).forEach(([k, v]) => {
        // @ts-ignore
        if (v.mobile) css += `    --text-${k}: ${v.mobile};\\n`;
    });
    css += "  }\\n}\\n";

    return css;
}

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const interTight = Inter_Tight({
    variable: "--font-heading",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Abcon Proposal",
    description: "Abcon Group Proposal Site",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <style dangerouslySetInnerHTML={{ __html: getResponsiveCss(digitalAgencyTheme) }} />
            </head>
            <body
                className={`${inter.variable} ${interTight.variable} antialiased`}
                style={getStaticVariables(digitalAgencyTheme) as React.CSSProperties}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
