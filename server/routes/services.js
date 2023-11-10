import express  from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { createGig,updateGig,getGig,deleteGig,getMyGigs } from "../controllers/service.js";

const router = express.Router();

router.post("/new",isAuthenticated,createGig);
router.put("/update/:id",isAuthenticated,updateGig);
router.get("/get/:id",isAuthenticated,getGig);
router.delete("/delete/:id",isAuthenticated,deleteGig);
router.get("/all",isAuthenticated,getMyGigs);

export default router;