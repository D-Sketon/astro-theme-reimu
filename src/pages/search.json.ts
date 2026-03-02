import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const searchList = sortedPosts.map((post) => ({
    id: post.id,
    data: {
      title: post.data.title,
      description: post.data.description,
      keywords: post.data.keywords,
      pubDate: post.data.pubDate,
    },
  }));

  return new Response(JSON.stringify(searchList), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
