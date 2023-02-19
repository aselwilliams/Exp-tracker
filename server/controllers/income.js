const {Transaction} = require('../models/transaction');
const {User} = require('../models/user');

module.exports = {
    getAllTransactions: async(req, res) => {
        try {
            const transactions = await Transaction.findAll({
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`]
                }]
            })
            res.status(200).send(transactions)
        } catch(error) {
            console.log('Error in getAllPosts')
            console.log(error)
            res.sendStatus(400)
        }
    },
    // addTransaction: async(req, res)=> {
    //     try{
    //         const 
    //     }
    // }
}