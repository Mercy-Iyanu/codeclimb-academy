const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#about", label: "About" },
  { href: "#founder", label: "Our Story" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#register", label: "Enroll Now" },
];

const courses = [
  "ScratchJr (Ages 4–7)",
  "Scratch Games (Ages 8–11)",
  "Python & Web Dev (Ages 12+)",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)",
      }}
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                }}
              >
                🚀
              </div>
              <div>
                <span
                  className="font-fredoka text-xl"
                  style={{ color: "#A78BFA" }}
                >
                  CodeClimb
                </span>
                <span
                  className="block text-xs font-semibold tracking-widest -mt-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  ACADEMY
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Every child is climbing their own mountain of creativity, logic,
              and impact. We&apos;re here to guide every step.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/codeclimbacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                📸 Instagram
              </a>
              <a
                href="https://linkedin.com/company/codeclimbacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                💼 LinkedIn
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="font-bold text-sm tracking-widest uppercase mb-5"
              style={{ color: "#A78BFA" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3
              className="font-bold text-sm tracking-widest uppercase mb-5"
              style={{ color: "#FB923C" }}
            >
              Our Courses
            </h3>
            <ul className="space-y-3">
              {courses.map((c) => (
                <li key={c}>
                  <a
                    href="#courses"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-bold text-sm tracking-widest uppercase mb-5"
              style={{ color: "#4ADE80" }}
            >
              Get In Touch
            </h3>
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/2347063197619"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <span className="text-xl mt-0.5">📱</span>
                <div>
                  <p
                    className="text-xs font-bold mb-0.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    WhatsApp
                  </p>
                  <p
                    className="text-sm font-semibold transition-colors group-hover:text-white"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    +234 706 319 7619
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hicodeclimb@outlook.com"
                className="flex items-start gap-3 group"
              >
                <span className="text-xl mt-0.5">✉️</span>
                <div>
                  <p
                    className="text-xs font-bold mb-0.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Email
                  </p>
                  <p
                    className="text-sm font-semibold transition-colors group-hover:text-white"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    hicodeclimb@outlook.com
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/codeclimbacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <span className="text-xl mt-0.5">📸</span>
                <div>
                  <p
                    className="text-xs font-bold mb-0.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Instagram
                  </p>
                  <p
                    className="text-sm font-semibold transition-colors group-hover:text-white"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    @codeclimbacademy
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/codeclimbacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <span className="text-xl mt-0.5">💼</span>
                <div>
                  <p
                    className="text-xs font-bold mb-0.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    LinkedIn
                  </p>
                  <p
                    className="text-sm font-semibold transition-colors group-hover:text-white"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    @codeclimbacademy
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <p>
            © {new Date().getFullYear()} CodeClimb Academy. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <span className="text-pink-400">❤️</span> for every young builder.
          </p>
        </div>
      </div>
    </footer>
  );
}
