const TelegramBot = requere('node-telegram-bot-api')
const TOKEN = '60200pkg install nodejs\n2099:AAH-gzeN08TDXtsGxX7zElTqL4CfRDH-vvQ\n'
const bot = new TelegramBot(TOKEN, {polling:true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'hello from HEROKU, bot says:"HI, ${message.from.first_name}" ')
})
