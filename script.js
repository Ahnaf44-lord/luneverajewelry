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
