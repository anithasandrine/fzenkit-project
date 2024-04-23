import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import configurations from "./configs/index.js";
import allRoutes from "./routes/index.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import swaggerUi from 'swagger-ui-express';
import documentation from './docs/documentation.js';

// Cors policy configuration.
const corsOptions = {
    allowedHeaders: ["Authorization","Content-Type"],
    methods: ["GET", "POST", "UPDATE" ],
    origin: ["http://localhost:5173", configurations.CLIENT_APP],
}

// Server middlewares
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api-doc', swaggerUi.serve);
app.use('/api-doc', swaggerUi.setup(documentation));
app.use('/api/v1', allRoutes);

// Database connectivity
mongoose.connect(configurations.MONGODB_CONNECTION_STRING)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

app.listen(configurations.PORT, () => console.log(`Server is running on port ${configurations.PORT}`))

// Error handling middleware
app.use(ErrorHandler);