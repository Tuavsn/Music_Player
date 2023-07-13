const  Nhaccuatui = require("nhaccuatui-api-full")

class NhaccuatuiController {

  getSong(req, res) {
    Nhaccuatui.getSong(req.query.id).then((data) => {
      res.json(data)
    })
  }

  getPlaylistDetail(req, res) {
    Nhaccuatui.getPlaylistDetail(req.query.id).then((data) => {
      res.json(data)
    })
  }

  getHome(req, res) {
    Nhaccuatui.getHome().then((data) => {
      res.json(data)
    })
  }

  getTop100NhacViet(req, res) {
    Nhaccuatui.getTop100("m3liaiy6vVsF").then((data) => {
      res.json(data);
    })
  }

  getTop100NhacAuMy(req, res) {
    Nhaccuatui.getTop100("zE23R7bc8e9X").then((data) => {
      res.json(data);
    })
  }

  getPlayList(req, res) {
    Nhaccuatui.getPlayList().then((data) => {
      res.json(data);
    })
  }

  getLyric(req, res) {
    Nhaccuatui.getLyric(req.query.id).then((data) => {
      res.json(data)
    })
  }

  getTopics(req, res) {
    Nhaccuatui.getTopics().then((data) => {
      res.json(data);
    })
  }

  getTopicDetail(req, res) {
    Nhaccuatui.getTopicDetail(req.query.id).then((data) => {
      res.json(data)
    })
  }

  getTrendingArtists(req, res) {
    Nhaccuatui.getTrendingArtists().then((data) => {
      res.json(data)
    })
  }

  getLyric(req, res) {
    Nhaccuatui.getLyric(req.query.id).then((data) => {
      res.json(data)
    })
  }

  searchByKeyword(req, res) {
    Nhaccuatui.searchByKeyword(req.query.keyword).then((data) => {
      res.json(data)
    })
  }

  getTopSearchKeyWord(req, res) {
    Nhaccuatui.getTopKeyword().then((data) => {
        res.json(data)
    })
  }

  getExplore(req, res) {
    Nhaccuatui.explore({
        type: "song",
        key: "moi-hot",
        page: 1,
        pageSize: 1542,
      }).then((data) => {
        res.json(data)
      });
  }

}

module.exports = new NhaccuatuiController