# پروژه نمونه ری‌اکت (React Sample Project)

این یک پروژه نمونه ری‌اکت است که با استفاده از Vite ساخته شده و قابلیت نمایش لیست کاربران را از یک API خارجی دارد.

## قابلیت‌ها

- نمایش لیست کاربران دریافت شده از JSONPlaceholder API
- نمایش اسکلتون هنگام بارگذاری داده‌ها
- مدیریت خطاها
- رابط کاربری ساده و پاسخگو

## تکنولوژی‌های استفاده شده

- React 19
- Vite 6
- react-loading-skeleton برای نمایش حالت بارگذاری
- CSS برای استایل‌دهی

## پیش‌نیازها

- Node.js نسخه 16 یا بالاتر
- npm یا yarn

## نصب و راه‌اندازی

برای نصب و راه‌اندازی پروژه، مراحل زیر را دنبال کنید:

```bash
# کلون کردن مخزن
git clone [آدرس مخزن]

# وارد شدن به دایرکتوری پروژه
cd my-react-app

# نصب وابستگی‌ها
npm install
# یا
yarn install

# اجرای پروژه در حالت توسعه
npm run dev
# یا
yarn dev
```

پس از اجرای دستورات بالا، پروژه روی آدرس `http://localhost:5173` قابل دسترسی خواهد بود.

## ساختار پروژه

```
my-react-app/
├── public/           # فایل‌های استاتیک
├── src/              # کد منبع
│   ├── assets/       # تصاویر و فایل‌های استاتیک
│   ├── App.jsx       # کامپوننت اصلی
│   ├── App.css       # استایل‌های کامپوننت اصلی
│   ├── DataFetcher.jsx # کامپوننت دریافت و نمایش داده‌ها
│   ├── DataFetcher.css # استایل‌های کامپوننت DataFetcher
│   ├── index.css     # استایل‌های سراسری
│   └── main.jsx      # نقطه ورود برنامه
├── index.html        # فایل HTML اصلی
├── package.json      # تنظیمات و وابستگی‌های پروژه
└── vite.config.js    # تنظیمات Vite
```

## دستورات مفید

```bash
# اجرا در حالت توسعه
npm run dev

# ساخت نسخه تولید
npm run build

# پیش‌نمایش نسخه تولید
npm run preview

# بررسی کد با ESLint
npm run lint
```

---

# React Sample Project

This is a sample React project built with Vite that displays a list of users from an external API.

## Features

- Display user list fetched from JSONPlaceholder API
- Show skeleton loading state
- Error handling
- Simple and responsive UI

## Technologies Used

- React 19
- Vite 6
- react-loading-skeleton for loading states
- CSS for styling

## Prerequisites

- Node.js version 16 or higher
- npm or yarn

## Installation and Setup

Follow these steps to install and run the project:

```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd my-react-app

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

After running the commands above, the project will be accessible at `http://localhost:5173`.

## Project Structure

```
my-react-app/
├── public/           # Static files
├── src/              # Source code
│   ├── assets/       # Images and static files
│   ├── App.jsx       # Main component
│   ├── App.css       # Main component styles
│   ├── DataFetcher.jsx # Component for fetching and displaying data
│   ├── DataFetcher.css # DataFetcher component styles
│   ├── index.css     # Global styles
│   └── main.jsx      # Entry point
├── index.html        # Main HTML file
├── package.json      # Project settings and dependencies
└── vite.config.js    # Vite configuration
```

## Useful Commands

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```


