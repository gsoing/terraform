const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

const corsOptions = {
    origin: /.?/,
    allowedHeaders: ['Content-Type', 'apikey'],
    methods: ['GET', 'POST']
};

app.use(morgan('combined'));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json())
app.options('*', cors(corsOptions)) // include before other routes
app.use('/v1/users', require('./routes/users'));
app.use('/v1/answers', require('./routes/answers'));
app.listen(3000)
console.log('application started ...');
