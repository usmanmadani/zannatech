import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace with your actual credentials
const EMAILJS_SERVICE_ID = 'service_uqdxi9o';
const EMAILJS_TEMPLATE_ID = 'template_r7q5wo8';
const EMAILJS_PUBLIC_KEY = 'fFnSjVZMndELwTPEl';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'zannatechinnovations@gmail.com',
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
      // Add timestamp for reference
      timestamp: new Date().toLocaleString(),
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Alternative method using fetch for backend integration
export const sendContactEmailViaBackend = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        to: 'zannatechinnovations@gmail.com',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Failed to send email via backend:', error);
    return false;
  }
};