'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What is CodeClimb?',
    a: 'CodeClimb is a kids-focused coding and thinking school designed to help children build logic, creativity, and confidence through hands-on projects. We teach children how to think, not just how to code.',
  },
  {
    q: 'Who is CodeClimb for?',
    a: 'CodeClimb is for children aged 4–18 years, from absolute beginners to curious learners who want to build games, apps, and real-world projects.',
  },
  {
    q: 'Does my child need prior coding experience?',
    a: 'No. CodeClimb is beginner-friendly. Our programs are structured so every child can start from where they are and grow at their own pace.',
  },
  {
    q: 'Why ScratchJr for young children?',
    a: 'ScratchJr helps young children develop logic, creativity, and problem-solving through storytelling and simple coding. It\'s the foundation they need before moving to more advanced tools like Scratch and Python. We\'ve structured our program so children learn the right concepts at the right stage of development.',
  },
  {
    q: 'Why Scratch before Python?',
    a: 'At CodeClimb, we don\'t rush children into complex programming too early. Instead, we focus on helping them understand how to think first, using tools like Scratch. Once that foundation is strong, transitioning into Python and web development becomes much easier and more meaningful. This approach helps children become confident builders, not just learners who copy code.',
  },
  {
    q: 'What will my child learn?',
    a: 'Depending on their age and level, students learn: logical and computational thinking, problem-solving and creativity, coding with ScratchJr, Scratch, Python, and web technologies, and collaboration and confidence through real projects.',
  },
  {
    q: 'How are classes taught?',
    a: 'Classes are live, interactive, and project-based. Children learn by building, experimenting, asking questions, and collaborating — not by memorising. Every session ends with something they\'ve created themselves.',
  },
  {
    q: 'Are classes online or physical?',
    a: 'Currently, CodeClimb runs online live 1-on-1 classes, making it accessible to children anywhere in the world. Physical programs and partnerships are planned for the future.',
  },
  {
    q: 'Who teaches the classes?',
    a: 'Our classes are led by carefully trained instructors who follow the CodeClimb teaching philosophy. They are patient, child-focused, and skilled at making complex ideas simple and fun.',
  },
  {
    q: 'How big are the class sizes?',
    a: 'We run 1-on-1 classes to ensure every child receives full attention, personalised support, and consistent encouragement. Your child is never lost in a crowd.',
  },
  {
    q: 'How does CodeClimb support parents?',
    a: 'Parents receive regular updates on progress, projects, and learning outcomes. We believe learning works best when parents are part of the journey — you\'ll always know what your child is building and why.',
  },
  {
    q: 'Is CodeClimb just about coding?',
    a: 'No. Coding is a tool. Our bigger goal is to help children develop confidence, curiosity, discipline, and the courage to think big. We want children to become creators who believe in their ability to solve real problems.',
  },
  {
    q: 'How do I enroll my child?',
    a: 'You can enroll by filling out the registration form on this page, or by contacting us directly on WhatsApp. Our team will guide you through choosing the right program for your child.',
  },
  {
    q: 'Why CodeClimb?',
    a: 'Because the future belongs to children who can think, adapt, and build — and every child deserves an environment that gives them permission to try. CodeClimb is that environment.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #F5F3FF 0%, #ffffff 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ background: '#F5F3FF', color: '#7C3AED' }}
          >
            ❓ Got Questions?
          </div>
          <h2
            className="font-fredoka text-4xl sm:text-5xl mb-4"
            style={{ color: '#1E1B4B' }}
          >
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Everything parents ask — answered honestly.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? '#F5F3FF' : 'white',
                  border: `2px solid ${isOpen ? '#A78BFA' : '#E5E7EB'}`,
                  boxShadow: isOpen ? '0 4px 20px rgba(124,58,237,0.12)' : '0 1px 4px rgba(0,0,0,0.05)',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 transition-all"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-bold text-base leading-snug"
                    style={{ color: isOpen ? '#7C3AED' : '#1E1B4B' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300"
                    style={{
                      background: isOpen ? '#7C3AED' : '#F3F4F6',
                      color: isOpen ? 'white' : '#6B7280',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <div
                      className="border-t pt-4"
                      style={{ borderColor: '#DDD6FE' }}
                    >
                      <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold mb-4" style={{ color: '#6B7280' }}>
            Still have questions? We&apos;re happy to help!
          </p>
          <a
            href="https://wa.me/2347063197619"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
            style={{
              background: '#25D366',
              boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
            }}
          >
            💬 Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
