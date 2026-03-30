// File: seo.js
// Path: src/utils/seo.js
// Description: SEO and Open Graph meta tag utilities

import { useEffect } from 'react';

export const siteConfig = {
  siteName: 'God-Life Assembly International',
  siteUrl: 'https://gla-app.pages.dev',
  defaultDescription: 'Join us at God-Life Assembly International - A Spirit-led Christian community dedicated to worship, spreading love, and sharing the Word of God.',
  defaultImage: '/assets/images/logo.png',
  twitterHandle: '@GodLifeAssembly',
  facebookPage: 'GodLifeAssemblyInternational',
};

export const pageMetadata = {
  home: {
    title: 'God-Life Assembly - Worship, Love, and Word',
    description: 'Welcome to God-Life Assembly International. Experience transformative worship, biblical teaching, and a vibrant community of believers in Jos, Nigeria.',
    image: '/assets/images/heroBg.jpg',
    url: '/',
  },
  about: {
    title: 'About Us - God-Life Assembly International',
    description: 'Learn about God-Life Assembly International - our vision, mission, leadership, and the journey of building a Spirit-led community that transforms lives through Christ.',
    image: '/assets/images/aboutUsHero.jpg',
    url: '/about',
  },
  events: {
    title: 'Upcoming Events - God-Life Assembly',
    description: 'Join us for powerful worship services, conferences, Bible studies, and community events. Discover what\'s happening at God-Life Assembly International.',
    image: '/assets/images/eventPic.jpg',
    url: '/events',
  },
  contact: {
    title: 'Contact Us - God-Life Assembly',
    description: 'Get in touch with God-Life Assembly International. We\'d love to hear from you. Find our location, service times, and ways to connect with us.',
    image: '/assets/images/locationFinder1.jpg',
    url: '/contact',
  },
  outreach: {
    title: 'Missions & Outreach - God-Life Assembly',
    description: 'Discover our global missions and local outreach initiatives. Join us in spreading the Gospel and making a difference in communities around the world.',
    image: '/assets/images/MissionsBg.jpg',
    url: '/outreach',
  },
  resources: {
    title: 'Resources - God-Life Assembly',
    description: 'Access sermons, teachings, podcasts, and spiritual resources to deepen your faith and grow in your relationship with God.',
    image: '/assets/images/resource1.png',
    url: '/resources',
  },
  give: {
    title: 'Give - Support God\'s Work | God-Life Assembly',
    description: 'Partner with us in advancing God\'s kingdom. Your generous giving helps us reach more people with the Gospel and transform lives through Christ.',
    image: '/assets/images/give.jpg',
    url: '/give',
  },
};

/**
 * Updates the document meta tags for SEO and Open Graph
 * @param {Object} metadata - Page metadata configuration
 * @param {string} metadata.title - Page title
 * @param {string} metadata.description - Page description
 * @param {string} metadata.image - Page image URL
 * @param {string} metadata.url - Page URL path
 * @param {string} metadata.type - Open Graph type (default: 'website')
 */
export const updateMetaTags = (metadata) => {
  const {
    title = siteConfig.siteName,
    description = siteConfig.defaultDescription,
    image = siteConfig.defaultImage,
    url = '/',
    type = 'website',
  } = metadata;

  // Update document title
  document.title = title;

  // Helper function to update or create meta tag
  const setMetaTag = (attribute, key, value) => {
    let element = document.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    element.setAttribute('content', value);
  };

  // Standard meta tags
  setMetaTag('name', 'description', description);
  setMetaTag('name', 'keywords', 'God-Life Assembly, Church, Jos Nigeria, Christian Community, Worship, Bible Teaching, Faith, Gospel, Missions');
  setMetaTag('name', 'author', 'God-Life Assembly International');

  // Open Graph meta tags
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:image', `${siteConfig.siteUrl}${image}`);
  setMetaTag('property', 'og:url', `${siteConfig.siteUrl}${url}`);
  setMetaTag('property', 'og:type', type);
  setMetaTag('property', 'og:site_name', siteConfig.siteName);
  setMetaTag('property', 'og:locale', 'en_US');

  // Twitter Card meta tags
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:site', siteConfig.twitterHandle);
  setMetaTag('name', 'twitter:title', title);
  setMetaTag('name', 'twitter:description', description);
  setMetaTag('name', 'twitter:image', `${siteConfig.siteUrl}${image}`);
  setMetaTag('name', 'twitter:creator', siteConfig.twitterHandle);

  // Additional Facebook meta tags
  setMetaTag('property', 'fb:pages', siteConfig.facebookPage);
};

/**
 * React hook for updating meta tags
 * @param {string} pageName - Name of the page from pageMetadata
 * @param {Object} customMetadata - Optional custom metadata to override defaults
 */
export const usePageMetadata = (pageName, customMetadata = {}) => {
  useEffect(() => {
    const metadata = {
      ...pageMetadata[pageName],
      ...customMetadata,
    };
    updateMetaTags(metadata);
  }, [pageName, customMetadata]);
};
