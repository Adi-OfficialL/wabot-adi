let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
// JANGAN DI UBAH LAH BABI :(
let scnya = '*「 SCRIPT BOT WHATSAPP 」*\n\nBot ini Menggunakan Script:\n\n> https://github.com/Adi-OfficialL/wabot-adi\n\nThank you for using this script, I hope you like this script, and dont forget to give a star'
conn.reply(m.chat, scnya, m)
}
handler.help = ['']
handler.tags = ['AndaTauMemek?'] 
handler.customPrefix = /^(SCRIPT BOT INI 🐿)$/i
handler.command = new RegExp

module.exports = handler
