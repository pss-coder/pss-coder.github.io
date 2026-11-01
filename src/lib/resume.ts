import { readFile } from 'fs/promises'
import path from 'path'

export interface SocialLink {
  platform: string
  label: string
  url: string
}

export interface WorkExperience {
  company: string
  title: string
  start: string
  end: string
  location: string
  summary: string
  skills: string[]
}

export interface EducationEntry {
  institution: string
  qualification: string
  start: string
  end: string
}

export interface ResumeContent {
  heroIntro: string
  bio: string[]
  workExperiences: WorkExperience[]
  education: EducationEntry[]
  skills: string[]
  socialLinks: SocialLink[]
}

const resumePath = path.join(process.cwd(), 'content', 'resume', 'resume.json')

export async function getResume() {
  const file = await readFile(resumePath, 'utf8')
  return JSON.parse(file) as ResumeContent
}
