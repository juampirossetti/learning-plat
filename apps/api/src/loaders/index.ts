import logger from '../logger';
import expressLoader from './express';
import { Express } from 'express';

// import databaseLoader from './database';

export default async (app: Express) => {
  //   await databaseLoader();
  //   logger.info('Database initialized');
  await expressLoader(app);
  logger.info('Express initialized');
};
