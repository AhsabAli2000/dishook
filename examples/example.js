import discord_webHook from '../mod.js';

const wh_url = "https://discord.com/api/webhooks/809003521897791508/0jBfWz65guNGmRFyOZEefKdCq7VBHm8MAeCQXfw6wrq80fA_zivqvkOAZWOJ2T5LeXib";

const client = new discord_webHook(wh_url);

client.sendMsg("<@734054896810328077> please");
