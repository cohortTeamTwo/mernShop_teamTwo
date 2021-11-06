require('dotenv').config()

const connectDB = require('./config/db')
const { checkPassword } = require('./controller/userControllers')

connectDB()


checkPassword("john@email.com", "abc123youandme", console.log)
checkPassword("john@email.com", "bc123youandme", console.log)

