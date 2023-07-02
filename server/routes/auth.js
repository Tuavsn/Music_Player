const user = require("../models/user");
const admin = require("../config/firebase.config");

const router = require("express").Router();

router.get("/login", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500).send({ message: "Invalid Token" });
  }
  const Token = req.headers.authorization.split(" ")[1];
  try {
    const decodeValue = await admin.auth().verifyIdToken(Token);
    if (!decodeValue) {
      return res.status(500).json({ message: "Un Authorize" });
    }
    //check exist email
    const userExists = await user.findOne({ user_id: decodeValue.user_id });
    if (!userExists) {
      newUserData(decodeValue, req, res);
    } else {
      updateUserData(decodeValue, req, res);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

async function newUserData(decodeValue, req, res) {
  const newUser = new user({
    name: decodeValue.name,
    email: decodeValue.email,
    imageURL: decodeValue.imageURL,
    user_id: decodeValue.user_id,
    email_verfied: decodeValue.email_verfied,
    role: "member",
    auth_time: decodeValue.auth_time,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).send({ user: savedUser });
  } catch (err) {
    res.status(400).send({ success: false, message: err });
  }
}

async function updateUserData(decodeValue, req, res) {
  const filter = { user_id: decodeValue.user_id };
  const options = {
    upsert: true,
    new: true,
  };
  try {
    const result = await user.findOneAndUpdate(
      filter,
      { auth_time: decodeValue.auth_time },
      options
    );
    res.status(200).send({ user: result });
  } catch (err) {
    res.status(400).send({ success: false, message: err });
  }
}

module.export = router;
