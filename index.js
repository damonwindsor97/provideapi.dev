
// Imports
const express = require('express')
const mongoose = require('mongoose')

// Middleware
const helmet = require('helmet')
const morgan = require('morgan')
const middlewareLogger = require('./middleware/middlewareLogger')


// Routes
const home = require('./routes/home')
const providers = require('./routes/providers')
const products = require('./routes/products')
const spoofers = require('./routes/spoofers')
const users = require('./routes/users')
const auth = require('./routes/auth')

// Attach Express to our app
const app = express()

// const csp = require('./config/csp')
// app.use(csp)


//Setup Config
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/"; //Stores the location of the config in a ENV VAR
const config = require('config')
console.log(config.get('name'));
const connectionString = config.get("db.connectionString");
const serverPort = config.get("port");
const providersPrivateKey = config.get("providersPrivateKey");

if(!providersPrivateKey){
    console.error("FATAL ERROR: PROVIDERS_PRIVATE_KEY is not defined");
    process.exit(1);
}

async function connect() {
    try {
      const connectionResult = await mongoose.connect(connectionString);
      if (connectionResult) console.log("Connected to MongoDB");
    } catch (err) {
      (err) => console.error("Connection failed", err);
    }
  }
  connect();

// Log what Mode we're in, and run certain pieces of middleware in said mode
// Change to Production: $env:NODE_ENV=production
// Change to Development: $env:NODE_ENV=development
console.log(app.get('env'))
if (app.get('env') === 'development') {
}

app.use(morgan('tiny'))
app.use(express.json()); //Parse incoming JSON data, available under the req.body
// URLencoded allows us to pull querys from address bar
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
// creates endpoints for everything within the 'public' folder
app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use(middlewareLogger)


app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy',"default-src 'self' frame-src 'self" );
  next();
});

// Main addresses
app.use('/', home);
app.use('/api/providers', providers);
app.use('/api/products', products);
app.use('/api/spoofers', spoofers);
app.use('/api/users', users);
app.use('/api/auth', auth);


// Listen on the servers port, OR 3000
const port = process.env.PORT || serverPort;
app.listen(port, ()=> console.log(`Listening on Port: ${port}...`))