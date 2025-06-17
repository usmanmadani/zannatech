# ZannaTech Innovation Limited Website

A modern, responsive website for ZannaTech Innovation Limited built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, modern design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎭 Engaging micro-interactions and hover effects
- 📧 Contact form with email integration
- 🎯 SEO optimized
- ♿ Accessibility focused

## Pages

- **Home**: Hero section with animated elements and company overview
- **About**: Company story, mission, vision, values, and team
- **Services**: Comprehensive service offerings and process
- **Portfolio**: Project showcase with filtering capabilities
- **Pricing**: Transparent pricing for all services
- **FAQ**: Frequently asked questions with expandable sections
- **Contact**: Contact form with email functionality

## Email Setup

The contact form is configured to send emails to `zannatechinnovations@gmail.com`. To enable email functionality:

### Option 1: EmailJS (Recommended for client-side)

1. Create an account at [EmailJS](https://emailjs.com)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{to_email}}` - Recipient email (zannatechinnovations@gmail.com)
   - `{{subject}}` - Service interest
   - `{{message}}` - Project details
   - `{{reply_to}}` - Reply-to email
   - `{{timestamp}}` - Submission timestamp

4. Update the credentials in `src/services/emailService.ts`:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

### Option 2: Backend Integration

For a more robust solution, implement a backend API endpoint at `/api/contact` that handles email sending server-side.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **EmailJS** - Email service

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Hero.tsx
│   ├── Layout.tsx
│   ├── ProjectCard.tsx
│   └── ServiceCard.tsx
├── pages/              # Page components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   ├── Pricing.tsx
│   └── Services.tsx
├── services/           # Service utilities
│   └── emailService.ts
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles and animations
```

## Animations

The website features a comprehensive animation system including:

- **Fade-in effects** with staggered timing
- **Scale transforms** on hover
- **Color transitions** for interactive elements
- **Floating elements** for visual depth
- **Shimmer text** effects
- **Bounce animations** for icons
- **Pulse effects** for emphasis
- **Count-up animations** for statistics

All animations are optimized for performance and respect user preferences for reduced motion.

## Company Statistics

- **30+ Projects Completed** - Successfully delivered projects across various industries
- **25+ Happy Clients** - Satisfied customers who trust our services
- **5+ Years Experience** - Proven track record in technology solutions
- **24/7 Support** - Round-the-clock customer support

## Contact Information

- **Company**: ZannaTech Innovation Limited
- **Email**: zannatechinnovations@gmail.com
- **Phone**: +234 811 4910 4085
- **Address**: Along Maitama Garui Road, Mpape, FCT, Nigeria
- **Registration**: RC: 8156012

## License

© 2024 ZannaTech Innovation Limited. All rights reserved.