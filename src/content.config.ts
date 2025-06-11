import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

const ALL_WORK = defineCollection({
  loader: glob({ pattern: "work-content/**/*.md" }),
});

const ANIMATION_WORK = defineCollection({
  loader: glob({ pattern: "work-content/animation/*.md" }),
});

const WEB_WORK = defineCollection({
  loader: glob({ pattern: "work-content/web/*.md" }),
});

const VIDEO_WORK = defineCollection({
  loader: glob({ pattern: "work-content/video/*.md" }),
});

const DIGITAL_WORK = defineCollection({
  loader: glob({ pattern: "work-content/digital/*.md" }),
});

export const collections = {
  work: ALL_WORK,
  animation_work: ANIMATION_WORK,
  web_work: WEB_WORK,
  video_work: VIDEO_WORK,
  digital_work: DIGITAL_WORK,
};
