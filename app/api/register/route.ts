import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const courseLabels: Record<string, string> = {
  scratchjr: 'ScratchJr (Ages 4–7)',
  scratch: 'Scratch Games & Intro to Programming (Ages 8–11)',
  python: 'Python & Web Development (Ages 12+)',
  unsure: 'Not sure yet (needs guidance)',
}

const scheduleLabels: Record<string, string> = {
  saturday: 'Saturdays',
  'weekday-evening': 'Weekday Evenings (After School)',
  flexible: 'Flexible — Either works',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      parentName,
      childName,
      childAge,
      email,
      phone,
      country,
      course,
      schedule,
      howHeard,
      message,
    } = body

    if (!parentName || !childName || !childAge || !email || !phone || !country || !course || !schedule) {
      return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.office365.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { ciphers: 'SSLv3' },
    })

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #F5F3FF; margin: 0; padding: 20px; }
    .card { background: white; border-radius: 16px; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 8px 30px rgba(124,58,237,0.12); }
    .header { background: linear-gradient(135deg, #7C3AED, #EC4899); padding: 28px 32px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 22px; }
    .header p { color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px; }
    .body { padding: 28px 32px; }
    .section-title { color: #7C3AED; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
    .field { background: #F9FAFB; border-radius: 10px; padding: 12px 14px; }
    .field label { font-size: 11px; color: #9CA3AF; font-weight: 600; display: block; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.5px; }
    .field span { font-size: 14px; color: #1E1B4B; font-weight: 600; }
    .message-box { background: #FFF7ED; border-left: 3px solid #F97316; border-radius: 10px; padding: 14px 16px; margin-top: 16px; font-size: 14px; color: #374151; }
    .footer { background: #F9FAFB; padding: 16px 32px; text-align: center; font-size: 12px; color: #9CA3AF; border-top: 1px solid #E5E7EB; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🚀 New Student Registration</h1>
      <p>CodeClimb Academy — ${new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
    <div class="body">
      <div class="section-title">👩‍👦 Parent / Guardian</div>
      <div class="grid">
        <div class="field"><label>Full Name</label><span>${parentName}</span></div>
        <div class="field"><label>Email</label><span>${email}</span></div>
        <div class="field"><label>Phone / WhatsApp</label><span>${phone}</span></div>
        <div class="field"><label>Country</label><span>${country}</span></div>
      </div>

      <div class="section-title">👶 Child</div>
      <div class="grid">
        <div class="field"><label>Child's Name</label><span>${childName}</span></div>
        <div class="field"><label>Age</label><span>${childAge} years old</span></div>
      </div>

      <div class="section-title">📚 Course Preference</div>
      <div class="grid">
        <div class="field"><label>Course</label><span>${courseLabels[course] || course}</span></div>
        <div class="field"><label>Schedule</label><span>${scheduleLabels[schedule] || schedule}</span></div>
        <div class="field"><label>How They Found Us</label><span>${howHeard || 'Not specified'}</span></div>
      </div>

      ${message ? `<div class="section-title">💬 Additional Notes</div><div class="message-box">${message}</div>` : ''}
    </div>
    <div class="footer">
      CodeClimb Academy · <a href="https://wa.me/2347063197619" style="color:#7C3AED;">Reply via WhatsApp</a> · <a href="mailto:${email}" style="color:#7C3AED;">Reply via Email</a>
    </div>
  </div>
</body>
</html>
`

    await transporter.sendMail({
      from: `"CodeClimb Academy" <${process.env.SMTP_USER}>`,
      to: 'hicodeclimb@outlook.com',
      cc: 'mmofoluwawo@gmail.com',
      replyTo: email,
      subject: `🚀 New Registration: ${childName} (${childAge} yrs) — ${courseLabels[course] || course}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Registration email error:', err)
    return NextResponse.json(
      { error: 'Failed to send registration. Please contact us via WhatsApp.' },
      { status: 500 }
    )
  }
}
