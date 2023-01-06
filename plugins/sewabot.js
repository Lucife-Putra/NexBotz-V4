let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '1'
let sn = '2'
let ss = '2'
let sp = '3.5'
let sv = '5'
//premium
let ph = '1'
let pn = '1.5'
let pp = '2'
let pv = '3'
let ppm = '5'
//jasa run
let ri = '25'
let pk = '30'
let info = `
 ─┈ *sᴇᴡᴀ ʙᴏᴛ* ┈─
┊➯ *ʜᴇᴍᴀᴛ:* _${sh}k/grup (7 Hari)_
┊➯ *ɴᴏʀᴍᴀʟ:* _${sn}k/grup (1 bulan)_                                         
┊➯ *ᴘᴇʀᴍᴀɴᴇɴᴛ:* = _${sv}k/grup (unlimited)_


 ─┈ *ᴜᴘ ᴘʀᴇᴍɪᴜᴍ*  ┈─
┊➯ *ʜᴇᴍᴀᴛ:* _${ph}k (7 Hari)_
┊➯ *ɴᴏʀᴍᴀʟ:* _${pn}k (1 bulan)_                                       
┊➯ *ᴘᴇʀᴍᴀɴᴇɴᴛ:* = _${ppm}k (Unlimited)_

 ─┈  *ᴘᴇʀᴘᴀɴᴊᴀɴɢ sᴇᴡᴀ* ┈─
┊➯ *ʜᴇᴍᴀᴛ:* _3k (7 Hari)_
┊➯ *ɴᴏʀᴍᴀʟ:* _6k (1 bulan)_                                       

 ─┈  *ᴘᴇʀᴘᴀɴᴊᴀɴɢ ᴘʀᴇᴍɪᴜᴍ*  ┈─
┊➯ *ʜᴇᴍᴀᴛ:* _3k (7 Hari)_
┊➯ *ɴᴏʀᴍᴀʟ:* _6k (1 bulan)_                                       

 ─┈ *ᴊᴀsᴀ ʀᴜɴ* ┈─
┊➯ *ʜᴇᴍᴀᴛ:* _${ri}k (7 Hari)_
┊➯ *ɴᴏʀᴍᴀʟ:* _${pk}k (1 bulan)_                                       
                  
༅ _*FITUR BOT*

✧ *Virtex Menu✅*
✧ *Menu Keren✅*
✧ *Anti Link✅*
✧ *Button Menu✅*
✧ *Anti Sticker✅*
✧ *Anti Toxic↗️*
✧ *DLL*
✧ *MEMBELI BERATI SETUJU*

_Total Fitur:_ 570++

*⫹⫺ PAYMENT:*
• *Dana:*
• *Gopay:*
• *Ovo:*
• *QRIS*
• *ALL PAYMENT*
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* 1K • Sewa', description: 'PRICE: ' + sh + 'k (7 Hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* 2K • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 Permanen", rowId: '.order *Paket:* 5K • Sewa', description: 'PRICE: ' + sv + 'k (Permanen)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 1K • Premium', description: 'PRICE: ' + ph + 'k (7 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 2K • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* 3K • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    }, {
        title: `${htjava} JASA RUN ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 25K • Jasarun', description: 'PRICE: ' + ri + 'k (25 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 30K • Jasarun', description: 'PRICE: ' + pk + 'k (1 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
