// Pesan ini akan muncul di console browser (Klik kanan -> Inspect -> Console)
// Ini adalah cara yang baik untuk memastikan file JavaScript Anda terhubung dengan benar.
console.log("Selamat Datang Di Portofolio Saya!");

// Anda bisa menambahkan fungsi-fungsi interaktif lainnya di sini di masa depan.
// Contoh: animasi saat scroll, validasi form kontak, dll.
document.addEventListener('DOMContentLoaded', () => {

    const player = cloudinary.player('player', {
  cloudName: 'dudhdwq9a',
  publicId: 'Tomat_lapet_t10hx1',
  profile: 'cld-default'
});
    // === BAGIAN PEMUTAR MUSIK ===
    const playlistData = [
        {
            title: "Alamak",
            artist: "Rizky Febian",
            src: "Alamak.mp3",
            album: "album.jpeg",
            lyrics: [
                { time: 11, text: "Ulah siapa yang bisa buat ku begini" },
                { time: 16, text: "Gila?, ini bahagia apa menderita?" },
                { time: 21, text: "Langit lagi bagus-bagusnya" },
                { time: 24, text: "Tapi bagiku biasa saja" },
                { time: 26, text: "Dia buatku terkesima" },
                { time: 30, text: "Menyapamu tak berani, menciummu apalagi" },
                { time: 35, text: "Mata, pundak, lutut kaki gemetar kuberdiri" },
                { time: 40, text: "Kalau sampai ku miliki" },
                { time: 43, text: "Tak mau ku tidur lagi" },
                { time: 46, text: "Alamat malah nanti kau pergi" },
                { time: 50, text: "Kalau ada, sembilan nyawa😋" },
                { time: 54, text: "Mau samamu saja semuanya🤪" },
                { time: 60, text: "Ini dada, isinya kamu semua" },
                { time: 68, text: "Alamak, inikah jatuh cinta?😍" },
                { time: 74, text: "Apa kamu sayang?" },
                { time: 76, text: "Apa khayalan, cubit aku sekarang" },
                { time: 80, text: "Buat mabuk kepayang, seketika pingsan mana nafas buatan" },
                { time: 84, text: "Can i see you for a minute?" },
                { time: 86, text: "Boleh aku visit" },
                { time: 87, text: "See your mom and dad aku pamit" },
                { time: 89, text: "Kalau memang naga-naganya kau berkenan" },
                { time: 92, text: "Ku berangkat sekarang" },
                { time: 95, text: "Menyapamu tak berani, menciummu apalagi" },
                { time: 100, text: "Mata, pundak, lutut kaki, gemetar ku berdiri" },
                { time: 105, text: "Kalau sampai ku miliki" },
                { time: 107, text: "Tak mau ku tidur lagi" },
                { time: 110, text: "Alamat malah nanti kau pergi" },
                { time: 114, text: "Kalau ada, sembilan nyawa" },
                { time: 119, text: "Mau samamu saja semuanya" },
                { time: 124, text: "Ini dada, isinya kamu semua" },
                { time: 133, text: "Alamak ini kah jatuh cinta?" },
                { time: 138, text: "Minimal kau bilang" },
                { time: 140, text: "Bila kau tak sayang" },
                { time: 143, text: "Biar ku tahan perasaan" },
                { time: 148, text: "Jadi berhenti kau menatap" },
                { time: 150, text: "Karena ku tak kuat, tak kuat berharap" },
                { time: 156, text: "Kalau ada, sembilan nyawa" },
                { time: 160, text: "Mau samamu saja semuanya" },
                { time: 195, text: "Ini dada, isinya kamu semua" },
                { time: 203, text: "Oh gawat ini ku jatuh cinta" },
                { time: 206, text: "Kalau ada sembilan nyawa" },
                { time: 214, text: "(Langit kalah mempesona tak mau yang lain-lainnya)" },
                { time: 216, text: "Ini dada isinya kamu semua" },
                { time: 222, text: "Alamak, inikah jatuh cinta?" },
                { time: 226, text: "Gila, naga-naganya ku telah jatuh cinta" },
                { time: 234, text: "Alamak, inikah jatuh cinta?" },
                { time: 238, text: "" },
                { time: 240, text: "" },
                { time: 244, text: "" },
                { time: 138, text: "" },
                { time: 140, text: "" },
                { time: 143, text: "" },
                { time: 148, text: "" },
                { time: 150, text: "" },
                { time: 156, text: "" },
                { time: 160, text: "" },
                { time: 195, text: "" },
                { time: 203, text: "" },
                { time: 206, text: "" },
                { time: 214, text: "" },
                { time: 216, text: "" },
                { time: 222, text: "" },
                { time: 226, text: "" },
                { time: 234, text: "" },
                { time: 238, text: "" },
                { time: 240, text: "" },
                { time: 244, text: "" }
            ]
        },
        {
            title:"Mejikuhibiniu",
            artist: "Tenxi Suisei & Jemsii",
            src: "mejikuhibiniu.mp3", // Ganti dengan nama file lagumu
            album: "mejikuhibiniu.jpg", // Ganti dengan gambar album
            lyrics: [
                { time: 5, text: "Mejikuhibiniu ku lihat kamu" },
                { time: 10, text: "Hidup penuh warna warni saat ku bersamamu" },
                { time: 11, text: "Satu untuk semua dan semua untuk satu" },
                { time: 16, text: "Kenapa ada dia di antara kau dan aku" },
                { time: 21, text: "Di antara kau dan a-" },
                { time: 24, text: "Di antara kau dan a-" },
                { time: 26, text: "Di antara kau dan aku" },
                { time: 30, text: "Di antara kau dan a-" },
                { time: 35, text: "Di antara kau dan a-" },
                { time: 40, text: "Cuma kamu tiada yang lain" },
                { time: 43, text: "Kubilang aku gak main main" },
                { time: 46, text: "Apa yang kau mau kuturutin" },
                { time: 50, text: "Sekarang kamu sama yang lain" },
                { time: 54, text: "Awalnya ku cuma cubain tapi ku ketagihan" },
                { time: 60, text: "Ku bilang amen sampai ke pelaminan" },
                { time: 68, text: "Tak akan bisa main" },
                { time: 74, text: "Semua mantan bajingan" },
                { time: 76, text: "Ulang lagi kucari yang lain" },
                { time: 80, text: "Tak sepantasnya" },
                { time: 133, text: "Bilang cinta kalo nggak bisa tahan" },
                { time: 138, text: "Putar fakta kau bilang aku yang salah" },
                { time: 140, text: "Yang tau semuanya ya cuma Tuhan" },
                { time: 143, text: "Apa masih kurang" },
                { time: 148, text: "Sungguh keterlaluan" },
                { time: 150, text: "Kukira takkan terulang" },
                { time: 156, text: "Saat ku nggak karuan" },
                { time: 160, text: "Ku tau kamu bersulang" },
                { time: 195, text: "Memang skarang semuanya telah hancur melebur" },
                { time: 203, text: "Tapi seenggaknya aku nggak pernah palsu" },
                { time: 206, text: "Kayak kamu kayak kamu kayak kamu" },
                { time: 214, text: "Cuma kamu cuma kamu cuma kamu" },
                { time: 216, text: "T'lah percuma ada dia di hatimu" },
                { time: 222, text: "Tapi untukku" },
                { time: 226, text: "Cuma kamu tiada yang lain" },
                { time: 234, text: "Kubilang aku gak main main" },
                { time: 238, text: "Apa yang kau mau kuturutin" },
                { time: 240, text: "Sekarang kamu sama yang lain" },
                { time: 244, text: "Awalnya ku cuma cubain" },
                { time: 234, text: "Tapi ku ketagihan" },
                { time: 238, text: "Ku bilang amen sampai ke pelaminan" },
                { time: 240, text: "Tak akan bisa main" },
                { time: 244, text: "Semua mantan bajingan" },
                { time: 234, text: "Ulang lagi kucari yang lain" },
                { time: 238, text: "Kucari yang lain" },
                { time: 240, text: "Kucari yang lain" },
                { time: 244, text: "Kucari yang lain" },
                { time: 234, text: "Kucari yang lain" },
                { time: 238, text: "Kucari yang lain" },
                { time: 240, text: "Kucari yang lain" }
            ]
        },
        {
            title: "Contoh Lagu 3",
            artist: "Artis Ketiga",
            src: "lagu3.mp3", // Ganti dengan nama file lagumu
            album: "album3.jpg", // Ganti dengan gambar album
            lyrics: [
                { time: 3, text: "Lagu ketiga dimulai" },
                { time: 8, text: "Dan ini baris berikutnya" }
            ]
        }
        // Tambahkan hingga 10 lagu atau lebih di sini
    ];

    const audio = document.getElementById('myAudio');
    const lyricsContainer = document.getElementById('lyrics-container');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');
    const rewindBtn = document.getElementById('rewindBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const albumArt = document.getElementById('albumArt');
    const songTitle = document.getElementById('songTitle');
    const songArtist = document.getElementById('songArtist');
    const playlistElement = document.getElementById('playlist');

    let currentSongIndex = 0;
    let currentLyrics = [];

    // Fungsi untuk memuat lagu
    function loadSong(songIndex) {
        const song = playlistData[songIndex];
        audio.src = song.src;
        albumArt.src = song.album;
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        currentLyrics = song.lyrics;
        
        // Membuat lirik
        lyricsContainer.innerHTML = '';
        currentLyrics.forEach(line => {
            const p = document.createElement('p');
            p.textContent = line.text;
            p.id = `line-${line.time}`;
            lyricsContainer.appendChild(p);
        });

        // Update highlight playlist
        const playlistItems = playlistElement.querySelectorAll('li');
        playlistItems.forEach((item, index) => {
            if (index === songIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    // Membuat daftar playlist di HTML
    function createPlaylist() {
        playlistData.forEach((song, index) => {
            const li = document.createElement('li');
            li.textContent = `${song.title} - ${song.artist}`;
            li.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                audio.play();
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'inline-block';
            });
            playlistElement.appendChild(li);
        });
    }

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    playBtn.addEventListener('click', () => {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    });

    pauseBtn.addEventListener('click', () => {
        audio.pause();
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    });
    
    audio.addEventListener('ended', () => {
        // Otomatis putar lagu selanjutnya
        nextSong();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSong();
    });

    prevBtn.addEventListener('click', () => {
        prevSong();
    });
    
    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlistData.length;
        loadSong(currentSongIndex);
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlistData.length) % playlistData.length;
        loadSong(currentSongIndex);
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    }

    audio.addEventListener('loadedmetadata', () => {
        progressBar.max = audio.duration;
        durationDisplay.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        
        progressBar.value = currentTime;
        currentTimeDisplay.textContent = formatTime(currentTime);

        const allLines = lyricsContainer.querySelectorAll('p');
        allLines.forEach(line => line.classList.remove('highlight'));
        
        let currentLine = null;
        for (let i = 0; i < currentLyrics.length; i++) {
            if (currentTime >= currentLyrics[i].time) {
                currentLine = currentLyrics[i];
            } else {
                break;
            }
        }
        
        if (currentLine) {
            const lineElement = document.getElementById(`line-${currentLine.time}`);
            if (lineElement) {
                lineElement.classList.add('highlight')
            }
        }
    });

    progressBar.addEventListener('input', () => {
        audio.currentTime = progressBar.value;
    });

    const seekTime = (amount) => {
        audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + amount));
    };

    rewindBtn.addEventListener('click', () => seekTime(-30));
    forwardBtn.addEventListener('click', () => seekTime(30));

    // Inisialisasi pemutar musik
    createPlaylist();
    loadSong(currentSongIndex);

    // === BAGIAN GALERI VIDEO ===
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            
            // Hapus kelas 'active' dari semua tombol dan panel
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Tambah kelas 'active' ke tombol yang diklik dan panel target
            btn.classList.add('active');
            document.querySelector(targetId).classList.add('active');
        });
    });

    // === BAGIAN FORMULIR FEEDBACK & RATING BINTANG ===
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            // Hapus kelas 'selected' dari semua bintang
            stars.forEach(s => s.classList.remove('selected'));
            // Tambahkan kelas 'selected' ke bintang yang diklik dan semua sebelumnya
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('selected');
            }
        });
    });
});
