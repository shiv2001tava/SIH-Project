require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const lawyerRouter = require('./routes/lawyerRouter')

const app = express()
app.use(cors())
app.use(express.json)

app.use('/', lawyerRouter)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  (err) => {
    console.log(err)
  },
  () => {
    console.log('Server is running on port:', PORT)
  }
)

const URI = process.env.MONGODB_URL

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('data base connected')
  })
  .catch((err) => console.log('Error', err))
