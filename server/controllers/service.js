import Gig from "../models/Gig.js";
import ErrorHandler from "../middlewares/error.js";


export const createGig = async(req,res,next) => {
    try{
        const {userId,title,category,subCategory,description,relatedSkills,pricing,delievertimeday,requirements,gallery} = req.body;
        const newGig = new Gig({
            userId,
            title,
            category,
            subCategory,
            description,
            relatedSkills,
            pricing,
            delievertimeday,
            requirements,
            gallery
        })
        await newGig.save();
        const gig = await Gig.find();
        res.status(201).json({
            success:true,
            gig});
    } catch(err) {
        next(err);
    }
};

export const updateGig = async(req,res,next) => {
    try{
        const {id} = req.params;
        const updatedGigDetails = req.body;
        const gig = await Gig.findById(id);
        if(!gig) {
            return next(new ErrorHandler('Service does not Exist', 404));
        }
        if(updatedGigDetails.title){
            gig.title = updatedGigDetails.title;
        }
        if(updatedGigDetails.category){
            gig.category = updatedGigDetails.category;
        }
        if(updatedGigDetails.subCategory){
            gig.subCategory = updatedGigDetails.subCategory;
        }
        if(updatedGigDetails.description){
            gig.description = updatedGigDetails.description;
        }
        if(updatedGigDetails.relatedSkills){
            gig.relatedSkills = updatedGigDetails.relatedSkills;
        }
        if(updatedGigDetails.pricing){
            gig.pricing = updatedGigDetails.pricing;
        }
        if(updatedGigDetails.delievertimeday){
            gig.delievertimeday = updatedGigDetails.delievertimeday;
        }
        if(updatedGigDetails.requirements){
            gig.requirements = updatedGigDetails.requirements;
        }
        if(updatedGigDetails.gallery){
            gig.gallery = updatedGigDetails.gallery;
        }

        await gig.save();
        return res.status(200).json({
            success: true,
            message: 'Details updated successfully' });
    } catch (err) {
        next(err);
    }
};

export const getGig = async(req,res,next) => {
    try{
        const {id} = req.params;
        const gig = await Gig.findById(id);
        if(!gig) return next(new ErrorHandler("Service does not Exist anymore", 404));
        res.status(200).json({
            success: true,
            gig,
        });
    } catch (err) {
        next(err);
    }
};

export const deleteGig = async(req,res,next) => {
    try {
        const {id}  = req.params;
        const gig = await Gig.findById(id);
        if(!gig) return next(new ErrorHandler("Service not found", 404));
        await gig.deleteOne();
        res.status(200).json({
            success: true,
            message: "Service removed"
        });
    } catch (error) {
        next(error);
    }
};

export const getMyGigs = async(req,res,next) => {
    try {
        const gigs = await Gig.find();
        res.status(200).json({
            success: true,
            gigs});
    } catch (err) {
        next(err);
    }
};