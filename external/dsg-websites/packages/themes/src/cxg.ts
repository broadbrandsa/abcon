export const cxgTheme = {
    colors: {
        background: "#ffffff",
        foreground: "#0F172A", // Dark Blue as primary text
        primary: "#1F3F7A", // Light Blue
        "primary-foreground": "#ffffff",
        secondary: "#0F172A", // Dark Blue
        "secondary-foreground": "#ffffff",
        muted: "#F1F5F9", // Light slate for muted backgrounds
        "muted-foreground": "#64748B", // Slate 500
        accent: "#F1F5F9",
        "accent-foreground": "#0F172A",
        border: "#E2E8F0",
    },
    borderRadius: {
        pill: "200px",
        block: "20px",
        small: "8px",
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
    },
    fontSize: {
        h1: { default: "54px", tablet: "44px", mobile: "36px" },
        h2: { default: "42px", tablet: "36px", mobile: "28px" },
        h3: { default: "32px", tablet: "28px", mobile: "24px" },
        h4: { default: "24px", tablet: "22px", mobile: "20px" },
        h5: { default: "10px", tablet: "8px", mobile: "6px" },
        p1: { default: "16px", tablet: "16px", mobile: "15px" },
        p2: { default: "12px", tablet: "12px", mobile: "12px" },
    },
    fontFamily: {
        heading: "var(--font-heading)",
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
    },
};
