const Telegraf = require('telegraf').Telegraf
const axios = require('axios')
const bot = new Telegraf('5119391278:AAFNZBBO-6J-B66wKSOkZPXO-AcjGPJQkDE')

console.log("bot online")
bot.start((ctx)=>{
    ctx.reply("Chào Bạn vui lòng sử dụng /help để biết thêm chi tiết")
})

bot.help((ctx)=>{
    ctx.reply("Danh sách các lệnh cho các bạn dùng \n -/start\n -/help\n -/say\n -/fortune")
})

bot.on('sticker',(ctx)=>{
    ctx.reply(" Sticker Ngầu quá !")
})

bot.hears('hello ' ,(ctx) =>{
    ctx.reply("Hello ,  Bạn Khỏe Không ")
})
bot.command('say' , (ctx) =>{
    msg = ctx.message.text
    msgArray = msg.split(' ')
    msgArray.shift()
    newMsg = msgArray.join(' ')
    ctx.reply(newMsg)

})
bot.command('fortune',(ctx)=>{
    url = "http://yerkee.com/api/fortune"

    axios.get(url)
    .then((res)=>{
        ctx.reply(res.data.fortune)
    })
})

bot.command('covid',(ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id , 'Thống Kê Covid-19' ,
    {
        parse_mode:"HTML"
    })
})

bot.command('dusk',(ctx)=>{
    ctx.reply('ĐẸP TRAIIIIIIIIIII QUÁ !!!!!!')
})

bot.launch()