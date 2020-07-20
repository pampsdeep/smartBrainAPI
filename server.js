const express = require('./node_modules/express');
const bodyParser = require('./node_modules/body-parser');
const bcrypt = require('./node_modules/bcrypt-nodejs');
const cors = require('./node_modules/cors');
const knex = require('./node_modules/knex');
const { response } = require('./node_modules/express');

const register = require('./Controller/register');
const signin = require('./Controller/signin');
const profile = require('./Controller/profile');
const image = require('./Controller/image');

const db = knex({
    client: 'pg',
    connection: {
        host: processe.env.DATABASE_URL,
        ssl:true,
    }
});
const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => { res.send(database.user) });
app.post('/register', register.handleRegister(db, bcrypt));
app.post('/signin', signin.handleSignin(db, bcrypt));
app.get('/profile/:id', profile.handleProfile(db));
app.put('/image', (req, res) => { image.handleImage(req, res, db) });
app.post('/imageUrl', (req, res) => { image.handleAPICall(req, res) });

const PORT = process.env.PORT;
app.listen(process.env.PORT || 3000, () => {
    console.log("App is running on port" + process.env.PORT || 3000);
})

