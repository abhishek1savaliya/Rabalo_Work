const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./Database/db');
const userRoute = require('./route/user.route')

const app = express()

const PORT = 5000 || process.env.PORT

app.use(cors({
    origin: "*",
  }));

app.use(morgan('tiny'));
app.use(bodyParser.json())

connectDb()

app.use('/api',userRoute)

app.listen(PORT,()=>{
    console.log("server is running on PORT 5000")
})