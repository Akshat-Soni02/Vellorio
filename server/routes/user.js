import express from "express";
import {
  register,
  login,
  logout,
  getMyProfile,
  getUser,
  registerCreator,
  updateUserDetails,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { upload } from "../cloudinary/cloudinary.js";

const router = express.Router();

//* POST APIs *//
router.post("/new", upload.single("profilePhoto"), register);
router.post("/login", login);
router.post("/creator/:id", registerCreator);

//* GET APIs *//
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", logout);
router.get("/:id", isAuthenticated, getUser);

//* PUT APIs *//
router.put("/update/:id", updateUserDetails);

export default router;
