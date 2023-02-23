const {Transaction} = require('../models/transaction');
const {User} = require('../models/user');
const { sequelize } = require("../util/db");

module.exports = {
    getAllTransactions: async(req, res) => {
        try {
            const {userId}= req.params;
            const transactions = await Transaction.findAll({
                attributes: {
                    include: [
                        [
                            // Note the wrapping parentheses in the call below!
                            sequelize.literal(`(
                                SELECT 
                                EXTRACT(
                                  MONTH FROM t_date
                                  )
                            )`),
                            'Month'
                        ]
                    ]
                },
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
            const {title, amount, t_date, category, description, type, userId} = req.body;
            await Transaction.create({title, amount, t_date, category,description, type, userId})
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