import express from 'express';
import * as dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
import cors from "cors"

dotenv.config();
const port = process.env.APP_PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/users', userRoutes);


app.listen((port), () => {
    console.log(`Server running at http://localhost:${port}`);
})
