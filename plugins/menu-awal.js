import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*ᴇɴɢʟɪsʜ*\n*ʙᴏᴛ* *ʙᴜɪʟᴅ-ᴏᴘᴇʀᴀᴛᴇ-ᴛʀᴀɴsғᴇʀ* *ɪꜱ ᴀ ᴄᴏᴍᴘᴜᴛᴇʀ ᴘʀᴏɢʀᴀᴍ ᴛʜᴀᴛ ʀᴜɴꜱ ᴏɴ ᴡʜᴀᴛꜱᴀᴘᴘ ᴀɴᴅ ɪꜱ ꜱᴘᴇᴄɪᴀʟʟʏ ᴍᴀᴅᴇ ᴛᴏ ᴅᴏ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ᴡᴏʀᴋ, ᴄʜᴀɴᴄᴇꜱ ᴀʀᴇ ᴛʜᴇ ʙᴏᴛ ꜱᴛɪʟʟ ʜᴀꜱ ʙᴜɢꜱ!*\n\n*ɪɴᴅᴏɴᴇsɪᴀ*\n *ʙᴏᴛ* ʙᴜɪʟᴅ-ᴏᴘᴇʀᴀᴛᴇ-ᴛʀᴀɴsғᴇʀ _ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ᴋᴏᴍᴘᴜᴛᴇʀ ʏᴀɴɢ ᴅɪᴊᴀʟᴀɴᴋᴀɴ ᴅɪ ᴡʜᴀᴛꜱᴀᴘᴘ ᴅᴀɴ ᴋʜᴜꜱᴜꜱ ᴅɪʙᴜᴀᴛ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇᴋᴇʀᴊᴀᴀɴ ᴏᴛᴏᴍᴀᴛɪꜱ,ᴋᴇᴍᴜɴɢᴋɪɴᴀɴ ʙᴏᴛ ᴍᴀꜱɪʜ ᴍᴇᴍɪʟɪᴋɪ ʙᴜɢ_\n`,wm + '\n\n' + botdate, giflogo, [['ᴀʟʟ ᴍᴇɴᴜ','.? all'],['ʟɪsᴛ ᴍᴇɴᴜ','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler