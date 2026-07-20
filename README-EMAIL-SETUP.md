# Email Notification System Setup Guide

This guide will help you set up the email notification system for your contact form using EmailJS and Google reCAPTCHA.

## 🚀 Quick Setup Overview

1. **EmailJS Setup** - Configure email service
2. **reCAPTCHA Setup** - Add spam protection
3. **Template Configuration** - Set up email templates
4. **Environment Variables** - Configure API keys

## 📧 EmailJS Setup

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Step 3: Create Email Templates

#### Template 1: Contact Notification (to your inbox)
1. Go to **Email Templates** → **Create New Template**
2. Template ID: `contact_notification_template`
3. Use this template content:

```html
Subject: New Contact Form Submission - {{from_name}}

<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>New Contact Form Submission</h2>
  
  <div style="background: #f5f5f5; padding: 20px; margin: 20px 0;">
    <h3>Contact Information</h3>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Project Type:</strong> {{project_type}}</p>
    <p><strong>Submitted:</strong> {{timestamp}}</p>
  </div>
  
  <div style="background: #f9f9f9; padding: 20px; margin: 20px 0;">
    <h3>Message</h3>
    <p>{{message}}</p>
  </div>
  
  <p><em>Reply directly to this email to respond to {{from_name}}</em></p>
</div>
```

#### Template 2: Auto-Reply (to visitor)
1. Create another template with ID: `auto_reply_template`
2. Use this template content:

```html
Subject: Thank you for contacting Grid Estimations

<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>Thank You for Contacting Us!</h2>
  
  <p>Hi {{to_name}},</p>
  
  <p>Thank you for reaching out to Grid Estimations! We've received your message and will respond within 2 hours during business hours.</p>
  
  <div style="background: #e8f5e8; padding: 15px; margin: 20px 0;">
    <h3>What happens next?</h3>
    <ul>
      <li>Our team will review your project details</li>
      <li>We'll respond within 2 hours during business hours</li>
      <li>You'll receive a personalized response</li>
    </ul>
  </div>
  
  <p>For urgent matters, call us at: <strong>+1 (555) 123-4567</strong></p>
  
  <p>Best regards,<br>The Grid Estimations Team</p>
</div>
```

### Step 4: Get Your User ID
1. Go to **Account** → **General**
2. Copy your **User ID**

## 🛡️ Google reCAPTCHA Setup

### Step 1: Create reCAPTCHA Site
1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Click **Create** (+)
3. Fill in the form:
   - **Label:** Grid Estimations Contact Form
   - **reCAPTCHA type:** reCAPTCHA v2 → "I'm not a robot" Checkbox
   - **Domains:** Add your domain (e.g., `gridestimations.com`, `localhost`)
4. Accept terms and click **Submit**

### Step 2: Get Your Site Key
1. Copy the **Site Key** from the reCAPTCHA admin panel
2. Keep the **Secret Key** secure (you'll need it for server-side verification if you add backend processing later)

## ⚙️ Configuration

### Environment Variables Setup
1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the `.env` file with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=contact_notification_template
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=auto_reply_template
VITE_EMAILJS_USER_ID=your_actual_user_id
VITE_RECAPTCHA_SITE_KEY=your_actual_recaptcha_site_key
VITE_BUSINESS_EMAIL=your@email.com
VITE_BUSINESS_PHONE=+1 (555) 123-4567
VITE_COMPANY_NAME=Your Company Name
```

3. **Important**: Add `.env` to your `.gitignore` file to keep credentials secure:
```
# Environment variables
.env
```

## 🧪 Testing

### Test the Contact Form
1. Fill out the contact form on your website
2. Complete the reCAPTCHA
3. Submit the form
4. Check your email inbox for the notification
5. Check the visitor's email for the auto-reply

### Troubleshooting
- **EmailJS errors:** Check your service ID, template ID, and user ID
- **reCAPTCHA errors:** Verify your site key and domain settings
- **Email not received:** Check spam folder, verify email service configuration
- **Template errors:** Ensure all template variables are properly formatted

## 🔒 Security Best Practices

1. **Never expose secret keys** in frontend code
2. **Use environment variables** for sensitive configuration
3. **Validate all inputs** on both client and server side
4. **Implement rate limiting** to prevent spam
5. **Monitor email usage** to avoid quota limits
6. **Use HTTPS** in production

## 📊 Monitoring & Analytics

### Email Delivery Monitoring
- Monitor EmailJS dashboard for delivery statistics
- Set up alerts for failed deliveries
- Track response times and success rates

### Error Logging
The system includes built-in error logging. In production, consider integrating with:
- Sentry for error tracking
- LogRocket for user session replay
- Google Analytics for form completion tracking

## 🚀 Production Deployment

### Before Going Live
1. ✅ Test all email templates
2. ✅ Verify reCAPTCHA works on your domain
3. ✅ Set up proper error monitoring
4. ✅ Configure email quotas and limits
5. ✅ Test form validation thoroughly
6. ✅ Ensure mobile responsiveness

### Post-Launch
1. Monitor email delivery rates
2. Check spam folder placement
3. Gather user feedback on form experience
4. Monitor for spam submissions
5. Regularly update security measures

## 💡 Advanced Features

### Future Enhancements
- **Backend Integration:** Move to server-side email processing
- **Database Storage:** Store form submissions in a database
- **CRM Integration:** Connect to Salesforce, HubSpot, etc.
- **Advanced Analytics:** Track conversion rates and user behavior
- **A/B Testing:** Test different form layouts and copy

### Scaling Considerations
- **Email Quotas:** Monitor EmailJS usage limits
- **Performance:** Consider caching and optimization
- **Security:** Implement additional spam protection
- **Backup Systems:** Set up redundant email delivery

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all configuration values
3. Test with different email providers
4. Contact EmailJS support for service-specific issues
5. Check Google reCAPTCHA documentation for CAPTCHA issues

---

**Note:** This setup provides a robust, production-ready email notification system with proper validation, security measures, and user experience considerations.