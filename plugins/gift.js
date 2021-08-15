let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode Giftmu!`, m)
    if (args[0] == 'KodeGift1' || args[0] == 'KodeGift2' || args[0] == 'KodeGift3' || args[0] == 'KodeGift4') {

        conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\n10000 XP!\n\nPajak -5 limit', m)
    global.DATABASE._data.users[m.sender].exp += 10000
    } else {
        conn.reply(m.chat, `*KODE GIFT TIDAK VALID!*\n\nSilahkan Hubungi Owner untuk Mendapatkan Kode Gift Yang Valid atau Dapatkan kode gift secara gratis dengan cara anda Mendaftar!`, m)
    }
}
handler.help = ['kodegift <kode>']
handler.tags = ['hadiah']
handler.command = /^(kodegift)$/i
handler.register = true

handler.limit = 100

module.exports = handler
