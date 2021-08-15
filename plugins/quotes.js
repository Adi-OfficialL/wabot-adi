let axios = require("axios");
let handler = async(m, { conn, text }) => {
	axios.get(`https://api.zeks.xyz/api/quote?apikey=PutriCntq`).then ((res) => {
	 	let hasil = `*QUOTES*: ${res.data.result.quotes}\n\n*By* _${res.data.result.author}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler