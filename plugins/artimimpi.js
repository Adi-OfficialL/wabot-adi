  const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    await m.reply(global.wait)
    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'artimimpi ular', m)

    axios.get(`https://docs-jojo.herokuapp.com/api/artimimpi?q=` + text)
        .then((res) => {
            conn.reply(m.chat, res.data.result, m)
        })
        .catch()
}
handler.help = ['artimimpi <teks>']
handler.tags = ['fun']
handler.command = /^(artimimpi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
