# Sterling Mutuals Inc. - Complaint Form

A professional, accessible complaint form built with Next.js 14+ and shadcn/ui, designed to meet Vercel-level quality standards.

## Features

- **Modern UI/UX**: Clean, minimalist design with excellent typography and spacing
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Accessibility**: WCAG-compliant with proper ARIA labels, focus management, and keyboard navigation
- **Form Validation**: Client-side validation using Zod and react-hook-form
- **File Upload UI**: Drag & drop file upload interface (UI only, no actual upload)
- **Security Verification**: Fake CAPTCHA system for demonstration purposes
- **Process Stepper**: Visual representation of the complaint process
- **Toast Notifications**: Success/error feedback using Sonner
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: react-hook-form + Zod validation
- **File Upload**: react-dropzone
- **Notifications**: Sonner (toast)

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd sterling-complaints
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
sterling-complaints/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with font and toast provider
│   └── page.tsx             # Main complaint form page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── CaptchaBox.tsx       # Security verification component
│   ├── FileDropzone.tsx     # File upload interface
│   ├── ProcessStepper.tsx   # 4-step process visualization
│   ├── SectionCard.tsx      # Reusable form section wrapper
│   └── Sidebar.tsx          # Right sidebar with process info
├── lib/
│   ├── utils.ts             # Utility functions
│   └── validation.ts        # Zod schemas and validation logic
└── README.md
```

## Form Sections

1. **Personal Information**
   - Full Name (required)
   - Email Address (required)
   - Phone Number (optional)

2. **Account Information**
   - Sterling Advisor Name (required)

3. **Complaint Details**
   - Detailed complaint description (minimum 200 characters)
   - Supporting documentation notes

4. **File Upload**
   - Drag & drop interface
   - Supports images (JPG, PNG, GIF) and documents (PDF, DOC, DOCX)
   - 10MB file size limit per file

5. **Security Verification**
   - Fake CAPTCHA system
   - Must be completed before form submission

## Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy
   - No additional configuration needed

### Other Platforms

The app is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- Render
- Any platform that supports Node.js

## Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type check
pnpm type-check
```

## Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind config in `tailwind.config.ts`
- Customize shadcn/ui theme in `components.json`

### Form Fields
- Add/remove fields in `lib/validation.ts`
- Update the form schema and TypeScript types
- Modify the form UI in `app/page.tsx`

### Branding
- Update metadata in `app/layout.tsx`
- Replace company information in `components/Sidebar.tsx`
- Customize colors in the CSS variables

## Accessibility Features

- Semantic HTML structure
- Proper ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast support
- Reduced motion support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is built for Sterling Mutuals Inc. All rights reserved.

## Support

For technical support or questions about this implementation, please contact the development team.