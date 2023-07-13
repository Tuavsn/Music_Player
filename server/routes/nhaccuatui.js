const express = require("express")
const router = express.Router()

const NhaccuatuiController = require("../controllers/NhaccuatuiController")

// getSong
router.get("/song", NhaccuatuiController.getSong)

// getDetailPlaylist
router.get("/detailplaylist", NhaccuatuiController.getPlaylistDetail)

// getHome
router.get("/home", NhaccuatuiController.getHome)

// getTop100
router.get("/top100nhacviet", NhaccuatuiController.getTop100NhacViet)

// getTop100
router.get("/top100nhacaumy", NhaccuatuiController.getTop100NhacAuMy)

// allTopic
router.get("/alltopic", NhaccuatuiController.getTopics)

// TopicDetail
router.get("/topic", NhaccuatuiController.getTopicDetail)

// searchByKeyWord
router.get("/search", NhaccuatuiController.searchByKeyword)

//getAllSong
router.get("/explore", NhaccuatuiController.getExplore)

//getTrendingArtist
router.get("/artist", NhaccuatuiController.getTrendingArtists)

module.exports = router