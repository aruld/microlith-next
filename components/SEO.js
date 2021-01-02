import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export default function SEO({ title, ...rest }) {
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

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}
