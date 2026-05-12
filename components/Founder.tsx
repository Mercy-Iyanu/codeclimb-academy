import Image from "next/image";
import founderPics from "../public/founder.jpg";

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-24 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none hidden lg:block"
        style={{
          background:
            "radial-gradient(ellipse at right, #7C3AED 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo + stat cards */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Photo container */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: "4px solid #A78BFA" }}
              >
                {/* Placeholder photo — replace /images/founder.jpg with Mercy's actual photo */}
                <div
                  className="w-full h-full flex flex-col items-center justify-center text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #7C3AED 0%, #EC4899 60%, #F97316 100%)",
                  }}
                >
                  <Image
                    src={founderPics}
                    alt="Founder Mercy"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-3 py-1 rounded-full text-xs font-semibold">
                    Mercy, Founder & Lead Instructor
                  </div>
                </div>
              </div>

              {/* Floating badge: Founded */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-3 shadow-xl text-white text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                }}
              >
                🚀 Founded 2023
              </div>

              {/* Floating badge: passion */}
              <div
                className="absolute -top-4 -left-4 rounded-xl px-4 py-2 shadow-lg text-xs font-bold"
                style={{
                  background: "#FFF7ED",
                  color: "#F97316",
                  border: "2px solid #FED7AA",
                }}
              >
                💡 Inspired by Curiosity
              </div>
            </div>
          </div>

          {/* Right: Story */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5"
              style={{ background: "#F5F3FF", color: "#7C3AED" }}
            >
              👩🏽 Meet the Founder
            </div>

            <h2
              className="font-fredoka text-4xl sm:text-5xl mb-6 leading-tight"
              style={{ color: "#1E1B4B" }}
            >
              The Story Behind <span className="gradient-text">CodeClimb</span>
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: "#4B5563" }}
            >
              <p>
                My name is <strong style={{ color: "#7C3AED" }}>Mercy</strong>,
                and I am the founder and lead instructor at CodeClimb Academy.
              </p>

              <p>
                The passion for setting up CodeClimb Academy started in{" "}
                <strong>2023</strong> when I took a group of learners through
                how to use Scratch after school.
              </p>

              <div
                className="rounded-2xl p-6 my-6 relative"
                style={{
                  background: "linear-gradient(135deg, #F5F3FF, #FDF2F8)",
                  borderLeft: "5px solid #7C3AED",
                }}
              >
                <span className="text-4xl absolute -top-3 left-4">💬</span>
                <p
                  className="text-base italic leading-relaxed pt-3"
                  style={{ color: "#374151" }}
                >
                  &ldquo;The curiosity and excitement that filled the room was
                  nothing compared to traditional classes. Right there and then
                  I knew this wasn&apos;t just because coding wasn&apos;t
                  challenging — but if built with{" "}
                  <strong style={{ color: "#7C3AED" }}>fun and purpose</strong>,
                  kids come alive and get inspired!&rdquo;
                </p>
                <p
                  className="mt-3 font-bold text-sm"
                  style={{ color: "#7C3AED" }}
                >
                  — Mercy, Founder & Lead Instructor
                </p>
              </div>

              <p>
                That moment of pure joy and curiosity in those young learners
                ignited a fire in me. I knew that coding education for children
                needed to be different — it needed to meet them where they are,
                speak their language, and let them build things that actually
                excite them.
              </p>

              <p>
                CodeClimb Academy was born from that conviction: that{" "}
                <strong style={{ color: "#EC4899" }}>
                  every child deserves an environment that gives them permission
                  to try
                </strong>{" "}
                — to experiment, to fail, to build, and to believe in their
                ability to create.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "2023", label: "Founded" },
                { value: "1:1", label: "Teaching" },
                { value: "3", label: "Courses" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-4 text-center"
                  style={{ background: "#F5F3FF" }}
                >
                  <div
                    className="font-fredoka text-2xl"
                    style={{ color: "#7C3AED" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: "#6B7280" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="#register"
                className="px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                }}
              >
                Join CodeClimb →
              </a>
              <a
                href="https://wa.me/2347063197619"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 border-2"
                style={{ borderColor: "#7C3AED", color: "#7C3AED" }}
              >
                💬 Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
