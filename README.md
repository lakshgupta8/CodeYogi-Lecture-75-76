# AwesomeBuy E-Commerce Application

A modern, responsive, and feature-rich e-commerce application built with React, Vite, and Tailwind CSS. This project demonstrates a complete shopping experience including product browsing, detailed views, cart management, and user authentication.

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

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, ProductCard, etc.)
├── context/          # Global state providers (User, Cart, Alert)
├── pages/            # Main route components (ProductsPage, CartPage, etc.)
├── api.js            # API integration functions
├── App.jsx           # Main application component with routing
└── main.jsx          # Entry point
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/e-commerce-app.git
    cd e-commerce-app
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

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
