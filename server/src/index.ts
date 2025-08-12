import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5174;

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*" }));
app.use(express.json());
app.use(morgan("dev"));

// Data
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, "./data/products.json"), "utf-8")
);

// Health
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

// Products
app.get("/api/products", (_req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const item = products.find((p: any) => p.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

// Support (mock)
app.post("/api/support", (req, res) => {
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  // In a real app, you'd save to DB or send email.
  console.log("Support message:", { name, email, subject, message });
  return res.json({ success: true, id: Date.now() });
});

// Serve built frontend if present
const clientDir = path.resolve(__dirname, "../../dist");
if (fs.existsSync(clientDir)) {
  app.use(express.static(clientDir));
  app.get("*", (_req, res) => res.sendFile(path.join(clientDir, "index.html")));
}

app.listen(PORT, () => {
  console.log(`UrbanStyle Luxe server running on http://localhost:${PORT}`);
});
