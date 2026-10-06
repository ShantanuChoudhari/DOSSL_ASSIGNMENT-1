const express = require("express");
const client = require("prom-client");

const app = express();

const PORT = 3000;

// Collect default Node.js metrics
client.collectDefaultMetrics();

// Serve your frontend files
app.use(express.static("."));

// Prometheus metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);

  const metrics = await client.register.metrics();

  res.end(metrics);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});