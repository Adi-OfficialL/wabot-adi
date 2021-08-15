// source : https://github.com/RC047/kuhong-api

let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {

  if (!text) throw 'Teksnya gak ada kak'

  let res = await fetch(`https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/api/simsimi.json`)
  let json = await res.json()
  let random = Math.floor(Math.random() * json.length)
  let data = json[random]

 conn.reply(m.chat, data.result, m)
}
handler.help = ['simi <chat>','s <chat>']
handler.tags = ['fun']
handler.command = /^(simi|s)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
