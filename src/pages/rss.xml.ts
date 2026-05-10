import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/config";

export async function GET(context: { site: URL }) {
  const posts = await getCollection("posts");
  const sortedPosts = posts.sort((a, b) =>
    new Date(b.data.pubDatetime).getTime() - new Date(a.data.pubDatetime).getTime()
  );
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: context.site,
    items: sortedPosts.map((post) => ({
      link: `/posts/${post.id}/`,
      title: post.data.title,
      pubDate: new Date(post.data.pubDatetime),
      description: post.data.excerpt ?? "",
    })),
  });
}
