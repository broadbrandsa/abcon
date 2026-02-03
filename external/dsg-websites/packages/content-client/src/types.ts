export interface Brand {
    slug: string;
    name: string;
    id: number;
    favicon_image_id?: string | null;
    favicon_image_url?: string | null;
    favicon_url?: string | null;
    default_meta_title?: string | null;
    default_meta_description?: string | null;
    page_meta?: BrandPageMetaMap | null;
    website_url?: string | null;
    contact_phone_label?: string | null;
    contact_phone_e164?: string | null;
    contact_phone_display?: string | null;
    contact_email?: string | null;
    social_links?: Array<{
        label: string;
        url: string;
        icon?: string | null;
    }> | null;
}

export interface PostPublication {
    slug: string;
    brand_id: number;
    brand_slug?: string | null;
    id: number;
    post_id: number;
    published_at: string; // stored as datetime in DB, serialized as string
}

export interface Tag {
    id: number;
    slug: string;
    name: string;
}

export interface Author {
    id: number;
    slug: string;
    name: string;
    title: string;
    link?: string | null;
    avatar_image_id?: string | null;
    avatar_image_url?: string | null;
    website_slugs?: string[] | null;
    websites?: Brand[] | null;
}

export interface Location {
    id: string;
    slug: string;
    name: string;
    address: string;
    google_maps_url: string;
    image_url?: string | null;
    website_slugs?: string[] | null;
    is_active?: boolean | null;
    created_at?: string | null;
    updated_at?: string | null;
}

export interface Post {
    title: string;
    pill_label: string;
    body?: string | null;
    hero_image_id: string; // Mandatory
    hero_image_url?: string | null;
    meta_title?: string | null;
    meta_description?: string | null;
    status: string;
    id: number;
    created_at: string;
    updated_at: string;
    publications: PostPublication[];
    tags: Tag[];
    authors: Author[];
}

export interface BrandPageMeta {
    title: string;
    description: string;
}

export interface BrandPageMetaMap {
    home: BrandPageMeta;
    blog_index: BrandPageMeta;
    blog_post: BrandPageMeta;
}

export interface BrandConfig {
    brandSlug: string;
    brandName: string;
    faviconUrl: string | null;
    defaultMetaTitle: string;
    defaultMetaDescription: string;
    pageMeta: BrandPageMetaMap;
}
