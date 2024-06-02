const mongoose = require("mongoose");
function connect() {
mongoose.connect(
    "mongodb+srv://devcloud:DevCloud@cluster0.xgbzj7z.mongodb.net/unifor?retryWrites=true&w=majority"
  );
}

module.exports = connect;