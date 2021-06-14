import { config } from 'dotenv';

config();
export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000
} as const;
