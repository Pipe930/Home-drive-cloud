import express from 'express';
import { config } from 'dotenv';
import fileUpload from 'express-fileupload';
import { generateMessageResponse } from './helpers/messageResponse.js';
import uploadedRouter from "./routes/upload.routes.js";
import contentRouter from "./routes/content.routes.js";
import directoryRouter from "./routes/directory.routes.js";
import downloadRouter from "./routes/download.routes.js";
import cors from "cors";

config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(fileUpload());
app.use(cors());

// Routers
app.get('/', (req, res) => {
    res.json(generateMessageResponse(200, 'Welcome a api rest the drive cloud home'))
});
app.use('/file/upload', uploadedRouter);
app.use('/content', contentRouter);
app.use('/directory', directoryRouter);
app.use('/download', downloadRouter);

// Server
app.listen(port, () => console.log('Server running on port ', port));
