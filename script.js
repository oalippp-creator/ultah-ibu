function bukaKejutan() {

    // Sembunyikan halaman depan
    document.getElementById("home").style.display = "none";

    // Tampilkan pesan
    const message = document.getElementById("message");

    message.classList.remove("hidden");

    // Tambahkan efek muncul
    setTimeout(function () {
        message.classList.add("show");
    }, 50);

    // Jalankan animasi hati
    buatHati();
}


// =========================
// ANIMASI HATI
// =========================

function buatHati() {

    for (let i = 0; i < 15; i++) {

        const hati = document.createElement("div");

        hati.classList.add("floating-heart");

        hati.innerHTML = "💗";

        hati.style.left = Math.random() * 100 + "vw";

        hati.style.animationDelay =
            Math.random() * 2 + "s";

        hati.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(hati);

        setTimeout(function () {
            hati.remove();
        }, 5000);
    }
}