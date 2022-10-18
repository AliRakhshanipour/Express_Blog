const removeObjectProperty = (
  object,
  list = ["", " ", null, undefined, "0", 0]
) => {
  Object.keys(object).forEach((key) => {
    if (list.includes(object[key])) delete object[key];
  });
};

module.exports = {
  removeObjectProperty,
};
