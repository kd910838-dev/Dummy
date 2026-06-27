import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

export default function SEO({ title, description, keywords, canonicalPath }: SeoProps) {
  useEffect(() => {
    // 1. Update page title
    document.title = title;

    // 2. Update page description meta tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update keywords meta tag
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // 4. Update canonical link tag dynamically
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const origin = 'https://sprintx06.netlify.app';
    // Use canonicalPath if specified, otherwise fallback to window.location.pathname
    const rawPath = canonicalPath !== undefined ? canonicalPath : window.location.pathname;
    const cleanPath = rawPath.endsWith('/') && rawPath.length > 1 ? rawPath.slice(0, -1) : rawPath;
    canonicalLink.setAttribute('href', `${origin}${cleanPath}`);
  }, [title, description, keywords, canonicalPath]);

  return null;
}
