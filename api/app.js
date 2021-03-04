const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser')
const User = require('./models/User')

// Load config
dotenv.config({ path: './config/config.env' })

connectDB()

// EXPRESS
const app = express()

// BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CORS
app.use(cors());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
)

// Routing
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

// @desc    Check DB if the user exist, if not, add user into the DB
// @route   POST /auth/google
app.post("/auth/google", async (req, res) => {
  const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    });
    const newUser = {
      googleId: ticket.getPayload().sub,
      displayName: ticket.getPayload().name,
      email: ticket.getPayload().email,
      image: ticket.getPayload().picture
    }
    try {
      let user = await User.findOne({ googleId: ticket.getPayload().sub })

      if (user) {
        console.log("There is already this user in the db")
      } else {
          user = await User.create(newUser)
          console.log("Creating a new user in the db")
      }
    } catch (err) {
      console.error(err)
    }
    res.sendStatus(200)
})

const PORT = process.env.PORT || 9000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
