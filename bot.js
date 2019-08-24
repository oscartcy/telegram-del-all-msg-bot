const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('deleteAll', async (ctx) => {
    let res = await ctx.reply('deleting');
    console.log(res);
    for(let i = res.message_id; i >= 0; i--) {
        console.log(`chat_id: ${ctx.chat.id}, message_id: ${i}`);
        try {
            let res = await ctx.telegram.deleteMessage(ctx.chat.id, i);
            console.log(res);
        } catch (e) {
            console.error(e);
        }
    }
});

bot.launch();