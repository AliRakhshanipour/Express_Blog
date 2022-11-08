const path = require("path");
const fs = require("fs");
const unlinkFileFromServer = (file) => {
  if (file) {
    const filePath = path.join(__dirname, "..", "..", "..", "public", file);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
};

module.exports = {
  unlinkFileFromServer,
};
