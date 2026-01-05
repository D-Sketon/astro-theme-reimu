import { getCollection } from "astro:content";

let categoriesCount: Map<string, number> | null = null;

async function getCategoriesCount() {
  if (categoriesCount) return categoriesCount;

  const posts = await getCollection("blog");
  categoriesCount = new Map();

  posts.forEach((post) => {
    if (Array.isArray(post.data.categories)) {
      post.data.categories.forEach((category) => {
        categoriesCount!.set(
          category,
          (categoriesCount!.get(category) || 0) + 1
        );
      });
    }
  });

  return categoriesCount;
}

export default async function parseHomeCategories(categories: string) {
  const categoryDir = "categories"; // default

  const getCategoryCount = async (category: string) => {
    const counts = await getCategoriesCount();
    return counts.get(category) || 0;
  };

  return {
    url: `/${categoryDir}/${encodeURIComponent(categories)}`,
    name: categories,
    count: await getCategoryCount(categories),
  };
}
