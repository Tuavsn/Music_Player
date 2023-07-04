const song = require("../models/song");

const router = require("express").Router();

router.get("/getAll", async (req, res) => {
  const cursor = await song.find();
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(400).send({ success: false, msg: "No data found!" });
  }
});

router.get("/getArtist/:songId", async (req, res) => {
  const filter = { _id: req.params.songId };
  const cursor = await song.findOne(filter);
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(400).send({ success: false, msg: "No data found!" });
  }
});

router.post("/save", async (req, res) => {
  const newSong = song({
    name: req.body.name,
    imageURL: req.body.imageURL,
    songURL: req.body.songURL,
    artist: req.body.artist,
    language: req.body.language,
    category: req.body.category,
  });
  try {
    const saveSong = await newSong.save();
    res.status(200).send({ success: true, artist: saveSong });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.put("/update/:songId", async (req, res) => {
  const filter = { _id: req.params.songId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await song.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        imageURL: req.body.imageURL,
        songURL: req.body.songURL,
        artist: req.body.artist,
        language: req.body.language,
        category: req.body.category,
      },
      options
    );
    res.status(200).send({ success: true, song: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.delete("/delete/:songId", async (req, res) => {
  const filter = { _id: req.params.songId };
  const result = await song.deleteOne(filter);
  if (result.deletedCount === 1) {
    res.status(200).send({ success: true, msg: "Data deleted!" });
  } else {
    res.status(400).send({ success: false, msg: "Data not found" });
  }
});

module.exports = router;
