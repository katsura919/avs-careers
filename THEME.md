# AVS Careers Theme Documentation

This document outlines the design system and theme configuration for the AVS Careers project, based on `src/app/globals.css` and the established design patterns.

## Design System Overview

The project uses **Tailwind CSS v4** with an inline theme configuration and shadcn/ui components. The design features a clean, modern aesthetic with alternating section backgrounds, wave dividers, and a professional blue color scheme.

### Typography

- **Sans Font**: `Geist`, system-ui, sans-serif
- **Mono Font**: `Geist Mono`, monospace
- **Heading Style**: Bold, large sizes (text-4xl to text-5xl)
- **Body Text**: Regular weight with good readability

### Color Palette

The theme defines semantic color variables using OKLCH color space for modern, perceptually uniform colors.

#### Light Mode Colors

| Semantic Name  | OKLCH Value                   | Approximate Hex | Description  |
| :------------- | :---------------------------- | :-------------- | :----------- |
| **Background** | `oklch(100% 0.00011 271.152)` | `#ffffff`       | Pure White   |
| **Foreground** | `oklch(0.13 0.028 261.692)`   | `#212121`       | Dark Gray    |
| **Primary**    | `oklch(0.21 0.034 264.665)`   | `#3a3a3a`       | Charcoal     |
| **Secondary**  | `oklch(0.967 0.003 264.542)`  | `#f6f6f6`       | Light Gray   |
| **Muted**      | `oklch(0.967 0.003 264.542)`  | `#f6f6f6`       | Light Gray   |
| **Accent**     | `oklch(0.967 0.003 264.542)`  | `#f6f6f6`       | Light Gray   |
| **Border**     | `oklch(0.928 0.006 264.531)`  | `#ededed`       | Light Border |
| **Card**       | `oklch(1 0 0)`                | `#ffffff`       | White        |

#### Dark Mode Colors

| Semantic Name  | OKLCH Value                  | Approximate Hex | Description |
| :------------- | :--------------------------- | :-------------- | :---------- |
| **Background** | `oklch(0.13 0.028 261.692)`  | `#212121`       | Dark Gray   |
| **Foreground** | `oklch(0.985 0.002 247.839)` | `#fafafa`       | Off White   |
| **Primary**    | `oklch(0.928 0.006 264.531)` | `#ededed`       | Light Gray  |
| **Secondary**  | `oklch(0.278 0.033 256.848)` | `#474747`       | Medium Gray |
| **Muted**      | `oklch(0.278 0.033 256.848)` | `#474747`       | Medium Gray |
| **Accent**     | `oklch(0.278 0.033 256.848)` | `#474747`       | Medium Gray |

#### Custom Brand Colors (Used in Components)

- **Primary Blue**: `#024466` - Deep Navy Blue (primary buttons, headings, footer)
- **Accent Orange**: `#FF6B35` - Vibrant Orange (highlights, icons)
- **Light Background**: `#f5f9fb` - Soft Blue-Gray (alternating sections)
- **Wave Gradient**: Blue to white gradient for section dividers

### UI Elements

#### NOTE

- Mainly use tailwind and shadcn components
- Install as needed base on the requirement needed to get the job done
- For icons only use Lucid-react or react-icons icons

#### Buttons

The design uses two primary button styles:

- **Primary Button (CTA)**:
  - Background: `bg-[#024466]` (Deep Navy Blue)
  - Text: White
  - Hover: Slightly darker shade
  - Rounded corners with padding
  - Class example: `bg-[#024466] text-white px-8 py-3 rounded-lg hover:bg-[#02334a]`

- **Secondary Button**:
  - Background: Light gray `bg-gray-200`
  - Text: Dark blue `text-[#024466]`
  - Hover: Slightly darker gray
  - Class example: `bg-gray-200 text-[#024466] px-8 py-3 rounded-lg hover:bg-gray-300`

- **shadcn/ui Button Variants**:
  - **Default**: `bg-primary text-primary-foreground hover:bg-primary/90`
  - **Outline**: `border bg-background shadow-xs hover:bg-accent`
  - **Ghost**: `hover:bg-accent hover:text-accent-foreground`
  - **Destructive**: `bg-destructive text-white hover:bg-destructive/90`

#### Cards

Cards feature a clean, elevated design:

- **Base Card**:
  - `bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow`
  - Padding: `p-6` to `p-8`
  - White background with subtle shadow

- **Icon C**:
  - White background with logo and navigation
  - Sticky or fixed positioning
  - Clean, minimal design

- **Footer**:
  - Dark blue background `bg-[#024466]`
  - White text
  - Multi-column layout with links
  - Company branding and copyright

- **Main Content**:
  - Wrapped in `<main className="flex-1">`
  - Sections alternate between white and light backgrounds
  - Wave dividers between major sections

- **Scroll to Top**: Available on all pages

### Color Usage

- **Primary Actions**: Use `bg-[#024466]` for main CTAs and important buttons
- **Secondary Actions** : Use `bg-[#0a2540]` for secondary buttons or like learn more buttons or "proceed here" buttons
- **Headings**: Use `text-[#024466]` for section headings to maintain brand consistency
- **Accents**: Use `#FF6B35` for icons, highlights, and visual emphasis
- **Backgrounds**: Alternate between `bg-white` and `bg-[#f5f9fb]` for visual rhythm

### Component Guidelines

- Leverage shadcn/ui components for consistent styling
- Use `font-sans` for body text and `font-mono` for code
- For brand colors, use Tailwind arbitrary values: `bg-[#024466]`, `text-[#FF6B35]`
- Ensure all pages include the `Header` and `Footer` components for consistency
- Use the Card component with proper shadow and hover effects
- Add wave dividers between major sections for visual flow

### Spacing & Layout

- Use consistent padding: `px-8` for horizontal, `py-16` for vertical section spacing
- Container max-width: `max-w-7xl mx-auto`
- Grid layouts: Use `grid md:grid-cols-2` or `grid md:grid-cols-3` for responsive cards
- Gap between elements: `gap-6` for cards, `gap-3` for list items

### Typography Scale

- **Large Heading**: `text-5xl font-bold` (Hero sections)
- **Section Heading**: `text-4xl font-bold` (Section titles)
- **Card Title**: `text-xl font-bold` (Card headings)
- **Body Text**: `text-base` or `text-lg` (Regular content)
- **Small Text**: `text-sm text-gray-600` (Descriptions, captions)
- **Style**: Circular checkmark icon (green or brand blue)
- **Layout**: Icon on left, text aligned with proper spacing
- **Class pattern**: `flex items-start gap-3` with icon `w-5 h-5 mt-0.5 shrink-0`

#### Section Dividers

- **Wave Dividers**: Curved wave shapes between sections
- **Gradient**: Blue gradient fading to white/light gray
- **Purpose**: Creates visual separation and flow between sections
- **Implementation**: SVG or CSS clip-path

#### Layout

- **Alternating Backgrounds**:
  - White sections: `bg-white`
  - Light sections: `bg-[#f5f9fb]` or `bg-gray-50`
- **Hero Sections**:
  - Full-width with dark blue background `bg-[#024466]`
  - White text with large headings
  - CTA buttons prominently displayed

- **Container**:
  - Standard: `max-w-7xl mx-auto px-8`
  - Content sections: `py-16` for vertical spacing

- **Border Radius**:
  - Base: `--radius: 0.625rem`
  - Variants: `sm` to `4xl` for different elements

### Animations

The project includes `tw-animate-css` for additional Tailwind animations. Common animations include:

- `animate-spin` (used in loading states)
- Additional animations available via tw-animate-css library

### Layout Structure

- **Header & Footer**: Consistent across all pages via `layout.tsx`
- **Main Content**: Wrapped in `<main className="flex-1">`
- **Scroll to Top**: Available on all pages

## Usage Guidelines

- Use semantic color classes (e.g., `text-foreground`, `bg-primary`) instead of hardcoded colors
- Leverage shadcn/ui components for consistent styling
- Use `font-sans` for body text and `font-mono` for code
- For custom colors like brand blue/orange, use Tailwind arbitrary values: `bg-[#053f5c]`
- Ensure all pages include the `Header` and `Footer` components for consistency
- Use the Card component for content sections with proper spacing and shadows</content>
  <parameter name="filePath">c:\Users\Fraaank\Desktop\AVSPH\Websites\CLIENT\avs-careers\THEME.MD
