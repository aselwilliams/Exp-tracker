const {Transaction} = require('../models/transaction');
const {User} = require('../models/user');

module.exports = {
    getAllTransactions: async(req, res) => {
        try {
            const {userId}= req.params;
            const transactions = await Transaction.findAll({
              where:{
                userId
              }
            })
            res.status(200).send(transactions)
        } catch(error) {
            console.log('Error in getAllTransactions')
            console.log(error)
            res.sendStatus(400)
        }
    },
    addTransaction: async(req, res)=> {
        try{
            const {title, amount, createdAt, category, description, type, userId} = req.body;
            await Transaction.create({title, amount, createdAt, category,description, type, userId})
            res.sendStatus(200)
        } catch(error){
            console.log("Error in addTransaction")
            console.log(error)
            res.sendStatus(400)
        }
    },
    deleteTransaction: async (req, res) => {
        try {
            const {id} = req.params
            await Transaction.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch (error) {
            console.log('ERROR in deleteTransaction')
            console.log(error)
            res.sendStatus(400)
        }
    }
}