const pillars = [
  {
    icon: "🧠",
    title: "Think First, Code Second",
    color: "#7C3AED",
    bg: "#F5F3FF",
    text: "We focus on helping children understand how to think first — using tools like Scratch to build real mental models. Once that foundation is strong, moving into Python and web development becomes natural and meaningful.",
  },
  {
    icon: "🎮",
    title: "Learning Through Building",
    color: "#F97316",
    bg: "#FFF7ED",
    text: "Classes are live, interactive, and project-based. Children learn by building games, animations, and websites — not by memorising syntax. Every session ends with something they&apos;re proud of.",
  },
  {
    icon: "🌱",
    title: "Right Pace, Right Stage",
    color: "#22C55E",
    bg: "#F0FDF4",
    text: "We don&apos;t rush children into complex programming too early. Our curriculum is structured so every child learns the right concepts at the right stage of development — no overwhelm, no one left behind.",
  },
  {
    icon: "🌟",
    title: "Confidence Over Perfection",
    color: "#EC4899",
    bg: "#FDF2F8",
    text: "Our goal is confident builders, not children who copy code. We celebrate curiosity, encourage mistakes as part of learning, and create a safe space where every child feels empowered to try.",
  },
];

const progression = [
  {
    step: "01",
    title: "ScratchJr",
    age: "Ages 4–7",
    desc: "Storytelling & creativity through visual blocks",
    color: "#7C3AED",
    bg: "#F5F3FF",
    icon: "🎨",
  },
  {
    step: "02",
    title: "Scratch",
    age: "Ages 8–11",
    desc: "Games, logic, and problem-solving",
    color: "#F97316",
    bg: "#FFF7ED",
    icon: "🎮",
  },
  {
    step: "03",
    title: "Python/Web Dev",
    age: "Ages 12+",
    desc: "Real code, real projects, real impact",
    color: "#22C55E",
    bg: "#F0FDF4",
    icon: "🐍",
  },
];

export default function Approach() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5F3FF 0%, #ffffff 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #EC4899, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ background: "#F5F3FF", color: "#7C3AED" }}
          >
            🧩 The CodeClimb Way
          </div>
          <h2
            className="font-fredoka text-4xl sm:text-5xl mb-4"
            style={{ color: "#1E1B4B" }}
          >
            We Teach Children{" "}
            <span className="gradient-text">How to Think</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
            Coding is the tool. Thinking is the goal. Our approach helps
            children build the mindset of a creator — not just someone who
            follows instructions.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: p.bg, border: `1.5px solid ${p.color}22` }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: p.color }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#4B5563" }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Progression flow */}
        <div
          className="rounded-3xl p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)",
          }}
        >
          <h3
            className="font-fredoka text-2xl sm:text-3xl text-center mb-10"
            style={{ color: "#ffffff" }}
          >
            🏔️ The CodeClimb Progression
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div
              className="hidden sm:block absolute top-10 left-[16%] right-[16%] h-0.5 opacity-30"
              style={{
                background: "linear-gradient(90deg, #A78BFA, #F97316, #22C55E)",
              }}
            />

            {progression.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg relative z-10"
                  style={{ background: step.bg }}
                >
                  {step.icon}
                </div>
                <span
                  className="font-fredoka text-4xl font-bold mb-1 opacity-20 absolute -top-2 left-1/2 -translate-x-1/2"
                  style={{ color: step.color }}
                >
                  {step.step}
                </span>
                <div
                  className="font-fredoka text-xl mb-1"
                  style={{ color: step.color }}
                >
                  {step.title}
                </div>
                <div
                  className="text-xs font-bold px-3 py-1 rounded-full mb-2"
                  style={{ background: `${step.color}22`, color: step.color }}
                >
                  {step.age}
                </div>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {step.desc}
                </p>
                {i < progression.length - 1 && (
                  <div
                    className="sm:hidden my-4 text-2xl"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

          <p
            className="text-center mt-8 text-sm font-semibold"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            A carefully structured journey — every child starts where they are
            and climbs to where they want to be.
          </p>
        </div>
      </div>
    </section>
  );
}
