
const express= require("express");
const cors= require("cors")
const dotenv= require("dotenv")
dotenv.config();

const app = express();
app.use(cors());

//this Used to secure the token in backend
// Endpoint to send the token to frontend
app.get("/api/token", (req, res) => {
  res.json({ token: process.env.TMDB_TOKEN });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
