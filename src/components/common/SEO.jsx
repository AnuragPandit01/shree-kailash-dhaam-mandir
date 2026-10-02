import { Helmet } from "react-helmet-async";
import siteConfig from "../../config/siteConfig";

function SEO({
  title = siteConfig.defaultTitle,
  description = siteConfig.description,
  canonical,
  image = siteConfig.logo,
  type = "website",
}) {
  const canonicalUrl = canonical
    ? `${siteConfig.url}${canonical}`
    : siteConfig.url;

  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:site_name"
        content={siteConfig.name}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />
    </Helmet>
  );
}

export default SEO;