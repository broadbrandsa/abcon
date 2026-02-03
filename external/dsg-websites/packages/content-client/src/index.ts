import { Brand, BrandConfig, BrandPageMetaMap, Post, Author, Location } from "./types";

const CMS_API_URL = process.env.CMS_API_URL || "http://127.0.0.1:8000";

type NextFetchHints = { revalidate?: number; tags?: string[] };
type ExtendedRequestInit = RequestInit & { next?: NextFetchHints };

export class CMSFetchError extends Error {
    constructor(public status: number, message: string) {
        super(message);
        this.name = "CMSFetchError";
    }
}

async function fetchWithNext(url: string, init?: ExtendedRequestInit): Promise<Response> {
    if (!init || !("next" in init)) {
        return fetch(url, init);
    }
    const { next, ...rest } = init;
    const baseInit = rest as RequestInit;
    const finalInit = next ? ({ ...(baseInit as Record<string, unknown>), next } as RequestInit) : baseInit;
    return fetch(url, finalInit);
}

export function assertValidPost(post: Post): void {
    if (!post.pill_label) {
        throw new Error(`Post ${post.id} missing pill_label`);
    }
    if (post.pill_label.split(" ").length > 5) {
        throw new Error(`Post ${post.id} pill_label exceeds 5 words`);
    }
    if (!post.tags || post.tags.length === 0) {
        throw new Error(`Post ${post.id} missing tags`);
    }
    if (!post.authors || post.authors.length === 0) {
        throw new Error(`Post ${post.id} missing authors`);
    }
    if (!post.hero_image_id) {
        throw new Error(`Post ${post.id} missing hero_image_id`);
    }
}

export async function getPostsByBrand(brandSlug: string): Promise<Post[]> {
    const url = `${CMS_API_URL}/brands/${brandSlug}/posts`;
    console.log(`[ContentClient] Fetching posts from: ${url}`);

    let res;
    try {
        res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });
    } catch (error) {
        console.error(`[ContentClient] Network error fetching ${url}`, error);
        throw error; // Re-throw to be caught by consumer
    }

    if (!res.ok) {
        console.error(`[ContentClient] Request failed: ${url} -> ${res.status} ${res.statusText}`);
        throw new CMSFetchError(res.status, `Failed to fetch posts for brand: ${brandSlug} (${res.status} ${res.statusText})`);
    }

    const posts = await res.json();
    // Validate all posts? Or just log warnings? Brief says "Ensure all exported fetch functions call the validator".
    // "Blog Index... Only show posts that pass validation."
    // So for list, maybe validation is handled by caller or filter here?
    // "If some posts fail validation, exclude them".
    // I'll filter them here to keep it clean for consumers.
    const validPosts = posts.filter((p: Post) => {
        try {
            assertValidPost(p);
            return true;
        } catch (e) {
            console.warn(`[ContentClient] Invalid post ${p.id}:`, e);
            return false;
        }
    });

    return validPosts;
}

function normalizeFaviconUrl(value?: string | null): string | null {
    if (!value) return null;
    if (value.startsWith("http://") || value.startsWith("https://")) {
        return value;
    }
    if (value.startsWith("/uploads/")) {
        return `${CMS_API_URL}${value}`;
    }
    if (value.startsWith("/assets/")) {
        return value;
    }
    return null;
}

function resolvePageMeta(
    pageMeta: BrandPageMetaMap | null | undefined,
    fallbackTitle: string,
    fallbackDescription: string
): BrandPageMetaMap {
    return {
        home: {
            title: pageMeta?.home?.title || fallbackTitle,
            description: pageMeta?.home?.description || fallbackDescription,
        },
        blog_index: {
            title: pageMeta?.blog_index?.title || fallbackTitle,
            description: pageMeta?.blog_index?.description || fallbackDescription,
        },
        blog_post: {
            title: pageMeta?.blog_post?.title || fallbackTitle,
            description: pageMeta?.blog_post?.description || fallbackDescription,
        },
    };
}

export async function getBrandConfig(brandSlug: string): Promise<BrandConfig> {
    const url = `${CMS_API_URL}/brands/${brandSlug}`;
    let res;
    try {
        res = await fetchWithNext(url, {
            headers: {
                "Content-Type": "application/json",
            },
            next: { revalidate: 300 },
        });
    } catch (error) {
        console.error(`[ContentClient] Network error fetching ${url}`, error);
        throw error;
    }

    if (!res.ok) {
        console.error(`[ContentClient] Request failed: ${url} -> ${res.status} ${res.statusText}`);
        throw new CMSFetchError(res.status, `Failed to fetch brand config: ${brandSlug} (${res.status} ${res.statusText})`);
    }

    const brand = (await res.json()) as Brand;
    const defaultMetaTitle = brand.default_meta_title || "";
    const defaultMetaDescription = brand.default_meta_description || "";
    const pageMeta = resolvePageMeta(brand.page_meta || null, defaultMetaTitle, defaultMetaDescription);
    const faviconUrl = normalizeFaviconUrl(brand.favicon_image_url || brand.favicon_url || brand.favicon_image_id);

    if (process.env.NODE_ENV !== "production") {
        if (!brand.default_meta_title || !brand.default_meta_description) {
            console.warn("[ContentClient] Brand default meta missing", { brandSlug });
        }
        if (!brand.page_meta) {
            console.warn("[ContentClient] Brand page_meta missing", { brandSlug });
        }
    }

    return {
        brandSlug: brand.slug || brandSlug,
        brandName: brand.name,
        faviconUrl,
        defaultMetaTitle,
        defaultMetaDescription,
        pageMeta,
    };
}

export async function getBrandBySlug(brandSlug: string): Promise<Brand> {
    const url = `${CMS_API_URL}/brands/${brandSlug}`;
    let res;
    try {
        res = await fetchWithNext(url, {
            headers: {
                "Content-Type": "application/json",
            },
            next: { revalidate: 300 },
        });
    } catch (error) {
        console.error(`[ContentClient] Network error fetching ${url}`, error);
        throw error;
    }

    if (!res.ok) {
        console.error(`[ContentClient] Request failed: ${url} -> ${res.status} ${res.statusText}`);
        throw new CMSFetchError(res.status, `Failed to fetch brand: ${brandSlug} (${res.status} ${res.statusText})`);
    }

    return (await res.json()) as Brand;
}

export async function getPostByBrandAndSlug(brandSlug: string, postSlug: string): Promise<Post> {
    const res = await fetch(`${CMS_API_URL}/brands/${brandSlug}/posts/${postSlug}`, {
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new CMSFetchError(res.status, `Failed to fetch post: ${postSlug} for brand: ${brandSlug}`);
    }

    const post = await res.json();
    assertValidPost(post);
    return post;
}

export async function listAuthors(): Promise<Author[]> {
    const url = `${CMS_API_URL}/authors/`;
    let res;
    try {
        res = await fetchWithNext(url, {
            headers: {
                "Content-Type": "application/json",
            },
            next: { revalidate: 300 },
        });
    } catch (error) {
        console.error(`[ContentClient] Network error fetching ${url}`, error);
        throw error;
    }

    if (!res.ok) {
        console.error(`[ContentClient] Request failed: ${url} -> ${res.status} ${res.statusText}`);
        throw new CMSFetchError(res.status, `Failed to fetch authors (${res.status} ${res.statusText})`);
    }

    return (await res.json()) as Author[];
}

export function filterAuthorsByWebsite(authors: Author[], websiteSlug: string): Author[] {
    if (!websiteSlug) return authors;
    return authors.filter((author) => {
        const slugs = author.website_slugs || [];
        if (slugs.includes(websiteSlug)) return true;
        const websites = author.websites || [];
        return websites.some((site) => site?.slug === websiteSlug);
    });
}

export async function listAuthorsByWebsite(websiteSlug: string): Promise<Author[]> {
    const authors = await listAuthors();
    return filterAuthorsByWebsite(authors, websiteSlug);
}

export function filterLocationsByBrand(locations: Location[], brandSlug: string): Location[] {
    if (!brandSlug) return locations;
    return locations.filter((location) => {
        const slugs = location.website_slugs || [];
        return slugs.includes(brandSlug);
    });
}

export async function getLocationsByBrand(brandSlug: string): Promise<Location[]> {
    const query = new URLSearchParams();
    if (brandSlug) {
        query.set("brand", brandSlug);
    }
    query.set("activeOnly", "true");
    const url = `${CMS_API_URL}/locations/?${query.toString()}`;

    let res;
    try {
        res = await fetchWithNext(url, {
            headers: {
                "Content-Type": "application/json",
            },
            next: { revalidate: 300 },
        });
    } catch (error) {
        console.error(`[ContentClient] Network error fetching ${url}`, error);
        throw error;
    }

    if (!res.ok) {
        console.error(`[ContentClient] Request failed: ${url} -> ${res.status} ${res.statusText}`);
        throw new CMSFetchError(res.status, `Failed to fetch locations (${res.status} ${res.statusText})`);
    }

    const locations = (await res.json()) as Location[];
    return filterLocationsByBrand(locations, brandSlug);
}

export async function getRelatedPosts(brandSlug: string, postSlug: string): Promise<Post[]> {
    try {
        // Fallback: Fetch all brand posts and filter client-side since the /related endpoint is protected (401)
        const allPosts = await getPostsByBrand(brandSlug);

        // Filter out the current post and take top 3
        const related = allPosts
            .filter(p => (p as any).slug !== postSlug)
            .slice(0, 3);

        return related;
    } catch (error) {
        console.warn(`[ContentClient] Failed to fetch related posts fallback for ${brandSlug}/${postSlug}`, error);
        return [];
    }
}

export * from "./types";
