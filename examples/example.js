import discord_webHook from '../mod.js';
import { wh_url } from './config.js'

const client = new discord_webHook(wh_url);

client.sendMsg("<@734054896810328077> please");
