import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
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
// import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { useEffect } from 'react'

import dxdhub from '@/images/logos/dxdhub.png'

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

interface Role {
  company: string;
  title: string;
  description: string;
  logo?: string; // optional image URL
  skills: string[];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string }; 
}

let resume: Array<Role> = [
  {
    company: "DxdHub",
    title: "Software Engineer",
    description: "TODO",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    logo: dxdhub.src,
    start: "2024",
    end: "2025"
  },
  {
    company: "Apple",
    title: "Specialist",
    description: "TODO",
    skills: ["Customer Experience", "Hardware Support", "Team Collaboration"],
    start: "Jun",
    end: "Dec 2024",
  },
  {
    company: "MOH Office for Healthcare Transformation",
    title: "Healthcare Product Engineer",
    description: "TODO",
    skills: ["React", "Python", "Healthcare IT", "Product Design"],
    start: "Jan",
    end: "Jun 2024",
  },
  {
    company: "TradeBay",
    title: "Product Owner",
    description: "TODO",
    skills: ["Agile", "Product Strategy", "UX", "Stakeholder Management"],
    start: "2022",
    end: "2022",
  },
];

function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  const startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;
  const endLabel = typeof role.end === "string" ? role.end : role.end.label;
  const endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex flex-col rounded-2xl p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
      {/* Top section: logo + role info */}
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
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time> —{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </p>
      </div>

      {/* Description */}
      {/* {role.description && (
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug">
          {role.description}
        </p>
      )} */}

      {/* Skills badges */}
      {/* {role.skills && role.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700
                dark:bg-zinc-700 dark:text-zinc-100
                transition-colors
              "
            >
              {skill}
            </span>
          ))}
        </div>
      )} */}
    </li>
  );
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center">
        Work Experience
      </h2>

      <ol className="mt-6 space-y-4">
        {resume.map((role, i) => (
          <Role key={i} role={role} />
        ))}
      </ol>

      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  );
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
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Engineer & Product Builder with a Purpose
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
           I’m Pawandeep — a Software Engineer and Product Builder passionate 
           about creating impactful digital solutions. 
           I thrive at the intersection of technology, design, and user experience.
           
          I love turning complex problems into simple, elegant solutions.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            When I’m not coding, you’ll probably find me watching shows across genres, going for walks in the park, 
            or volunteering with Repair Kopitiam on weekends. And sometimes, I’ll just be coding random ideas — not because I have to, but 
              because I genuinely love keeping my mind active and exploring what’s next.
          </p>
          <div className="mt-6 flex gap-6">
            {/* TODO: Social MEDIA Links */}
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <Resume />
      </Container>
    </>
  )
}
