const courses = [
  {
    id: "scratchjr",
    emoji: "🎨",
    badge: "Ages 4–7",
    badgeColor: "#7C3AED",
    badgeBg: "#F5F3FF",
    title: "ScratchJr",
    subtitle: "Little Coders, Big Dreams",
    duration: "12 Weeks",
    sessionLen: "40 mins / session",
    schedule: "Saturdays or Weekday Afternoons",
    accentColor: "#7C3AED",
    accentBg: "#F5F3FF",
    borderColor: "#A78BFA",
    gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)",
    tools: ["ScratchJr App", "iPad / Tablet", "Creative Thinking"],
    description:
      "The perfect first step into coding! Using ScratchJr, young learners discover that coding is about creativity and storytelling — not just screens.",
    learns: [
      "Programming through interactive storytelling",
      "Creating animated characters and scenes",
      "Understanding sequences and basic loops",
      "Cause-and-effect thinking through drag-and-drop code",
      "Building simple interactive projects and games",
      "Developing confidence and a love for problem-solving",
    ],
    parentNote:
      "ScratchJr helps young children develop logic, creativity, and problem-solving through storytelling. It's the foundation they need before moving to Scratch and Python.",
  },
  {
    id: "scratch",
    emoji: "🎮",
    badge: "Ages 8–11",
    badgeColor: "#EA580C",
    badgeBg: "#FFF7ED",
    title: "Scratch Games",
    subtitle: "& Intro to Programming",
    duration: "8 Weeks",
    sessionLen: "50 mins / session",
    schedule: "Saturdays or Weekday Evenings",
    accentColor: "#F97316",
    accentBg: "#FFF7ED",
    borderColor: "#FB923C",
    gradient: "linear-gradient(135deg, #F97316, #FBBF24)",
    tools: ["Scratch", "Game Design", "Logic Building"],
    prerequisite: "Some Scratch knowledge recommended",
    description:
      "For kids ready to level up! We build strong foundations in logic, problem-solving, and creativity — then bring it all to life with real games and interactive projects.",
    learns: [
      "Game design fundamentals and project planning",
      "Variables, conditions, and loops in action",
      "Events, broadcasts, and sprite communication",
      "Collision detection and scoring systems",
      "Animation and sound integration",
      "Introduction to algorithmic thinking",
    ],
    parentNote:
      "We use Scratch to help children build strong foundations in logic and problem-solving. It's visual and engaging — they truly understand how things work instead of just memorizing.",
  },
  {
    id: "python",
    emoji: "🐍",
    badge: "Ages 12+",
    badgeColor: "#16A34A",
    badgeBg: "#F0FDF4",
    title: "Python/Web Dev",
    subtitle: "Real Code, Real Projects",
    duration: "20 Weeks",
    sessionLen: "1 hour / session",
    schedule: "Saturdays or Weekday Evenings",
    accentColor: "#22C55E",
    accentBg: "#F0FDF4",
    borderColor: "#4ADE80",
    gradient: "linear-gradient(135deg, #22C55E, #3B82F6)",
    tools: ["Python", "HTML & CSS", "JavaScript", "VS Code"],
    description:
      "Where kids become real developers. Using Python, HTML, CSS, and JavaScript, students move from understanding to building — creating projects they're genuinely proud of.",
    learns: [
      "Python fundamentals: variables, functions, loops, and data",
      "Object-oriented programming concepts",
      "HTML & CSS for building beautiful web pages",
      "JavaScript for interactivity and dynamic web apps",
      "Working with APIs and real-world data",
      "Version control with Git and deploying live projects",
    ],
    parentNote:
      "From age 12+, they move into real programming where they apply foundational concepts in an advanced way — becoming confident builders, not just learners who copy code.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ background: "#F5F3FF", color: "#7C3AED" }}
          >
            📚 Our Coding Tracks
          </div>
          <h2
            className="font-fredoka text-4xl sm:text-5xl mb-4"
            style={{ color: "#1E1B4B" }}
          >
            The Right Course for{" "}
            <span className="gradient-text">Every Child</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
            A step-by-step progression designed so children don&apos;t get
            overwhelmed early, but don&apos;t get left behind as they grow.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative rounded-3xl overflow-hidden flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
              style={{ borderColor: course.borderColor, background: "#FAFAFA" }}
            >
              {/* Card top banner */}
              <div
                className="px-6 pt-8 pb-6 text-white relative overflow-hidden"
                style={{ background: course.gradient }}
              >
                <div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20"
                  style={{ background: "rgba(255,255,255,0.3)" }}
                />
                <div
                  className="absolute -right-2 bottom-0 w-20 h-20 rounded-full opacity-10"
                  style={{ background: "rgba(255,255,255,0.5)" }}
                />
                <span className="text-5xl mb-3 block">{course.emoji}</span>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.25)",
                      color: "white",
                    }}
                  >
                    {course.badge}
                  </span>
                  {course.prerequisite && (
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      ⚡ {course.prerequisite}
                    </span>
                  )}
                </div>
                <h3 className="font-fredoka text-2xl sm:text-3xl leading-tight">
                  {course.title}
                </h3>
                <p className="text-sm opacity-90 font-semibold mt-1">
                  {course.subtitle}
                </p>
              </div>

              {/* Card body */}
              <div className="flex-1 flex flex-col p-6 gap-5">
                {/* Duration & schedule */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="rounded-xl p-3 text-center"
                    style={{ background: course.accentBg }}
                  >
                    <div className="text-xl mb-0.5">⏱️</div>
                    <div
                      className="font-bold text-sm"
                      style={{ color: course.accentColor }}
                    >
                      {course.duration}
                    </div>
                    <div className="text-xs text-gray-500">
                      {course.sessionLen}
                    </div>
                  </div>
                  <div
                    className="rounded-xl p-3 text-center"
                    style={{ background: course.accentBg }}
                  >
                    <div className="text-xl mb-0.5">📅</div>
                    <div
                      className="font-bold text-xs"
                      style={{ color: course.accentColor }}
                    >
                      {course.schedule}
                    </div>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#4B5563" }}
                >
                  {course.description}
                </p>

                {/* What they'll learn */}
                <div>
                  <h4
                    className="font-bold text-sm mb-3 flex items-center gap-2"
                    style={{ color: "#1E1B4B" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                      style={{ background: course.accentColor }}
                    >
                      ✓
                    </span>
                    What Your Child Will Learn
                  </h4>
                  <ul className="space-y-2">
                    {course.learns.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#374151" }}
                      >
                        <span
                          className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                          style={{ background: course.accentColor }}
                        >
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{
                        borderColor: course.borderColor,
                        color: course.accentColor,
                        background: course.accentBg,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Parent note */}
                <div
                  className="rounded-xl p-4 text-xs italic leading-relaxed border-l-4"
                  style={{
                    background: course.accentBg,
                    borderLeftColor: course.accentColor,
                    color: "#4B5563",
                  }}
                >
                  <span
                    className="font-bold not-italic"
                    style={{ color: course.accentColor }}
                  >
                    👩‍👦 For parents:{" "}
                  </span>
                  {course.parentNote}
                </div>

                {/* CTA */}
                <a
                  href="#register"
                  className="mt-auto block text-center py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: course.gradient }}
                >
                  Enroll in {course.title} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold" style={{ color: "#6B7280" }}>
            Not sure which course fits your child?{" "}
            <a
              href={`https://wa.me/2347063197619`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: "#7C3AED" }}
            >
              Chat with us on WhatsApp
            </a>{" "}
            — we&apos;ll help you find the perfect fit!
          </p>
        </div>
      </div>
    </section>
  );
}
