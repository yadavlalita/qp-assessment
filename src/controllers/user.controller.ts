import { Request, Response } from "express";
import { User } from "../models/user";

export const userController = {
    getUsers: async (req: Request, res: Response) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
      }
    },
    createUser: async (req: Request, res: Response) => {
      try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
      } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
      }
    }
  };