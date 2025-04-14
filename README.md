# 🚲 Bike Zone - Bike Shop Application

🔗 **Live Site:** [https://bike-zone-six.vercel.app/](https://bike-zone-six.vercel.app/)

## 📝 Project Overview

Bike Zone is a full-featured Bike Shop web application designed with a user-friendly interface, secure authentication, smooth product management, and responsive design. It offers both public and private routes tailored for customers and admins.

---

## 🎯 Objectives

- Implement role-based authentication using JWT.
- Build an intuitive UI with smooth product browsing, filtering, and searching.
- Allow admins to manage products, users, and orders.
- Enable users to place orders and track them.
- Integrate secure payment with SurjoPay.
- Ensure a responsive, error-free, and visually appealing user experience.

---

## ⚙️ Main Functionalities

### 🔐 1. User Registration & Authentication

- Users register with: **Name, Email, Password** (default role: `customer`).
- Passwords are securely hashed before storing in the database.
- Login using email & password.
- JWT token is generated on login and stored in local storage.
- Logout clears the token and redirects to the login page.
- Manual role update to `admin` (no super admin required).

---

### 🌍 2. Public Routes

#### 🏠 Home Page

- **Navbar:** Logo, Favicon, Navigation, Login/Signup buttons.
- **Banner:** Highlights platform or special offers (carousel supported).
- **Featured Products:** Up to 6 products with a "View All" button.
- **Extra Section:** Testimonials or blog features.
- **Footer:** Links, social icons, contact info.

#### 🛒 All Products Page

- **Search:** By brand, bike name, or category.
- **Filters:** Price range, model, brand, category, availability.
- **Dynamic Results:** Based on search/filter.
- **Product Cards:** Show name, brand, model, price, category.
- **View Details Button**

#### 📄 Product Details Page

- Detailed product information.
- “Buy Now” button redirects to Checkout.

#### ℹ️ About Page

- Overview of the shop and mission.

---

### 🔐 3. Private Routes

#### 💳 Checkout Page

- Place orders (validates stock).
- **Order Form:** Product + user details, total price, payment method.
- **Payment Integration:** SurjoPay.
- “Order Now” button confirms purchase.

#### 🧑‍💼 Dashboard (Role-Based)

##### 👑 Admin Dashboard

- Manage users (e.g., deactivate accounts).
- Manage products (CRUD).
- Manage orders (CRUD).

##### 👤 User Dashboard

- View past orders.
- Update profile & password (with current password check).

---

## 💅 UI/UX Design

### ✅ Responsive Design

- Optimized for all screen sizes.

### ⚠️ Error Handling

- Friendly error messages for:
  - Invalid login credentials.
  - Duplicate registration.
  - Failed actions (e.g., out-of-stock).

### ⏳ Loading States

- Loaders/spinners during API operations.

### 🔔 Toast Notifications

- Example: “Login successful”, “Order placed”, etc.

---

## 💡 Recommended Functionalities (Optional)

### 🚚 Order Tracking (User Side)

- Track order status: **Pending → Processing → Shipped → Delivered**.
- Visual step indicator/progress bar.
- "Track My Order" page includes:
  - Order ID
  - Product details
  - Estimated delivery date
  - Current status

### 🛠 Update Order Status (Admin Side)

- Dropdown to update order status.
- Field for estimated delivery date.
- Real-time status updates for users.

---

## 🛠 Backend Requirements

### 🗃️ Database: MongoDB

#### Schemas:

- **Users:** `name`, `email`, `password`, `role`
- **Products:** `name`, `brand`, `price`, `model`, `stock`, etc.
- **Orders:** `userRef`, `product details`, `totalPrice`, `status`

### 🔐 Authentication

- JWT-based user registration/login/logout.
- Hashed password storage.
- Middleware to protect private routes.

### 📦 Product Management

- Full CRUD functionality.

### 🧾 Order Management

- Create, Read, Update, Delete.
- Check stock before placing order.

### 💳 Payment Integration

- Integrated with **SurjoPay**.

### ⚠️ Error Handling

- Consistent and meaningful error responses for:
  - Invalid login
  - Duplicate registration
  - Out-of-stock orders
  - API failures

---

## 🚀 Performance & Extra Features

- API pagination for products and orders.
- Optimized data fetching.
- Secure and scalable backend.
- Protected dashboard routes using JWT middleware.

---

## 👨‍💻 Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS, Vite, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt
- **Payment Gateway:** SurjoPay
- **Deployment:** Vercel (Client) & Render/Other (Server)

---

Feel free to fork, clone, or contribute! Happy riding 🚴‍♀️🚴‍♂️
