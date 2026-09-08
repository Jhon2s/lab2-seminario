import express from "express";
import taskRoutes from "./routes/task.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
