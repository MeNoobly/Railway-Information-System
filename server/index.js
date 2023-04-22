import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();
