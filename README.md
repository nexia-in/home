# 🌟 Nexia Virtual Desk - Landing Page

> Professional Profile Creation & Career Solutions | Olarikkara, Thrissur, Kerala

A modern, responsive bilingual (Malayalam/English) landing page for Nexia Virtual Desk - a 16+ years experienced career solutions provider specializing in CV, Resume, Portfolio, and professional profile creation services.

---

## ✨ Features

### 🌐 Bilingual Support
- **English** and **Malayalam** language options
- Seamless language switching
- All content fully translated

### 📋 Profile Creation Services
| Service | Price Range | Delivery |
|---------|-------------|----------|
| CV (Curriculum Vitae) | ₹499 - ₹799 | 2-3 Days |
| Resume | ₹399 - ₹699 | 1-2 Days |
| Portfolio | ₹1,499 - ₹2,999 | 5-7 Days |
| Europass CV | ₹699 - ₹999 | 2-3 Days |
| Cover Letter | ₹249 - ₹499 | 1 Day |
| LinkedIn Optimization | ₹599 - ₹899 | 2-3 Days |

### 💍 Additional Services (Custom Pricing)
- Marriage Profile Creation
- Personal / Local Simple CV
- Other Custom Profiles

### ⚡ Lightning Service
- **+₹199 extra** for priority delivery
- 5 working hours for most services
- 2 Days for Portfolio

### 🎯 Job Search Services
- Job Search Assistance
- Career Counseling
- Interview Preparation
- Digital Presence Building
- Application Tracking
- Networking Guidance

### 📱 WhatsApp Enquiry System
- Auto-popup enquiry form (Name, Phone, Location)
- Auto-generated WhatsApp message
- Direct integration with WhatsApp Business
- Includes service details, date, and time

### 🎨 Design Highlights
- Modern gradient UI with smooth animations
- Fully responsive (Mobile, Tablet, Desktop)
- Interactive hover effects and tooltips
- Sticky navigation header
- Professional color scheme
- Clean card-based layout

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
nexia-virtual-desk/
├── public/                  # 👉 PUT thumbnail.jpg HERE 👈
│   └── thumbnail.jpg        # Social media preview image (1200x630px recommended)
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles
│   └── utils/
│       └── cn.ts            # Utility functions
├── index.html               # HTML template (with OG meta tags)
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies & scripts
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

---

## 🖼️ Add Thumbnail Image (For Social Sharing)

1. **Create** a folder named `public` in your project root (if not exists)
2. **Save** your thumbnail image as: `public/thumbnail.jpg`
3. **Recommended size:** 1200 × 630 pixels (1.91:1 ratio)
4. **File size:** Keep under 300KB for fast loading

> ✅ This image will automatically show when sharing links on WhatsApp, Facebook, Twitter, LinkedIn, etc.
> 
> ✅ Meta tags are already configured in `index.html` - no code changes needed!

---

## ⚙️ Configuration

### Contact Information (Easy to Edit)

To update contact details, edit in `src/App.tsx`:

| Info | Value | Location (Line) |
|------|-------|-----------------|
| Phone | +91 99618 60698 | Search in file |
| Email | nexiacare@gmail.com | Search in file |
| WhatsApp | +91 99618 50698 | `wa.me/919961850698` |
| Address | Olarikkara, Thrissur, Kerala | Header & Footer |

### Edit Experience Banner

The **16+ Years Experience** line is marked with clear comments:
```tsx
// --- EDITABLE EXPERIENCE LINE START ---
  (Your content here)
// --- EDITABLE EXPERIENCE LINE END ---
```

### Update Services

All services are in the `services` array at the top of `src/App.tsx`. Easy to modify:
- Prices & price ranges
- Delivery times
- Features & descriptions
- Icons and colors

---

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - SVG icons (built-in)

---

## 📤 Deployment Options

### 1. **Vercel** (Recommended)
```bash
npm i -g vercel
vercel
```

### 2. **Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### 3. **GitHub Pages**
```bash
npm i -D gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

### 4. **cPanel / Shared Hosting**
Upload contents of `dist/` folder to `public_html/`.

---

## 🔧 Easy Customization Guide

### Change Colors
- Primary gradients: Search for `from-indigo-600 to-blue-600`
- Malayalam theme: Search for `from-green-600 to-emerald-600`

### Add/Edit Services
1. Locate the `services` array in `src/App.tsx`
2. Add/edit objects with the structure:
```typescript
{
  id: 'unique-id',
  icon: '📄',
  title: 'Service Name (English)',
  titleMl: 'സേവന നാമം (Malayalam)',
  description: 'Short description (EN)',
  descriptionMl: 'ചുരുക്കം വിവരണം (ML)',
  // ... more fields
}
```

### Update WhatsApp Number
Search for `919961850698` in `src/App.tsx` and replace with your number (include country code without +).

---

## 📞 Support

For any queries or customization help:
- 📱 **WhatsApp**: +91 99618 50698
- 📧 **Email**: nexiacare@gmail.com
- 📍 **Location**: Olarikkara, Thrissur, Kerala

---

## 📝 License

© 2024 Nexia Virtual Desk. All rights reserved.

---

<div align="center">
  <strong>Made with ❤️ for Nexia Virtual Desk</strong><br>
  <sub>16+ Years of Excellence in Career Solutions</sub>
</div>
