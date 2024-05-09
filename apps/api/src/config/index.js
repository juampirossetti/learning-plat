import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'qa') {
  const env = dotenv.config();
  if (env.error) {
    console.error(JSON.stringify(env.error, null, 2));
    throw new Error("Couldn't find .env file");
  }
}

export default {
  ENV: process.env.NODE_ENV ?? 'development',
  PORT: process.env.PORT,
  ALLOWED_ORIGINS:
    process.env.ALLOWED_ORIGINS?.split(',').map((o) => o.trim()) || [],
  BODY_SIZE_LIMIT: process.env.BODY_SIZE_LIMIT,
  LOGS: {
    LEVEL: process.env.LOGS_LEVEL,
    FILE_SIZE: process.env.LOG_FILE_SIZE,
    FILES: process.env.LOG_FILES,
    DIRECTORY: process.env.LOG_DIRECTORY,
  },
  DATABASE_URL: process.env.DATABASE_URL,
  SENDGRID_KEY: process.env.SENDGRID_KEY,
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS),
  SECRETS: {
    ACCESS: {
      TOKEN: process.env.ACCESS_TOKEN_SECRET,
      LIFE: process.env.ACCESS_TOKEN_LIFE,
    },
    REFRESH: {
      TOKEN: process.env.REFRESH_TOKEN_SECRET,
      LIFE: process.env.REFRESH_TOKEN_LIFE,
    },
  },
};
