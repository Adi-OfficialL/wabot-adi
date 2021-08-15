let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.caliph.repl.co/api/darkjokes?apikey=${APIKeys["https://recoders-area.caliph.repl.co"]}`)
  let json = await res.buffer()
  conn.sendFile(m.chat, json, 'darkjokes.png', `......`, m, false)
}
handler.help = ['darkjokes']
handler.tags = ['nulis']

handler.command = /^(darkjokes)$/i
handler.register = true

module.exports = handler
