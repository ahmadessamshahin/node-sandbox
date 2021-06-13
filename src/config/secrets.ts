import { config } from 'dotenv';

config();
export default {
  NODE_ENV: process.env.NODE_ENV || 'development'
} as const;
