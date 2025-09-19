# Horizon Camp - Customer Frontend

This repository contains the customer interface of Horizon Camp, an e-commerce platform specializing in camping and outdoor gear.It provides a modern, responsive, and user-friendly shopping experience with integrated product recommendations powered by machine learning.

## 🚀 Features

- 🏕️ **Modern & Responsive UI** – optimized for desktop and mobile  
- 🌐 **Multi-language support** (English & Vietnamese)  
- 🔍 **Product search, filtering, and sorting**
- 🎙️ **Voice-based product search** for faster browsing  
- 📄 **Product detail pages** with images, descriptions, detail information, reviews and suggested similar and same brand products
- 🛒 **Shopping cart & checkout**
- 🔑 **User authentication** (register, login, password management)  
- 🔑 **Google Login** via Firebase Authentication  
- 💳 **Online payments** with VNPay API  
- 📦 **Shipping service integration** with GHN API  
- 📧 **Automatic email notifications** (multi-language)  
- 🧾 **Invoice review** after successful order
- 📦 **Order management**: view purchased orders, cancel pending orders  
- ⭐ **Order reviews**: rate and review purchased products  
- 👤 **Personal account management**: update profile info, manage shipping addresses
- 📚 **Camping Guide**: browse outdoor tips & articles for a better camping experience   
- 🤖 **Personalized product recommendations** (from Recommendation System backend)

## 🛠️ Tech Stack

- **React** (UI library)  
- **Redux** (state management)  
- **TailwindCSS** (styling)  
- **Material UI** (UI components)  
- **Axios** (API communication)  
- **Firebase Authentication** (Google login, JWT handling)

## 📂 Project Structure

```bash
Horizon-Camp-Frontend/
│── public/                # Public assets (favicon, static files)
│── src/
│   ├── assets/            # Images, icons, fonts
│   ├── components/        # Reusable UI components
│   ├── configs/           # App configurations
│   ├── constants/         # Constant variables (routes, API keys, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout wrappers (MainLayout, AuthLayout, etc.)
│   ├── pages/             # Main pages (Home, Product, Cart, Checkout, Profile, etc.)
│   ├── redux/             # Redux slices, store configuration
│   ├── routes/            # App routes definitions
│   ├── services/          # API calls & external services
│   ├── utils/             # Helper functions (format, validation, etc.)
│   ├── App.jsx            # Main application component
│   └── index.css          # Global styles
│
├── .env.example           # Example environment variables
├── package.json           # Project dependencies & scripts
├── README.md              # Project documentation
└── .gitignore             # Git ignore rules
```

## ⚙️ Installation

```bash
git clone https://github.com/tianeternis/Horizon-Camp-Frontend.git
cd Horizon-Camp-Frontend
npm install
npm run dev
```

## 🎨 Demo Interface
### 🏕️ Homepage
<img width="1897" height="907" alt="image" src="https://github.com/user-attachments/assets/5f1487e4-83a2-4e92-96ce-3390cb0559f6" />

### 🛒 Product Listing
<img width="1893" height="906" alt="image" src="https://github.com/user-attachments/assets/77d204db-c450-4b24-9876-657396102913" />

### 📄 Product Detail
<img width="1896" height="897" alt="image" src="https://github.com/user-attachments/assets/9c56a90a-4bd7-478a-8780-f525470ea20f" />

<img width="1891" height="903" alt="image" src="https://github.com/user-attachments/assets/80fd9e14-8f30-4797-a9b3-1752931e05e9" />

### 🛍️ Shopping Cart
<img width="1891" height="906" alt="image" src="https://github.com/user-attachments/assets/9c14da02-f26c-4198-ab98-8e9f256e9262" />

#### 💳 Checkout
<img width="1892" height="886" alt="image" src="https://github.com/user-attachments/assets/745f3818-2c47-47cc-89f4-a7fbc0aecd5e" />

<img width="1893" height="907" alt="image" src="https://github.com/user-attachments/assets/31ef07e0-2da9-49c1-b839-9387625b5500" />

### 📦Order Management
<img width="1890" height="903" alt="image" src="https://github.com/user-attachments/assets/1bc8f9fc-59e6-4751-a110-65195b2ec107" />

### ⭐Review Order
<img width="1897" height="906" alt="image" src="https://github.com/user-attachments/assets/4aae2e2e-e04f-4d56-9d4a-cce3e2a0d4af" />

### 📚 Camping Guide
<img width="1891" height="908" alt="image" src="https://github.com/user-attachments/assets/f6ea3c37-7bbe-4e8c-8633-d1e19d23f255" />

### 👤 User Profile & Address Management
<img width="1890" height="901" alt="image" src="https://github.com/user-attachments/assets/07e96a73-5df7-4abe-b470-9044313f94e7" />

<img width="1892" height="902" alt="image" src="https://github.com/user-attachments/assets/367f59e9-1595-4f5f-a8e8-0e2698acf33d" />

### 🤖 Recommendation System
<img width="1345" height="877" alt="image" src="https://github.com/user-attachments/assets/18420a49-0e10-48ff-a5ff-146f9090499a" />

### 🎙️ Voice Search
<img width="1895" height="905" alt="image" src="https://github.com/user-attachments/assets/554aee84-19f2-4084-84bb-1ef72fe4246a" />
