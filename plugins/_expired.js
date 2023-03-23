export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, '𝗚𝗿𝗼𝘂𝗽 𝗧𝗲𝗹𝗮𝗵 𝗘𝘅𝗽𝗶𝗿𝗲𝗱, 𝗕𝗼𝘁 𝗔𝗸𝗮𝗻 𝗞𝗲𝗹𝘂𝗮𝗿 𝗗𝗮𝗿𝗶 𝗚𝗿𝗼𝘂𝗽.')
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}