let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/cuckold?apikey=beliapikey`
  conn.sendFile(m.chat, res, 'cuckold.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['cuckold'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(cuckold)$/i
handler.register = true

module.exports = handler