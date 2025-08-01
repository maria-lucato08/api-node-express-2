import mongoose from "mongoose"

mongoose.connect(STRING_CONEXAO_BD);

let db = mongoose.connection;

export default db;