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
import image1 from '@/images/photos/image-1.jpeg'
import image2 from '@/images/photos/image-2.jpeg'
import image3 from '@/images/photos/image-3.jpeg'
import image4 from '@/images/photos/image-4.jpeg'
import image5 from '@/images/photos/image-5.jpeg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import {
  getResume,
  type SocialLink as ResumeSocialLink,
  type WorkExperience,
} from '@/lib/resume'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function iconForPlatform(platform: string) {
  switch (platform) {
    case 'github':
      return GitHubIcon
    case 'instagram':
      return InstagramIcon
    case 'linkedin':
      return LinkedInIcon
    case 'x':
      return XIcon
    case 'email':
      return MailIcon
    default:
      return LinkIcon
  }
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10.5 13.5 13.5 10.5M9.172 14.828l-1.415 1.415a4 4 0 1 1-5.657-5.657l1.414-1.414a4 4 0 0 1 5.657 0M14.828 9.172l1.415-1.415a4 4 0 0 1 5.657 5.657l-1.414 1.414a4 4 0 0 1-5.657 0"
        className="stroke-zinc-400 dark:stroke-zinc-500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }: { role: WorkExperience }) {
  return (
    <li className="flex flex-col rounded-2xl p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {role.company}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {role.title}
            </p>
          </div>
        </div>

        <p
          className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap"
          aria-label={`${role.start} until ${role.end}`}
        >
          <time dateTime={role.start}>{role.start}</time> —{' '}
          <time dateTime={role.end}>{role.end}</time>
        </p>
      </div>

      <p className="mt-3 text-sm leading-snug text-zinc-600 dark:text-zinc-300">
        {role.summary}
      </p>

      {role.skills.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors dark:bg-zinc-700 dark:text-zinc-100"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : null}
    </li>
  )
}

function Resume({ roles }: { roles: WorkExperience[] }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center">
        Work Experience
      </h2>

      <ol className="mt-6 space-y-4">
        {roles.map((role, i) => (
          <Role key={i} role={role} />
        ))}
      </ol>
    </div>
  )
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Articles({ articles }: { articles: ArticleWithSlug[] }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Articles
        </h2>
        <Link
          href="/articles"
          className="text-xs font-medium text-zinc-500 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
        >
          View all
        </Link>
      </div>

      <ul className="mt-6 space-y-2">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/articles/${article.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-zinc-900 transition group-hover:text-teal-500 dark:text-zinc-100 dark:group-hover:text-teal-400">
                  {article.title}
                </p>
                <time
                  dateTime={article.date}
                  className="text-xs text-zinc-400 dark:text-zinc-500"
                >
                  {formatDate(article.date)}
                </time>
              </div>
              <ArrowRightIcon className="h-4 w-4 flex-none stroke-zinc-400 transition group-hover:stroke-teal-500 dark:stroke-zinc-500" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const images = [image1, image2, image3, image4, image5]
function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  return (
    <div className="mt-16 sm:mt-20 overflow-hidden">
      <div className="relative flex w-max animate-scroll gap-5 sm:gap-8">
        {[...images, ...images].map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={clsx(
              ' relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  const [resume, articles] = await Promise.all([getResume(), getAllArticles()])

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {resume.heroIntro}
          </h1>
          {resume.bio.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex gap-6">
            {resume.socialLinks.map((socialLink: ResumeSocialLink) => (
              <SocialLink
                key={socialLink.url}
                href={socialLink.url}
                aria-label={socialLink.label}
                icon={iconForPlatform(socialLink.platform)}
              />
            ))}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <Resume roles={resume.workExperiences} />
        {articles.length > 0 ? (
          <div className="mt-10">
            <Articles articles={articles.slice(0, 5)} />
          </div>
        ) : null}
      </Container>
    </>
  )
}
