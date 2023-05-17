import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { hash } from "bcrypt";

// user controllers

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const hashedPassword = await hash(password, 10);
  console.log(`hashedPassword = ${hashedPassword}`);
  try {
    const createdNewUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        hashedPassword: hashedPassword,
      },
    });
    res.status(200).json({ createdNewUser });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
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

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message });
  }
};

export const getPostsByUserId = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const posts = await prisma.post.findMany({
      where: {
        userId: id,
      },
    });
    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { title, description, userId } = req.body;
  try {
    const createdPost = await prisma.post.create({
      data: {
        title: title,
        description: description,
        userId: userId,
      },
    });
    res.status(200).json({ createdPost });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ deletedPost });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const { id, title, description } = req.body;
  try {
    const updatedPost = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        description: description,
      },
    });
    res.status(200).json({ updatedPost });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message });
  }
};
