
<img src="./frontend/src/assets/fevicon.png" alt="FitBae Logo" width="100" height="100">

# **FitBae** – Fashion-Forward Clothing E-commerce Platform

**FitBae** is a sleek, responsive, and full-featured clothing e-commerce web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It delivers a smooth user experience for browsing, purchasing, and managing fashion products. With secure **Stripe payments**, personalized user accounts, and an intuitive admin dashboard, FitBae is tailored to meet the needs of both online shoppers and store owners alike.

---
## 🛒 Ecommerce-App (MERN Stack + Stripe)

A full-featured Ecommerce Web Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), with secure Stripe payment integration. This project demonstrates a production-ready shopping platform featuring product browsing, user authentication, shopping cart functionality, admin controls, and secure checkout.
---
## 🌐 Live Demo
Live - https://fitbae-frontend-five.vercel.app

---

## 🚀 Tech Stack

**MongoDB** -	NoSQL database to store products, users, and orders.

**Express.js** - Backend framework for building RESTful APIs.

**React.js** -	Frontend framework for building UI components.

**Node.js** -	Runtime environment for the backend server.

**Stripe API** - Secure and reliable payment gateway integration.

**JWT** - For token-based authentication.

---

## 📦 Features
**👥 User Features**

- ✅ User registration & login (JWT authentication)

- ✅ View all products with search & filter

- ✅ Add/remove items to/from cart

- ✅ Checkout with real-time payment via Stripe

- ✅ View order history

**🛠️ Admin Features**

- ✅ Admin login with authentication

- ✅ Add, update, or delete products

- ✅ Manage users and orders

- ✅ Dashboard to monitor sales and product inventory

---
## 🔐 Authentication & Security

- Passwords hashed using bcrypt

- JWT tokens for session management

- Role-based access control for Admin & Users

- Stripe API used for secure payment processing

---

## 🧪 Testing

- Manual testing performed for all major user flows (register, login, add to cart, place order)

- Basic error handling for invalid operations
---
## 🛠️ Installation
Follow these steps to set up the Admin Panel, Backend, and Frontend for FitBae on your local machine.

### **1. Clone the Repository**

- git clone https://github.com/SagarNegi10/Ecommerce-App.git

- cd Ecommerce-App

### **2. Backend Setup**

**(a). Navigate to the backend directory:**

- cd backend

**(b). Install dependencies:**

- npm install

**(c). Create a .env file in the backend directory and add the following (replace with your actual values):**

- MONGODB_URI = "your_mongodb_connection_string"

- CLOUDINARY_API_KEY = "your_cloudinary_api_key"

- CLOUDINARY_SECRET_KEY = "your_cloudinary_secret_key"

- CLOUDINARY_NAME = "your_name"

- JWT_SECRET = "FitBae"

- ADMIN_EMAIL = "abc@xyz.com"

- ADMIN_PASSWORD = "admin123"

- STRIPE_SECRET_KEY = "your_stripe_secret_key"

**(d). Start the backend server:**

- npm run server

### **3. Frontend Setup**

**(a). Open a new terminal and navigate to the frontend directory:**

- cd frontend

**(b). Install dependencies:**

- npm install

**(c). Create a .env file in the frontend directory and add the following (replace with your actual values):**

- VITE_BACKEND_URL = 'http://localhost:4000'

**(d). Start the frontend server:**

- npm run dev

### **4. Admin Setup**

**(a). Open a new terminal and navigate to the frontend directory:**

- cd admin

**(b). Install dependencies:**

- npm install

**(c). Create a .env file in the frontend directory and add the following (replace with your actual values):**

- VITE_BACKEND_URL = 'http://localhost:4000'

**(d). Start the frontend server:**

- npm run dev

### **5. Additional Notes**

- Ensure MongoDB is running locally or use a cloud provider like MongoDB Atlas.

- For image uploads, set up a Cloudinary account and use your API credentials.

- For Stripe payments, obtain your API keys from the Stripe dashboard.

- The default admin credentials can be set in your backend .env file. Update them after first login for security.

- If you encounter port conflicts, adjust the ports in the respective configuration files.

---
## 📌 Future Improvements

- 📊 Admin dashboard analytics (sales, customers, etc.)

- 🧾 Invoice generation and email notifications

- 🔍 Product reviews and ratings

- 🛡️ Advanced security: rate limiting, captcha, etc.

---
## 🤝 Contributing
Contributions are welcome! Please open issues or submit pull requests for any improvements or bug fixes.

--- 
## 🙋‍♂️ Author
Deepanshu Adhikari

📧 [deepanshuadhikari@gmail.com]

🔗 [https://www.linkedin.com/in/deepanshu-adhikari-1b768028b]
