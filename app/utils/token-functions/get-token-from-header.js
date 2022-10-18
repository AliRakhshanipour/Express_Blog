const getToken = (header) => {
  return header?.authorization.split(" ")[1];
};

module.exports = {
  getToken,
};
