import dotenv from 'dotenv';
dotenv.config();

export default {
  api: {
    telegram: process.env.TELEGRAM_TOKEN,
  },
};
