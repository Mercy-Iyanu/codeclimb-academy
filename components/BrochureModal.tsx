'use client'

import { useEffect } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const courses = [
  {
    emoji: '🎨',
    title: 'ScratchJr',
    subtitle: 'Little Coders, Big Dreams',
    badge: 'Ages 4–7',
    duration: '12 Weeks',
    sessionLen: '40 mins / session',
    schedule: 'Saturdays or Weekday Afternoons',
    tools: ['ScratchJr App', 'iPad / Tablet', 'Creative Thinking'],
    learns: [
      'Programming through interactive storytelling',
      'Creating animated characters and scenes',
      'Understanding sequences and basic loops',
      'Cause-and-effect thinking through drag-and-drop code',
      'Building simple interactive projects and games',
      'Developing confidence and a love for problem-solving',
    ],
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#A78BFA',
    gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
    parentNote:
      'ScratchJr helps young children develop logic, creativity, and problem-solving through storytelling — the perfect foundation before Scratch and Python.',
  },
  {
    emoji: '🎮',
    title: 'Scratch Games',
    subtitle: '& Intro to Programming',
    badge: 'Ages 8–11',
    duration: '8 Weeks',
    sessionLen: '50 mins / session',
    schedule: 'Saturdays or Weekday Evenings',
    tools: ['Scratch', 'Game Design', 'Logic Building'],
    learns: [
      'Game design fundamentals and project planning',
      'Variables, conditions, and loops in action',
      'Events, broadcasts, and sprite communication',
      'Collision detection and scoring systems',
      'Animation and sound integration',
      'Introduction to algorithmic thinking',
    ],
    color: '#F97316',
    bg: '#FFF7ED',
    border: '#FB923C',
    gradient: 'linear-gradient(135deg, #F97316, #FBBF24)',
    parentNote:
      'We use Scratch to help children build strong logic foundations. It is visual and engaging — they truly understand how things work instead of just memorising.',
  },
  {
    emoji: '🐍',
    title: 'Python / Web Dev',
    subtitle: 'Real Code, Real Projects',
    badge: 'Ages 12+',
    duration: '20 Weeks',
    sessionLen: '1 hour / session',
    schedule: 'Saturdays or Weekday Evenings',
    tools: ['Python', 'HTML & CSS', 'JavaScript', 'VS Code'],
    learns: [
      'Python fundamentals: variables, functions, loops, and data',
      'Object-oriented programming concepts',
      'HTML & CSS for building beautiful web pages',
      'JavaScript for interactivity and dynamic web apps',
      'Working with APIs and real-world data',
      'Version control with Git and deploying live projects',
    ],
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#4ADE80',
    gradient: 'linear-gradient(135deg, #22C55E, #3B82F6)',
    parentNote:
      'From age 12+, students move into real programming — becoming confident builders, not just learners who copy code.',
  },
]

const modalities = [
  {
    icon: '🎯',
    title: 'Live 1-on-1 Sessions',
    desc: 'Every class is taught live by a dedicated instructor — personalised to your child\'s pace, curiosity, and learning style. No pre-recorded videos.',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    icon: '💻',
    title: '100% Online',
    desc: 'Sessions run via video call from the comfort of home. All your child needs is a device and an internet connection — no travel, no logistics.',
    color: '#F97316',
    bg: '#FFF7ED',
  },
  {
    icon: '🏗️',
    title: 'Project-Based Learning',
    desc: 'Children learn by building real games, animations, and websites — not memorising syntax. Every session ends with something they\'re proud of.',
    color: '#22C55E',
    bg: '#F0FDF4',
  },
  {
    icon: '📋',
    title: 'Parent Progress Updates',
    desc: 'We keep you in the loop. After each session you\'ll know what your child worked on, what they\'re excelling at, and what comes next.',
    color: '#EC4899',
    bg: '#FDF2F8',
  },
  {
    icon: '📅',
    title: 'Flexible Scheduling',
    desc: 'Choose from Saturday sessions or weekday evenings — whatever works best for your family. Sessions are booked directly with your instructor.',
    color: '#0EA5E9',
    bg: '#F0F9FF',
  },
  {
    icon: '🌱',
    title: 'Right Pace, Right Stage',
    desc: 'We never rush children into complexity. The curriculum is structured so every child learns the right concepts at the right stage of development.',
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
]

export default function BrochureModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(15, 10, 40, 0.75)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl"
        style={{ background: '#FFFFFF' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all hover:scale-110"
          style={{ background: '#F3F4F6', color: '#6B7280' }}
          aria-label="Close brochure"
        >
          ✕
        </button>

        <div className="p-6 sm:p-10 clear-both">
          {/* ── HEADER ── */}
          <div
            className="rounded-2xl p-8 mb-8 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #4C1D95 50%, #7C3AED 100%)' }}
          >
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }} />
            <div className="absolute -left-8 bottom-0 w-32 h-32 rounded-full opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #A78BFA, transparent)' }} />

            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                🚀
              </div>
              <div>
                <div className="font-bold text-xl leading-none" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  CodeClimb Academy
                </div>
                <div className="text-xs tracking-widest uppercase opacity-70 mt-0.5">
                  Coding School for Kids
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Parent Information Brochure
            </h1>
            <p className="text-base opacity-80 max-w-xl">
              Everything you need to know about our programmes, how we teach, and how your child will grow.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              {['Ages 4–17+', 'Live 1-on-1 Online', 'Project-Based', 'UK & Nigeria'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.18)', color: 'white' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── ABOUT ── */}
          <div className="mb-10">
            <SectionLabel emoji="💡" text="About CodeClimb" />
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#1E1B4B', fontFamily: 'Fredoka, sans-serif' }}>
              What Is CodeClimb Academy?
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#4B5563' }}>
              CodeClimb Academy is a live, online coding school for children aged 4 to 17+. We offer
              personalised 1-on-1 sessions that teach coding through creativity, games, and real projects —
              not rote memorisation.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
              Founded in 2023, our mission is simple: help children <strong style={{ color: '#7C3AED' }}>think
              like creators</strong>. We believe every child deserves the chance to go from consumer
              to builder — and coding is the most powerful tool to get them there.
            </p>
          </div>

          {/* ── HOW IT WORKS / MODALITIES ── */}
          <div className="mb-10">
            <SectionLabel emoji="🔧" text="How We Teach" />
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1E1B4B', fontFamily: 'Fredoka, sans-serif' }}>
              Our Teaching Modalities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {modalities.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl p-5"
                  style={{ background: m.bg, border: `1.5px solid ${m.color}22` }}
                >
                  <div className="text-3xl mb-3">{m.icon}</div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: m.color }}>{m.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#4B5563' }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── COURSES ── */}
          <div className="mb-10">
            <SectionLabel emoji="📚" text="Our Programmes" />
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#1E1B4B', fontFamily: 'Fredoka, sans-serif' }}>
              The Right Course for Every Child
            </h2>
            <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
              A step-by-step progression designed so children don&apos;t get overwhelmed early,
              but don&apos;t get left behind as they grow.
            </p>

            <div className="space-y-6">
              {courses.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl overflow-hidden border-2"
                  style={{ borderColor: c.border }}
                >
                  {/* Course banner */}
                  <div
                    className="px-6 py-5 text-white flex flex-wrap items-center gap-4"
                    style={{ background: c.gradient }}
                  >
                    <span className="text-4xl">{c.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <h3 className="font-bold text-xl" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                          {c.title}
                        </h3>
                        <span
                          className="text-xs font-bold px-3 py-0.5 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.25)' }}
                        >
                          {c.badge}
                        </span>
                      </div>
                      <p className="text-sm opacity-90">{c.subtitle}</p>
                    </div>
                    {/* Quick stats */}
                    <div className="flex gap-3 text-center text-xs font-semibold flex-shrink-0">
                      <div className="rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.2)' }}>
                        <div className="text-base">⏱️</div>
                        <div>{c.duration}</div>
                        <div className="opacity-80">{c.sessionLen}</div>
                      </div>
                      <div className="rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.2)' }}>
                        <div className="text-base">📅</div>
                        <div>{c.schedule}</div>
                      </div>
                    </div>
                  </div>

                  {/* Course body */}
                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ background: '#FAFAFA' }}>
                    {/* What they'll learn */}
                    <div>
                      <h4 className="font-bold text-sm mb-3 flex items-center gap-1.5" style={{ color: '#1E1B4B' }}>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                          style={{ background: c.color }}
                        >✓</span>
                        What Your Child Will Learn
                      </h4>
                      <ul className="space-y-1.5">
                        {c.learns.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#374151' }}>
                            <span
                              className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold"
                              style={{ background: c.color, fontSize: '9px' }}
                            >{i + 1}</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools + parent note */}
                    <div className="flex flex-col gap-4">
                      <div>
                        <h4 className="font-bold text-sm mb-2" style={{ color: '#1E1B4B' }}>Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {c.tools.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-semibold px-3 py-1 rounded-full border"
                              style={{ borderColor: c.border, color: c.color, background: c.bg }}
                            >{t}</span>
                          ))}
                        </div>
                      </div>
                      <div
                        className="rounded-xl p-4 text-xs italic leading-relaxed border-l-4 flex-1"
                        style={{ background: c.bg, borderLeftColor: c.color, color: '#4B5563' }}
                      >
                        <span className="font-bold not-italic" style={{ color: c.color }}>👩‍👦 For parents: </span>
                        {c.parentNote}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── PROGRESSION ── */}
          <div className="mb-10">
            <SectionLabel emoji="🏔️" text="Learning Pathway" />
            <div
              className="rounded-2xl p-6 sm:p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)' }}
            >
              <h2 className="text-xl font-bold mb-6 text-center" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                The CodeClimb Progression
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {[
                  { step: '01', icon: '🎨', title: 'ScratchJr', age: 'Ages 4–7', desc: 'Storytelling & creativity through visual blocks', color: '#A78BFA' },
                  { step: '02', icon: '🎮', title: 'Scratch', age: 'Ages 8–11', desc: 'Games, logic, and problem-solving', color: '#FBBF24' },
                  { step: '03', icon: '🐍', title: 'Python / Web Dev', age: 'Ages 12+', desc: 'Real code, real projects, real impact', color: '#4ADE80' },
                ].map((s, i, arr) => (
                  <div key={s.step} className="flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-3"
                      style={{ background: 'rgba(255,255,255,0.12)' }}
                    >{s.icon}</div>
                    <div className="font-bold text-base mb-1" style={{ color: s.color, fontFamily: 'Fredoka, sans-serif' }}>{s.title}</div>
                    <div className="text-xs font-bold px-3 py-0.5 rounded-full mb-2" style={{ background: `${s.color}22`, color: s.color }}>{s.age}</div>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.desc}</p>
                    {i < arr.length - 1 && (
                      <div className="sm:hidden mt-3 text-xl" style={{ color: 'rgba(255,255,255,0.3)' }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                A carefully structured journey — every child starts where they are and climbs to where they want to be.
              </p>
            </div>
          </div>

          {/* ── HOW TO ENROL ── */}
          <div className="mb-10">
            <SectionLabel emoji="✅" text="Getting Started" />
            <h2 className="text-2xl font-bold mb-5" style={{ color: '#1E1B4B', fontFamily: 'Fredoka, sans-serif' }}>
              How to Enrol Your Child
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { n: '1', title: 'Fill In the Form', desc: 'Complete our quick enrolment form on the website with your child\'s details and course preference.', color: '#7C3AED', bg: '#F5F3FF' },
                { n: '2', title: 'We Reach Out', desc: 'Our team will contact you within 24 hours to confirm the schedule and answer any questions.', color: '#F97316', bg: '#FFF7ED' },
                { n: '3', title: 'First Session!', desc: 'Your child\'s learning journey begins — live, personalised, and full of excitement.', color: '#22C55E', bg: '#F0FDF4' },
              ].map((step) => (
                <div key={step.n} className="rounded-2xl p-5" style={{ background: step.bg, border: `1.5px solid ${step.color}22` }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-base mb-3"
                    style={{ background: step.color }}
                  >{step.n}</div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: step.color }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#4B5563' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CONTACT ── */}
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, #F5F3FF, #FDF2F8)' }}
          >
            <div>
              <h3 className="font-bold text-lg mb-1" style={{ color: '#1E1B4B', fontFamily: 'Fredoka, sans-serif' }}>
                Questions? We&apos;d love to help.
              </h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Chat with us on WhatsApp or send an email — we typically reply within a few hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://wa.me/2347063197619"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105"
                style={{ background: '#22C55E', color: 'white' }}
              >
                💬 WhatsApp Us
              </a>
              <a
                href="mailto:hicodeclimb@outlook.com"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105"
                style={{ background: '#7C3AED', color: 'white' }}
              >
                ✉️ Email Us
              </a>
            </div>
          </div>

          {/* ── PRINT / CLOSE ── */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
            style={{ borderTop: '1.5px solid #F3F4F6' }}>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              © 2024 CodeClimb Academy · hicodeclimb@outlook.com · +234 706 319 7619
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm border-2 transition-all hover:scale-105"
                style={{ borderColor: '#7C3AED', color: '#7C3AED', background: 'white' }}
              >
                🖨️ Print Brochure
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3"
      style={{ background: '#F5F3FF', color: '#7C3AED' }}
    >
      {emoji} {text}
    </div>
  )
}
