import express, { Application, Request, Response } from "express";
import { config } from "dotenv";
import db from "./db/repository";
config({ path: '.env.local' });

const app: Application = express();
const port = 3001;

// Body Parser
app.use(express.json());


app.get("/", (_: Request, res: Response): Response => {
    return res.status(200).send({
        message: "ALIVE",
    });
});


app.get("/todos", async (_: Request, res: Response): Promise<Response> => {
    const todos = await db.getAll();
    return res.status(200).send({
        todos: todos,
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})