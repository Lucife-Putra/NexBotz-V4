let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.wm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 ɢʀᴜᴘ ʙᴏᴛ : https://chat.whatsapp.com/I47cTfEwzIC391KPBjbTPq
🍀 ɢɪᴛʜᴜʙ : YᴀɴɴPʀᴛᴍ
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['⋮☰ ᴍᴇɴᴜ','.menu']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
