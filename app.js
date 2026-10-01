import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import taskRouter from "./routes/tasks.js";
import errorHandler from "./middleware/errorhandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//router
app.use("/api/tasks", taskRouter)

app.listen(3000, () =>{
    console.log("server running on http://localhost:3000")
});