import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Pawandeep.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Pawandeep from 🇸🇬. I love building things that make people’s lives a little better.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My love for technology began long before I ever wrote a line of code. 
              I still remember tinkering with an old Windows 98 computer and connecting 
              to the internet through that nostalgic dial-up tone. 
              I was endlessly curious about how it all worked. Then one day, I saw the news about the launch of the first iPhone 
              — and I was completely hooked. I knew I wanted to be part of this world where creativity meets technology.
            </p>
            <p>
             I started programming in 2015 during my Polytechnic years — three years of exploration, late-night coding sessions, 
             and countless “aha!” moments. 
             I didn’t come from an elite academic background (PSLE 150 club here 🙌), 
             but I’ve always believed that passion and perseverance matter more than grades. 
             My goal has always been simple: to learn, to help others, and to make people smile through the work I do.
            </p>
            <p>
              Doing well in Polytechnic opened an unexpected door — a full scholarship to pursue a degree in Computer Science at university. 
              It was more than just an academic journey; it was about stepping out of my comfort zone, 
              surrounding myself with people who inspired me, and diving deep into entrepreneurship and innovation.
            </p>
            <p>
              During my four years at university, I had the incredible opportunity to study abroad 
              — from the creative culture of Sweden to the dynamic energy of the United States. 
              Those experiences taught me the beauty of diversity, the importance of empathy, and how technology should ultimately serve real human needs.
            </p>
            <p>
              In 2018, I was diagnosed with glaucoma — a chronic condition that deeply changed my perspective. 
              It was tough, but it also reminded me to slow down, take care of my health, and use my experience to raise awareness. 
              It made me even more determined to design solutions that make a difference in people’s lives.
            </p>
            <p>
              Today, I continue to be driven by curiosity, empathy, and a desire to build meaningful things that bring people together 
              and make everyday life just a little better.
            </p>
            {/* <p>
              When I’m not coding, you’ll probably find me watching shows across genres (current 2025 favorite: The Pitt and Adolescence), going for walks in the park, or volunteering with Repair Kopitiam on weekends. And sometimes, I’ll just be coding random ideas — not because I have to, but 
              because I genuinely love keeping my mind active and exploring what’s next.
            </p> */}
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/pss_coder?s=21" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://github.com/pss-coder" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/pss-coder/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:pawandeepse@me.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              pawandeepse@me.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
