// Thanks to Nobuyaki

let handler = async (m, { conn, text }) => {

let member = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
let siapa = member[Math.floor(Math.random() * member.length)]
let jawab = `
*Pertanyaan:* ${m.text}
*Jawaban:* @${siapa.replace(/@.+/, '')}
`.trim()

    let mentionedJid = [siapa]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid }})
}
handler.help = ['', 'kah'].map(v => 'siapa' + v + ' <pertanyaan>?')
handler.tags = ['kerang', 'group']
handler.customPrefix = /(\?$)/
handler.command = /^siapa(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
