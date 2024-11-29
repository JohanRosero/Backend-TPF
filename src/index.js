import express from "express";
import usersRoutes from "./routes/users.routes.js";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config.js"; 
import { config } from "dotenv";
import pg from "pg";

const app = express();

app.use(morgan("dev"));

config(); 

const pool = new pg.Pool({
    conexionString: process.env.DB_HOST,
    ssl: true    
});
// middlewares
app.use(express.json());
const allowedOrigins = ['http://frontend:4200', 'http://localhost:4200'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));


app.get("/", async (req, res) => {
    const resp = await pool.query("SELECT NOW()")
    return res.json(resp.rows[0])
});

app.use(usersRoutes);

app.listen(PORT);
// eslint-disable-next-line no-console
console.log("Server on port", PORT);
