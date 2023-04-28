import { Telegraf } from 'telegraf';
import config from './src/lib/config.js';

const bot = new Telegraf(config.api.telegram);

const main = async () => {};

main();
