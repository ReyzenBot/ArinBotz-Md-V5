import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
  await conn.sendButton(m.chat, `*Results From Random Anime*`, wm, cita, [[`𝗡𝗘𝗫𝗧`, `${usedPrefix}${command}`]], m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
handler.tags = ['anime']
handler.help = ['randomanime']
handler.command = /^(randomanime|animerandom)$/i
handler.register = true
handler.limit = 1

export default handler