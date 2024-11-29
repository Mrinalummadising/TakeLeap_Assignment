// Import required modules
const express = require("express");
const { format } = require("date-fns");

// Create an Express application
const app = express();

// Middleware function to log HTTP method, URL, and current timestamp
const Middleware = (req, res, next) => {
  const currentTime = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  console.log(`[${currentTime}]HTTP Method: ${req.method}, Url: ${req.url}`);
  next(); // Pass control to the next succeeding middleware  function or route handler
};

// Use the middleware for all routes
app.use(Middleware);

// Route: Home (Root)
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to My Express Server!</h1></br><p>This is the home page.</p>"
  );
});

// 404 Middleware: Handles undefined routes
app.use((req, res) => {
  res
    .status(404)
    .send(
      "<h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p>"
    );
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
