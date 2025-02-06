// todo.controller.ts

import { Request, Response } from "express";
import { Grocery } from "../models/grocery";
import { StatusCodes } from "http-status-codes";

class GroceryController {
  // create a Grocery
  createGrocery = async (req: Request, res: Response) => {
    const { name, price } = req.body;

    if (!name || !price) {
      throw new Error("Name and Price must be provided.");
    }

    const newTodo = await Grocery.create(req.body);
    res.status(StatusCodes.CREATED).json({ todo: newTodo, msg: "Grocery has been created!" });
  };

  // get all Grocery
  getGroceries = async (req: Request, res: Response) => {
    const todos = await Grocery.find({}).sort('-createdAt');

    if (todos?.length === 0) {
      throw new Error("Grocery list is empty!");
    }

    res.status(StatusCodes.OK).json({ todos, msg: "All Groceries have been fetched!" });
  };

  // get a single grocery
  getSingleGrocery = async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await Grocery.findById({ _id: id });

    if (!todo) {
      throw new Error("Requested todo not found!");
    }

    res.status(StatusCodes.OK).json({ todo, msg: "Success" });
  };

  // update grocery
  updateGrocery = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedTodo = await Grocery.findByIdAndUpdate({ _id: id }, req.body, { new: true });

    if (!updatedTodo) {
      throw new Error("Requested todo not found!");
    }

    res.status(StatusCodes.OK).json({ todo: updatedTodo, msg: "Grocery has been updated" });
  };

  // delete grocery
  deleteGrocery = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedTodo = await Grocery.findByIdAndDelete({ _id: id });

    if (!deletedTodo) {
      throw new Error("Requested todo not found!");
    }

    res.status(StatusCodes.OK).json({ todo: deletedTodo, msg: "Todo has been deleted" });
  };


  // manage inventory
  manageInventory = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { quantity } = req.body;
      const grocery = await Grocery.findById(id);
      if (!grocery) {
        return res.status(404).json({ message: 'Grocery not found' });
      }
      grocery.inventory = quantity;
      await grocery.save();
      res.json({ message: 'Inventory updated successfully', grocery });
    } catch (error) {
      res.status(500).json({ message: 'Error updating inventory', error });
    }
  };
}
export const todoController = new GroceryController();
