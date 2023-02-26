import express from "express";

const router = express.Router();
import { requireSignin,isAdmin } from "../middleware/auth.js";
import {create,update,remove,list} from '../controllers/category.js'

router.post('/category',requireSignin,isAdmin,create)
router.put("/category/:categoryId", requireSignin, isAdmin, update);
router.delete("/category/:categoryId", requireSignin, isAdmin, remove);
router.get("/categories", list);
export default router;