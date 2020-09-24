const express = require('express')
const app = express()
const cors = require('cors')

const session = require('express-session')
const varMiddleware = require('./middleware/variables')
const flash = require('connect-flash')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongodb-session')(session)
const bodyParser = require('body-parser')

const loginRoute = require('./routes/auth/login.route');
const signinRoute = require('./routes/auth/signup.route');

const PORT = process.env.PORT || 3000
let PASS = process.env.MONGO_DB_PASS
if (!!!PASS) {
    const config = require('./mongo_db_pass')
    PASS = config.password
}
//const MONGODB_URI = `mongodb+srv://user1:${PASS}@cluster0-nmc55.mongodb.net/gymer`
const MONGODB_URI = `mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb`

const store = new MongoStore({
    collection: 'sessions',
    uri: MONGODB_URI

})

app.use(cors())
app.use(session({
    secret: 'SeCrEt',
    resave: false,
    saveUninitialized: false,
    store
}))

app.use(flash())

app.use(bodyParser.json())

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

app.use(varMiddleware)

app.use('/api', loginRoute)
app.use('/api', signinRoute)



app.use(express.static(__dirname + '/public/'))
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))



async function start() {
    try {

        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log('MongoDB connected')

        app.listen(PORT, function () {
            console.log(`App listening on port ${PORT}`);
        });
    }
    catch (e) {
        console.log(e)
    }

}

start()