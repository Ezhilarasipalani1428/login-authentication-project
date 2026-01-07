# 🔑 Glassmorphic Login Page

A stunning, modern login page with glassmorphic design, animated gradient background, and twinkling stars effect. Built with pure HTML, CSS, and JavaScript with a Node.js/Express backend.

## ✨ Features

### Frontend
- 🎨 **Glassmorphic Design** - Frosted glass effect with backdrop blur
- 🌊 **Animated Gradient Background** - Smooth color transitions
- ⭐ **Twinkling Stars** - Dynamic star animation
- 🔄 **Loading Animation** - Spinner during login request
- ✅ **Success/Error Messages** - Animated feedback with color coding
- ⌨️ **Enter Key Support** - Press Enter to submit
- 📱 **Responsive Design** - Works on all screen sizes

### Backend
- 🚀 **Express.js Server** - Fast and lightweight
- 🔒 **Login Authentication** - Validates user credentials
- 🌐 **CORS Enabled** - Cross-origin requests allowed
- ✅ **Input Validation** - Checks for empty fields
- 📝 **Console Logging** - Tracks incoming requests

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3 (Animations, Glassmorphism, Gradients)
- Vanilla JavaScript (Fetch API)

**Backend:**
- Node.js
- Express.js

## 📁 Project Structure
```
login-project/
├── index.html          # Frontend login page
├── server.js           # Backend Express server
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your system
- A web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. **Clone or download the project**

2. **Navigate to project directory**
```bash
   cd login-project
```

3. **Install dependencies**
```bash
   npm init -y
   npm install express
```

4. **Start the backend server**
```bash
   node server.js
```
   You should see: `Login backend running on http://localhost:3000`

5. **Open the frontend**
   - Double-click `index.html` or
   - Open it in your browser

## 🔐 Test Credentials

Use these credentials to test the login:
```
Email: test@gmail.com
Password: 12345
```

## 🎯 How It Works

1. User enters email and password
2. Click "Login" button (or press Enter)
3. Frontend sends POST request to `http://localhost:3000/login`
4. Backend validates credentials
5. Returns success or error message
6. Frontend displays animated feedback

## 🎨 Design Features

### Color Scheme
- **Primary Gradient:** Deep Emerald (`#064e3b`) to Ocean Blue (`#0c4a6e`)
- **Glass Effect:** White overlay with 10% opacity and 20px blur
- **Success:** Green tint with light border
- **Error:** Red tint with light border

### Animations
- Background gradient shift (2.5s loop)
- Stars twinkling effect (3s loop)
- Login box slide-in entrance
- Button hover lift effect
- Loading spinner rotation
- Success fade-in
- Error shake effect

## 📝 API Endpoints

### POST `/login`
Authenticates user credentials

**Request Body:**
```json
{
  "email": "test@gmail.com",
  "password": "12345"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Login successful ✅"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Invalid email or password ❌"
}
```

### GET `/`
Health check endpoint - confirms server is running

## 🔧 Customization

### Change Test Credentials
Edit `server.js` line 13-16:
```javascript
const USER = {
  email: "your@email.com",
  password: "yourpassword"
};
```

### Change Colors
Edit `index.html` line 21 for gradient colors:
```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 50%, #YOUR_COLOR_1 100%);
```

### Change Animation Speed
Edit `index.html` line 23:
```css
animation: gradientShift 2.5s ease infinite;
/* Change 2.5s to your desired speed */
```

## 🐛 Troubleshooting

**"Server error ❌" message:**
- Make sure backend server is running (`node server.js`)
- Check console for errors (F12 in browser)

**CORS errors:**
- Server includes CORS headers, but if issues persist, check browser console

**Port already in use:**
- Change port in `server.js` line 44:
```javascript
  app.listen(3000, () => { // Change 3000 to another port
```

## 📸 Screenshots

![Login Page](screenshot.png) *(Add your screenshot here)*

## 🚀 Future Enhancements

- [ ] Connect to real database (MongoDB/PostgreSQL)
- [ ] Add JWT token authentication
- [ ] Password hashing with bcrypt
- [ ] "Remember Me" functionality
- [ ] "Forgot Password" feature
- [ ] Email verification
- [ ] Social login (Google, Facebook)
- [ ] Rate limiting for security

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

Created with 💚 by [Your Name]

---

⭐ If you like this project, give it a star!