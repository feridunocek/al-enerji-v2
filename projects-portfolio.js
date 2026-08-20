(function () {
  const root = document.getElementById('portfolioChapters');
  if (!root) return;

  const tr = root.dataset.lang !== 'en';
  const data = [
    {
      id: 'hes', code: '01', title: tr ? 'HES' : 'HEPP', subtitle: tr ? 'Hidroelektrik Enerji' : 'Hydroelectric Energy',
      stats: tr ? [['28','Proje referansı'],['478,79 MW','Toplam kapasite'],['4','Sorumluluk modeli']] : [['28','Project references'],['478.79 MW','Total capacity'],['4','Responsibility models']],
      description: tr ? 'Akarsu tipi santrallerden baraj ve regülatör projelerine uzanan; geliştirme, fizibilite ve danışmanlık deneyimi.' : 'Development, feasibility and advisory experience spanning run-of-river plants, dams and regulator projects.',
      roles: tr ? [['Fizibilite & danışmanlık',12],['Proje geliştirme & ortaklık',10],['Danışmanlık',6]] : [['Feasibility & advisory',12],['Development & partnership',10],['Advisory',6]],
      projects: [
        ['Duraliler HES','3,72 MW','Project Developer'],['Çürükiçi HES','3,76 MW','Project Developer'],['Tocak HES','2,00 MW','Project Developer'],['Gevne-Karapınar HES','5,26 MW','Project Developer'],['Eskiköy HES','2,63 MW','Project Developer'],['Bucakköy HES','4,50 MW','Feasibility Report & Consultancy'],['Çayaşan HES','17,27 MW','Feasibility Report & Consultancy'],['Gökdere HES','20,15 MW','Feasibility Report & Consultancy'],['Köroğlu Barajı','57,47 MW','Consultancy'],['Kayabeyi Barajı','82,50 MW','Consultancy'],['Derebaşı HES','10,65 MW','Project Developer & Co-owner'],['Yaylabaşı Regülatörleri ve HES','10,92 MW','Feasibility Report & Consultancy'],['Saman Regülatörü ve HES','37,48 MW','Feasibility Report & Consultancy'],['Balkodu-I HES','11,00 MW','Project Developer'],['Balkodu-II HES','4,11 MW','Project Developer'],['Altınal Regülatörü ve HES','19,18 MW','Feasibility Report & Consultancy'],['Kale Regülatörü ve HES','14,69 MW','Feasibility Report & Consultancy'],['Doğankaya Barajı','21,00 MW','Consultancy'],['Armuttepe Regülatörü ve HES','3,00 MW','Feasibility Report & Consultancy'],['Hasanlar HES','4,67 MW','Feasibility Report & Consultancy'],['Taraklı HES','5,40 MW','Feasibility Report & Consultancy'],['Ayvasıl Regülatörü ve HES','2,38 MW','Feasibility Report & Consultancy'],['Çiğdemli Regülatörü ve HES','4,30 MW','Feasibility Report & Consultancy'],['Uzunçayır Barajı ve HES','70,74 MW','Consultancy'],['Cindere Barajı ve HES','29,31 MW','Consultancy'],['Çıldır-II HES','8,70 MW','Consultancy'],['Irmak HES','7,00 MW','Project Developer & Co-owner'],['Balamir HES','15,00 MW','Project Developer & Co-owner']
      ]
    },
    {
      id: 'res', code: '02', title: tr ? 'RES' : 'WPP', subtitle: tr ? 'Rüzgâr Enerjisi' : 'Wind Energy',
      stats: tr ? [['8','Proje referansı'],['295,6 MW','İhale portföyü'],['74,2 MW','Kazanılan kapasite']] : [['8','Project references'],['295.6 MW','Tender portfolio'],['74.2 MW','Acquired capacity']],
      description: tr ? 'İhale stratejisinden proje geliştirmeye ve ortak yatırım modeline uzanan rüzgâr enerjisi portföyü.' : 'A wind energy portfolio extending from tender strategy to project development and co-investment.',
      roles: tr ? [['Proje geliştirme',6],['Geliştirme & ortaklık',2]] : [['Project development',6],['Development & co-ownership',2]],
      projects: [
        ['Alsancak RES','30 MW ihale · 1 MW kazanılan','Project Developer & Co-owner'],['Akyar RES','15 MW ihale · 15 MW kazanılan','Project Developer'],['Geriş RES','18 MW ihale · 11,2 MW kazanılan','Project Developer'],['Güneyli RES','32 MW ihale · 32 MW kazanılan','Project Developer'],['Havza RES','33,8 MW ihale · 15 MW kazanılan','Project Developer'],['Beyköy RES','72 MW ihale','Project Developer'],['Bigadiç RES','64,8 MW ihale','Project Developer'],['Ulu RES','30 MW ihale','Project Developer & Co-owner']
      ]
    },
    {
      id: 'ges', code: '03', title: tr ? 'GES' : 'SPP', subtitle: tr ? 'Güneş Enerjisi' : 'Solar Energy',
      stats: tr ? [['11','Proje referansı'],['221,04 MW','Toplam kapasite'],['5','Sorumluluk modeli']] : [['11','Project references'],['221.04 MW','Total capacity'],['5','Responsibility models']],
      description: tr ? 'Proje geliştirme, yatırım, EPC ve saha incelemesini aynı mühendislik disiplini altında birleştiren güneş portföyü.' : 'A solar portfolio bringing development, investment, EPC and field review under one engineering discipline.',
      roles: tr ? [['Fizibilite & saha incelemesi',5],['Geliştirme, yatırım & EPC',5],['EPC',1]] : [['Feasibility & site review',5],['Development, investment & EPC',5],['EPC',1]],
      projects: [
        ['Gediz GES','2,231 MW','Project Developer + Owner'],['Gönen GES','2,286 MW','Project Developer + Owner + Co-EPC'],['Derbent GES','3,198 MW','Project Developer + EPC'],['Karlık GES','1,089 MW','Project Developer + EPC'],['Ortaköy GES','1,089 MW','Project Developer + EPC'],['Eskişehir GES','1,145 MW','EPC'],['Antalya GES','30 MW','Feasibility Report & Site Review'],['Nevşehir GES','50 MW','Feasibility Report & Site Review'],['Niğde GES','50 MW','Feasibility Report & Site Review'],['Kayseri GES','30 MW','Feasibility Report & Site Review'],['Urfa GES','50 MW','Feasibility Report & Site Review']
      ]
    }
  ];

  const roleMap = tr ? {
    'Project Developer':'Proje Geliştirme','Project Developer & Co-owner':'Proje Geliştirme & Ortaklık','Feasibility Report & Consultancy':'Fizibilite & Danışmanlık','Consultancy':'Danışmanlık','Project Developer + Owner':'Proje Geliştirme & Yatırım','Project Developer + Owner + Co-EPC':'Proje Geliştirme, Yatırım & Co-EPC','Project Developer + EPC':'Proje Geliştirme & EPC','EPC':'EPC','Feasibility Report & Site Review':'Fizibilite & Saha İncelemesi'
  } : {};
  const localCapacity = value => tr ? value : value.replace(/(\d),(\d)/g, '$1.$2').replace(' ihale',' tender').replace(' kazanılan',' acquired');
  const localRole = value => roleMap[value] || value;
  const localName = value => tr ? value : value
    .replace('Regülatörleri ve HES','Regulators & HEPP').replace('Regülatörü ve HES','Regulator & HEPP')
    .replace('Barajı ve HES','Dam & HEPP').replace('Barajı','Dam')
    .replace(/ HES$/,' HEPP').replace(/ RES$/,' WPP').replace(/ GES$/,' SPP');

  root.innerHTML = data.map((group, groupIndex) => {
    const maxRole = Math.max(...group.roles.map(role => role[1]));
    return `<article class="portfolio-chapter${groupIndex ? ' is-collapsed' : ''}" id="${group.id}">
      <button class="chapter-head" type="button" aria-expanded="${groupIndex === 0}">
        <span class="chapter-code">${group.code}</span>
        <span class="chapter-title"><strong>${group.title}</strong><span>${group.subtitle}</span></span>
        <span class="chapter-stats">${group.stats.map(stat => `<span class="chapter-stat"><strong>${stat[0]}</strong><span>${stat[1]}</span></span>`).join('')}</span>
        <span class="chapter-toggle" aria-hidden="true">⌄</span>
      </button>
      <div class="chapter-content">
        <div class="chapter-summary"><p>${group.description}</p><div class="role-mix">${group.roles.map(role => `<div class="role-line"><div class="role-line-head"><span>${role[0]}</span><strong>${role[1]}</strong></div><div class="role-bar"><i style="width:${Math.round(role[1] / maxRole * 100)}%"></i></div></div>`).join('')}</div></div>
        <ol class="reference-index">${group.projects.map((project, index) => `<li class="reference-row"><span class="reference-no">${String(index + 1).padStart(2,'0')}</span><strong class="reference-name">${localName(project[0])}</strong><span class="reference-capacity">${localCapacity(project[1])}</span><span class="reference-role">${localRole(project[2])}</span></li>`).join('')}</ol>
      </div>
    </article>`;
  }).join('');

  root.querySelectorAll('.chapter-head').forEach(button => button.addEventListener('click', () => {
    const chapter = button.closest('.portfolio-chapter');
    chapter.classList.toggle('is-collapsed');
    button.setAttribute('aria-expanded', String(!chapter.classList.contains('is-collapsed')));
  }));

  document.querySelectorAll('.portfolio-gate').forEach(link => link.addEventListener('click', () => {
    const chapter = document.querySelector(link.getAttribute('href'));
    if (chapter) {
      chapter.classList.remove('is-collapsed');
      chapter.querySelector('.chapter-head').setAttribute('aria-expanded','true');
    }
  }));
})();
