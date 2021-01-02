const title = 'Arul Dhesiaseelan'
const description = 'Software Engineer'

const SEO = {
  title,
  description,
  canonical: 'https://microlith.dev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://microlith.dev',
    title,
    description,
    images: [
      {
        url: 'https://microlith.dev/me.jpeg',
        alt: title,
        width: 460,
        height: 460,
      },
    ],
  },
  twitter: {
    handle: '@aruld',
    site: '@aruld',
    cardType: 'summary_large_image',
  },
}

export default SEO
