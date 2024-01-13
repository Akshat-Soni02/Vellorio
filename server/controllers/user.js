import ErrorHandler from "../middlewares/error.js";
import User from "../models/User.js";
import { sendCookie } from "../utils/features.js";
import bcrypt from "bcrypt";

export const login = async (req,res,next) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email}).select("+password");
        if(!user) return next(new ErrorHandler("Invalid Email or Password", 404));
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return next(new ErrorHandler("Invalid Password", 404));
        sendCookie(user,res,`Hey ${user.name} glad to have you back`, 200);
    } catch(error) {
        next(error);
    }
};

export const register = async (req,res,next) => {
    try {
        const {name,email,password,profilePhoto} = req.body;
        let user = await User.findOne({email});
        if(user) return next(new ErrorHandler("User Already Exist",404));
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({name, email, password: hashedPassword,profilePhoto});
        sendCookie(user,res,"Welcome to vellorio", 201);
    } catch (error) {
        next(error);
    }
};

export const getUser = async (req,res,next) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        next(error);
    }
};

export const getMyProfile = (req,res) => {

    res.status(200).json({
        success: true,
        user: req.user,
    });
};

export const logout = async(req,res) => {
    
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
        success: true,
        user: req.user,
    }); 
};

export const updateUserDetails = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedDetails = req.body;
      const user = await User.findById(id);
  
      if (!user) {
        return next(new ErrorHandler('User does not Exist', 404));
      }
  
      if (updatedDetails.name) {
        user.name = updatedDetails.name;
      }
      if (updatedDetails.profilePhoto) {
        user.profilePhoto = updatedDetails.profilePhoto;
      }
      if (updatedDetails.description) {
        user.description = updatedDetails.description;
      }
      if (updatedDetails.languages) {
        user.languages = updatedDetails.languages;
      }
      if (updatedDetails.skills) {
        user.skills = updatedDetails.skills;
      }
      if(updatedDetails.education) {
        user.education = updatedDetails.education;
      }
  
      await user.save();
  
      return res.status(200).json({ message: 'Details updated successfully' });
    } catch (error) {
      next(error);
    }
  };
  

// * CREATOR SPECIFIC *//

export const registerCreator = async (req, res, next) => {
    try {
      const { description, languages, skills, education } = req.body;
      const { id } = req.params;
      const user = await User.findById(id);
  
      if (!user) {
        return next(new ErrorHandler('User not found', 404));
      }
  
      user.languages = languages;
      user.description = description;
      user.skills = skills;
      user.education = education;
  
      await user.save();
  
      return res.status(200).json({ message: `All The Best ${user.name} !!` });
    } catch (error) {
      next(error);
    }
};




  // * CLIENT SPECIFIC *//


