import express, { Application, Request, Response } from "express";
import { config } from "dotenv";
config({ path: '.env.local' });

const app: Application = express();
const port = 3001;

app.get("/", (_: Request, res: Response): Response => {
    return res.status(200).send({
        message: "ALIVE",
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})