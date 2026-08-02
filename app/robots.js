export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
    },
    sitemap: 'https://temporaryfriends.fun/sitemap.xml',
  };
}