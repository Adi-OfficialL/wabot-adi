let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/splaybutton?text=${response}&apikey=PutriCntq`
  conn.sendFile(m.chat, res, 'splaybutton.jpg', `Nih Kak`, m, false)
}
handler.help = ['splaybutton'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(splaybutton)$/i
handler.register = true

module.exports = handler

