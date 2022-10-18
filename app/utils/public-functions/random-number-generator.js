/// random number generator for otp code
const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 90000 + 100000);
};

module.exports = {
  randomNumberGenerator,
};
