"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@repo/ui";
import { cn } from "@/lib/utils";

const broadbrandLogo = "/logos/broadbrand.png";
const brandLogos = {
    "/strive": "/logos/strive-logo.png",
    "/abcon-developments": "/logos/Abcon logo.png",
    "/abcon": "/logos/Abcon logo.png",
    "/craft-homes": "/logos/Craft Homes logo.svg",
    "/craft": "/logos/Craft Homes logo.svg",
};

export function Header() {
    const pathname = usePathname();
    const brandLogoSrc = brandLogos[pathname as keyof typeof brandLogos];

    const navLinkClass = (href: string) =>
        cn(
            "text-sm font-medium leading-normal transition-colors",
            pathname === href ? "text-white" : "text-white/70 hover:text-white"
        );

    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/80 bg-black">
            <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <Link href="/" className="text-primary">
                        {/* Using img for now as next/image requires width/height or fill */}
                        <img
                            src={broadbrandLogo}
                            alt="Broadbrand"
                            className="h-8 w-auto object-contain invert brightness-0"
                        />
                    </Link>
                    {brandLogoSrc && (
                        <img src={brandLogoSrc} alt="Brand logo" className="h-8 w-auto object-contain" />
                    )}
                </div>
                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="/" className={navLinkClass("/")}>
                        Home
                    </Link>
                    <Link
                        href="/craft"
                        className={navLinkClass("/craft")}
                    >
                        Craft Homes
                    </Link>
                    <Link
                        href="/abcon"
                        className={navLinkClass("/abcon")}
                    >
                        Abcon
                    </Link>
                    <Link
                        href="/strive"
                        className={navLinkClass("/strive")}
                    >
                        Strive
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button
                        as="a"
                        href="mailto:Shakierg@broadbrand.co.za"
                        className="h-10 rounded-lg bg-white px-6 text-sm font-bold text-black shadow-sm transition-all hover:bg-white/90"
                    >
                        Let's Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
}
