// info.js

// Fungsi untuk menampilkan detail berita
function showNewsDetail(title, date, image, content) {
    // Mengisi elemen dengan informasi berita
    document.getElementById('news-title').innerText = title;
    document.getElementById('news-date').innerText = date;
    document.getElementById('news-image').src = image;
    document.getElementById('news-content').innerHTML = content;

    // Menampilkan halaman detail berita dan menyembunyikan halaman lainnya
    document.getElementById('news-detail').classList.remove('hidden');
    document.getElementById('home').classList.add('hidden');
    document.getElementById('login').classList.add('hidden');
}

// Fungsi untuk kembali ke daftar berita
function backToNewsList() {
    // Menyembunyikan halaman detail berita dan menampilkan halaman utama
    document.getElementById('news-detail').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}

// Fungsi untuk menampilkan halaman yang dipilih
function showPage(page) {
    // Menyembunyikan semua halaman
    document.querySelectorAll('.page').forEach(function (element) {
        element.classList.add('hidden');
    });

    // Menampilkan halaman yang dipilih
    document.getElementById(page).classList.remove('hidden');
}

// Fungsi untuk mengaktifkan atau menonaktifkan mode gelap
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
