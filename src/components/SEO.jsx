import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, keywordsAr, canonical, image, ogType = 'website' }) => {
  const siteName = 'AFIS IT & POS Solutions';
  const defaultDescription = 'Leading provider of POS systems, receipt printers, barcode scanners, and IT hardware solutions in Doha, Qatar. Genuine products, best prices, 1 year warranty, 24/7 support.';
  const siteUrl = 'https://www.afis.qa';

  const metaTitle = title ? `${title} | ${siteName}` : `${siteName} | POS Systems & IT Hardware in Qatar`;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || 'POS systems Qatar, POS hardware Doha, receipt printers Qatar, barcode scanners Qatar, IT hardware Qatar, POS solutions Qatar';
  const metaKeywordsAr = keywordsAr || 'أنظمة نقاط البيع قطر, أجهزة POS الدوحة, طابعات الفواتير قطر, ماسحات الباركود قطر, حلول نقاط البيع قطر, برنامج كاشير قطر, افيس قطر';
  const metaImage = image || `${siteUrl}/og-image.png`;
  const metaCanonical = canonical || siteUrl;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="keywords" lang="ar" content={metaKeywordsAr} />
      <link rel="canonical" href={metaCanonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={metaCanonical} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content="en_QA" />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaCanonical} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': siteUrl },
            ...(title ? [{ '@type': 'ListItem', 'position': 2, 'name': title, 'item': metaCanonical }] : [])
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;