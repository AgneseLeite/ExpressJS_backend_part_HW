import express from "express";
import { Request, Response, Router } from "express";
import BlogRoutes from "./blogposts/blogposts.routes";


const router = Router();

router.use('/blog-posts', BlogRoutes);

export default router;