import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { ServicesGrid } from './components/ServicesGrid'
import { LogoClouds } from './components/LogoClouds'
import { ProcessTimeline } from './components/ProcessTimeline'
import { Testimonials } from './components/Testimonials'
import { CaseStudies } from './components/CaseStudies'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { FadeInObserver } from './components/FadeInObserver'
import { CodeIcon, CloudIcon, RocketIcon, ShieldIcon } from './components/icons/ServiceIcons'

export default function App() {
  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Proof', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    {
      title: 'Front-end Development',
      description: 'Accessible, responsive UIs with modern React patterns.',
      icon: <RocketIcon />,
    },
    {
      title: 'Back-end & APIs',
      description: 'Reliable services, data models, and secure endpoints.',
      icon: <CodeIcon />,
    },
    {
      title: 'Cloud & DevOps',
      description: 'Deploy pipelines, observability, and scalable infrastructure.',
      icon: <CloudIcon />,
    },
    {
      title: 'Security & Quality',
      description: 'Testing, reviews, and practical hardening for production.',
      icon: <ShieldIcon />,
    },
    {
      title: 'Product Engineering',
      description: 'Turn ideas into shipped features with clear deliverables.',
      icon: <RocketIcon />,
    },
    {
      title: 'Maintenance & Support',
      description: 'Keep systems healthy with ongoing improvements and fixes.',
      icon: <ShieldIcon />,
    },
  ]

  const logos = [
    { name: 'React', node: <span className="text-sm font-extrabold text-slate-900">React</span> },
    { name: 'TypeScript', node: <span className="text-sm font-extrabold text-slate-900">TypeScript</span> },
    { name: 'AWS', node: <span className="text-sm font-extrabold text-slate-900">AWS</span> },
    { name: 'CI/CD', node: <span className="text-sm font-extrabold text-slate-900">CI/CD</span> },
  ]

  const testimonials = [
    {
      quote: 'Jentek delivered a clean architecture and kept us informed every step of the way.',
      author: 'Sana R.',
      role: 'Product Manager',
    },
    {
      quote: 'The team’s process reduced risk. The release went smoothly, and performance improved immediately.',
      author: 'Omar K.',
      role: 'CTO',
    },
    {
      quote: 'Clear scope, strong engineering, and trustworthy communication. We’ll work with them again.',
      author: 'Elena M.',
      role: 'Engineering Lead',
    },
  ]

  const caseStudies = [
    {
      title: 'Cloud migration for a SaaS platform',
      excerpt: 'Modernized deployment and monitoring to reduce downtime and improve response times.',
      tags: ['AWS', 'CI/CD', 'Observability'],
      linkHref: '#contact',
    },
    {
      title: 'Conversion-focused UI rebuild',
      excerpt: 'Improved accessibility, responsiveness, and perceived performance with a component system.',
      tags: ['React', 'A11y', 'Performance'],
      linkHref: '#contact',
    },
    {
      title: 'API hardening and reliability upgrades',
      excerpt: 'Introduced better validation, tests, and operational visibility for safer releases.',
      tags: ['APIs', 'Testing', 'Security'],
      linkHref: '#contact',
    },
  ]

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <NavBar logoText="Jentek" menuItems={menuItems} />

      <main id="main">
        <FadeInObserver>
          <Hero />
        </FadeInObserver>

        <FadeInObserver delayMs={60}>
          <ServicesGrid services={services} />
        </FadeInObserver>

        <FadeInObserver delayMs={120}>
          <LogoClouds logos={logos} />
        </FadeInObserver>

        <FadeInObserver delayMs={180}>
          <ProcessTimeline />
        </FadeInObserver>

        <FadeInObserver delayMs={240}>
          <Testimonials testimonials={testimonials} />
        </FadeInObserver>

        <FadeInObserver delayMs={300}>
          <CaseStudies caseStudies={caseStudies} />
        </FadeInObserver>

        <FadeInObserver delayMs={360}>
          <ContactForm />
        </FadeInObserver>
      </main>

      <Footer
        companyName="Jentek"
        links={[
          { label: 'Services', href: '#services' },
          { label: 'Process', href: '#process' },
          { label: 'Testimonials', href: '#testimonials' },
          { label: 'Contact', href: '#contact' },
        ]}
        social={[
          { name: 'GitHub', href: 'https://github.com/', icon: 'github' },
          { name: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
          { name: 'X', href: 'https://x.com/', icon: 'x' },
        ]}
      />
    </div>
  )
}

