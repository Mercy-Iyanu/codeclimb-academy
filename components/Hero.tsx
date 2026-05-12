export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F5F3FF 0%, #ffffff 40%, #FFF7ED 100%)",
      }}
    >
      {/* Soft background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, #A78BFA 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #F97316 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #EC4899 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating emoji icons */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <span
          className="absolute text-5xl animate-float"
          style={{ top: "18%", left: "7%" }}
        >
          🚀
        </span>
        <span
          className="absolute text-4xl animate-float-b"
          style={{ top: "22%", right: "10%" }}
        >
          💻
        </span>
        <span
          className="absolute text-4xl animate-float-c"
          style={{ bottom: "30%", left: "12%" }}
        >
          🎮
        </span>
        <span
          className="absolute text-3xl animate-float-d"
          style={{ top: "55%", left: "42%" }}
        >
          ⭐
        </span>
        <span
          className="absolute text-5xl animate-float-b"
          style={{ bottom: "25%", right: "8%" }}
        >
          🌟
        </span>
        <span
          className="absolute text-3xl animate-float"
          style={{ top: "38%", right: "28%" }}
        >
          🎯
        </span>
        <span
          className="absolute text-4xl animate-float-c"
          style={{ bottom: "18%", left: "55%" }}
        >
          🏆
        </span>
        <span
          className="absolute text-3xl animate-float-d"
          style={{ top: "30%", left: "28%" }}
        >
          🌈
        </span>
        <span
          className="absolute text-3xl animate-float-b"
          style={{ top: "68%", right: "40%" }}
        >
          🧩
        </span>
        <span
          className="absolute text-3xl animate-float"
          style={{ top: "12%", left: "50%" }}
        >
          💡
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="text-center">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-8 border"
            style={{
              background: "rgba(124,58,237,0.08)",
              borderColor: "rgba(124,58,237,0.2)",
              color: "#7C3AED",
            }}
          >
            <span>🌍</span>
            <span>Global Online Coding School — Live 1-on-1 Classes</span>
          </div>

          {/* Main headline */}
          <h1
            className="font-fredoka text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight"
          >
            <span className="gradient-text">Every Child</span>
            <br />
            <span style={{ color: "#1E1B4B" }}>is a Future</span>{" "}
            <span className="gradient-text">Builder</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 max-w-3xl mx-auto"
            style={{ color: "#4B5563" }}
          >
            Because every child is climbing their own mountain of{" "}
            <span style={{ color: "#7C3AED" }}>creativity</span>,{" "}
            <span style={{ color: "#F97316" }}>logic</span>, and{" "}
            <span style={{ color: "#EC4899" }}>impact</span>.
          </p>

          <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
            Fun, structured coding classes for kids ages 4–18. Learn ScratchJr,
            Scratch, Python, and Web Development — at their own pace, on their
            own schedule.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#register"
              className="group relative px-8 py-4 rounded-full font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
                boxShadow: "0 8px 30px rgba(124,58,237,0.35)",
              }}
            >
              🚀 Enroll Your Child Today
            </a>
            <a
              href="#courses"
              className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 border-2 w-full sm:w-auto"
              style={{
                borderColor: "#7C3AED",
                color: "#7C3AED",
                background: "transparent",
              }}
            >
              📚 Explore Courses
            </a>
          </div>

          {/* Schedule info chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 text-sm font-semibold">
            {[
              { icon: "📅", text: "Saturdays" },
              { icon: "🌙", text: "Weekday Evenings" },
              { icon: "💻", text: "100% Online" },
              { icon: "👤", text: "1-on-1 Classes" },
              { icon: "🌍", text: "Accessible Worldwide" },
            ].map((chip) => (
              <span
                key={chip.text}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  borderColor: "#E5E7EB",
                  color: "#374151",
                }}
              >
                {chip.icon} {chip.text}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: "👶", value: "4–18", label: "Age Range" },
              { icon: "📚", value: "3", label: "Learning Tracks" },
              { icon: "👤", value: "1:1", label: "Class Size" },
              { icon: "🌍", value: "Global", label: "Reach" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-5 text-center shadow-lg"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div
                  className="font-fredoka text-2xl sm:text-3xl font-bold"
                  style={{ color: "#7C3AED" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-semibold mt-1" style={{ color: "#6B7280" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="wave-divider absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
