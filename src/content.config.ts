import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "work-content/**/*.md" }),
});

export const collections = { work };
