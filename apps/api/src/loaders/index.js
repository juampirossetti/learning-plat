import logger from '../logger';
// import databaseLoader from './database';
import expressLoader from './express';

export default async (app) => {
  //   await databaseLoader();
  //   logger.info('Database initialized');
  await expressLoader(app);
  logger.info('Express initialized');
};
