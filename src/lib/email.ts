// Email API Configuration
// This will call your Vercel/Netlify serverless function

export const EMAIL_API_ENDPOINT = "/api/send-email"; // Update this if your endpoint is different

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  industry: string;
  requirement: string;
  product?: string;
}

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  const response = await fetch(EMAIL_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      to_email: "aniketcoolshe@gmail.com",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to send email");
  }
};
