# EmailJS Integration Guide for gt86partz (Hostinger Email)

This guide will help you set up EmailJS to send order emails from your gt86partz website using your Hostinger email address.

---

## 1. **Create an EmailJS Account**
- Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.

---

## 2. **Add Your Hostinger Email as an Email Service**
1. **Log in to EmailJS.**
2. Go to the **Email Services** section.
3. Click **Add new service**.
4. Choose **SMTP** (not Gmail, Outlook, etc.).
5. Enter your Hostinger SMTP details:
   - **SMTP server:** `smtp.hostinger.com`
   - **Port:** `465` (SSL) or `587` (TLS)
   - **Username:** Your full Hostinger email address (e.g., `yourname@yourdomain.com`)
   - **Password:** Your Hostinger email password
6. Click **Connect account** and follow any verification steps.

---

## 3. **Create an Email Template**
1. Go to the **Email Templates** section in EmailJS.
2. Click **Create new template**.
3. Set up your template:
   - **Subject:**
     ```
     {{subject}}
     ```
   - **Message (Body):**
     ```
     You have received a new order from gt86partz!

     Order Details:
     {{message}}

     If you have any questions, please reply to this email.

     Thank you!
     ```
   - You can add more variables if needed (e.g., customer name, phone).
4. Save the template. Note the **Template ID**.

---

## 4. **Get Your User ID and Service ID**
- In EmailJS, go to **Account** > **API Keys** to find your **User ID**.
- In **Email Services**, find your Hostinger SMTP service and note the **Service ID**.

---

## 5. **Update Your JavaScript**
In your `script.js`, update the EmailJS send call:
```js
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  message: emailBody, // Order details
  subject: 'New Order from gt86partz',
  to_email: 'orders@gt86partz.com', // Or your Hostinger email
}, 'YOUR_USER_ID')
```
Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_USER_ID` with your actual values from EmailJS.

---

## 6. **Troubleshooting Hostinger SMTP**
- Make sure your Hostinger email is working (try sending/receiving from webmail).
- If you get authentication errors, double-check your email/password and SMTP settings.
- If you use 2FA or app passwords, use the app password.
- Some Hostinger plans may require you to enable SMTP or unlock it in the control panel.
- If emails go to spam, set up SPF/DKIM records in your Hostinger DNS settings.

---

## 7. **Test Your Integration**
- Add a product to your cart and proceed to checkout.
- You should receive an order email at your Hostinger address.

---

**Need more help?**
- EmailJS Docs: https://www.emailjs.com/docs/
- Hostinger Email Help: https://www.hostinger.com/tutorials/email
- Or ask your developer/AI assistant! 