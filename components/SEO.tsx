import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
}

export default function SEO({ title, ...rest }: SEOProps): React.ReactElement {
  const router = useRouter()

  return (
    <NextSeo
      title={`${title} - Arul Dhesiaseelan`}
      canonical={`https://microlith.dev${router.asPath}`}
      openGraph={{
        url: `https://microlith.dev${router.asPath}`,
        title: `${title} - Arul Dhesiaseelan`,
      }}
      {...rest}
    />
  )
}