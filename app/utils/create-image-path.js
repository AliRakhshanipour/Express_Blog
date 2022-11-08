const { join } = require("path");
const createImagePath = (fileUploadPath, fileName) => {
  return join(fileUploadPath, fileName);
};

module.exports = {
  createImagePath,
};
