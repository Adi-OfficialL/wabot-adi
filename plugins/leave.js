let handler = async function(m, { conn, args, isPrems, isOwner }) {

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      this.fakeReply(m.chat, `*Bye Semuaa 🙂*`, '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, 'status@broadcast')
      await time(5000)
  await conn.groupLeave(m.key.remoteJid)
}
handler.help = ['leavebot']
handler.tags = ['admin', 'group']
handler.command = /^(leavebot|keluar)gro?up$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
