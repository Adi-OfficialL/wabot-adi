/*
   RECODE By Adi Gans
   CREATOR [ NURUTOMO ]
*/
let fs = require ('fs')
let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
let moment = require('moment-timezone')
let { performance } = require('perf_hooks')
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')

//========== BATASSS NGABBB ==========//

let handler  = async (m, { conn, usedPrefix: _p, command }) => {
let old = performance.now()
await conn.fakeReply(m.chat, '*「 ⚠️ 」Loading...*', '0@s.whatsapp.net', '*Menampilkan List Menu*', 'status@broadcast')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const groupsIn = groups.filter(v => !v.read_only)
let AdiOfficial = './src/avatar_contact.png'
let pantek = 'https://i.ibb.co/8z7zqXv/IMG-20210618-WA0001.jpg'

  try {
    AdiOfficial = await conn.getProfilePicture(m.sender)
  } catch (e) {

  } finally {
    let neww = performance.now()
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let jam = moment.tz('Asia/Jakarta').format('HH')
    var ucapanWaktu = 'Selamat Pagi 🌄'
				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi 🌄'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang ☀️'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore 🌅'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam 🌙'
				} else {
				ucapanWaktu = 'Selamat Malam 🌙'
				}
    let { exp, limit, registered, regTime, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
      'main': 'Main',
      'info': 'INGFO',
      'rpg': 'RPG',
      'game': 'GAME MENU',
      'xp': 'EXP & LIMIT',
      'database': 'DATABASE MENU',
      'sticker': 'STICKER MENU',
      'maker': 'MAKER MENU',
      'spammer': 'SPAM MENU',
      'audio': 'AUDIO MENU',
      'kerang': 'KERANG AJAIB',
      'cek': 'CEK MENU',
      'fun': 'FUN MENU',
      'quotes': 'QUOTES MENU',
      'islamic': 'ISLAM MENU',
      'anonymous': 'ANONYMOUS CHAT',
      'admin': 'ADMIN MENU',
      'group': 'GROUP MENU',
      'internet': 'INTERNET',
      'foto': 'IMAGE MENU',
      'nime': 'ANIME MENU',
      'nulis': 'MAGER NULIS',
      'downloader': 'DOWNLOADER MENU',
      'tools': 'TOOLS MENU',
      'owner': 'OWNER MENU',
      'jadibot': 'JADI BOT',
      'host': 'HOST',
      'advanced': 'EVAL',
      '': 'NO CATEGORY',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
┌◪ *${ucapanWaktu} ${conn.getName(m.sender)}*
││
│├❒ *Nama : %name*
│├❒ *Xp : %totalexp*
│├❒ *Limit : %limit*
│├❒ *Level : %level*
│├❒ *Premium : ${premium ? 'Yes' : 'Gratisan'}*
│└❒ *Register : ${registered ? 'Yes' : 'No'}*
│
├◪ *TIME ⏳*
││
│├❒ *Hari: %week %weton*
│├❒ *Tanggal: %date*
│└❒ *Waktu:* _%time_
│
├◪ *STATUS BOT*
││
│├❒ *%totalreg* Pengguna
│├❒ *${groupsIn.length}* Group Chat
│├❒ *${chats.length}* Total Chat
│├❒ _%uptime_ Online
│└❒ *Battery : ${conn.battery ? `${conn.battery.value}%* ${conn.battery.live ? 'Sedang Di Cass' : 'Tidak Di Cass'}` : 'Wait....*'}
│
├◪ *INFO*
││
│├❒ *Owner Of This Bot*
│├❒ _http://wa.me/6289504585790_
│├❒ *Official WhatsApp Bot Groups*
│├❒ *https://bit.ly/Grupgabutbotv1*
│├❒ *Tap To Join our Telegram Group*
│└❒ *https://t.me/gabutsquad44*
│
└───────────────────────
%readmore`
    let header = conn.menu.header || '┌──*「 ```%category``` 」*──'
    let body   = conn.menu.body   || '├◪ *%cmd%islimit*'
    let footer = conn.menu.footer || '└───────────────────────'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + `\n\n*SPECIAL THANKS TO*\n\n*❒ Nurutomo*\n*❒ Drawl Nag*\n*❒ Caliph*\n*❒ BochilGaming*\n*❒ RendyCraft*\n*❒ Adi Official*\n*❒ Penyedia Apikey*\n*❒ Creator Bot WhatsApp*\n*❒ Dan Seluruh Pengguna Bot ini*`
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])
    var _0x188b34=_0x57cf;function _0xc6e5(){var _0x59cb47=['13259059bpePtw','18aEpYzD','637825cUSzre','1443AzfwCJ','Join\x20My\x20Telegram\x20Group\x0at.me/gabutsquad44','24ctzqTN','2037UTPvVW','1483656ygSVXH','1860avxGmv','2300190jYsEKG','sendFile','status@broadcast','10152gtYnGb','buffer','7510gpiFpR','0@s.whatsapp.net','trim','964EHyWIW'];_0xc6e5=function(){return _0x59cb47;};return _0xc6e5();}function _0x57cf(_0x2ad614,_0x340fc9){var _0xc6e5fb=_0xc6e5();return _0x57cf=function(_0x57cfb2,_0x3e1845){_0x57cfb2=_0x57cfb2-0x148;var _0x257779=_0xc6e5fb[_0x57cfb2];return _0x257779;},_0x57cf(_0x2ad614,_0x340fc9);}(function(_0x15c30a,_0x2c9c29){var _0x282f3c=_0x57cf,_0x2265a9=_0x15c30a();while(!![]){try{var _0x14f97c=-parseInt(_0x282f3c(0x14e))/0x1+-parseInt(_0x282f3c(0x154))/0x2*(parseInt(_0x282f3c(0x14f))/0x3)+-parseInt(_0x282f3c(0x14b))/0x4*(parseInt(_0x282f3c(0x148))/0x5)+parseInt(_0x282f3c(0x158))/0x6*(-parseInt(_0x282f3c(0x152))/0x7)+parseInt(_0x282f3c(0x153))/0x8*(-parseInt(_0x282f3c(0x14d))/0x9)+parseInt(_0x282f3c(0x155))/0xa+-parseInt(_0x282f3c(0x14c))/0xb*(-parseInt(_0x282f3c(0x151))/0xc);if(_0x14f97c===_0x2c9c29)break;else _0x2265a9['push'](_0x2265a9['shift']());}catch(_0x4a911d){_0x2265a9['push'](_0x2265a9['shift']());}}}(_0xc6e5,0x50a5e),conn[_0x188b34(0x156)](m['chat'],AdiOfficial,'AdiOfficial.jpg',text[_0x188b34(0x14a)](),{'key':{'participant':_0x188b34(0x149),'remoteJid':_0x188b34(0x157)},'message':{'orderMessage':{'itemCount':0x3e7,'status':0x3e7,'thumbnail':await(await fetch(pantek))[_0x188b34(0x159)](),'surface':0x3e7,'message':_0x188b34(0x150),'orderTitle':'AdiOfficial','sellerJid':_0x188b34(0x149)}}},{'contextInfo':{'mentionedJid':[m['sender']]}}));
  }
}
handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
