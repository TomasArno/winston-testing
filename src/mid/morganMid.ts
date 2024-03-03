import morgan, { StreamOptions } from 'morgan';

import Logger from '../lib/logger';

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

morgan.token('body', (req, res) => JSON.stringify(req['body']));

const morganMiddleware = morgan(
  ':method :url :body :status -- :res[content-length] :response-time ms',
  { stream }
);

export default morganMiddleware;
