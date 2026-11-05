// Nomor WhatsApp toko
const nomorWhatsApp = "6281287682125";

// Tombol lihat produk (jika tersedia)
const tombolProduk = document.getElementById("lihat-produk");

if (tombolProduk) {
  tombolProduk.addEventListener("click", function () {
    document.getElementById("produk").scrollIntoView({
      behavior: "smooth",
    });
  });
}

// Fungsi pembelian produk melalui WhatsApp
const tombolBeli = document.querySelectorAll(".beli-produk, .btn-beli");

tombolBeli.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    const produk = tombol.closest(".produk");

    const namaProduk =
      tombol.dataset.nama || produk.querySelector("h3").textContent;

    const hargaProduk =
      tombol.dataset.harga || produk.querySelector("p").textContent;

    const pesan = `Halo, saya ingin membeli ${namaProduk} dengan harga ${hargaProduk}. Apakah produknya masih tersedia?`;

    const linkWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(
      pesan
    )}`;

    window.open(linkWhatsApp, "_blank");
  });
});

// Navigasi menu
const menuNavigasi = document.querySelectorAll("nav a");

menuNavigasi.forEach(function (menu) {
  menu.addEventListener("click", function (event) {
    const tujuan = menu.getAttribute("href");

    if (tujuan.startsWith("#")) {
      const bagian = document.querySelector(tujuan);

      if (bagian) {
        event.preventDefault();

        bagian.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});
