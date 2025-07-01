# EmailJS Debugging Guide

## Current Issues:
1. Form validation not working
2. Email not being sent to Gmail

## Debugging Steps:

### 1. Check Browser Console
1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Fill out the contact form and submit
4. Look for console logs and errors

### 2. Verify EmailJS Template Variables
Your EmailJS template should use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{mobile}}` - Sender's phone number
- `{{subject}}` - Subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name

### 3. Check EmailJS Dashboard
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Check if your service is active
3. Verify template variables match the code
4. Check if there are any error logs

### 4. Test EmailJS Configuration
Add this test code to your Contact component temporarily:

```javascript
// Add this function to test EmailJS
const testEmailJS = async () => {
  try {
    const result = await emailjs.send(
      'service_mf8q8h4',
      'template_cafp7yx',
      {
        from_name: 'Test User',
        from_email: 'test@example.com',
        mobile: '+91 1234567890',
        subject: 'Test Subject',
        message: 'This is a test message',
        to_name: 'Abhijeet Kumar'
      }
    );
    console.log('Test email sent:', result);
  } catch (error) {
    console.error('Test email failed:', error);
  }
};

// Call this function in useEffect to test
useEffect(() => {
  emailjs.init("zXO8yP-9vnnO0JFQY");
  testEmailJS(); // Add this line to test
}, []);
```

### 5. Common Issues & Solutions:

#### Issue: "Service not found"
- Check if service ID is correct: `service_mf8q8h4`
- Verify service is active in EmailJS dashboard

#### Issue: "Template not found"
- Check if template ID is correct: `template_cafp7yx`
- Verify template is active in EmailJS dashboard

#### Issue: "Invalid template variables"
- Make sure template variables in EmailJS match the code
- Variables should be: `from_name`, `from_email`, `mobile`, `subject`, `message`

#### Issue: "Public key invalid"
- Check if public key is correct: `zXO8yP-9vnnO0JFQY`
- Verify key is active in EmailJS dashboard

### 6. Alternative Template Variables
If the current variables don't work, try these common ones:
```javascript
const templateParams = {
  name: formData.name,
  email: formData.email,
  subject: formData.subject,
  message: formData.message
};
```

### 7. Check Network Tab
1. Open Developer Tools → Network tab
2. Submit the form
3. Look for requests to EmailJS API
4. Check if requests are successful (200 status)

## Next Steps:
1. Check the browser console for errors
2. Verify your EmailJS template variables
3. Test with the provided test function
4. Let me know what errors you see in the console 