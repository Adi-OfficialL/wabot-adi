const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, args, usedPrefix }) => {
  await m.reply('Sedang Membuat...\nMohon tunggu sekita 1 menit.')
  let stiker = false
  try {
    let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
    if (/video/.test((m.quoted ? m.quoted : m.msg).mimetype || '')) {
      let img = await conn.downloadM(q)
      if (!img) throw img
      stiker = await sticker2(img, false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker2(false, args[0], global.packname, global.author)
      else {
      m.reply(`Kirim Perintah ${usedPrefix}stikergif dengan caption di video/gif atau reply video/gif yang tersedia.`)
    }
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}
handler.help = ['stickergif','sgif']
handler.tags = ['sticker']
handler.command = /^stickergif|sgif$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

let tmp = path.join(__dirname, '../tmp')
function sticker2(img, url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (url) {
        let res = await fetch(url)
        img = await res.buffer()
      }
      let inp = path.join(tmp, +new Date + '.mp4')
      let png = path.join(tmp, +new Date + '.gif')
      let out = path.join(tmp, +new Date + '.webp')
      fs.writeFileSync(inp, img)
      spawn('ffmpeg', [
        '-y',
        '-i', inp,
        '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1',
        png
      ])
      .on('error', reject)
      .on('close', () => {
        fs.unlinkSync(inp)
        spawn('convert', [png, out])
        .on('error', reject)
        .on('close', () => {
          fs.unlinkSync(png)
          resolve(fs.readFileSync(out))
          fs.unlinkSync(out)
        })
      })
    } catch (e) {
      reject(e)
    }
  })
}

async function canvas(code, type = 'png', quality = 0.92) {
    let res = await fetch('https://nurutomo.herokuapp.com/api/canvas?' + queryURL({
        type,
        quality
    }), {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Content-Length': code.length
        },
        body: code
    })
    let image = await res.buffer()
    return image
}

function queryURL(queries) {
    return Object.entries(queries).map(([key, value]) => key + (value ? '=' + encodeURIComponent(value) : '')).join('&')
}

let { fromBuffer } = require('file-type')
async function sticker(img, url) {
    url = url ? url : await uploadImage(img)
    let {
        mime
    } = url ? {mime:'image/jpeg'} : await fromBuffer(img)
    let sc = `let im = await loadImg('data:${mime};base64,'+(await window.loadToDataURI('${url}')))
c.width = c.height = 512
let max = Math.max(im.width, im.height)
let w = 512 * im.width / max
let h = 512 * im.height / max
ctx.drawImage(im, 256 - w / 2, 256 - h / 2, w, h)
`
    return await canvas(sc, 'webp')
}

function uploadImage(buffer) {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                ext
            } = await fromBuffer(buffer)
            let form = new FormData()
            form.append('file', buffer, 'tmp.' + ext)
            let res = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
            let img = await res.json()
            if (img.error) reject(img.error)
            else resolve('https://telegra.ph' + img[0].src)
        } catch (e) {
            reject(e)
        }
    })
}
