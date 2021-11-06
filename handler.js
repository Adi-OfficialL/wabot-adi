let util = require('util')
let fetch = require('node-fetch')
let simple = require('./lib/simple')
let { MessageType } = require('@adiwajshing/baileys')
let uploadImage = require('./lib/uploadImage')
let AdiOfficial = 'https://i.ibb.co/8z7zqXv/IMG-20210618-WA0001.jpg'

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
    	simple.smsg(this, m)
    	switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user
        if (user = global.DATABASE._data.users[m.sender]) {
          if (!isNumber(user.healt)) user.healt = 0
          if (!isNumber(user.healtlimit)) user.healtlimit = 10
          if (!isNumber(user.healtlastclaim)) user.healtlastclaim = 0
          if (!isNumber(user.levellimit)) user.levellimit = 10
          if (!isNumber(user.lastclaimlevel)) user.lastclaimlevel = 0
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!isNumber(user.money)) user.money = 0
          if (!isNumber(user.moneylimit)) user.moneylimit = 10
          if (!isNumber(user.moneylastclaim)) user.moneylastclaim = 0
          if (!isNumber(user.diamond)) user.diamond = 0
          if (!isNumber(user.diamondlimit)) user.diamondlimit = 10
          if (!isNumber(user.diamondlastclaim)) user.diamondlastclaim = 0
          if (!isNumber(user.common)) user.common = 0
          if (!isNumber(user.commonlimit)) user.commonlimit = 10
          if (!isNumber(user.commonlastclaim)) user.commonlastclaim = 0
          if (!isNumber(user.uncommon)) user.uncommon = 0
          if (!isNumber(user.uncommonlimit)) user.uncommonlimit = 10
          if (!isNumber(user.uncommonlastclaim)) user.uncommonlastclaim = 0
          if (!isNumber(user.mythic)) user.mythic = 0
          if (!isNumber(user.mythiclimit)) user.mythiclimit = 10
          if (!isNumber(user.mythiclastclaim)) user.mythiclastclaim = 0
          if (!isNumber(user.legendary)) user.legendary = 0
          if (!isNumber(user.legendarylimit)) user.legendarylimit = 10
          if (!isNumber(user.legendarylastclaim)) user.legendarylastclaim = 0
        
          if (!isNumber(user.pet)) user.pet = 0
          if (!isNumber(user.petlimit)) user.petlimit = 10
          if (!isNumber(user.petlastclaim)) user.petlastclaim = 0
        
          if (!isNumber(user.potion)) user.potion = 0
          if (!isNumber(user.potionlimit)) user.potionlimit = 10
          if (!isNumber(user.potionlastclaim)) user.potionlastclaim = 0
          if (!isNumber(user.sampah)) user.sampah = 0
          if (!isNumber(user.sampahlimit)) user.sampahlimit = 10
          if (!isNumber(user.sampahlastclaim)) user.sampahlastclaim = 0
        
          if (!isNumber(user.armor)) user.armor = 0
          if (!isNumber(user.armorlimit)) user.armorlimit = 10
          if (!isNumber(user.armorlastclaim)) user.armorlastclaim = 0
        
          if (!isNumber(user.kucing)) user.kucing = 0
          if (!isNumber(user.kucinglimit)) user.kucinglimit = 10
          if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
        
          if (!isNumber(user.kuda)) user.kuda = 0
          if (!isNumber(user.kudalimit)) user.kudalimit = 10
          if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
        
          if (!isNumber(user.rubah)) user.rubah = 0
          if (!isNumber(user.rubahlimit)) user.rubahlimit = 10
          if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
          
          if (!isNumber(user.warn)) user.warn = 0
          if (!isNumber(user.warnlimit)) user.warnlimit = 10
          if (!isNumber(user.warnlastclaim)) user.warnlastclaim = 0
          
          if (!isNumber(user.anakkucing)) user.anakkucing = 0
          if (!isNumber(user.anakkuda)) user.anakkuda = 0
          if (!isNumber(user.anakrubah)) user.anakrubah = 0
          if (!isNumber(user.makananpet)) user.makananpet = 0
          
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.limit)) user.limit = 15
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          
          if (!isNumber(user.antispam)) user.antispam = 0
          if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
          if (!('registered' in user)) user.registered = false
          if (!user.registered) {
            if (!('name' in user)) user.name = this.getName(m.sender)
            if (!isNumber(user.age)) user.age = -1
            if (!isNumber(user.regTime)) user.regTime = -1
          }
          if (!isNumber(user.afk)) user.afk = -1
          if (!('afkReason' in user)) user.afkReason = ''
          if (!('banned' in user)) user.banned = false
          if (!isNumber(user.level)) user.level = 0
          if (!('autolevelup' in user)) user.autolevelup = false
        } else global.DATABASE._data.users[m.sender] = {
          healt: 100,
          healtlimit: 999999,
          healtlastclaim: 0,
          levellimit: 10,
          lastclaimlevel: 0,
          money: 0,
          moneylimit: 999999,
          moneylastclaim: 0,
          diamond: 0,
          diamondlimit: 999999,
          diamondlastclaim: 0,
          common: 0,
          commonlimit: 999999,
          commonlastclaim: 0,
          uncommon: 0,
          uncommonlimit: 999999,
          uncommonlastclaim: 0,
          mythic: 0,
          mythiclimit: 999999,
          mythiclastclaim: 0,
          legendary: 0,
          legendarylimit: 999999,
          legendarylastclaim: 0,
          pet: 0,
          petlimit: 999999,
          petlastclaim: 0,
          potion: 0,
          potionlimit: 999999,
          potionlastclaim: 0,
          sampah: 0,
          sampahlimit: 999999,
          sampahlastclaim: 0,
          armor: 0,
          armorlimit: 999999,
          armorlastclaim: 0,
          kucing: 0,
          kucinglimit: 999999,
          kucinglastclaim: 0,
          kuda: 0,
          kudalimit: 999999,
          kudalastclaim: 0,
          rubah: 0,
          rubahlimit: 999999,
          rubahlastclaim: 0,
          warn: 0,
          warnlimit: 999999,
          warnlastclaim: 0,
          anakkucing: 0,
          anakkuda: 0,
          anakrubah: 0,
          makananpet: 0,
          exp: 0,
          limit: 15,
          lastclaim: 0,
          registered: false,
          name: this.getName(m.sender),
          age: -1,
          regTime: -1,
          afk: -1,
          afkReason: '',
          banned: false,
          level: 0,
          autolevelup: false,
          antispam: 0,
          antispamlastclaim: 0,
        }
    
        let chat
        if (chat = global.DATABASE._data.chats[m.chat]) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = false
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('delete' in chat)) chat.delete = false
          if (!('antiLink' in chat)) chat.antiLink = false
        } else global.DATABASE._data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          delete: false,
          antiLink: false,
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
	try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 10)
      //BOT Nyimak
	await conn.chatRead(m.chat)
    	let usedPrefix
      let _user = global.DATABASE.data && global.DATABASE.data.users && global.DATABASE.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? await this.groupMetadata(m.chat) : {}
      let participants = m.isGroup ? groupMetadata.participants : []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      let DevMode = (global.DeveloperMode.toLowerCase() == 'true')
    	for (let name in global.plugins) {
    	  let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
  		  let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
             typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text),new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before == 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          DevMode,
          isPrems,
          chatUpdate,
        })) continue
    	  if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
  	  	  let [command, ...args] = noPrefix.trim().split` `.filter(v=>v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
    		  command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
  		  	let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

    			if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.DATABASE._data.chats || m.sender in global.DATABASE._data.users) {
            let chat = global.DATABASE._data.chats[m.chat]
            let user = global.DATABASE._data.users[m.sender]
            
           /*Message If Banned*/
            if (chat.isBanned == true || user.banned == true) {
                if (name != 'math_answer.js' && name != '_afk.js' && name != 'leveling.js') {       
                    this.reply(m.chat, `
*Anda Terbanned*
Join Official Group *${conn.getName(conn.user.jid)}* untuk keterangan lebih lanjut

${(global.linkGC).map((v, i) => '*Group ' + (i + 1) + '*\n' + v).join`\n\n`}

*Atau hubungi*
${(global.owner).map((v, i) => 'Owner ' + (i + 1) + ' *: wa.me/' + v + '*').join`\n`}`.trim(), m)
                }
            }
            
            if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
            if (name != 'unbanuser.js' && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
    			if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }
          
          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
          if (xp > 200) m.reply('Astaghfirullah, Kamu ngecitya?') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.DATABASE._data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buylimit*`, m)
            continue // Limit habis
          }
          try {
            await plugin.call(this, m, {
              match,
              usedPrefix,
              noPrefix,
              _args,
              args,
              command,
              text,
              conn: this,
              participants,
              groupMetadata,
              user,
              bot,
              isROwner,
              isOwner,
              isAdmin,
              isBotAdmin,
              DevMode,
              isPrems,
              chatUpdate
            })
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.log(e)
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user)) 
            if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
          }
    			break
  	  	}
    	}
    } finally {
      //console.log(global.DATABASE._data.users[m.sender])
      let user, stats = global.DATABASE._data.stats
      if (m) {
        if (m.sender && (user = global.DATABASE._data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }
    
        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error ? 0 : 1,
            last: now,
            lastSuccess: m.error ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (!m.error) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      } 

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
    }
  },
 async participantsUpdate({ jid, participants, action }) {
   let chat = global.DATABASE._data.chats[jid] || {}
   let text = ''
   switch (action) {
     case 'add':
     case 'remove':
       if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            // let pp = './src/avatar_contact.png'
            let pp = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            try {
              pp = await uploadImage(await (await fetch(await this.getProfilePicture(user))).buffer())
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Selamat datang, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc) :
                (chat.sBye || this.bye || conn.bye || 'Sampai jumpa, @user!')).replace(/@user/g, '@' + user.split`@`[0])
              let wel = `https://kuontol-api.herokuapp.com/api/welcome?nama=${encodeURIComponent(this.getName(user))}&member=${encodeURIComponent(groupMetadata.participants.length)}&gc=${encodeURIComponent(this.getName(jid))}&pp=${pp}&bg=https://cdn.wallpapersafari.com/38/89/pZxtn4.jpg`
              let lea = `https://kuontol-api.herokuapp.com/api/goodbye?nama=${encodeURIComponent(this.getName(user))}&member=${encodeURIComponent(groupMetadata.participants.length)}&gc=${encodeURIComponent(this.getName(jid))}&pp=${pp}&bg=https://cdn.wallpapersafari.com/38/89/pZxtn4.jpg`

              this.sendFile(jid, action === 'add' ? wel.toBuffer() : lea.toBuffer(), 'pp.jpg', text, null, false, {
                thumbnail: (action === 'add' ? wel : lea).toBuffer(),
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
       case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.fromMe) return
    let chat = global.DATABASE._data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.reply(m.key.remoteJid, `
*「 ANTI DELETE 」*

Terdeteksi @${m.participant.split`@`[0]} Telah Menghapus Pesan!

-❥ *Type*: ${Object.keys(m.message.message)[0]}
-❥ *Number*: ${require('awesome-phonenumber')(`+${m.participant.split`@`[0]}`).getNumber('international')}
-❥ *Name*: ${this.getName(m.participant)}
`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    let { from } = json[2][0][1]
    console.log("TELPON DARI "+ from)
    await this.sendMessage(from, 'Bot Not Receiving Calls. Sorry you will be blocked, please contact the owner of this bot to unblock this.', MessageType.extendedText)
    await this.blockUser(from, 'add')
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'Perintah ini hanya dapat digunakan oleh _*OWNER*_!',
    owner: 'Perintah ini hanya dapat digunakan oleh _*Owner Bot*_!',
    mods: 'Perintah ini hanya dapat digunakan oleh _*Moderator*_ !',
    premium: 'Perintah ini hanya untuk member _*Premium*_ !\nSilahkan Hubungi Owner Jika ingin ke _*PREMIUM*_',
    group: 'Perintah ini hanya dapat digunakan di grup!',
    private: 'Perintah ini hanya dapat digunakan di Chat Pribadi!',
    admin: 'Perintah ini hanya untuk *Admin* grup!',
    botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan perintah ini!',
    unreg: '*「 BELUM TERDAFTAR 」* \nHalo Kak, Yuk Daftar Dulu Soalnya Anda Belum Terdaftar Dalam Database Bot\n\nKetik : #daftar nama|umur\nContoh : #daftar AdiOfficial|17'
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
