const express = require("express");
const app = express();

// Allow frontend
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(express.json());

// Dummy user
const USER = {
  email: "test@gmail.com",
  password: "12345"
};

// Login API
app.post("/login", (req, res) => {
  console.log("Incoming:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password required"
    });
  }

  if (email === USER.email && password === USER.password) {
    res.json({
      success: true,
      message: "Login successful ✅"
    });
  } else {
    res.json({
      success: false,
      message: "Invalid email or password ❌"
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(3000, () => {
  console.log("Login backend running on http://localhost:3000");
});

