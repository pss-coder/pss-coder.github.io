import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { Prose } from '@/components/Prose'
import { SimpleLayout } from '@/components/SimpleLayout'
import { withBasePath } from '@/lib/assetPath'
import { getAllProjects, type Project } from '@/lib/projects'

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 6.75 8 9.75l3.25-3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

function getProjectLink(project: Project) {
  const href = project.liveUrl || project.repoUrl

  if (!href) {
    return null
  }

  try {
    return {
      href,
      label: new URL(href).hostname.replace(/^www\./, ''),
    }
  } catch {
    return { href, label: href }
  }
}

export default async function Projects() {
  const projects = await getAllProjects()

  return (
    <SimpleLayout
      title="Things I’ve made to make a positive impact to the world, and for my growth."
      intro="I’ve worked on several projects over the years but these are the ones that I’m most proud of. Many of them are available on github for access, so if you see something that interests, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => {
          const link = getProjectLink(project)

          return (
            <Card as="li" key={project.slug}>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                {project.coverImage ? (
                  <Image
                    src={withBasePath(project.coverImage)}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 400px, 100vw"
                  />
                ) : null}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {project.logo ? (
                  <Image
                    src={withBasePath(project.logo)}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-lg object-contain"
                  />
                ) : null}
                <Card.Title href={link?.href}>{project.title}</Card.Title>
              </div>

              <Card.Description>{project.summary}</Card.Description>

              {project.techStack.length > 0 ? (
                <div className="relative z-20 mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors dark:bg-zinc-700 dark:text-zinc-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}

              {project.bodyHtml ? (
                <details className="group/details relative z-30 mt-4 w-full">
                  <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-teal-500 select-none [&::-webkit-details-marker]:hidden">
                    <span className="group-open/details:hidden">More details</span>
                    <span className="hidden group-open/details:inline">Show less</span>
                    <ChevronDownIcon className="h-4 w-4 stroke-current transition group-open/details:rotate-180" />
                  </summary>
                  <Prose
                    className="mt-3 text-sm"
                    dangerouslySetInnerHTML={{ __html: project.bodyHtml }}
                  />
                </details>
              ) : null}

              {link ? (
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{link.label}</span>
                </p>
              ) : null}
            </Card>
          )
        })}
        {projects.length === 0 ? (
          <li className="text-sm text-zinc-600 dark:text-zinc-400">
            No projects published yet.
          </li>
        ) : null}
      </ul>
    </SimpleLayout>
  )
}
