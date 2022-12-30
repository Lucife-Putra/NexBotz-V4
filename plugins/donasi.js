import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/a5eb5169ab1330a537e0b.jpg`
    return conn.sendButton(m.chat, 'ᴅᴏɴᴀᴛᴇ ғᴏʀ ʙᴏᴛ\nᴘᴍ ᴏᴡɴᴇʀ ᴋᴀᴋ ᴋᴀʟᴀᴜ ᴍᴀᴜ ᴅᴏɴᴀᴛᴇ\n\n➪ ᴅᴀɴᴀ : 082350496532\n➪ ᴏᴠᴏ : 082350496532\n➪ ɢᴏᴘᴀʏ : 082252285143\n➪ ǫʀɪs ✓\n« ʜᴀsɪʟ ᴅᴏɴᴀᴛᴇ ᴀᴋᴀɴ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ᴋᴇʙᴜᴛᴜʜᴀɴ ʙᴏᴛ sᴇᴘᴇʀᴛɪ ᴀᴘɪᴋᴇʏ ᴅᴀɴ ʀᴅᴘ ᴀɢᴀʀ ᴛᴇᴛᴀᴘ ᴏɴ 24 ᴊᴀᴍ »\nᴛǫ ғᴏʀ ᴅᴏɴᴀᴛᴇ...\nxʏʟᴏɪᴅ ʙᴏᴛ  :v', 'ᴛǫ ғᴏʀ ᴅᴏɴᴀᴛᴇ', img2, [["ᴍᴇɴᴜ", usedPrefix + "menu"], ["ᴏᴡɴᴇʀ", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/ryannzx_store",
                mediaType: "VIDEO",
                title: 'ᴅᴏɴᴀᴛᴇ ғᴏʀ ʙᴏᴛ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler
