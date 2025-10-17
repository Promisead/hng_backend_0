import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/me", async (req, res) => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });

    const response = {
      status: "success",
      user: {
        email: "promiseduke@gmail.com",
        name: "Promise Duke",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: data.fact,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(response);
  } catch (error) {
    console.error("❌ Error fetching cat fact:", error.message);

    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
