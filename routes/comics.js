const axios = require("axios");
const express = require("express");
const router = express.Router();
// const formidable = require("express-formidable");
// router.use(formidable());

// Get list of comics with filter values page / name
router.get("/comics", async (req, res) => {
  try {
    const limit = 100;
    const skip = ((req.query.page || 1) - 1) * limit;
    const title = req.query.title || "";

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&limit=${limit}&skip=${skip}&title=${title}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Comics list with a particular Character ID
router.get("/comic/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
