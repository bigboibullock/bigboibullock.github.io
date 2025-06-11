import { getCollection } from "astro:content";

export type Category = "animation" | "web" | "video" | "digital" | "all";

export async function getCategoryCollection(category: Category) {
  switch (category) {
    case "animation":
      return await getCollection("animation_work");
    case "web":
      return await getCollection("web_work");
    case "video":
      return await getCollection("video_work");
    case "digital":
      return await getCollection("digital_work");
    default:
      return await getCollection("work");
  }
}
