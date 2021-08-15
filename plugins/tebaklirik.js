let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0])
        throw false
    }
    let res = await fetch('https://api.lolhuman.xyz/api/tebak/lirik?apikey=e0aa0d9c04ee558c71e689c8')
    let json = await res.json()
    conn.tebaklirik[id] = [
      await conn.reply(m.chat, `*Tebak Lanjutan Lirik ini ${json.result.question}*\n\nTimeout: *${(timeout / 1000).toFixed(2)} detik*\nBonus: ${poin} XP`, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebaklirik[id]) conn.reply(m.chat, `Waktu habis!\nJawaban nya Adalah:*${json.result.answer}*`, conn.tebaklirik[id][0])
        delete conn.tebaklirik[id]
      }, timeout)
    ]
  }
  handler.help = ['tebaklirik']
  handler.tags = ['game']
  handler.command = /^tebaklirik/i
  handler.register = true
  
module.exports = handler