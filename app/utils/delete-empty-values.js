const deleteEmptyValues = (data, blackList = ["", " ", 0, null, undefined]) => {
  Object.keys(data).forEach((key) => {
    if (blackList.includes(data[key])) delete data[key];
    console.log(key);
  });
};

module.exports = {
  deleteEmptyValues,
};
