import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['628994830639', 'MarV', true],
['62895602931564', 'Apta', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '628994830639'
global.packname = 'Made With'
global.author = '© Marpi Helper'
global.namebot = 'MarV - MD'
global.wm = '© Marpi'
global.stickpack = 'Made With'
global.stickauth = '© Marpi'
global.fotonya = 'https://telegra.ph/file/5cce8ae2b135f046975fe.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/callme.drn'
global.sgh = 'https://chat.whatsapp.com/ITYiXehAdLVA3Iff4iDUmv'
global.sgc = 'https://chat.whatsapp.com/ITYiXehAdLVA3Iff4iDUmv'
// Payment
global.dana = 'REQUEST QRIS ke Owner [.owner]'
global.gopay = '0899-4830-639'
global.ovo = '0899-4830-639'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'https://zeltoria.github.io/vn/eror.mp3'
global.multiplier = 69 
// Apikey
global.APIs = {
    anu : 'anu.tv'
}

/*Apikey*/
global.APIKeys = {
    "anu.tv": "anu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})