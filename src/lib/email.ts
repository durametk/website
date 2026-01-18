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
  try {
    const response = await fetch(EMAIL_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        to_email: "karthik.ramesh@duramettechnologies.com",
      }),
    });

    if (!response.ok) {
      let errorMessage = "Failed to send email";
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        errorMessage = `Server error: ${response.status} ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || "Email sending failed");
    }
  } catch (error: any) {
    // Handle network errors
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Unable to connect to server. Please make sure the email server is running.");
    }
    throw error;
  }
};
