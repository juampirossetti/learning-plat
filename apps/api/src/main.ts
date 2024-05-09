/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import loaders from './loaders';
import logger from './logger';
import http from 'http';
async function initiateServer(): Promise<{
  app: express.Express;
  server: http.Server;
}> {
  const app: express.Express = express();
  const port: number = Number(process.env.PORT) || 4444;

  await loaders(app);

  const server: http.Server = app.listen(port, () => {
    logger.info(`Server listening on port: ${port}`);
  });

  return { app, server };
}

const { app, server } = await initiateServer();

export default { app, server };
