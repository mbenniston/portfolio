import Image from 'next/image'
import Head from 'next/head'
import { ReactNode } from 'react'
import { ProjectCard, ProjectData } from './project_card'
import { ExperienceCard, ExperienceData } from './experience_card'
import { EducationCard, EducationData } from './education_card'
import { SocialIcon, Socialdata } from './social'

import MeImage from '@public/me.jpeg'
import ProjectsData from '@data/projects.json'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <>
      <main className='bg-base-300'>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
      </main>

      <FooterSection />
    </>
  )
}

function ProjectsSection() {
  const projectList = ProjectsData.projects

  return (
    <Section>
      <SectionHeader> projects </SectionHeader>
      <div className='p-4'>
        {projectList.map(data => <ProjectCard key={data.title} data={data as ProjectData} />)}
      </div>
    </Section>
  )
}

function ExperienceSection() {
  const efs: ExperienceData = {
    name: 'Emerging Finsights',
    dataRange: '2021-2022',
    description: 'Took a lead role in a team implementing and supporting a finance news website over two versions using a range of web technologies.',
    logoURL: '/efs.jpeg'
  }

  return (
    <Section>
      <SectionHeader> experience </SectionHeader>
      <div>
        <ExperienceCard data={efs} />
      </div>
    </Section>
  )
}

function EducationSection() {
  const uon: EducationData = {
    name: 'MSci Computer Science, University of Nottingham',
    dataRange: '2019-2023',
    description: 'Though I took modules in a range of areas, I centered my study around graphics games and Human-computer-interfaces (HCI).' +
      'I took a fourth year group project dissertation where I worked in a team to produce a virtual reality cyber-security edutainment game.',
    logoURL: '/uon.jpg'
  }

  const bilborough: EducationData = {
    name: 'A-levels, Bilborough Sixth Form College',
    dataRange: '2017-2019',
    description: '',
    logoURL: '/bilborough.jpeg'
  }

  const aldercar: EducationData = {
    name: 'GCSEs, Aldercar High School',
    dataRange: '2012-2017',
    description: '',
    logoURL: '/ahs.jpg'
  }

  return (
    <Section>
      <SectionHeader> education </SectionHeader>
      <div>
        <EducationCard data={uon} />
        <EducationCard data={bilborough} />
        <EducationCard data={aldercar} />
      </div>
    </Section>
  )
}

function HeroSection() {
  const github: Socialdata = {
    name: 'Github',
    link: 'https://github.com/mbenniston',
    logoURL: '/gh-logo.png'
  }

  const linkedin: Socialdata = {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/matthew-benniston-896346217/',
    logoURL: '/linkedin.png'
  }

  const email: Socialdata = {
    name: 'Email',
    link: 'mailto://matthewpbenniston@gmail.com',
    logoURL: '/email.jpg'
  }

  return (
    <Section className='hero bg-neutral min-h-screen'>
      <div className='hero-content flex-col lg:flex-row'>
        <Image src={MeImage} width={256} height={256} alt={'Me!'} className='rounded-full w-64 h-64 ring-white ring-4 object-cover' />

        <div>
          <h1 className='text-5xl font-bold text-white'>Hi I&apos;m <FadeText>Matthew</FadeText> 👋</h1>
          <p className='text-xl py-6 text-white'>An aspiring <span className='font-mono text-black bg-white'>[graphics | games | web]</span> developer</p>

          <div className='flex flex-row items-center justify-end gap-2'>
            <SocialIcon socialData={github} />
            <SocialIcon socialData={linkedin} />
            <SocialIcon socialData={email} />
          </div>
        </div>
      </div>
    </Section>
  )
}

function FooterSection() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Contact Me</span>
        <div className="grid grid-flow-row gap-4">
          <span> <Link className='link' href='emailto://matthewpbenniston@gmail.com'>Email</Link>: matthewpbenniston@gmail.com </span>
          <Link className='link' href='https://www.linkedin.com/in/matthew-benniston-896346217/'>LinkedIn</Link>
        </div>
      </div>
    </footer>
  )
}

function Section(props: { children?: ReactNode, className?: string }) {
  return (
    <section className={`p-4 ${props.className}`}>
      {props.children}
    </section >
  )
}

function SectionHeader(props: { children?: ReactNode, className?: string }) {
  return (
    <h2 className={`text-center mt-16 mb-8 text-5xl font-bold text-black capitalize ${props.className}`}>
      {props.children}
    </h2>
  )
}

function FadeText(props: { children: ReactNode }) {
  return (
    <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-600'>
      {props.children}
    </span>
  )
}
