// Netlify Serverless Function for Resend
import { Resend } from "resend";
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const resend = new Resend(process.env.RESEND_API_KEY || "re_2dz3tHHJ_HGwXiSLcCfR924BFyk8TqFit");

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, phone, industry, product, requirement, to_email } = body;

    // Validate required fields
    if (!name || !email || !phone || !industry || !requirement) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Missing required fields: name, email, phone, industry, and requirement are required",
        }),
      };
    }

    // Email recipient - using verified domain
    const recipientEmail = to_email || "karthik.ramesh@duramettechnologies.com";

    // Using verified domain - domain is verified in Resend
    const fromEmail = "Duramet Technologies <noreply@duramettechnologies.com>";

    // Send email to company
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `New Enquiry from ${name} - ${industry}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p style="margin: 10px 0;"><strong>Industry:</strong> ${industry}</p>
            <p style="margin: 10px 0;"><strong>Product:</strong> ${product || "N/A"}</p>
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Requirement Details:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #0066cc; white-space: pre-wrap;">
              ${requirement}
            </p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Duramet Technologies website contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: error.message || "Failed to send email",
          error: error,
        }),
      };
    }

    // Send auto-reply to user
    try {
      await resend.emails.send({
        from: "Duramet Technologies <noreply@duramettechnologies.com>",
        to: [email],
        subject: "Thank you for your enquiry - Duramet Technologies",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
              Thank You for Your Enquiry
            </h2>
            <p style="color: #333; line-height: 1.6;">
              Dear ${name},
            </p>
            <p style="color: #333; line-height: 1.6;">
              Thank you for contacting Duramet Technologies. We have received your enquiry regarding <strong>${product || industry}</strong> and our team will review it shortly.
            </p>
            <p style="color: #333; line-height: 1.6;">
              We aim to respond to all enquiries within <strong>24 hours</strong>. If your matter is urgent, please feel free to contact us directly at:
            </p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:sales@duramettechnologies.com">sales@duramettechnologies.com</a></p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:+919686118846">+91-9686118846</a></p>
              <p style="margin: 5px 0;"><strong>Office:</strong> 080-497238825</p>
            </div>
            <p style="color: #333; line-height: 1.6;">
              We look forward to assisting you with your requirements.
            </p>
            <p style="color: #333; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              <strong>Duramet Technologies Team</strong><br>
              <span style="color: #666; font-size: 12px;">
                #39, Ejipura Main Road, Near 24th Cross, Ejipura, Bangalore – 560047<br>
                Working Hours: Monday – Saturday | 10:00 AM – 6:30 PM
              </span>
            </p>
          </div>
        `,
      });
      console.log("Auto-reply sent successfully to user");
    } catch (autoReplyError) {
      console.error("Failed to send auto-reply:", autoReplyError);
    }

    console.log("Email sent successfully:", data);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error: any) {
    console.error("Server error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: error.message || "Internal server error",
        error: error.toString(),
      }),
    };
  }
};

