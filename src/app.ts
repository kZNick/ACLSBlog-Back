import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./erros";
import usersRoutes from "./routers/user.routes";
import loginRoutes from "./routers/login.routes";
import cors from "cors";
import postRoutes from "./routers/posts.routes";
import commentsRoutes from "./routers/comments.routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/post", postRoutes);
app.use("/comment", commentsRoutes);

app.use(handleErrors);

export default app;
