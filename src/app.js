import dotenv from 'dotenv';
dotenv.config({
    path: '.env.local'
});

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import agentRoutes from './routes/agentRoutes.js';
import mapRoutes from './routes/mapRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import utilityRoutes from './routes/utilityRoutes.js';
import strategyRoutes from './routes/strategyRoutes.js';
import strategyController from './controllers/strategyController.js';

const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
// Enable 'trust proxy' setting
app.set('trust proxy', true);

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
app.use('/api/agents', agentRoutes);
app.use('/api/maps/', mapRoutes);
app.use('/api/comments/', commentRoutes);
app.use('/api/utilities/', utilityRoutes);
app.use('/api/strategies/', strategyRoutes);


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