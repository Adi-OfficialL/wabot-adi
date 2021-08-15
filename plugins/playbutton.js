let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/gplaybutton?text=${response}&apikey=PutriCntq`
  conn.sendFile(m.chat, res, 'gplaybutton.jpg', `Nihh Kak`, m, false)
}
handler.help = ['gplaybutton'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(gplaybutton)$/i
handler.register = true

module.exports = handler

