const express = require("express")
const app = express()
require("dotenv/config")
const cors = require("cors")
const { default: mongoose } = require("mongoose")

app.use(cors({origin: true}))
app.use(express.json())

//User Route
const userRoute = require("./routes/auth")
app.use("/api/users/", userRoute)
//Artist Route
const artistsRoute = require("./routes/artists")
app.use("/api/artist/", artistsRoute)
//Song Route
const songsRoute = require("./routes/songs")
app.use("/api/song/", songsRoute)
//Album Route
const AlbumsRoute = require("./routes/albums")
app.use("/api/album/", AlbumsRoute)
//Zing route
const ZingRoute = require("./routes/zing")
app.use("/api/zing/", ZingRoute)
//Nhaccuatui route
const NhaccuatuiRoute = require("./routes/nhaccuatui")
app.use("/api/nhaccuatui/", NhaccuatuiRoute)

mongoose.connect('mongodb+srv://HocTuan:12345@cluster0.zhrd3od.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("Connected")).on("error", (error) => console.log(`Error: ${error}`));

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})
