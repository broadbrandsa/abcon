import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
                primary: {
                    DEFAULT: "var(--color-primary)",
                    foreground: "var(--color-primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--color-secondary)",
                    foreground: "var(--color-secondary-foreground)",
                },
                muted: {
                    DEFAULT: "var(--color-muted)",
                    foreground: "var(--color-muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--color-accent)",
                    foreground: "var(--color-accent-foreground)",
                },
                border: "var(--color-border)",
            },
            borderRadius: {
                pill: "var(--radius-pill)",
                block: "var(--radius-block)",
                lg: "var(--radius-lg)",
                md: "var(--radius-md)",
                sm: "var(--radius-sm)",
            },
            fontSize: {
                h1: "var(--text-h1)",
                h2: "var(--text-h2)",
                h3: "var(--text-h3)",
                h4: "var(--text-h4)",
                h5: "var(--text-h5)",
                p1: "var(--text-p1)",
                p2: "var(--text-p2)",
            },
            fontFamily: {
                heading: "var(--font-heading)",
                sans: "var(--font-sans)",
                mono: "var(--font-mono)",
            },
        },
    },
    plugins: [],
};
export default config;
