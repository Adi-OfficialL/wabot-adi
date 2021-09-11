let handler = m => m

handler.all = async function (m) {
    if (m.mtype === 'groupInviteMessage') {
        m.reply(`untuk mengundang bot ke dalam grup silahkan Ijin Owner terlebih dahulu`)
        this.sendContact(m.chat, '6289504585790', 'ᴀᴅɪ ᴏғғɪᴄɪᴀʟあ', m)
    }
}

module.exports = handler
