const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler  = async (m, { conn, text }) => {
  pp = `https://lolhuman.herokuapp.com/api/random/nsfw/blowjob?apikey=ohayou`
                     await sticker(false, pp, 'NSFW Blowjob', author).then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m }).then((ss) => conn.reply(m.chat, 'Jangan Dibuat Bahan Comly Ya ajg', ss))
                     })
  //if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['blowjob']
handler.tags = ['sticker']
handler.command = /^blowjob$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.admin = false
handler.register = true
handler.botAdmin = false

handler.fail = null

module.exports = handler