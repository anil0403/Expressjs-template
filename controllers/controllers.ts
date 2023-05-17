import { Request, Response } from "express";

// user controllers
export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello Express" });
};


// post controllers
