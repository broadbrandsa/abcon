# CMS Content Client

A shared, read-only TypeScript client for fetching content from the internal CMS API.

## Usage

```bash
pnpm add @repo/content-client
```

```typescript
import { getPostsByBrand, getPostByBrandAndSlug } from "@repo/content-client";

// List all posts for a brand
const posts = await getPostsByBrand("digital-agency");

// Get a single post
const post = await getPostByBrandAndSlug("digital-agency", "hello-world");
```

## Configuration

The client defaults to `http://localhost:8000` for the CMS API.
To override, set the `CMS_API_URL` environment variable.

## Error Handling

Functions throw `CMSFetchError` if the response is not OK (200-299).  
It is the caller's responsibility to catch these errors (e.g. valid 404s).

## Types

Returned data ensures strict typing against `Post` and `PostPublication` interfaces.
