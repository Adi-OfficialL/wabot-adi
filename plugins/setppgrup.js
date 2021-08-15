let { spawn } = require('child_process');
let FormData = require('form-data');
let fetch = require('node-fetch');
let path = require('path');
let util = require('util');
let fs = require('fs');
let axios = require("axios");
let handler = async(m, { conn, text, args, bot, command }) => {
    await m.reply(global.wait)
    const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
  try {
    if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
        ngntd = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
        media = await conn.downloadAndSaveMediaMessage(ngntd)
        await conn.updateProfilePicture(m.chat, media)
        m.reply('```Berhasil Mengganti Foto Grup```')
    } else {
        m.reply('_Reply Fotonya!_')
        }
    } catch (e) {
   m.reply('```Error```')
   // throw e
 }
}
handler.help = ['setppgrup']
handler.tags = ['group']
handler.command = /^(setpp(gc|gro?up))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

module.exports = handler
