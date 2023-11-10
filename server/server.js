import { app } from "./app.js";
import { connectDB } from "./data/database.js";


const PORT = process.env.PORT || 5001;
connectDB();
app.listen(PORT,() => {
    console.log(`Server is Working on Port ${PORT}`)
});