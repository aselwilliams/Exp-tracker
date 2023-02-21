// const {addExpense, getExpense, deleteExpense} = require('../controllers/expenses')
// const {addIncome, getIncomes, deleteIncome} = require('../controllers/income')
const { addIncome } = require("../controllers/transaction");

const router = require("express").Router();

router.post("/add-income", addIncome);
//     .get('/get-income', getIncomes)
//     .delete('/delete-income/:id', deleteIncome)
//     .post('/add-expense', addExpense)
//     .get('/get-expenses', getExpenses)
//     .delete('/delete-expense/:id', deleteExpense)

module.exports = router;
