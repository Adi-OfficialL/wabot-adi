const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) throw 'Kamu tidak sedang berada di anonymous chat'
            m.reply('Kamu Meninggalkan Chat ini\n\nKetik:\n!start ( untuk mencari teman chat lagi )')
            let other = room.other(m.sender)
            if (other) this.sendMessage(other, 'Teman meninggalkan chat', MessageType.text)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) throw 'Kamu masih berada di dalam anonymous chat'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                this.sendMessage(room.a, '*Berhasil Menemukan Teman Chat*\n\nKetik:\n!next ( untuk melewati chat ini )\n!leave ( untuk meninggalkan chat ini )', MessageType.text)
                room.b = m.sender
                room.state = 'CHATTING'
                m.reply('*Berhasil Menemukan Teman Chat*\n\nKetik:\n!next ( untuk melewati chat ini )\n!leave ( untuk meninggalkan chat ini )')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                m.reply('Mohon Tunggu Sedang Mencari Teman Chat🔎')
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']

handler.command = ['start', 'leave', 'next']
handler.private = true
handler.register = true

module.exports = handler
