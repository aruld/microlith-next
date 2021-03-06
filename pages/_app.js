import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import NProgress from 'nprogress'

import SEO from '../next-seo.config'

import BaseLayout from '~layouts/BaseLayout'

import '~styles/index.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

/* eslint-disable no-undef */
Router.events.on('routeChangeComplete', (url) => {
  NProgress.done()

  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window.gtag('config', 'G-QC2JC773S6', {
        page_location: url,
        page_title: document.title,
      })
    }, 0)
  }
})
/* eslint-enable no-undef */

Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default MyApp
