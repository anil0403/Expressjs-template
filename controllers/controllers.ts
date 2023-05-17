import { Request, Response } from "express";
import { prisma } from "../config/prisma";

// user controllers

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const createdNewUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        hashedPassword: password,
      },
    });
    res.status(200).json({ createdNewUser });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ users });
  try {
  } catch (error) {
    // console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ deletedUser });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message });
  }
};

// post controllers
