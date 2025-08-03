import mongoose from "mongoose"

<<<<<<< HEAD
mongoose.connect(STRING_BD_CONNECT);
=======
mongoose.connect(STRING_CONEXAO_BD);
>>>>>>> 15008714a42963abafb2d2d287b842f9049e6680

let db = mongoose.connection;

export default db;