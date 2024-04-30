import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import testRoute from "./routes/test.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
console.log("Test");
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/test", testRoute);

app.listen(8800, () => {
  console.log("Server is running.. ");
});
