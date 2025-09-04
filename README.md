# GoStudent Registration & Booking Page

A modern, responsive registration and booking interface for GoStudent's online tutoring platform, built with React, Vite, and Tailwind CSS.

## 🎯 Project Overview

This project recreates the GoStudent order page UI using modern front-end technologies. It's designed to be **WordPress-compatible** and includes all the interactive elements from the original design. The form can be easily integrated into WordPress themes or plugins.

## ✨ Features

### 🎨 Modern Front-End Implementation
- **React 19** with functional components and hooks
- **Tailwind CSS 4** for responsive, utility-first styling
- **Vite** for fast development and optimized builds
- **ES6+ JavaScript** with modern syntax and features

### 📱 Responsive Design
- Mobile-first approach
- Cross-browser compatible
- Responsive grid layouts using CSS Grid and Flexbox
- Optimized for all screen sizes

### 🔧 Interactive Elements
- Dynamic pricing calculation based on selections
- Real-time form validation
- Interactive duration selection (6, 9, 12, 18, 24, 36 months)
- Payment method switching (SEPA/Card)
- Pay-in-advance discount option
- Terms & conditions acceptance

### 🌍 Internationalization Ready
- Country code selection with flags
- Multi-language ready architecture

### 🔒 Form Features
- Contact information collection
- Billing address management
- Monthly session selection
- Payment method handling
- Credit card form with validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🏗️ Project Structure

```
src/
├── App.jsx                    # Main application component
├── App.css                    # Custom styles and responsive design
├── main.jsx                   # Application entry point
├── index.css                  # Global styles and Tailwind imports
├── components/                # React components
│   └── GoStudentForm.jsx     # Main registration form
├── common/                    # Reusable UI components
│   ├── InputField.jsx         # Form input components
│   └── ToggleSwitch.jsx       # Toggle switch component
├── hooks/                     # Custom React hooks
│   └── useSubmitRegistration.js # Form submission logic
└── validation/                # Form validation schemas
    └── registrationSchema.js  # Yup validation schema
```


## 🔧 WordPress Integration

This project is designed to be easily integrated into WordPress:

### As a WordPress Plugin
1. Create a plugin structure
2. Enqueue the built assets
3. Create shortcodes or blocks to display the form

### REST API Compatibility
The form is structured to easily integrate with WordPress REST API:
- Form data can be sent to custom endpoints
- Pricing calculations can be handled server-side
- User data can be stored in WordPress database


## 🔒 Form Validation

The form uses **React Hook Form** with **Yup** schema validation for robust client-side validation:

- Required fields validation
- Email format validation  
- Phone number formatting
- Credit card number validation (basic)
- Terms acceptance requirement
- Real-time validation feedback
- Custom validation rules with Yup schemas

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Optimizations

- **Code splitting** with Vite

### Styling Approach
- **Tailwind CSS** for utility-first styling
- **Custom CSS** for specific design requirements
- **Responsive design** with mobile-first approach

### Code Quality
- **ESLint** configuration for code quality
- **Clean, commented code** for maintainability
- **Modular component structure**

---

**Built with ❤️ using React, Vite, and Tailwind CSS and comptibale for wordpress**
