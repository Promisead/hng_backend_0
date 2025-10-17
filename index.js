import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "✅ Promise Duke's HNG Backend Stage 0 API is running!",
    endpoint: "/me",
  });
});

app.get("/me", async (req, res) => {
  try {
    let fact = "Cats sleep for 70% of their lives. (Default fallback fact)";
    try {
      const { data } = await axios.get("https://catfact.ninja/fact", { timeout: 4000 });
      if (data?.fact) fact = data.fact;
    } catch {
      const { data } = await axios.get("https://meowfacts.herokuapp.com/", { timeout: 4000 });
      fact = Array.isArray(data.data) ? data.data[0] : data.data;
    }

    res.status(200).json({
      status: "success",
      user: {
        email: "promiseduke@gmail.com",
        name: "Promise Duke",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact,
    });
  } catch (err) {
    console.error("❌ Server error:", err.message);
    res.status(500).json({
      status: "error",
      message: "Unexpected server error.",
    });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
