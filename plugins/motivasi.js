let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.motivasi)}`, m)
}
handler.help = ['motivasi']
handler.tags = ['quotes']
handler.command = /^(motivasi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.motivasi = [
"Jangan bicara, bertindak saja. Jangan katakan, tunjukkan saja. Jangan janji, buktikan saja.",
"Jangan pernah berhenti melakukan yang terbaik hanya karena seseorang tidak memberi Anda penghargaan.",
"Bekerja saat mereka tidur. Belajar saat mereka berpesta. Hemat sementara mereka menghabiskan. Hiduplah seperti mimpi mereka.",
"Kunci sukses adalah memusatkan pikiran sadar kita pada hal-hal yang kita inginkan, bukan hal-hal yang kita takuti.",
"Jangan takut gagal. Ketakutan berada di tempat yang sama tahun depan seperti Anda saat ini.",
"Jika kita terus melakukan apa yang kita lakukan, kita akan terus mendapatkan apa yang kita dapatkan.",
"Jika Anda tidak dapat mengatasi stres, Anda tidak akan mengelola kesuksesan.",
"Bersikap keras kepala tentang tujuan Anda dan fleksibel tentang metode Anda.",
"Kerja keras mengalahkan bakat ketika bakat tidak bekerja keras.",
"Ingatlah bahwa pelajaran terbesar dalam hidup biasanya dipelajari dari saat-saat terburuk dan dari kesalahan terburuk.",
"Hidup bukan tentang menunggu badai berlalu, tetapi belajar menari di tengah hujan.",
"Jika rencananya tidak berhasil, ubah rencananya bukan tujuannya.",
"Jangan takut kalau hidupmu akan berakhir; takutlah kalau hidupmu tak pernah dimulai.",
"Orang yang benar-benar hebat adalah orang yang membuat setiap orang merasa hebat.",
"Pengalaman adalah guru yang berat karena dia memberikan tes terlebih dahulu, kemudian pelajarannya.",
"Mengetahui seberapa banyak yang perlu diketahui adalah awal dari belajar untuk hidup.",
"Sukses bukanlah akhir, kegagalan tidak fatal. Yang terpenting adalah keberanian untuk melanjutkan.",
"Lebih baik gagal dalam orisinalitas daripada berhasil meniru.",
"Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu.",
"Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya.",
"Kembangkan kesuksesan dari kegagalan. Keputusasaan dan kegagalan adalah dua batu loncatan paling pasti menuju sukses.",
"Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat.",
"Sukses adalah tempat persiapan dan kesempatan bertemu.",
"Ketekunan gagal 19 kali dan berhasil pada kesempatam yang ke-20.",
"Jalan menuju sukses dan jalan menuju kegagalan hampir persis sama.",
"Sukses biasanya datang kepada mereka yang terlalu sibuk mencarinya.",
"Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini.",
"20 tahun dari sekarang, kau mungkin lebih kecewa dengan hal-hal yang tidak sempat kau lakukan alih-alih yang sudah.",
"Jangan habiskan waktumu memukuli tembok dan berharap bisa mengubahnya menjadi pintu.",
"Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya.",
"Hidup ini terdiri dari 10 persen apa yang terjadi padamu dan 90 persen bagaimana caramu menyikapinya.",
"Ada tiga cara untuk mencapai kesuksesan tertinggi: Cara pertama adalah bersikap baik. Cara kedua adalah bersikap baik. Cara ketiga adalah menjadi baik.",
"Alasan nomor satu orang gagal dalam hidup adalah karena mereka mendengarkan teman, keluarga, dan tetangga mereka.",
"Waktu lebih berharga daripada uang. Kamu bisa mendapatkan lebih banyak uang, tetapi kamu tidak bisa mendapatkan lebih banyak waktu.",
"Penetapan tujuan adalah rahasia masa depan yang menarik.",
"Saat kita berusaha untuk menjadi lebih baik dari kita, segala sesuatu di sekitar kita juga menjadi lebih baik.",
"Pertumbuhan dimulai ketika kita mulai menerima kelemahan kita sendiri.",
"Janganlah pernah menyerah ketika Anda masih mampu berusaha lagi. Tidak ada kata berakhir sampai Anda berhenti mencoba.",
"Kemauan adalah kunci sukses. Orang-orang sukses, berusaha keras apa pun yang mereka rasakan dengan menerapkan keinginan mereka untuk mengatasi sikap apatis, keraguan atau ketakutan.",
"Janganlah pernah menyerah ketika Anda masih mampu berusaha lagi. Tidak ada kata berakhir sampai Anda berhenti mencoba.",
"Kemauan adalah kunci sukses. Orang-orang sukses, berusaha keras apa pun yang mereka rasakan dengan menerapkan keinginan mereka untuk mengatasi sikap apatis, keraguan atau ketakutan.",
"Hal pertama yang dilakukan orang sukses adalah memandang kegagalan sebagai sinyal positif untuk sukses.",
"Ciri khas orang sukses adalah mereka selalu berusaha keras untuk mempelajari hal-hal baru.",
"Sukses adalah mendapatkan apa yang kamu inginkan, kebahagiaan menginginkan apa yang kamu dapatkan.",
"Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan.",
"Keraguan membunuh lebih banyak mimpi daripada kegagalan.",
"Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan.",
"Optimistis adalah salah satu kualitas yang lebih terkait dengan kesuksesan dan kebahagiaan daripada yang lain.",
"Penghargaan paling tinggi bagi seorang pekerja keras bukanlah apa yang dia peroleh dari pekerjaan itu, tapi seberapa berkembang ia dengan kerja kerasnya itu.",
"Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan.",
"Kegagalan tidak akan pernah menyusul jika tekad untuk sukses cukup kuat."
]