let fetch = require('node-fetch')
const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  let pantek = 'https://i.ibb.co/8z7zqXv/IMG-20210618-WA0001.jpg'
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah!\nContoh: *${usedPrefix}daftar AdiOfficial|18*`
  let [_, name, splitter, age] = text.match(Reg)
  let totalreg = Object.keys(global.DATABASE._data.users).length
  if (!name) throw 'Nama tidak boleh kosong!'
  if (!age) throw 'Umur tidak boleh kosong!'
  if (age < 13) throw 'Maaf, Anda belum bisa mendaftar.\n*Minimal umur 13 Ke Atas*'
  if (age > 30) throw 'Maaf, Anda terlalu tua.'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
*PENDAFTARAN BERHASIL*

*Dengan SN* _${sn}_

❒
│• Nama : ${name}
│• Umur : ${age} Tahun
│• ID : ${pickRandom(['GGA0QH119J1','JPA017P02HA1','PWJROSAIEJ','LAOFOODJQ','PWJFCIFIF','QBBVAODEPZ','QPWEJDNDJD','IQPQBAHSIF','UWUWIWOKPF','PQJDXBXB','AKSJALPQDN','HALAKDILQU','IAIIWIICCIS','KQPSNWO','BSBANSKA','JANSNDKSOS','JDKALDKKAPPPP','KAKALALPCLCLJA','PWWJ017027GA14','19QPDKALLH61J','PWJSJDDUYSYSHSU','1001UQOXJ9JJDY','PQPSODUE107','BBBAKZOOX','00071','WKESOAKWLA','104JALOA9','OSBDOSODO','PWODJDOSKFJSOO','OWJCKEOS','PAJDISO','OSJDOWO','BABAOALKS','PWKW827LA9PA0','PWOEOOOJF','LCKDI2027H393P','IWUEUJEDGWEUEUE','GGGGGGGGHQJU127','HAGFUUXUQP3','P0000009769767T0O87Y5','0TT9I4UO43','P7YYRE8583E6','NZNSJEO','P8Y4W38P0R','P8R6IOP4EU-HG0','0729OWRU','JJJJJJJJAGFIS0W67','000087','BbL016JJQBCSr54OwwW0','BbJdQ0X37ohL016HhqK','BbJdQ0X37ohL016HhqK','GgGddSsssss1039','HAOSOWODJSO','BVjd173k6BEk','AEOKKAKSKKAK20468','BBWUK017KASK','COLIMAJSOAOOAOK1','1238PBLLWO20','KODE123','jajsoskskskOOoO0292','GAGHWPPWSIJ','PWEUPiwpepwp02928','000000723','QPWOEJSJAL','BBAHUSQPEI','HHGGGAGAGODPF','PUS1383PW0292838','HHHB203828LALJK','FFAFUAFAGGAFAFOWVA','PWKDIAPDHZOA','QPWOEUDMZ','103838PW02XLAK','AWOAOAKSPAJDOA','bbbaoduwuslp','kawpajeif','1037pWjs0273BBNjK1','Or4nGB3g04N71nk','Hhhhhhhpwishahhhh','Paosjsh102','Vvvavahsi239hOwpP','PAH103891','RAPEHAL028473','0193910392','103892928','0293829293','02838292','WPPPJSUEUND','01387482923828','gqlI000iwhBYYj0239','DGAOOW','PWOEUDOAO','OSODODOEOEIE','OWRHWOKDIRE','BXKKWCOEDMJCIE','BBDGWOPDDMEO','148920392949202','WOEIOWEOO','19388292929383','MODARSIAHANJINK','BEBEOAODAPJ','LVOWOWIEPADH','AIMALIVETOGOW','JUSTSKOSAO','PW2039LSHDOW','BVOVOVOVUUDEUA307','027492838','01398293','TAPIUPITKAOE103982','019382939','02848292838','OWOWOWOJDJADJLA019','PE023802794949nbK','owjfLjsoKhIOauwo','JKlskeoKJJTRYOJc','IHUOFEtUKPJVD302','HJPgFTIBDTI','029292848','IgwoekdkdomsB','HJOKJYYUlns','INNSAPTAILOEAJD','TAIANJSGSIAOPA','0238829103','02838385842111','9372893739991','BACHEUADL','RC047','BRAINTLUBA0284','DDDDDDDSALDKOE1048','11020393910101010201047GbkL','BrADIopaSLyeYA','JSJDJAKDSKLLLLAPRO','PROGAMERYT123','47492837','923772','BACHELAOF','1038828282','VAKDPOESMAQ0079'])}
│• Total User : ${totalreg} nomor
╰────────────

Note :
*Kode ID jangan sampai lupa! Karna Diantara Kodenya adalah kode gift yang berhadiah! Jika Anda Beruntung!*
*Dan Jangan Lupa Nomor SN!*
`.trim()
var _0x159381=_0x1c85;function _0x2bc0(){var _0x2cc185=['5ZCyNCs','2320326cXAjvk','962213DnbvqZ','AdiOfficial','6658112zENtvS','556468DXlqBN','168449dJwLCA','9eJlSHO','6882650LxQmqp','chat','reply','status@broadcast','6UliCqJ','sender','10344048EVjhmf','8whyjfr','0@s.whatsapp.net'];_0x2bc0=function(){return _0x2cc185;};return _0x2bc0();}function _0x1c85(_0x402d4e,_0xded898){var _0x2bc073=_0x2bc0();return _0x1c85=function(_0x1c8567,_0x54d15b){_0x1c8567=_0x1c8567-0x98;var _0x39945c=_0x2bc073[_0x1c8567];return _0x39945c;},_0x1c85(_0x402d4e,_0xded898);}(function(_0xbd4baa,_0x448eb6){var _0x4f7c20=_0x1c85,_0x4cd3be=_0xbd4baa();while(!![]){try{var _0x30385a=parseInt(_0x4f7c20(0xa3))/0x1*(-parseInt(_0x4f7c20(0x9b))/0x2)+parseInt(_0x4f7c20(0x9e))/0x3+parseInt(_0x4f7c20(0xa2))/0x4*(-parseInt(_0x4f7c20(0x9d))/0x5)+parseInt(_0x4f7c20(0x98))/0x6*(-parseInt(_0x4f7c20(0x9f))/0x7)+-parseInt(_0x4f7c20(0xa1))/0x8+parseInt(_0x4f7c20(0xa4))/0x9*(parseInt(_0x4f7c20(0xa5))/0xa)+parseInt(_0x4f7c20(0x9a))/0xb;if(_0x30385a===_0x448eb6)break;else _0x4cd3be['push'](_0x4cd3be['shift']());}catch(_0x2f94f0){_0x4cd3be['push'](_0x4cd3be['shift']());}}}(_0x2bc0,0x973af),await conn[_0x159381(0xa7)](m[_0x159381(0xa6)],caption,{'key':{'participant':_0x159381(0x9c),'remoteJid':_0x159381(0xa8)},'message':{'orderMessage':{'itemCount':0x3e7,'status':0x3e7,'thumbnail':await(await fetch(pantek))['buffer'](),'surface':0x3e7,'message':'PENDAFTARAN\x20BERHASIL','orderTitle':_0x159381(0xa0),'sellerJid':'0@s.whatsapp.net'}}},{'contextInfo':{'mentionedJid':[m[_0x159381(0x99)]]}}));
}
handler.help = ['daftar <nama|umur>','register <nama|umur>']
handler.tags = ['daftar']
handler.command = /^daftar|register$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
