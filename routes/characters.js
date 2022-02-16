const axios = require("axios");
const express = require("express");
const router = express.Router();
// const formidable = require("express-formidable");
// router.use(formidable());

// Get list of characters with filter values page / name
router.get("/characters", async (req, res) => {
  try {
    //Elements per page fixed to 100
    const limit = 100;
    const skip = ((req.query.page || 1) - 1) * limit;
    const name = req.query.name || "";

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&limit=${limit}&skip=${skip}&name=${name}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Character by ID, return specific infos
router.get("/character/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
