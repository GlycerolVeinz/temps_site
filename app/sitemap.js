import { fetchSanityData } from '@/sanity/lib/fetchData';

export default async function sitemap() {
  const baseUrl = 'https://temporaryfriends.fun';

  // Fetch dynamic slugs
  const discSlugs = await fetchSanityData(`*[_type == "disc"]{ "slug": slug.current }`);

  const dynamicRoutes = discSlugs
    .filter(disc => disc.slug)
    .map((disc) => ({
      url: `${baseUrl}/music/${disc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/music`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shows`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/band`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/streaming`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...dynamicRoutes];
}