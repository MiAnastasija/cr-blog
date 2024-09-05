/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://capitalrevo.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};

module.exports = config;
