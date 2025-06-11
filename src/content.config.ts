import { defineCollection, z, type CollectionConfig } from "astro:content";

import { glob } from "astro/loaders";

interface Schema {
  title: string;
  slug: string;
  description: string;
  image: string;
  image_alt: string;
}

const schema: CollectionConfig<any>["schema"] = ({ image }: any) =>
  z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    image: image(),
    image_alt: z.string(),
  });

const ALL_WORK = defineCollection({
  loader: glob({ pattern: "work-content/**/*.md" }),
  schema,
});

const ANIMATION_WORK = defineCollection({
  loader: glob({ pattern: "work-content/animation/*.md" }),
  schema,
});

const WEB_WORK = defineCollection({
  loader: glob({ pattern: "work-content/web/*.md" }),
  schema,
});

const VIDEO_WORK = defineCollection({
  loader: glob({ pattern: "work-content/video/*.md" }),
  schema,
});

const DIGITAL_WORK = defineCollection({
  loader: glob({ pattern: "work-content/digital/*.md" }),
  schema,
});

export const collections = {
  work: ALL_WORK,
  animation_work: ANIMATION_WORK,
  web_work: WEB_WORK,
  video_work: VIDEO_WORK,
  digital_work: DIGITAL_WORK,
};
