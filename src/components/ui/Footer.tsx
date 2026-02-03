"use client";

import Link from "next/link";
import { Container, Text } from "@repo/ui";

export function Footer() {
    return (
        <footer className="border-t border-black/80 bg-black py-8">
            <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <Text className="text-sm text-white/80">
                    © 2026 Broadbrand. All rights reserved.
                </Text>
                <Link
                    href="mailto:Shakierg@broadbrand.co.za"
                    className="text-sm font-semibold text-white"
                >
                    Shakierg@broadbrand.co.za
                </Link>
            </Container>
        </footer>
    );
}
