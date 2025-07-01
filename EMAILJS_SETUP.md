# EmailJS Setup Guide

To make the contact form functional and send emails to your Gmail, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (abhijeetk452452@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Abhijeet,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Mobile: {{mobile}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## 5. Update Contact Component
Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("zXO8yP-9vnnO0JFQY");

// Replace YOUR_SERVICE_ID with your service ID
// Replace YOUR_TEMPLATE_ID with your template ID
await emailjs.send(
  'service_mf8q8h4',
  'template_cafp7yx',
  templateParams
);
```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check your Gmail for the message

## Features Added:
- ✅ Form validation (all fields required, email format, minimum message length)
- ✅ Real-time error clearing when user types
- ✅ Loading state with spinner during submission
- ✅ Success toast notification with custom message
- ✅ Form reset after successful submission
- ✅ Email sent directly to your Gmail
- ✅ Responsive design with animations

The form will now:
- Validate all inputs before submission
- Show loading state while sending
- Display a beautiful success toast: "Message Sent Successfully! Have patience, Abhijeet will contact you soon! 🚀"
- Send the message directly to your Gmail inbox
- Reset the form after successful submission 