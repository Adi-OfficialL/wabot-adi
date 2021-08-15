let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (id in conn.tebakjenaka) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakjenaka[id][0])
        throw false
    }
    let res = await fetch(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=e0aa0d9c04ee558c71e689c8`)
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
*「 Tebak Jenaka 」*

"${json.result.question}"

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tjhint* untuk bantuan
Bonus: Rp${poin}
    `.trim()
    conn.tebakjenaka[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakjenaka[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.answer}*`, conn.tebakjenaka[id][0])
        delete conn.tebakjenaka[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakjenaka']
  handler.tags = ['game']
  handler.command = /^tebakjenaka/i
  handler.register = true

  handler.limit = true
  
  module.exports = handler