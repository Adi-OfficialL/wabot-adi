let fetch = require('node-fetch')
let { Presence } = require('@adiwajshing/baileys')
let { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
   if (!text) throw 'Masukan pencarian, Contoh *#stickerwa pentol*'
 
  let res = await fetch(`https://xteam.xyz/sticker/stickerly?q=${text}&APIKEY=MIMINETBOT`)
  let json = await res.json()
  if (json.result.stickerlist) {
for (let i of json.result.stickerlist) {
conn.sendFile(m.chat, await sticker(false, i, packname, author), ':v', '', m)
}
} else json
}
handler.help = ['stickerwa'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^stickerwa|stikerwa$/i
handler.limit = true
handler.register = true

module.exports = handler