export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Innoweb.uz',
    url: 'https://innoweb.uz',
    logo: 'https://innoweb.uz/logo.png',
    description: 'Professional web saytlar, Telegram botlar, AI chatbotlar va biznes avtomatlashtirish xizmatlari',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nurafshon yo\'li 12',
      addressLocality: 'Toshkent',
      addressCountry: 'UZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+998-99-644-84-44',
      contactType: 'customer service',
      email: 'akramjon10000@gmail.com',
    },
    sameAs: [
      'https://t.me/Innoweb_uz',
    ],
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development',
    provider: {
      '@type': 'Organization',
      name: 'Innoweb.uz',
    },
    areaServed: 'Uzbekistan',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Saytlar',
            description: 'Landing page, E-commerce, Korporativ saytlar',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Telegram Botlar',
            description: 'Avtomatlashtirish va CRM integratsiya',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Chatbotlar',
            description: '24/7 mijozlar xizmati',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
