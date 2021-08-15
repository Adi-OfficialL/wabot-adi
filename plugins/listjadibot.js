let handler = async (m, { conn, text }) => {
  listnye = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
if (listnye.length == 0) return m.reply('Belum Ada Yang Jadibot');
  om = 'List Yang Jadibot :\n\n'
  for (i of listnye) {
  om += `- @${i.split('@')[0]}\n`
  }
  conn.sendMessage(m.chat, om, 'conversation', { contextInfo: { mentionedJid: listnye }, quoted: m })
}
handler.help = ['listjadibot']
handler.tags = ['host']
handler.command = /^(listjadibot|listbot)$/i
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