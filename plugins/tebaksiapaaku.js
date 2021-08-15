let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebaksiapaaku = conn.tebaksiapaaku ? conn.tebaksiapaaku : {}
    let id = m.chat
    if (id in conn.tebaksiapaaku) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaksiapaaku[id][0])
        throw false
    }
    let res = await fetch('https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=oniichan')
    let json = await res.json()
    conn.tebaksiapaaku[id] = [
      await conn.reply(m.chat, `*Soal: ${json.result.question}*\n\nTimeout: *${(timeout / 1000).toFixed(2)} detik*\nBonus: ${poin} XP`, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebaksiapaaku[id]) conn.reply(m.chat, `Waktu habis!\nJawaban nya Adalah:*${json.result.answer}*`, conn.tebaksiapaaku[id][0])
        delete conn.tebaksiapaaku[id]
      }, timeout)
    ]
  }
  handler.help = ['tebaksiapaaku']
  handler.tags = ['game']
  handler.command = /^tebaksiapaaku/i
  handler.register = true
  
module.exports = handler