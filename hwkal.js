// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/C23E042FC5XDJAMBmxaPDz'
global.ig = 'wajackoyah_jnr' // ubah aja
global.email = 'chrissowino737@gmail.com' //serah
global.region = 'Kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '♝# ᗯᗩᒍᗩᑕKOYᗩ#(♖)ꦿ⸼' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = 'https://' // Isi Domain Lu
global.apikey2 = 'ptla_wwBkBzmjlXpfglCEyEZF4UauZ0lGAnIwLhrIH2ABPX5' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_YpiQn2SYPqJx6hA5zBpaKkMBhZzX0tCehY6XQY6ngXN' // Isi Apikey Pltc Lu
global.eggsnya = '1' // id eggs yang dipakai
global.location = '1' // id location
//=================================================//
global.apitokendo = '-' // isi apimu
global.apilinode = '-' // isi apimu
//=================================================//
global.owner = ['254102510747','254111659469'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = '𒁂⃝ᰲ♝ᗯᗩᒍᗩᑕ(♖)𝚳𝚯𝐃𝚭༒' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'ᗯᗩᒍᗩᑕK(♖)⚸' // ubah aja ini nama sticker
global.author = '♝# ᗯᗩᒍᗩᑕKOYᗩ#(♖)ᴹᵒᵈᶻ ⛥' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.themeemoji = '🪀' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})