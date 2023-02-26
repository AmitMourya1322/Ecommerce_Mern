import express from "express";

const router = express.Router();

// middlewares
import { requireSignin, isAdmin } from "../middleware/auth.js";
import {login, register,secret} from '../controllers/auth.js'


router.post('/register',register)
router.post('/login',login)
router.get('/auth-check',requireSignin,(req,res)=>{
    res.json({ok:true})
})
router.get('/secret', requireSignin,isAdmin, secret);
export default router;