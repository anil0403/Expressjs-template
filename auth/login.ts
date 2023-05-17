import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { compare } from "bcrypt";
import  jwt  from "jsonwebtoken";

// Find user by email
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // Compare the provided password with the stored hashed password
  compare(password, user.hashedPassword, (error: any, result: any) => {
    if (error || !result) {
      return res.status(401).json({ message: "Authentication failed" });
    }
  });

  // Generate a JWT
  const token = jwt.sign({ user: { email } }, process.env.JWT_SECERT, {
    expiresIn: process.env.JWT_EXPIRATION,
  });

  res.status(200).json({ token });
};
