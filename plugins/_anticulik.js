let handler = m => m

handler.all = async function (m) {
    if (m.mtype === 'groupInviteMessage') {
        m.reply(`untuk mengundang bot ke dalam grup silahkan Ijin Owner terlebih dahulu`)
        this.sendContact(m.chat, '33623746892', 'ᴀᴅɪ ᴏғғɪᴄɪᴀʟあ', m)
    }
}

module.exports = handler