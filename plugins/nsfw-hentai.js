import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command }) => {
if (global.db.data.chats[m.chat].game == false && m.isGroup) return conn.reply(m.chat, 'Nsfw Tidak Aktif Di Chat Ini\n\nSilahkan Ketik .on nsfw\nUntuk Mengaktifkan Game ', fkontak)
let hentai = JSON.parse(fs.readFileSync('./json/hentai.json'))
let res =  hentai[Math.floor(Math.random() * hentai.length)]
conn.sendButtonImg(m.chat, res, '❏  *H E N T A I*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'hentai', m)
}
handler.help = ['hentai']
handler.tags = ['nsfw', 'premium']
handler.command = ['hentai']

handler.premium = true 

export default handler