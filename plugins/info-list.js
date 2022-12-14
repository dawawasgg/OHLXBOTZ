let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "ଘ 📊Test Speed", rowId: '.testspeed', description: '╰►Test Speed OHLX BOT' },
	    {title: "ଘ 📉Stats Server", rowId: '.statserver', description: '╰►Status server BOT' },
	    {title: "ଘ 💻Bot Info", rowId: '.botinfo', description: '╰►Info Server BOT' },
	{title: "ଘ 👤Nama Creator", rowId: '.nameown', description: '╰►Developer OHLX BOT' },
	{title: "ଘ 💰Donasi", rowId: '.donasi', description: '╰►Support OHLX Agar on 24 Jam' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "ଘ 📖Rules", rowId: '.rules', description: '╰►S&K OHLX BOT' },
	    {title: "ଘ ⛔No Menu", rowId: '', description: '╰►No menu' },
	    {title: "ଘ 📑Event", rowId: '.event', description: '╰►Event Dari Kami' },
	{title: "ଘ ⚡Speed", rowId: '.speed', description: '╰►Speed OHLX BOT' },
	{title: "ଘ 💵Sewa BOT", rowId: '.sewa', description: '╰►Sewa OHLX BOT' },
	{title: "ଘ 🗣️Request Fitur", rowId: '.request', description: '╰►Request Fitur OHLX BOT' },
	{title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi OHLX BOT' },
	{title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi OHLX BOT' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa OHLX BOT' },
	]
    },{
    title: `✃ INFO BOT`,
	rows: [
	    {title: "ଘ 🧰Version Bot", rowId: '.cekversi', description: '╰►Versi OHLX BOT' },
	    {title: "ଘ 🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi OHLX BOT' },
	{title: "ଘ 🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa OHLX BOT' },
	{title: "ଘ ⚡Speed Bot", rowId: '.speed', description: '╰►Speed OHLX BOT' },
	{title: "ଘ 🔧 Customer Service", rowId: '.complaint', description: '╰►Laporkan keluhan mu di sini...' },
	{title: "ଘ 📊Status Bot", rowId: '.botstats', description: '╰►Sistem OHLX BOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📮C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler