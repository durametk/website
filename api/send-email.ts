// Vercel/Netlify Serverless Function for Resend
// Deploy this to your serverless platform

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, industry, product, requirement, to_email } = req.body;

    const { data, error } = await resend.emails.send({
      from: "Duramet Technologies <onboarding@resend.dev>", // Update with your verified domain
      to: [to_email],
      replyTo: email,
      subject: `New Enquiry from ${name} - ${industry}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Product:</strong> ${product || "N/A"}</p>
        <h3>Requirement:</h3>
        <p>${requirement}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(400).json({ message: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error("Server error:", error);
    return res.status(500).json({ message: error.message || "Internal server error" });
  }
}
