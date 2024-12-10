const express = require("express");
const userRouter = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");
const cors = require("cors");
const connectDB = require("./db/connect"); // Ensure this is your database connection logic

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set template engine
app.set("view engine", "ejs");

// Routes
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

// Default route
app.use("/api", (req, res) => {
  res.send("hello");
});

// Define port
const PORT = process.env.PORT || 5001;

// Start server and connect to DB
const start = async () => {
  try {
    // Attempt to connect to the database
    await connectDB();
    console.log("Database connected successfully");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

// Call the start function
start();
