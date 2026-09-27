/**
 * PAJO TECNOLOGIA — EZPOINT WEB & RWTECH
 * Script Oficial de Vídeos e Interatividade
 */

// BASE DE VÍDEOS OFICIAIS DO CANAL RWTECH (@rwtech_oficial)
const RWTECH_VIDEOS = [
  {
    id: "ezpoint-one-uso",
    youtubeId: "6jg6iRtrUA0",
    title: "Como usar o aplicativo EzPoint One para Registro de Ponto",
    category: "mobile",
    categoryName: "App Mobile",
    duration: "Tutorial Oficial",
    author: "RwTech Oficial",
    directUrl: "https://www.youtube.com/watch?v=6jg6iRtrUA0",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    description: "Tutorial prático demonstrando o passo a passo de como o colaborador realiza o registro de ponto pelo aplicativo móvel EzPoint One.",
    keyPoints: [
      "Login individual e seguro do colaborador por CPF e senha.",
      "Registro de ponto com validação biométrica e cerca geográfica (GPS).",
      "Consulta e acompanhamento das marcações em tempo real."
    ]
  },
  {
    id: "ezpoint-infinity-acesso",
    youtubeId: "qYtbYP6FjNU",
    title: "Como fazer o primeiro acesso ao aplicativo EzPoint Infinity",
    category: "mobile",
    categoryName: "App Mobile",
    duration: "Passo a Passo",
    author: "RwTech Oficial",
    directUrl: "https://www.youtube.com/watch?v=qYtbYP6FjNU",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    description: "Configuração inicial e primeiro acesso no aplicativo EzPoint Infinity para uso coletivo da empresa em tablets ou celulares.",
    keyPoints: [
      "Ativação do dispositivo corporativo para múltiplos colaboradores.",
      "Reconhecimento facial com teste de vivacidade antifraude.",
      "Modo online e offline inteligente."
    ]
  },
  {
    id: "blue-relogio-ponto",
    youtubeId: "XPaC7gzwsRo",
    title: "Blue: O relógio de ponto com comunicação direta com o EzPoint Web",
    category: "relogios",
    categoryName: "Relógios RWTECH",
    duration: "Apresentação Técnica",
    author: "RwTech Oficial",
    directUrl: "https://www.youtube.com/watch?v=XPaC7gzwsRo",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    description: "Conheça o relógio de ponto Blue da RwTech: sem necessidade de pendrives, com coleta automática de marcações via nuvem para o EzPoint Web.",
    keyPoints: [
      "Comunicação direta TCP/IP e nuvem com o EzPoint Web.",
      "Emissão de comprovante e biometria de alta velocidade.",
      "100% certificado pelo INMETRO e Ministério do Trabalho."
    ]
  },
  {
    id: "ezpoint-web-direto-ponto",
    youtubeId: "6jg6iRtrUA0",
    title: "EzPoint Web: Gestão de Jornada e Tratamento de Ponto em Nuvem",
    category: "iniciante",
    categoryName: "Primeiros Passos",
    duration: "Série Oficial",
    author: "RwTech Oficial",
    directUrl: "https://www.youtube.com/@rwtech_oficial/videos",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    description: "Visão geral das ferramentas do software EzPoint Web para o RH: cadastro de departamentos, funcionários e parâmetros da empresa.",
    keyPoints: [
      "Painel de controle unificado 100% em nuvem.",
      "Configuração de preferências e regras de ponto da empresa.",
      "Auditoria e controle total de jornada."
    ]
  },
  {
    id: "escalas-horarios-ezpoint",
    youtubeId: "6jg6iRtrUA0",
    title: "EzPoint Web: Cadastro de Escalas de Trabalho e Tolerâncias CLT",
    category: "iniciante",
    categoryName: "Primeiros Passos",
    duration: "Guia Prático",
    author: "RwTech Oficial",
    directUrl: "https://www.youtube.com/@rwtech_oficial/videos",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    description: "Como parametrizar escalas 12x36, 5x2, 6x1, ciclos de folga e a tolerância automática de 10 minutos conforme a CLT no EzPoint Web.",
    keyPoints: [
      "Criação de tabelas de horários fixos e flexíveis.",
      "Parametrização automática das regras sindicais.",
      "Vínculo de funcionários por setor em lote."
    ]
  },
  {
    id: "espelho-fechamento-folha",
    youtubeId: "6jg6iRtrUA0",
    title: "EzPoint Web: Análise do Espelho de Ponto e Fechamento Mensal",
    category: "relatorios",
    categoryName: "Espelho & Fechamento",
    duration: "Operação RH",
    author: "RwTech Oficial",
    directUrl: "https://www.youtube.com/@rwtech_oficial/videos",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    description: "Tratamento de marcações ímpares, inclusão de atestados médicos, cálculo de banco de horas e emissão do espelho para assinatura.",
    keyPoints: [
      "Conferência diária rápida de inconsistências e atrasos.",
      "Lançamento de justificativas e anexos médicos.",
      "Exportação para sistemas de folha de pagamento."
    ]
  },
  {
    id: "assinatura-celular-ponto",
    youtubeId: "6jg6iRtrUA0",
    title: "Assinatura Eletrônica de Espelho de Ponto pelo Celular",
    category: "relatorios",
    categoryName: "Espelho & Fechamento",
    duration: "Inovação",
    author: "RwTech Oficial",
    directUrl: "https://www.youtube.com/@rwtech_oficial/videos",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    description: "Elimine custos de papel com a assinatura digital do espelho de ponto direto na tela do smartphone pelo colaborador com validade jurídica.",
    keyPoints: [
      "Validade jurídica plena conforme a Portaria 671 MTE.",
      "Notificação para revisão e assinatura do colaborador.",
      "Armazenamento seguro em nuvem."
    ]
  },
  {
    id: "portaria-671-mte-guia",
    youtubeId: "6jg6iRtrUA0",
    title: "Portaria 671/2021 MTE: Regras de REP-P, REP-A e REP-C",
    category: "legislacao",
    categoryName: "Portaria 671 MTE",
    duration: "Legislação",
    author: "RwTech Oficial",
    directUrl: "https://www.youtube.com/@rwtech_oficial/videos",
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
    description: "Tudo o que o RH precisa saber sobre a Portaria 671: registradores homologados, exigência de AFD/AEJ e comprovação digital.",
    keyPoints: [
      "Classificação dos modelos REP-P, REP-A e REP-C.",
      "Geração dos arquivos fiscais AFD e AEJ.",
      "Proteção jurídica contra autuações do MTE."
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();

  const yearEl = document.getElementById("yearVal");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initTheme();
  initVideoHub();
  initMobileDrawer();
});

/* THEME */
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const saved = localStorage.getItem("pajo_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("pajo_theme", next);
      if (window.lucide) window.lucide.createIcons();
    });
  }
}

/* VIDEO HUB */
function initVideoHub() {
  const container = document.getElementById("videosContainer");
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");
  const tabs = document.querySelectorAll(".cat-tab");
  const countEl = document.getElementById("videoCountDisplay");

  let activeCat = "all";
  let query = "";

  function render() {
    if (!container) return;

    const filtered = RWTECH_VIDEOS.filter(v => {
      const matchCat = activeCat === "all" || v.category === activeCat;
      const matchQuery = query === "" ||
        v.title.toLowerCase().includes(query.toLowerCase()) ||
        v.description.toLowerCase().includes(query.toLowerCase()) ||
        v.categoryName.toLowerCase().includes(query.toLowerCase());

      return matchCat && matchQuery;
    });

    if (countEl) {
      countEl.innerHTML = `Exibindo <strong>${filtered.length}</strong> de ${RWTECH_VIDEOS.length} tutoriais da RwTech`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="v-empty">
          <p>Nenhum treinamento encontrado para "${query}".</p>
          <button class="btn btn-primary btn-sm" style="margin-top: 0.75rem;" onclick="resetSearch()">
            Ver Todos os Vídeos
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(v => {
      return `
        <div class="video-card-item">
          <div class="v-thumb-box" onclick="openVideoPlayer('${v.id}')">
            <img src="${v.thumbnail}" alt="${v.title}" class="v-thumb-img" loading="lazy">
            <div class="v-play-mask">
              <div class="v-play-icon">
                <i data-lucide="play"></i>
              </div>
            </div>
            <span class="v-dur">${v.duration}</span>
          </div>
          <div class="v-info">
            <span class="v-cat-tag">${v.categoryName}</span>
            <h3 class="v-title" onclick="openVideoPlayer('${v.id}')">${v.title}</h3>
            <p class="v-desc">${v.description}</p>
            <div class="v-foot">
              <span class="v-author"><i data-lucide="youtube"></i> ${v.author}</span>
              <button class="btn-play-card" onclick="openVideoPlayer('${v.id}')">
                <i data-lucide="play-circle"></i> Assistir
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) window.lucide.createIcons();
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCat = tab.getAttribute("data-cat");
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value.trim();
      if (clearBtn) {
        if (query.length > 0) clearBtn.classList.add("show");
        else clearBtn.classList.remove("show");
      }
      render();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      query = "";
      clearBtn.classList.remove("show");
      render();
      searchInput.focus();
    });
  }

  window.resetSearch = function() {
    activeCat = "all";
    query = "";
    if (searchInput) searchInput.value = "";
    if (clearBtn) clearBtn.classList.remove("show");
    tabs.forEach(t => {
      if (t.getAttribute("data-cat") === "all") t.classList.add("active");
      else t.classList.remove("active");
    });
    render();
  };

  render();
  initModal();
}

/* VIDEO MODAL PLAYER */
function initModal() {
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("modalClose");
  const iframe = document.getElementById("videoPlayerFrame");

  window.openVideoPlayer = function(id) {
    const video = RWTECH_VIDEOS.find(v => v.id === id);
    if (!video || !modal) return;

    document.getElementById("modalTag").textContent = video.categoryName;
    document.getElementById("modalTitle").textContent = video.title;
    document.getElementById("modalDesc").textContent = video.description;

    const bullets = document.getElementById("modalBullets");
    if (bullets && video.keyPoints) {
      bullets.innerHTML = `
        <strong>Tópicos abordados neste treinamento:</strong>
        ${video.keyPoints.map(p => `<div>&bull; ${p}</div>`).join("")}
      `;
    }

    const ytLink = document.getElementById("modalYtLink");
    if (ytLink) {
      ytLink.href = video.directUrl;
    }

    // Set real YouTube Embed
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    if (window.lucide) window.lucide.createIcons();
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    if (iframe) iframe.src = "";
    document.body.style.overflow = "auto";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/* MOBILE DRAWER */
function initMobileDrawer() {
  const toggle = document.getElementById("mobileToggle");
  const nav = document.getElementById("navLinks");
  const items = document.querySelectorAll(".nav-item");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    items.forEach(item => {
      item.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }
}

/* CONTACT FORM */
window.handleFormSubmit = function(e) {
  e.preventDefault();

  const name = document.getElementById("formName").value.trim();
  const company = document.getElementById("formCompany").value.trim();
  const phone = document.getElementById("formPhone").value.trim();
  const subject = document.getElementById("formSubject").value;

  const msg = `*Contato - PAJO Tecnologia & EZPoint Web (RWTECH)*%0A%0A` +
              `*Nome:* ${encodeURIComponent(name)}%0A` +
              `*Empresa:* ${encodeURIComponent(company)}%0A` +
              `*Telefone:* ${encodeURIComponent(phone)}%0A` +
              `*Interesse:* ${encodeURIComponent(subject)}`;

  window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank");
};
