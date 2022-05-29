const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const userRouter = require("./routes/User.route");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

const url =
  "mongodb+srv://root:root@cluster0.grbuzo2.mongodb.net/?retryWrites=true&w=majority";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./images");
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.post("/upload", upload.single("photo"), (req, res) => {
  console.log("file", req.file);
  console.log("body", req.body);

  res.status(200).json({
    message: "success!",
  });
});

app.use("/user", userRouter);

app.listen(process.env.PORT || 8000, async () => {
  try {
    // Database connection
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");

    // Start the server
    console.log(
      `server is running at http://localhost:${process.env.PORT || 8000}`
    );
  } catch (error) {
    console.error(error);
  }
});
