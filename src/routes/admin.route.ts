import express from "express";
import { adminController } from "../controllers/admin.controller";

const router = express.Router();

router.get('/admins', adminController.getAdmins);
router.post('/admins', adminController.createAdmin);

export default router