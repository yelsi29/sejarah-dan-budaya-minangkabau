// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Navigasi ke: ${link.textContent}`);
    });
  });
});

// Fungsi untuk menampilkan deskripsi desa
function tampilDesa(nama) {
  const detail = document.getElementById("desa-detail");
  let konten = "";

  switch (nama) {
    case "pariang":
      konten = `<h3>Desa Pariangan</h3><p>Desa ini dikenal sebagai desa tertua di Minangkabau. Terletak di kaki Gunung Marapi, memiliki rumah gadang tradisional dan suasana yang asri.</p>`;
      break;
    case "sumpur":
      konten = `<h3>Desa Sumpur Kudus</h3><p>Desa ini terkenal dengan adat istiadat yang masih terjaga, serta menjadi salah satu pusat penyebaran Islam zaman dahulu.</p>`;
      break;
    case "koto_gadang":
      konten = `<h3>Desa Koto Gadang</h3><p>Desa yang dikenal dengan kerajinan peraknya dan pernah menjadi tempat lahir tokoh-tokoh penting Minangkabau.</p>`;
      break;
    case "balimbing":
      konten = `<h3>Desa Balimbing</h3><p>Desa ini dikenal dengan keindahan alamnya dan rumah-rumah adat yang masih terpelihara.</p>`;
      break;
    case "silokek":
      konten = `<h3>Desa Silokek</h3><p>Memiliki pemandangan karst, sungai jernih, dan tempat wisata alam yang eksotis.</p>`;
      break;
    case "surian":
      konten = `<h3>Desa Surian</h3><p>Terletak di Solok, desa ini menawarkan udara sejuk, panorama pegunungan dan kehidupan masyarakat agraris.</p>`;
      break;
    case "sumpur_tinggi":
      konten = `<h3>Desa Sumpur Tinggi</h3><p>Desa ini memiliki sejarah perjuangan yang kuat dan terkenal dengan budaya gotong royongnya.</p>`;
      break;
    default:
      konten = "<p>Informasi desa tidak ditemukan.</p>";
  }

  detail.innerHTML = konten;
}
