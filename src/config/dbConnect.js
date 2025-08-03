import mongoose from "mongoose"

mongoose.connect(STRING_BD_CONNECT);

let db = mongoose.connection;

export default db;