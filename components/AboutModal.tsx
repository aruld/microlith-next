import Image from 'next/image'
import * as React from 'react'

import Button from './Button'
import Modal from './Modal'
import Prose from './Prose'
import TextLink from './TextLink'

import useAboutModalState from '~hooks/useAboutModalState'
import { ReactComponent as GitHubSvg } from '~icons/github.svg'
import { ReactComponent as LinkedInSvg } from '~icons/linkedin.svg'
import { ReactComponent as TwitterSvg } from '~icons/twitter.svg'

const AboutModal: React.FC = () => {
  const open = useAboutModalState((state) => state.open)
  const toggle = useAboutModalState((state) => state.toggle)

  return (
    <>
      <button
        type="button"
        aria-label="About the author"
        className="block w-12 h-12 overflow-hidden rounded-full shadow-md transform duration-300 hover:scale-110 hover:shadow-lg focus:outline-none ease-bounce"
        onClick={toggle}
      >
        <Image
          src="/me.png"
          alt="Picture of the author"
          width="48"
          height="48"
          layout="responsive"
        />
      </button>
      <Modal open={open} setIsOpen={toggle}>
        <div className="rounded-full overflow-hidden w-24 h-24 shadow-lg mx-auto mb-8">
          <Image
            src="/me.png"
            alt="Picture of the author"
            width="96"
            height="96"
          />
        </div>
        <h3 className="text-4xl font-extrabold text-center mb-4">
          Hi, I'm Arul
        </h3>
        <div className="grid gap-4 auto-cols-min grid-flow-col justify-center mb-8">
          <TextLink href="https://twitter.com/aruld">
            <Button
              as="div"
              iconOnly
              className="from-blue-600 to-blue-400 ring-blue-600"
            >
              <TwitterSvg className="text-2xl" />
            </Button>
          </TextLink>
          <TextLink href="https://github.com/aruld">
            <Button
              as="div"
              iconOnly
              className="from-gray-800 to-gray-600 ring-gray-800"
            >
              <GitHubSvg className="text-2xl" />
            </Button>
          </TextLink>
          <TextLink href="https://www.linkedin.com/in/aruld/">
            <Button
              as="div"
              iconOnly
              className="from-blue-700 to-blue-700 ring-blue-700"
            >
              <LinkedInSvg className="text-2xl" />
            </Button>
          </TextLink>
        </div>
        <Prose>
          <p>
            I am interested in developing elegant UIs using frameworks like{' '}
            <TextLink href="https://reactjs.org">React</TextLink>,{' '}
            <TextLink href="https://svelte.dev/">Svelte</TextLink>,{' '}
            <TextLink href="https://tailwindcss.com/">Tailwind CSS</TextLink>,{' '}
            <TextLink href="https://nextjs.org">Next.js</TextLink>, and{' '}
            <TextLink href="https://nodejs.org">Node.</TextLink>
          </p>
          <p>
            I am a software engineer with over 20 years of experience mostly in
            backend technologies. I have done some HTML, CSS (Bootstrap),
            JavaScript (jQuery) work over the years.{' '}
          </p>
          <p>
            <TextLink href="https://arul.dev/2021/01/09/mission-2021/">
              Mission 2021
            </TextLink>{' '}
            is to catch up with recent trends in front-end development and have
            fun learning new tools and frameworks and document the experience.
          </p>
        </Prose>
      </Modal>
    </>
  )
}

export default AboutModal