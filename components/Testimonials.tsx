const testimonials = [
  {
    name: "Mrs. Bankole",
    location: "United Kingdom",
    flag: "🇬🇧",
    initials: "B",
    color: "#7C3AED",
    bg: "#F5F3FF",
    course: "ScratchJr",
    rating: 5,
    quote:
      "My son used to say technology was 'boring'. After just three sessions with CodeClimb, he was showing me the game he built himself! The 1-on-1 format means Mercy truly understands where he is, not where an average class would be. He now talks about coding the way other kids talk about football — it's remarkable.",
  },
  {
    name: "Mr. Oyelude",
    location: "Nigeria",
    flag: "🇳🇬",
    initials: "O",
    color: "#F97316",
    bg: "#FFF7ED",
    course: "Web Dev",
    rating: 4,
    quote:
      "I was skeptical at first — how much can a child really learn online? CodeClimb proved me completely wrong. My son finished his Web Dev course having built two real projects. More importantly, he started asking 'how does this work?' about everything around him. That shift in thinking is priceless. CodeClimb doesn't just teach code — it teaches curiosity.",
  },
  {
    name: "Mrs. Olowookere",
    location: "United Kingdom",
    flag: "🇬🇧",
    initials: "O",
    color: "#22C55E",
    bg: "#F0FDF4",
    course: "Scratch",
    rating: 5,
    quote:
      "What sets CodeClimb apart is the patience and the care. My 8-year-old was nervous about 'computer class', but the way the curriculum is built — through storytelling and play — he forgot he was even learning! He asks for class every week. As a parent, seeing your child excited about learning is everything. CodeClimb delivers that consistently.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #F5F3FF 100%)",
      }}
    >
      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-8xl opacity-5 animate-float select-none">
          ⭐
        </div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-5 animate-float-b select-none">
          🌟
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ background: "#FCD34D22", color: "#92400E" }}
          >
            ⭐ Parent Voices
          </div>
          <h2
            className="font-fredoka text-4xl sm:text-5xl mb-4"
            style={{ color: "#1E1B4B" }}
          >
            What Families Are <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Real stories from real families around the world.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-7 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border"
              style={{
                background: t.bg,
                borderColor: `${t.color}33`,
              }}
            >
              {/* Quote mark */}
              <span
                className="absolute top-5 right-7 font-fredoka text-7xl opacity-15 leading-none"
                style={{ color: t.color }}
              >
                &ldquo;
              </span>

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p
                className="mt-4 text-sm leading-relaxed flex-1 italic"
                style={{ color: "#374151" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Course badge */}
              <div className="mt-4">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${t.color}18`, color: t.color }}
                >
                  📚 {t.course}
                </span>
              </div>

              {/* Divider */}
              <div
                className="my-4 border-t"
                style={{ borderColor: `${t.color}22` }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-fredoka text-lg font-bold flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#1E1B4B" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#6B7280" }}>
                    {t.flag} {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA beneath */}
        <div className="mt-14 text-center">
          <div
            className="inline-block rounded-3xl px-8 py-8 shadow-xl max-w-2xl"
            style={{
              background: "linear-gradient(135deg, #1E1B4B, #312E81)",
            }}
          >
            <p className="font-fredoka text-2xl text-white mb-2">
              Ready to write your own success story?
            </p>
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Join families across the UK, Nigeria, and beyond who chose
              CodeClimb Academy for their children.
            </p>
            <a
              href="#register"
              className="inline-block px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                boxShadow: "0 8px 24px rgba(124,58,237,0.4)",
              }}
            >
              🚀 Enroll Your Child Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
