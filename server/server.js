require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {sequelize} = require('./util/db');
const {PORT} = process.env;


const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
 res.send('Hello Aselisa')
})

//Auth
// app.post('/register', register);
// app.post('/login', login);





sequelize
.sync()
.then(()=> {
    app.listen(PORT, ()=> {
        console.log('Successfully connected db, server running to port:', PORT);
    })
})
.catch((err)=> console.log(err))
