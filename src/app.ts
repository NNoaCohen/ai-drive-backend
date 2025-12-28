import express from "express";
import cors from "cors";
import userRoutes from "../src/routes/userRoutes";
import categoryRoutes from "../src/routes/categoryRoutes"
import subcategoryRoutes from "./routes/subcategoryRoutes";
import promptRoutes from "./routes/promptRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users",userRoutes);
app.use("/category",categoryRoutes);
app.use("/subcategory",subcategoryRoutes);
app.use("/prompt",promptRoutes);

app.get("/health", (req, res) => {
  res.send("API is running");
});

export default app;
