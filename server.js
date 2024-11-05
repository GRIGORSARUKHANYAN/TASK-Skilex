import express from "express";
import dotenv from "dotenv";
import combinationRoutes from "./routes/combination.routes.js";
import fs from "fs"
import path from "path"
import { parse } from "yaml";
import swaggerUI from "swagger-ui-express";

dotenv.config();


const app = express();
app.use(express.json());

app.use("/api", combinationRoutes);
function setupSwagger() {
  const fileContents = fs.readFileSync(
    path.join(path.resolve(), "app.yml"),
    "utf8"
  );
  const doc = parse(fileContents);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(doc));
}
setupSwagger()
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
