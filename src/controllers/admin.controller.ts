import { Request, Response } from "express";
import { User } from "../models/user";

export const adminController = {
    getAdmins: async (req: Request, res: Response) => {
      try {
        const admins = await User.find({ role: 'Admin' });
        res.json(admins);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching admins', error });
      }
    },
    createAdmin: async (req: Request, res: Response) => {
      try {
        const admin = new User({ ...req.body, role: 'Admin' });
        await admin.save();
        res.status(201).json(admin);
      } catch (error) {
        res.status(500).json({ message: 'Error creating admin', error });
      }
    }
  };