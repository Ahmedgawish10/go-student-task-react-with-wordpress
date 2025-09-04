# GoStudent Registration & Booking Page

A modern, responsive registration and booking interface for GoStudent's online tutoring platform, built with React, Vite, and Tailwind CSS.

## 🎯 Project Overview

This project recreates the GoStudent order page UI using modern front-end technologies. It's designed to be WordPress-compatible and includes all the interactive elements from the original design.

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
- RTL layout support structure
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
├── App.jsx          # Main application component
├── App.css          # Custom styles and responsive design
├── main.jsx         # Application entry point
└── index.css        # Global styles and Tailwind imports
```

## 🎨 Design Features

### Layout
- **Two-column layout** on desktop (form + order overview)
- **Single-column layout** on mobile devices
- **Card-based design** with shadows and rounded corners
- **Clean typography** with proper hierarchy

### Color Scheme
- Primary: Blue (#3b82f6)
- Secondary: Gray tones for text and backgrounds
- Success: Green for discounts and satisfaction rate
- Error: Red for validation states

### Interactive Elements
- **Hover effects** on buttons and form elements
- **Focus states** with blue ring indicators
- **Smooth transitions** for all interactive elements
- **Disabled states** for form validation

## 🔧 WordPress Integration

This project is designed to be easily integrated into WordPress:

### As a WordPress Theme Component
1. Copy the built files to your WordPress theme directory
2. Include the CSS and JS files in your theme's `functions.php`
3. Use the component in your WordPress templates

### As a WordPress Plugin
1. Create a plugin structure
2. Enqueue the built assets
3. Create shortcodes or blocks to display the form

### REST API Compatibility
The form is structured to easily integrate with WordPress REST API:
- Form data can be sent to custom endpoints
- Pricing calculations can be handled server-side
- User data can be stored in WordPress database

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (adjusted grid)
- **Desktop**: > 1024px (two-column layout)

## 🔒 Form Validation

The form includes client-side validation for:
- Required fields
- Email format validation
- Phone number formatting
- Credit card number validation (basic)
- Terms acceptance requirement

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Optimizations

- **Code splitting** with Vite
- **Tree shaking** for unused CSS
- **Optimized images** and assets
- **Minified production builds**
- **Lazy loading** ready structure

## 📝 Development Notes

### State Management
- Uses React hooks for local state management
- Form data is managed with `useState`
- Pricing calculations are reactive to user selections

### Styling Approach
- **Tailwind CSS** for utility-first styling
- **Custom CSS** for specific design requirements
- **Responsive design** with mobile-first approach

### Code Quality
- **ESLint** configuration for code quality
- **Clean, commented code** for maintainability
- **Modular component structure**

## 🔄 Future Enhancements

- [ ] Server-side form validation
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Advanced form validation
- [ ] Analytics integration
- [ ] A/B testing capabilities

## 📄 License

This project is created for educational and demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
