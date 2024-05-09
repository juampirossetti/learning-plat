//import logger from '../logger';
// import {
//   errorMiddleware,
//   loggerMiddleware,
//   parserMiddleware,
//   securityMiddleware,
// } from '../middlewares';
import routes from '../routes';

export default async (app) => {
  //   securityMiddleware(app);
  //   parserMiddleware(app);
  //   loggerMiddleware(app);
  //logger.info('Express middlewares initialized');

  // Set up available routes
  routes(app);
  //logger.info('Router initialized');

  //   // Default error handler
  //   errorMiddleware(app);
};
