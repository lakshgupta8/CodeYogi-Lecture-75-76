# AwesomeBuy E-Commerce Application

A modern, responsive, and feature-rich e-commerce application built with React, Vite, and Tailwind CSS. This project demonstrates a complete shopping experience including product browsing, detailed views, cart management, and user authentication.

### Implementation Notes
- **Authentication Scope**: Unlike the video tutorial, which secured all pages, this project implements protected routes specifically for dashboard and other authentication-dependent sections.

## 🚀 Features

### 🛍️ Product Browsing
-   **Product Grid**: Browse a wide range of products with infinite scrolling or pagination.
-   **Advanced Filtering**: Search for products by name and sort by price or title.
-   **Pagination**: Efficient pagination with smart navigation (showing a window of pages with ellipses).
-   **Context-Aware Navigation**: Navigate between products ("Next" / "Previous") respecting the current search/filter context.

### 📄 Product Details
-   **Comprehensive View**: High-quality images, detailed descriptions, pricing, and ratings.
-   **Add to Cart**: Easily add items to your cart with adjustable quantities.
-   **Smart Back Navigation**: The "Back" button returns you to the exact state (page, search, sort) you came from.

### 🛒 Shopping Cart
-   **Cart Management**: View added items, update quantities, or remove items.
-   **Real-time Totals**: Automatic calculation of subtotal and total prices.
-   **Persistent State**: Cart items are saved to local storage (or synced with user account).

### 🔐 Authentication & User Accounts
-   **Secure Login & Signup**: User authentication using JWT tokens.
-   **Protected Routes**: Dashboard and other sensitive pages are protected from unauthorized access.
-   **User Dashboard**: View user profile and order history (if implemented).
-   **Forgot Password**: Flow to recover lost passwords.

### 🎨 UI/UX
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.
-   **Global Alerts**: Centralized notification system for success/error messages.
-   **Loading States**: Smooth loading indicators for better user experience.
-   **Modern Styling**: Styled with Tailwind CSS for a clean and professional look.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://reactjs.org/) (v18+)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)
-   **State Management**: React Context API (`UserContext`, `CartContext`, `AlertContext`)
-   **HTTP Client**: [Axios](https://axios-http.com/)
-   **Form Handling**: [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
-   **Utilities**: [Lodash](https://lodash.com/)

## 📁 Project Structure

```
CodeYogi-Lecture-75-76/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── CartList.jsx
│   │   ├── CartRow.jsx
│   │   ├── CartTotals.jsx
│   │   ├── Filter.jsx
│   │   ├── Pagination.jsx
│   │   ├── Loading.jsx
│   │   ├── UserRoute.jsx    # Protected route wrapper
│   │   └── ...
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignUpPage.jsx
│   │   ├── ForgotPasswordPage.jsx
│   │   └── DashboardPage.jsx
│   ├── context/             # React Context providers
│   │   ├── CartContext.js
│   │   ├── CartProvider.jsx
│   │   ├── UserContext.js
│   │   └── UserProvider.jsx
│   ├── hooks/               # Custom React hooks
│   ├── api.js               # API client configuration
│   ├── App.jsx              # Main app component
│   └── main.jsx             # App entry point
├── public/                  # Static assets
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lakshgupta8/CodeYogi-Lecture-75-76
    cd CodeYogi-Lecture-75-76
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    pnpm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📜 Scripts

-   `dev`: Starts the development server.
-   `build`: Builds the application for production.
-   `lint`: Runs ESLint to check for code quality issues.
-   `preview`: Previews the production build locally.

## 🔐 Authentication Flow

The application implements a complete authentication system:

1. **Sign Up**: New users can create an account with email and password
2. **Login**: Existing users can sign in with their credentials
3. **Token Management**: JWT tokens stored in localStorage for session persistence
4. **Protected Routes**: Dashboard accessible only to authenticated users
5. **Auto Login**: Users automatically logged in if valid token exists
6. **Logout**: Clear user session and redirect to home

## 🛒 Shopping Cart

The cart system uses React Context API for state management:

- Add/remove products from cart
- Adjust item quantities
- Persistent cart state across navigation
- Real-time total calculation
- Empty cart state handling

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Dedicated mobile menu component
- Optimized layouts for all screen sizes
- Touch-friendly UI elements

## 🌐 API Integration

The application connects to a backend API for:
- Product data fetching
- User authentication
- Cart operations
- Order management

API base URL: `https://r5ftltl6sj.execute-api.us-east-1.amazonaws.com`

## 🎨 UI Components

### Reusable Components
- **ProductCard**: Display product information in grid
- **Filter**: Search and filter products
- **Pagination**: Navigate through product pages
- **StarRating**: Visual product ratings
- **Loading**: Loading state indicators
- **Input**: Styled form input component
- **UserRoute**: Authentication wrapper for protected routes

## 🔧 Configuration

### Vite Configuration
Located in `vite.config.js` - configured for React with optimal build settings.

### Tailwind CSS
Using Tailwind CSS v4 with Vite plugin for styling.

### ESLint
Code quality maintained with ESLint and recommended React rules.

## 📦 Dependencies

### Production
- React & React DOM for UI
- React Router for navigation
- Axios for API calls
- Formik & Yup for forms and validation
- Tailwind CSS for styling

### Development
- Vite for fast development
- ESLint for code quality
- Prettier for code formatting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the CodeYogi Lecture series.

## 👨‍💻 Developer

Created as part of CodeYogi's Non-Assignment Lectures - 77.

---

**Note**: This is a learning project built as part of a coding course. The backend API is hosted on AWS Lambda and may have usage limitations.
