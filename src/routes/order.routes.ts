import express from "express";
import { orderController } from "../controllers/order.controller";

const router = express.Router();

router.get('/orders', orderController.getOrders);
router.post('/orders', orderController.createOrder);

export default router