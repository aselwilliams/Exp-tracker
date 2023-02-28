const { Transaction } = require("../models/transaction");
const { User } = require("../models/user");
const { sequelize } = require("../util/db");

module.exports = {
  getAllTransactions: async (req, res) => {
    try {
      const { userId } = req.params;
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
              "Month",
            ],
          ],
        },
        where: {
          userId,
        },
      });
      res.status(200).send(transactions);
    } catch (error) {
      console.log("Error in getAllTransactions");
      console.log(error);
      res.sendStatus(400);
    }
  },
  addTransaction: async (req, res) => {
    try {
      const { title, amount, t_date, category, description, type, userId } =
        req.body;
      await Transaction.create({
        title,
        amount,
        t_date,
        category,
        description,
        type,
        userId,
      });
      res.sendStatus(200);
    } catch (error) {
      console.log("Error in addTransaction");
      console.log(error);
      res.sendStatus(400);
    }
  },
  deleteTransaction: async (req, res) => {
    try {
      const { id } = req.params;
      await Transaction.destroy({ where: { id: +id } });
      res.sendStatus(200);
    } catch (error) {
      console.log("ERROR in deleteTransaction");
      console.log(error);
      res.sendStatus(400);
    }
  },
  getAreaChartData: async (req, res) => {
    const { userId } = req.params;
    let arr = [];
    try {

      let obj = {
        1: "January",
        2: "Febuary",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
      };
    const runQuery= async()=> {
        for (let i = 1; i <= 12; i++) {
            await sequelize
              .query(
                `select sum(amount) as expense FROM "transactions" where extract (Month from t_date)=${i} and type='expense' and transactions."userId"=${userId};
                        select sum(amount)as income FROM "transactions" where extract (Month from t_date)=${i} and type='income' and transactions."userId"=${userId};`
              )
              .then((dbRes) => {
                const dataObj={
                    month:obj[i],
                    income:+(dbRes[0][1].income),
                    expenses:+(dbRes[0][0].expense)
                }
                 arr.push(dataObj)
                 
                })
            }
            return arr
        }
        let returnData= await runQuery()
        console.log(returnData,'returnData');
   
     res.status(200).send(returnData) 
  }catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
},
getBarChartData: async (req, res) => {
    const { userId } = req.params;
    let arr = [];
    try{
        sequelize.query(
           `select sum(amount) as expense, t_date FROM "transactions" where t_date>=current_date at time zone 'UTC' - interval '6 days' and type='expense' and transactions."userId"=1 group by t_date order by t_date desc limit 7;
           select sum(amount) as income, t_date FROM "transactions" where t_date>=current_date at time zone 'UTC' - interval '6 days' and type='income' and transactions."userId"=1 group by t_date order by t_date desc limit 7;` 
        )
        .then((dbRes) => {
            console.log(dbRes[0],'barchart')
            // for(let i=0; i<7; i++){
            //     const dataObj={
            //         name:dbRes[0][i].t_date,
            //         income:+(dbRes[1][i]),
            //         expense:+(dbRes[0][i].expense)
            //     }  
            //       const data2={
            //         name:dbRes[1][1],
            //         income:+(dbRes[1][1].income),
            //         expense:+(dbRes[1][1].expense)
            //     }
            //      arr.push(dataObj)
            //      arr.push(data2)
            // }
             res.status(200).send(dbRes[0]) 
            })
    } catch(err) {
        console.log(err)
        res.sendStatus(400)
    }
}
}