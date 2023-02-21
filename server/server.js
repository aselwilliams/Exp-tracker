require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./util/db");
const { PORT } = process.env;
const { User } = require("./models/user");
const { Transaction } = require("./models/transaction");
const { register, login } = require("./controllers/auth");
const {
  addTransaction,
  deleteTransaction,
  getAllTransactions
} = require("./controllers/transaction");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

User.hasMany(Transaction);
Transaction.belongsTo(User);

app.get("/", (req, res) => {
  res.send("Hello Aselisa");
});

//Auth
app.post("/register", register);
app.post("/login", login);

app.get("/get-transactions/:userId", getAllTransactions)
app.post("/add-transaction", addTransaction);
app.post("/delete-transaction", deleteTransaction);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Successfully connected db, server running to port:", PORT);
    });
  })
  .catch((err) => console.log(err));
