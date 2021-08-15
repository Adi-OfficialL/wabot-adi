let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants, args }) => {
  let users = participants.map(u => u.jid)
 teks = (args.length > 1) ? args.join(' ').trim() : ''
 teks += `  Total : ${users.length}\n`
	for (let mem of users) {
	teks += `➥ @${mem.split('@')[0]}\n*TAG ALL*\n`
		}
		
  conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: users } })
}
handler.help = ['tagall','mentional']
handler.tags = ['group']
handler.command = /^(tagall|mentional)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

