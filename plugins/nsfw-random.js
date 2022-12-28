import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, command, usedPrefix }) => {
if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.reply(m.chat, 'Nsfw Tidak Aktif Di Chat ini\n\nKetik .on nsfw untuk aktifkan', fkontak)

if (command == 'blowjob' ) {
let blow = JSON.parse(fs.readFileSync('./json/blowjob.json'))
let res = blow.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *H E N T A I*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'blowjob', m)}

if (command == 'ass' ) {
let ass = JSON.parse(fs.readFileSync('./json/ass.json'))
let res = ass.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *A S S*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'blowjob', m)}

if (command == 'yuri' ) { 
let yuri = JSON.parse(fs.readFileSync('./json/yuri.json'))
let res = yuri.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *Y U R I*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'yuri', m)}

if (command == 'bdsm' ) { 
let bdsm = JSON.parse(fs.readFileSync('./json/bdsm.json'))
let res = bdsm.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *B D S M*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'bdsm', m)}

if (command == 'cum' ) { 
let cum = JSON.parse(fs.readFileSync('./json/cum.json'))
let res = cum.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *C U M*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'cum', m)}

if (command == 'ero' ) { 
let ero = JSON.parse(fs.readFileSync('./json/ero.json'))
let res = ero.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *E R O*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'ero', m)}

if (command == 'foot' ) { 
let foot = JSON.parse(fs.readFileSync('./json/foot.json'))
let res = foot.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *F O O T*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'foot', m)}

if (command == 'glasses' ) { 
let glasses = JSON.parse(fs.readFileSync('./json/glasses.json'))
let res = glasses.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *G L A S S E S*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'glasses', m)}

if (command == 'jahy' ) { 
let jahy = JSON.parse(fs.readFileSync('./json/jahy.json'))
let res = jahy.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *J A H Y*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'jahy', m)}

if (command == 'orgy' ) { 
let orgy = JSON.parse(fs.readFileSync('./json/orgy.json'))
let res = orgy.getRandom()
conn.sendButtonImg(m.chat, res, '❏  *O R G Y*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'orgy', m)}
}
handler.command = handler.help = ['blowjob', 'ass', 'yuri', 'bdsm', 'cum', 'ero', 'foot', 'glasses', 'jahy', 'orgy']
handler.tags = ['nsfw']

export default handler