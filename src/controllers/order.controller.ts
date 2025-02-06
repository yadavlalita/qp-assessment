import { Request, Response } from "express";
import { Order } from "../models/order";

export const orderController = {
    getOrders: async (req: Request, res: Response) => {
      try {
        const orders = await Order.find().populate('items.groceryId').populate('userId');
        res.json(orders);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
      }
    },
    createOrder: async (req: Request, res: Response) => {
      try {
        const { items, userId } = req.body;
        const order = new Order({ items, userId });
        await order.save();
        res.status(201).json(order);
      } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
      }
    }
  };
  