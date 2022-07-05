const Process = require("process");
module.exports.port = Process.env.PORT
module.exports.host = Process.env.HOST
module.exports.db = Process.env.MONGO_URL
module.exports.apiUrl = Process.env.API_URL
