const multer = require("multer");
const path = require("path");
const fs = require("fs");
const createHttpError = require("http-errors");

// function for create route that files will storage on this route
function createRote(req) {
  const date = new Date();
  const year = "" + date.getFullYear();
  const month = date.getMonth() + "";
  const day = "" + date.getDate();
  const directory = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "public",
    "uploads",
    "blogs",
    year,
    month,
    day
  );
  req.body.fileUploadPath = path.join("uploads", "blogs", year, month, day);
  fs.mkdirSync(directory, { recursive: true });
  return directory;
}

//storage path to save files
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file?.originalname) {
      const filePath = createRote(req);
      return callback(null, filePath);
    }
    callback(null, null);
  },
  filename: (req, file, callback) => {
    if (file?.originalname) {
      const fileExt = path.extname(file.originalname);
      const fileName = String(new Date().getTime() + fileExt);
      req.body.file_name = fileName;
      return callback(null, fileName);
    }
    callback(null, null);
  },
});

const uploadImage = multer({
  storage,
  fileFilter: (req, file, callback) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(createHttpError.Unauthorized("file is not an image"));
    }
    callback(null, true);
  },
  limits: {
    // image size limit ==> 1Mb
    fileSize: 1024 * 1024,
  },
});
const uploadVideo = multer({
  storage,
  fileFilter: (req, file, callback) => {
    let ext = path.extname(file.originalname);
    if (
      ext !== ".mkv" &&
      ext !== ".mpg" &&
      ext !== ".mp4" &&
      ext !== ".mpeg" &&
      ext !== ".mov"
    ) {
      return callback(createHttpError.BadRequest("File Type Is not Allowed!"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 300 * 1024 * 1024,
  },
});
module.exports = {
  uploadImage,
  uploadVideo,
};
