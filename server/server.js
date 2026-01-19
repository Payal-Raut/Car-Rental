import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

//initialize express app
const app = express()

//connect db
await connectDB()

//middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://car-client-gilt.vercel.app"
  ], // Vite frontend
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.get('/', (req,res)=> res.send("Server is running"))
app.use('/api/user' , userRouter)
app.use('/api/owner',ownerRouter)
app.use('/api/bookings',bookingRouter)
const PORT = process.env.PORT || 3000 ;
app.listen(PORT , ()=>console.log(`Server running on ${PORT}`)) 
