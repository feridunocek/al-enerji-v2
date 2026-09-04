/* ============================================================
   REFERANS FİRMALAR — TEK VERİ KAYNAĞI

   Yeni firma eklemek için aşağıdaki listeye bir satır ekle.
     name  : Hakkımızda sayfasındaki tam ad
     short : Ana sayfa kuşağında görünecek kısa ad (yoksa name kullanılır)
     featured: true  → ana sayfa kuşağında da görünür
               false → sadece Hakkımızda listesinde görünür

   Bu dosyayı güncellemek yeterli; TR ve EN sayfaların ikisi de
   otomatik olarak buradan beslenir.
   ============================================================ */
(function () {
  const COMPANIES = [
    { name: 'Admen Grup' },
    { name: 'AEG Genel Elektrik T.A.Ş.', short: 'AEG', featured: true },
    { name: 'Arı-Es Enerji' },
    { name: 'Ataseven Grup' },
    { name: 'ATR Grup' },
    { name: 'Aytemiz Elektrik', short: 'AYTEMİZ', featured: true },
    { name: 'Aytemiz Yatırım Bankası' },
    { name: 'Çaldere Elektrik' },
    { name: 'Egeres Enerji Danışmanlık' },
    { name: 'Ekinler Alternative Energy' },
    { name: 'Ençev' },
    { name: 'Enerjisa', short: 'ENERJİSA', featured: true },
    { name: 'Erna Şirketler Grubu' },
    { name: 'Interwind' },
    { name: 'Kontek Enerji', short: 'KONTEK ENERJİ', featured: true },
    { name: 'Maxxen Energy' },
    { name: 'Menderes Geothermal' },
    { name: 'Naturgy Engineering', short: 'NATURGY', featured: true },
    { name: 'Ortana Elektronik' },
    { name: 'Palmet Enerji', short: 'PALMET ENERJİ', featured: true },
    { name: 'Pars Enerji' },
    { name: 'PPM Kirlilik Önleme ve Yönetimi Ltd. Şti.' },
    { name: 'Pratikus Elektrik Danışmanlık Enerji Proje Mühendislik Ltd. Şti.' },
    { name: 'Proerk Mühendislik' },
    { name: 'Renener Güneş Enerjisi Teknolojileri' },
    { name: 'SMA Energy', short: 'SMA', featured: true },
    { name: 'Socoin Ingeniería y Construcción Industrial' },
    { name: 'South Pole', short: 'SOUTH POLE', featured: true },
    { name: 'Sungrow', short: 'SUNGROW', featured: true },
    { name: 'Şentürk Denizcilik' },
    { name: 'Tankes Akıllı Trafik Sistemleri' },
    { name: 'Tetico (Teknik Ticaret A.Ş.)' },
    { name: 'Topaç Elektrik' },
    { name: 'Tunçmatik Şarj', short: 'TUNÇMATİK', featured: true },
    { name: 'YMT Elektrik' }
  ];

  const escapeHTML = value => value.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);

  const marquee = document.querySelector('[data-reference-marquee]');
  if (marquee) {
    const featured = COMPANIES.filter(c => c.featured).map(c => c.short || c.name.toLocaleUpperCase('tr'));
    // Kesintisiz döngü için liste iki kez basılır.
    marquee.innerHTML = featured.concat(featured)
      .map(label => `<div class="marquee-item">${escapeHTML(label)}</div>`).join('');
  }

  const list = document.querySelector('[data-reference-list]');
  if (list) {
    const sorted = COMPANIES.slice().sort((a, b) => a.name.localeCompare(b.name, 'tr'));
    list.innerHTML = sorted.map(c => `<li class="reference-item">${escapeHTML(c.name)}</li>`).join('');
    const counter = document.querySelector('[data-reference-count]');
    if (counter) counter.textContent = sorted.length;
  }
})();
