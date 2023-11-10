import  express  from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.js"
import servicesRouter from "./routes/services.js"
import { errorMiddleware } from "./middlewares/error.js";

export const app = express();
config({
    path: "./data/config.env"
});

//Using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
}));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/services",servicesRouter);


app.use(errorMiddleware);