import express from "express";
import { todoController } from "../controllers/grocery.controllers";

const router = express.Router();

router.route('/').post(todoController.createGrocery).get(todoController.getGroceries);

router.route('/:id').get(todoController.getSingleGrocery).patch(todoController.updateGrocery).delete(todoController.deleteGrocery);
router.patch('/:id/inventory', todoController.manageInventory);

export default router