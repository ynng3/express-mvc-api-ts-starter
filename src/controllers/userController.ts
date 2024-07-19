import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  User,
} from "../models/userModel";

export const getUsers = (req: Request, res: Response): void => {
  const users = getAllUsers();
  res.json(users);
};

export const getUser = (req: Request, res: Response): void => {
  const user = getUserById(Number(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
};

export const addUser = (req: Request, res: Response): void => {
  const newUser: User = req.body;
  const createdUser = createUser(newUser);
  res.status(201).json(createdUser);
};

export const updateUserById = (req: Request, res: Response): void => {
  const updatedUser = updateUser(Number(req.params.id), req.body);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).send("User not found");
  }
};

export const deleteUserById = (req: Request, res: Response): void => {
  const isDeleted = deleteUser(Number(req.params.id));
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).send("User not found");
  }
};
