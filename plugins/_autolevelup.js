import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
    
        m.reply(`
        

        
├◆ *Name:* ${tag}
├◆ *Role:* ${user.role}
├◆ *Exp:* ${exp} xp
╰◆ *Level:* ${before} ➠ ${user.level}

*.cekrank -------[  𝗨𝗻𝘁𝘂𝗸 𝗠𝗲𝗻𝗴𝗲𝗰𝗲𝗸 𝗥𝗮𝗻𝗸 𝗔𝗻𝗱𝗮 ]
*.toprank -------[ 𝗨𝗻𝘁𝘂𝗸 𝗠𝗲𝗹𝗶𝗵𝗮𝘁 𝗣𝗲𝗿𝗶𝗻𝗴𝗸𝗮𝘁 𝗥𝗮𝗻𝗸 𝗧𝗲𝗿𝗮𝘁𝗮𝘀 ]
*.lb -------[ 𝗟𝗲𝗮𝗱𝗲𝗿𝗕𝗼𝗮𝗿𝗱 𝗨𝗻𝘁𝘂𝗸 𝗠𝗲𝗹𝗶𝗵𝗮𝘁 𝗣𝗮𝗽𝗮𝗻 𝗣𝗲𝗿𝗶𝗻𝗴𝗸𝗮𝘁 𝗥𝗮𝗻𝗸 ]

𝗙𝘂𝗻𝗴𝘀𝗶 𝗥𝗽𝗴 𝗔𝗱𝗮𝗹𝗮𝗵 𝗨𝗻𝘁𝘂𝗸 𝗠𝗲𝗻𝗮𝗶𝗸𝗸𝗮𝗻 𝗟𝗲𝘃𝗲𝗹, 𝗦𝗲𝗺𝗮𝗸𝗶𝗻 𝗦𝗲𝗿𝗶𝗻𝗴 𝗔𝗻𝗱𝗮 𝗕𝗲𝗿𝗺𝗮𝗶𝗻 𝗥𝗽𝗴 𝗦𝗲𝗺𝗮𝗸𝗶𝗻 𝗖𝗲𝗽𝗮𝘁 𝗔𝗻𝗱𝗮 𝗡𝗮𝗶𝗸 𝗥𝗮𝗻𝗸.trim())
    }
    
   /* let looh = `*${before}* -> *${user.level}*`
      conn.send3ButtonImg(m.chat, pp, `Cᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴ, Aɴᴅᴀ Tᴇʟᴀʜ Nᴀɪᴋ Lᴇᴠᴇʟ!!`, looh, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/_b4c00t4an_s3l3b',
    mediaType: 2, 
    description: sgc,
    title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
    body: wm,
    thumbnail: fs.readFileSync('./media/ok.jpg'),
    sourceUrl: sgc
   }}})*/
}
export const disabled = false