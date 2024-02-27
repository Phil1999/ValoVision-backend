require('dotenv').config({
    path: '.env.local'
});

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: process.env.NODE_ENV === 'development' ? '*' : process.env.FRONTEND_URL
};

// limit to 100 requests every 10 minutes
const apiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
});


/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('combined'));
app.use(apiLimiter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

/* Routes */
const agentRoutes = require('./routes/agentRoutes');
app.use('/api/agents', agentRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Catch-all route for unhandled requests
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Errors for middleware
app.use((err, req, res, next) => {
    res.status(500).send('Server error');
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});