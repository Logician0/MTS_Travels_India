import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
  schema?: Record<string, any>;
  ogType?: string;
  author?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  canonical,
  schema,
  ogType = 'website',
  author
}: SEOProps) => {
  const siteName = 'MTS Travels India';
  const defaultImage = '/images/og-image.webp';
  const baseUrl = 'https://www.mtstravelsindia.com';
  const fullCanonical = canonical || (url ? `${baseUrl}${url}` : baseUrl);

  return (
    <Helmet>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || 'MTS Travels India'} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      {url && <meta property="og:url" content={`${baseUrl}${url}`} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:site" content="@mtstravelsindia" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
