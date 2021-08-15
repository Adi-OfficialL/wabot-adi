let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[❗] WAIT, Sedang Proses...*')
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/textmaker/summer?q=${response}&apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'summer.jpg', `Nih kak`, m, false)
}
handler.help = ['summer'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(summer)$/i
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
handler.limit = true

module.exports = handler


