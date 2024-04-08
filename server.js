import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"
import { fileURLToPath } from 'url';


const app = express();
dotenv.config();
const PORT = process.env.PORT;

if(process.env.NODE_ENV === 'local') {
    app.use(cors({
        origin: 'http://localhost:3000/',
        credentials: true
    }));
} else {
    app.use(cors({
        credentials: true
    }));
};

// Get the directory name from the current module's URL
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'frontend/dist' directory
app.use(express.static(path.join(__dirname, "./frontend/dist")));

const dbConnect = async () => {
    try {
        if(process.env.NODE_ENV === 'local') {
            await mongoose.connect(process.env.LOCAL_DB_URI);
            console.log('local database connected...');
        } else {
            await mongoose.connect(process.env.MONGO_URI)
            console.log('Production database is connected ...');
        }
    } catch (error) {
        console.log('Database connection failed...', error);
    }
};

dbConnect();


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});