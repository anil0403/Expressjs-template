import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

// Middleware to protect routes
export const authMiddleware = (req: Request, res: Request, next: any) => {
  try {
    // Get token from request headers
    const token = req.headers.authorization.split(" ")[1]; // Assumes the token is passed as a Bearer token

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECERT);

    // Attach user data to the request object
    req.user = decoded.user;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized Access!" });
  }
};
