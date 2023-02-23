require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./util/db");
const { SERVER_PORT } = process.env;
const { User } = require("./models/user");
const { Transaction } = require("./models/transaction");
const { register, login } = require("./controllers/auth");
const {
  addTransaction,
  deleteTransaction,
  getAllTransactions
} = require("./controllers/transaction");
const {isAuthenticated} = require('./middleware/isAuthenticated');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

User.hasMany(Transaction);
Transaction.belongsTo(User);

// app.get("/", (req, res) => {
//   res.send("Hello Aselisa");
// });

//Auth
app.post("/register", register);
app.post("/login", login);

//CRUD
app.get("/transactions/:userId", getAllTransactions)
app.post("/transactions", addTransaction);
app.delete("/transactions/:id", deleteTransaction);

sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log("Successfully connected db, server running to port:", SERVER_PORT);
    });
  })
  .catch((err) => console.log(err));
