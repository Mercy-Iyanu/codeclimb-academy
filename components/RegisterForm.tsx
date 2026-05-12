"use client";

import { useState } from "react";

type FormData = {
  parentName: string;
  childName: string;
  childAge: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  schedule: string;
  howHeard: string;
  message: string;
};

const initialForm: FormData = {
  parentName: "",
  childName: "",
  childAge: "",
  email: "",
  phone: "",
  country: "",
  course: "",
  schedule: "",
  howHeard: "",
  message: "",
};

type Status = "idle" | "sending" | "success" | "error";

export default function RegisterForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputBase = {
    background: "#F9FAFB",
    border: "2px solid #E5E7EB",
    color: "#1E1B4B",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: "700",
    color: "#374151",
    marginBottom: "6px",
  } as React.CSSProperties;

  return (
    <section
      id="register"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #1E1B4B 100%)",
      }}
    >
      {/* Background decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #A78BFA, transparent)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #EC4899, transparent)",
          }}
        />
        <span className="absolute top-10 left-10 text-6xl opacity-10 animate-float select-none">
          🚀
        </span>
        <span className="absolute bottom-10 right-10 text-6xl opacity-10 animate-float-b select-none">
          ⭐
        </span>
        <span className="absolute top-1/2 right-20 text-5xl opacity-10 animate-float-c select-none">
          💻
        </span>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ background: "rgba(167,139,250,0.2)", color: "#A78BFA" }}
          >
            📝 Get Started
          </div>
          <h2 className="font-fredoka text-4xl sm:text-5xl text-white mb-4">
            Register Your <span style={{ color: "#FCD34D" }}>Little Coder</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px" }}>
            Fill in the form and we&apos;ll reach out within 24 hours to confirm
            your child&apos;s spot and answer any questions.
          </p>
        </div>

        {/* Success message */}
        {status === "success" && (
          <div
            className="rounded-2xl p-8 text-center mb-8"
            style={{ background: "#F0FDF4", border: "2px solid #4ADE80" }}
          >
            <div className="text-5xl mb-3">🎉</div>
            <h3
              className="font-fredoka text-2xl mb-2"
              style={{ color: "#16A34A" }}
            >
              Registration Received!
            </h3>
            <p className="text-sm" style={{ color: "#4B5563" }}>
              Thank you! We&apos;ve received your child&apos;s registration and
              will reach out within 24 hours. Welcome to the CodeClimb family!
              🚀
            </p>
          </div>
        )}

        {/* Form */}
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl p-7 sm:p-10 shadow-2xl"
            style={{ background: "white" }}
          >
            {/* Parent info */}
            <div className="mb-8">
              <h3
                className="font-bold text-base mb-5 flex items-center gap-2"
                style={{ color: "#7C3AED" }}
              >
                <span
                  className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold"
                  style={{ color: "#7C3AED" }}
                >
                  1
                </span>
                Parent / Guardian Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle} htmlFor="parentName">
                    Full Name *
                  </label>
                  <input
                    id="parentName"
                    name="parentName"
                    required
                    value={form.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Adaobi Johnson"
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#7C3AED";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#7C3AED";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="phone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 700 000 0000"
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#7C3AED";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="country">
                    Country *
                  </label>
                  <input
                    id="country"
                    name="country"
                    required
                    value={form.country}
                    onChange={handleChange}
                    placeholder="e.g. Nigeria, UK, USA"
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#7C3AED";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Child info */}
            <div className="mb-8">
              <h3
                className="font-bold text-base mb-5 flex items-center gap-2"
                style={{ color: "#F97316" }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: "#FFF7ED", color: "#F97316" }}
                >
                  2
                </span>
                Child Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle} htmlFor="childName">
                    Child&apos;s Name *
                  </label>
                  <input
                    id="childName"
                    name="childName"
                    required
                    value={form.childName}
                    onChange={handleChange}
                    placeholder="e.g. Temi Johnson"
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#F97316";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="childAge">
                    Child&apos;s Age *
                  </label>
                  <input
                    id="childAge"
                    name="childAge"
                    required
                    value={form.childAge}
                    onChange={handleChange}
                    placeholder="e.g. 8"
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#F97316";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Course & schedule */}
            <div className="mb-8">
              <h3
                className="font-bold text-base mb-5 flex items-center gap-2"
                style={{ color: "#22C55E" }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: "#F0FDF4", color: "#22C55E" }}
                >
                  3
                </span>
                Course Preference
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle} htmlFor="course">
                    Interested Course *
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={form.course}
                    onChange={handleChange}
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#22C55E";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                    }}
                  >
                    <option value="">Select a course…</option>
                    <option value="scratchjr">🎨 ScratchJr — Ages 4–7</option>
                    <option value="scratch">
                      🎮 Scratch Games — Ages 8–11
                    </option>
                    <option value="python">🐍 Python/Web Dev — Ages 12+</option>
                    <option value="unsure">
                      🤔 Not sure yet (need guidance)
                    </option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="schedule">
                    Preferred Schedule *
                  </label>
                  <select
                    id="schedule"
                    name="schedule"
                    required
                    value={form.schedule}
                    onChange={handleChange}
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#22C55E";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                    }}
                  >
                    <option value="">Select schedule…</option>
                    <option value="saturday">📅 Saturdays</option>
                    <option value="weekday-evening">
                      🌙 Weekday Evenings (After School)
                    </option>
                    <option value="flexible">🔄 Flexible — Either works</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label style={labelStyle} htmlFor="howHeard">
                    How did you hear about CodeClimb?
                  </label>
                  <select
                    id="howHeard"
                    name="howHeard"
                    value={form.howHeard}
                    onChange={handleChange}
                    style={inputBase}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#22C55E";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#E5E7EB";
                    }}
                  >
                    <option value="">Select an option…</option>
                    <option value="instagram">📸 Instagram</option>
                    <option value="linkedin">💼 LinkedIn</option>
                    <option value="whatsapp">💬 WhatsApp</option>
                    <option value="friend">👥 Friend / Family Referral</option>
                    <option value="google">🔍 Google Search</option>
                    <option value="other">🌟 Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label style={labelStyle} htmlFor="message">
                Additional Notes or Questions (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Any special requirements, questions, or things we should know about your child…"
                style={{ ...inputBase, resize: "vertical", minHeight: "90px" }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#7C3AED";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#E5E7EB";
                }}
              />
            </div>

            {/* Error message */}
            {status === "error" && (
              <div
                className="rounded-xl p-4 mb-6 text-sm font-semibold"
                style={{
                  background: "#FEF2F2",
                  color: "#DC2626",
                  border: "1.5px solid #FCA5A5",
                }}
              >
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-2xl font-bold text-base text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                boxShadow: "0 8px 24px rgba(124,58,237,0.35)",
              }}
            >
              {status === "sending" ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending Registration…
                </span>
              ) : (
                "🚀 Submit Registration"
              )}
            </button>

            <p
              className="text-center text-xs mt-4"
              style={{ color: "#9CA3AF" }}
            >
              We respond within 24 hours. Your information is safe and will
              never be shared.
            </p>
          </form>
        )}

        {/* Alternative contact */}
        <div className="mt-8 text-center">
          <p
            className="text-sm font-semibold"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Prefer to register directly?{" "}
          </p>
          <a
            href="https://wa.me/2347063197619"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
            style={{
              background: "#25D366",
              boxShadow: "0 4px 14px rgba(37,211,102,0.4)",
            }}
          >
            💬 Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
