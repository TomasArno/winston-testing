import Logger from '../lib/logger';
import AppError from '../utils/appError';

const errorHandler = (error, req, res, next) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ message: `${req.method} ${req.url} ${error.message}` });
  }

  Logger.warn(error.message);
  res.status(500).json({ message: 'Something went wrong' });
};

export default errorHandler;
