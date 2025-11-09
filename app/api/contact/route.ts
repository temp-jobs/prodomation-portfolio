import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { name, email, company, projectType, message } = formData

    // Validate form data
    if (!name || !email || !company || !projectType || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // You can also use other services like SendGrid, Mailgun, or SMTP
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@prodomation.tech",
        to: "hello@prodomation.tech",
        replyTo: email,
        subject: `New Project Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
            <hr style="margin-top: 20px;">
            <p style="color: #666; font-size: 12px;">This email was sent from your website contact form.</p>
          </div>
        `,
      }),
    })

    const responseData = await response.json()

    console.log("[v0] Email response from Resend:", {
      status: response.status,
      ok: response.ok,
      data: responseData,
      to: "hello@prodomation.tech",
      from: "noreply@prodomation.tech",
    })

    if (!response.ok) {
      console.error("[v0] Email send failed:", responseData)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("[v0] Email sent successfully with ID:", responseData.id)
    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
