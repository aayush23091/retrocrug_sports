
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Middleware to verify JWT token
export function authenticateToken(req, res, next) {
  console.log("authenticateToken called");
  console.log("Request path:", req.path);
  console.log("Request method:", req.method);

  // Skip token verification for the login route
  if (req.path === "/api/auth/login") {
    console.log("Skipping authentication for login route");
    return next();
  }

  // Get full Authorization header for enhanced logging
  const authHeader = req.header("Authorization");
  console.log("Full Authorization header:", authHeader);

  // Extract token from Authorization header
  const token = authHeader?.split(" ")[1];
  console.log("Extracted token:", token);

  if (!token) {
    console.log("No token provided");
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, process.env.secretkey, (err, decoded) => {
    console.log("JWT verification result:");
    console.log("Error:", err);
    console.log("Decoded:", decoded);

    if (err) {
      console.log("Token verification failed");
      return res.status(403).send("Invalid or expired token.");
    }
    req.user = decoded; // Attach decoded payload to request object
    console.log("Token verification successful");
    console.log("Decoded user object structure:", JSON.stringify(decoded, null, 2));
    next(); // Proceed to the next middleware or route handler
  });
}
