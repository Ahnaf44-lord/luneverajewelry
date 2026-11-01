const tombol = document.querySelectorAll(".filter button");
const produk = document.querySelectorAll(".produk");

tombol.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const pilihan = btn.dataset.kategori;

    // tandai tombol yang aktif
    tombol.forEach(function (b) {
      b.classList.remove("aktif");
    });
    btn.classList.add("aktif");

    // tampilkan atau sembunyikan produk
    produk.forEach(function (item) {
      if (pilihan === "semua" || item.dataset.kategori === pilihan) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
// ---------- Link WhatsApp otomatis ----------
const NOMOR_WA = "6285879902296";

document.querySelectorAll(".produk").forEach(function (item) {
  // lewati produk yang sudah terjual
  if (item.classList.contains("terjual")) return;

  const tombol = item.querySelector("a");
  const nama = item.querySelector("h2").textContent.trim();
  const kategori = item.dataset.kategori;

  let pesan = "Halo, saya mau pesan " + nama;

  // tambahan khusus cincin dan gelang
  if (kategori === "cincin") {
    pesan += ". Ukuran cincin saya: ";
  } else if (kategori === "gelang") {
    pesan += ". Ukuran pergelangan tangan saya: ";
  }

  tombol.href = "https://wa.me/" + NOMOR_WA + "?text=" + encodeURIComponent(pesan);
  tombol.target = "_blank";
  tombol.rel = "noopener";
});
