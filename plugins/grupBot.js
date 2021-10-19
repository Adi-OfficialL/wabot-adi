let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
// JANGAN DI UBAH LAH BABI :V
let grupBot = '*「 OFFICIAL BOT GROUP 」*\n\nSini Bang Join\n\n> http://bit.ly/Grupgabutbotv1'
conn.reply(m.chat, grupBot, m)
}
handler.help = ['']
handler.tags = ['AndaTauMemek?'] 
handler.customPrefix = /^(GROUP BOT 🕊)$/i
handler.command = new RegExp

module.exports = handler
