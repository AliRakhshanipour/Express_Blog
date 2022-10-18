const crypto = require("crypto");
const key = crypto.randomBytes(32).toString("hex").toLowerCase();

// 645bd88811f5270ba15140dd5776edad93272ec52f11a868d6a3e06f6daa3964  ---> Access Token
// 30a76a52fac8d8517ae9ff004db639df9f1a0a37009b14ebe03ffed578a42680  ---> Refresh Token
