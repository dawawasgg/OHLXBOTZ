let handler = async (m, { conn }) => {
let info = `
*${htki} ONLINE ${htka}*
          
   πBot Online Nih:v
`
const sections = [
   {
    title: `β INFO`,
	rows: [
    	    {title: "ποΈMenu", rowId: '.menu', description: 'Event π’πππ«-π π' },
	{title: "πmenu Bot", rowId: '.menu', description: 'menu Bot' },
	]
    }, {
    title: `β INFO`,
	rows: [
	    {title: "πΈSapa Bot", rowId: '.salken', description: 'Discount Pembayaran' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "π’πππ«-π ππ",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}

handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler