import dotenv from 'dotenv';
import app from "./app";

dotenv.config()

const PORT: string | number = process.env.APP_PORT || 3000

app(PORT)
