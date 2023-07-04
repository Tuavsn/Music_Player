const album = require("../models/album");

const router = require("express").Router();

router.get("/getAll", async (req, res) => {
  const cursor = await album.find();
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(400).send({ success: false, msg: "No data found!" });
  }
});

router.get("/getAlbum/:albumId", async (req, res) => {
  const filter = { _id: req.params.albumId };
  const cursor = await album.findOne(filter);
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(400).send({ success: false, msg: "No data found!" });
  }
});

router.post("/save", async (req, res) => {
  const newAlbum = album({
    name: req.body.name,
    imageURL: req.body.imageURL,
  });
  try {
    const saveAlbum = await newAlbum.save();
    res.status(200).send({ success: true, album: saveAlbum });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.put("/update/:albumId", async (req, res) => {
  const filter = { _id: req.params.albumId };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await album.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        imageURL: req.body.imageURL,
      },
      options
    );
    res.status(200).send({ success: true, album: result });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});

router.delete("/delete/:albumId", async (req, res) => {
  const filter = { _id: req.params.songId };
  const result = await album.deleteOne(filter);
  if (result.deletedCount === 1) {
    res.status(200).send({ success: true, msg: "Data deleted!" });
  } else {
    res.status(400).send({ success: false, msg: "Data not found" });
  }
});

module.exports = router;
