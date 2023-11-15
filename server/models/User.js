import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    //* EVERY GENERAL USER SCHEMA *//
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    profilePhoto: {
        type: String,
    },

    //* CLIENT SCHEMA *//
    allPurchases: {
        type: Array,
        default: [],
    },
    ongoingProjects: {
        type: Array,
        default: [],
    },
    clientNotifications: {
        type: Array,
        default: []
    },
    savedlist: {
        type: Array,
        default: [],
    },
    creatorSpent: {
        type: Number,
        default: 0
    },

    //* CREATOR SCHEMA *//
    description: {
        type: String,
        default: function() {
            return "Hey there, I am " + this.name;
        }
    },
    languages: {
        type: Array,
        default: []
    },
    skills: {
        type: Array,
        default: [],
    },
    education: {
        type: String,
        default: "",
    },
    projectsDelievered: {
        type: Array,
        default: [],
    },
    runningProjects: {
        type: Array,
        default: [],
    },
    creatorNotifications: {
        type: Array,
        default: [],
    },
    creatorEarning: {
        type: Number,
        default: 0,
    }
});

const User = mongoose.model("User", UserSchema);
export default User;