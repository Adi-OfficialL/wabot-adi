let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [kata] = text.split `|`

    if (!kata) return conn.reply(m.chat, 'Masukan kata', m)
  await m.reply(global.wait)
	axios.get(`https://api.zeks.xyz/api/sgplay?apikey=PutriCntq&q=${kata}`).then ((res) => {
	 	let hasil = res.data.result.map(res=>`*Judul: ${res.title}*\n*${res.appid}*\n*Dev: ${res.developer}*\n*Rating: ${res.rating}*\n*Link: ${res.url}*`).join('\n\n')

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['playstore <app>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
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
