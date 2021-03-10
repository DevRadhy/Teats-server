import express from 'express';
import router from './router';
import cors from 'cors';

import './repositories/database/connection';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export default app;