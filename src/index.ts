import express, { json } from 'express';

import Logger from './lib/logger';

import morganMid from './mid/morganMid';
import errorHandler from './mid/errorHandler';
import AppError from './utils/appError';

const app = express();

app.use(json());
app.use(morganMid);

app.get('/test', (req, res, next) => {
  if (req.query.error) {
    try {
      throw new AppError('error', 400);
    } catch (error) {
      return next(error);
    }
  }

  if (req.query.serverError) {
    throw new Error('server Error');
  }

  res.send('test');
});

app.use(errorHandler);

app.listen(process.env.PORT || 8080, () => {
  Logger.info(`server listening on port: ${process.env.PORT || 8080}`);
});
