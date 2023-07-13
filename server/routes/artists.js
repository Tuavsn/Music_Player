const artist = require("../models/artist");

const router = require("express").Router();

router.get("/getAll", async (req, res) => {
  const cursor = await artist.find();
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(400).send({ success: false, msg: "No data found!" });
  }
});

router.get("/getArtist/:artistId", async (req, res) => {
  const filter = { _id: req.params.artistId };
  const cursor = await artist.findOne(filter);
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(400).send({ success: false, msg: "No data found!" });
  }
});

router.post("/save", async (req, res) => {
  const newArtist = artist({
    name: req.body.name,
    imageURL: req.body.imageURL,
  });
  try {
    const saveArtist = await newArtist.save();
    res.status(200).send({ success: true, artist: saveArtist });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.put("/update/:artistId", async (req, res) => {
  const filter = { _id: req.params.artistId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await artist.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        imageURL: req.body.imageURL,
      },
      options
    );
    res.status(200).send({ success: true, artist: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.delete("/delete/:artistId", async (req, res) => {
  const filter = { _id: req.params.artistId };
  const result = await artist.deleteOne(filter);
  if (result.deletedCount === 1) {
    res.status(200).send({ success: true, msg: "Data deleted!" });
  } else {
    res.status(400).send({ success: false, msg: "Data not found" });
  }
});

router.get("/search/:key", async (req, res) => {
  const result = await artist.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  if (result) {
    res.status(200).send({ success: true, data: result });
  } else {
    res.status(400).send({ success: false, msg: "No data found!" });
  }
});

module.exports = router;
