let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hintcaklontong/i.test(m.quoted.text)) return 
  conn.caklontong = conn.caklontong ? conn.caklontong : {}
  if (!(id in conn.caklontong)) return m.reply('Soal itu telah berakhir!')
  if (m.quoted.id == conn.caklontong[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.result.jawaban.toLowerCase()) {
      global.DATABASE._data.users[m.sender].exp += conn.caklontong[id][2]
      m.reply(`*Jawaban Kamu Benar!*\nKamu Mendapatkan XP Sebesar +${conn.caklontong[id][2]} XP`)
      clearTimeout(conn.caklontong[id][3])
      delete conn.caklontong[id]
    } else if (m.text.toLowerCase().endsWith(json.result.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Jawaban Kamu Salah!*\nAyo Coba Lagii!!`)
  }
}
handler.exp = 0

module.exports = handler