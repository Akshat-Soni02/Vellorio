import mongoose from "mongoose";

const GigSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    relatedSkills: {
        type: Array,
        default: [],
    },
    pricing: {
        type: Number,
        required: true,
    },
    delievertimeday: {
        type: String,
        required: true,
    },
    requirements: {
        type: Array,
        default: [],
    },
    gallery: {
        type: Array,
        default: [],
    },
    rating: {
        type: Number,
        default: 0,
    }
});

const Gig = mongoose.model("Gig", GigSchema);
export default Gig;