let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan ${usedPrefix}anime\nSilahkan ketik: ${usedPrefix}anime [query]\nContoh: ${usedPrefix}anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko`, m)
    if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
  await m.reply('Searching...')

        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomnime = body.split('\n')
                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                conn.sendFile(m.chat, randomnimex, '', 'Dasar Wibu', m)
            })
            .catch(() => {
                conn.reply(m.chat, 'Ada yang Error cuy...', m)
            })
    } else {
        conn.reply(m.chat, `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix}anime untuk melihat list query`, m)
    }

}

handler.help = ['anime <query>']
handler.tags = ['nime']
handler.command = /^(anime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler