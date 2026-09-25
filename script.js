/**
 * PAJO TECNOLOGIA — EZPOINT WEB & RWTECH
 * Script de Vídeos Oficiais e Interatividade
 */

// BASE DE VÍDEOS OFICIAIS DO CANAL RWTECH (@rwtech_oficial)
const RWTECH_VIDEOS = [
  {
    id: "ezpoint-direto-ao-ponto",
    title: "EzPoint Web: Direto ao Ponto (Apresentação Completa)",
    category: "iniciante",
    categoryName: "Primeiros Passos",
    duration: "Série Oficial",
    author: "Canal Oficial RwTech",
    searchQuery: "rwtech ezpoint web direto ao ponto",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    description: "Série oficial 'Direto ao Ponto' apresentada pela equipe técnica da RwTech com um panorama completo das preferências da plataforma e navegação em nuvem.",
    keyPoints: [
      "Visão geral do sistema 100% em nuvem.",
      "Configurações iniciais e preferências do sistema.",
      "Conformidade e segurança de dados do RH."
    ]
  },
  {
    id: "liveness-facial",
    title: "Liveness: Registro de Ponto com Reconhecimento Facial e Prova de Vida",
    category: "mobile",
    categoryName: "App Mobile",
    duration: "Tutorial RwTech",
    author: "Canal Oficial RwTech",
    searchQuery: "rwtech liveness reconhecimento facial",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    description: "Demonstração da tecnologia Liveness e biometria facial nos aplicativos da RwTech para evitar fraudes em registros externos e home office.",
    keyPoints: [
      "Tecnologia antifraude com teste de prova de vida em tempo real.",
      "Validação com cerca geográfica (GPS) e raio de alcance.",
      "Aplicativo compatível com smartphones Android e iOS."
    ]
  },
  {
    id: "ezpoint-one-uso",
    title: "Como Utilizar o Aplicativo EzPoint One para Registro de Ponto",
    category: "mobile",
    categoryName: "App Mobile",
    duration: "Passo a Passo",
    author: "Canal Oficial RwTech",
    searchQuery: "rwtech how to use ezpoint one",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    description: "Guia prático para o colaborador: como fazer login, consultar marcações, justificar faltas e bater o ponto no EzPoint One.",
    keyPoints: [
      "Login seguro por CPF e senha individual.",
      "Comprovante digital emitido instantaneamente no app.",
      "Modo online e offline inteligente."
    ]
  },
  {
    id: "horarios-escalas",
    title: "EzPoint Web: Configuração Detalhada de Horários e Escalas",
    category: "iniciante",
    categoryName: "Primeiros Passos",
    duration: "Tutorial RwTech",
    author: "Canal Oficial RwTech",
    searchQuery: "rwtech detailed basic and advanced schedules ezpoint web",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    description: "Como cadastrar jornadas flexíveis, escalas 12x36, 5x2, 6x1, ciclos de folga e parametrizar as tolerâncias da CLT no EzPoint Web.",
    keyPoints: [
      "Criação de tabelas de horários básicos e avançados.",
      "Parametrização automática da tolerância da CLT.",
      "Atribuição em lote para equipes e setores."
    ]
  },
  {
    id: "espelho-analise",
    title: "EzPoint Web: Análise Avançada do Espelho de Ponto e Inconsistências",
    category: "relatorios",
    categoryName: "Espelho & Fechamento",
    duration: "Tutorial RwTech",
    author: "Canal Oficial RwTech",
    searchQuery: "rwtech ezpoint web analise avancada espelho de ponto",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    description: "Como o profissional de RH realiza a conferência diária, tratamento de batidas ímpares, inclusão de atestados e fechamento mensal do espelho.",
    keyPoints: [
      "Identificação rápida de faltas, atrasos e horas extras.",
      "Lançamento de abonos e anexos de atestados médicos.",
      "Fechamento do cartão de ponto com integridade."
    ]
  },
  {
    id: "assinatura-celular",
    title: "Assinatura Eletrônica de Registro de Ponto pelo Celular",
    category: "relatorios",
    categoryName: "Espelho & Fechamento",
    duration: "Novidade RwTech",
    author: "Canal Oficial RwTech",
    searchQuery: "rwtech assinatura de registro de ponto pelo celular",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    description: "Elimine o papel com a assinatura digital do espelho de ponto direto na tela do smartphone pelo colaborador com validade jurídica.",
    keyPoints: [
      "Conformidade total com as portarias do Ministério do Trabalho.",
      "Notificação para o funcionário revisar e assinar no final do mês.",
      "Armazenamento seguro em nuvem sem custos de impressão."
    ]
  },
  {
    id: "enviar-funcionario-relogio",
    title: "Como Enviar Funcionários para o Relógio de Ponto no EzPoint Web",
    category: "relogios",
    categoryName: "Relógios RWTECH",
    duration: "Operacional",
    author: "Canal Oficial RwTech",
    searchQuery: "rwtech como enviar um funcionario para o relogio ezpoint web",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    description: "Comunicação entre o software EzPoint Web e os relógios de ponto físicos da RwTech: envio de cadastros, biometrias e sincronização.",
    keyPoints: [
      "Envio automatizado de novos colaboradores para o REP.",
      "Coleta em tempo real das marcações de ponto.",
      "Diagnóstico e status online do equipamento na rede."
    ]
  },
  {
    id: "blue-web-server",
    title: "Como Utilizar o Servidor Web dos Equipamentos BLUE RwTech",
    category: "relogios",
    categoryName: "Relógios RWTECH",
    duration: "Guia Técnico",
    author: "Canal Oficial RwTech",
    searchQuery: "rwtech how to use the blue web server",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    description: "Configurações de rede, IP e conexão do servidor Web embarcado na linha de relógios de ponto biométricos Blue da RwTech.",
    keyPoints: [
      "Acesso ao painel de administração via IP no navegador.",
      "Parametrização de comunicação TCP/IP.",
      "Integração direta com o sistema EzPoint Web."
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();

  const yearEl = document.getElementById("yearVal");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initTheme();
  initClock();
  initPunchSimulator();
  initVideoHub();
  initRoiCalc();
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

/* CLOCK */
function initClock() {
  const clockDigits = document.getElementById("liveClock");
  const clockDate = document.getElementById("liveDate");

  function tick() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    if (clockDigits) clockDigits.textContent = `${h}:${m}:${s}`;
    if (clockDate) {
      const options = { weekday: "long", day: "numeric", month: "long" };
      const dateText = now.toLocaleDateString("pt-BR", options);
      clockDate.textContent = dateText.charAt(0).toUpperCase() + dateText.slice(1);
    }
  }
  tick();
  setInterval(tick, 1000);
}

/* PUNCH SIMULATOR */
function initPunchSimulator() {
  const btn = document.getElementById("btnTestPunch");
  const feedback = document.getElementById("punchFeedback");
  const feedbackTxt = document.getElementById("punchFeedbackTxt");
  const ptLastStep = document.getElementById("ptLastStep");
  const ptLastHour = document.getElementById("ptLastHour");

  if (btn) {
    btn.addEventListener("click", () => {
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

      if (ptLastStep) ptLastStep.className = "pt-item done";
      if (ptLastHour) ptLastHour.textContent = timeStr;

      if (feedback && feedbackTxt) {
        feedback.classList.add("show");
        feedbackTxt.textContent = `Ponto registrado às ${timeStr}h! GPS validado & Hash SHA-256 gerado.`;
        if (window.lucide) window.lucide.createIcons();

        btn.disabled = true;
        btn.innerHTML = `<i data-lucide="check"></i> Marcação Sincronizada no EZPoint Web`;
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = `<i data-lucide="map-pin"></i> Simular Nova Batida com Geolocalização`;
          if (window.lucide) window.lucide.createIcons();
        }, 6000);
      }
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
          <button class="btn btn-secondary btn-sm" style="margin-top: 0.75rem;" onclick="resetSearch()">
            Ver Todos os Vídeos
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(v => {
      const ytDirectUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(v.searchQuery)}`;
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
              <a href="${ytDirectUrl}" target="_blank" rel="noopener" class="v-link-yt" title="Abrir no YouTube">
                <i data-lucide="external-link"></i> YouTube
              </a>
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
        <strong>Tópicos principais abordados neste tutorial:</strong>
        ${video.keyPoints.map(p => `<div>&bull; ${p}</div>`).join("")}
      `;
    }

    const ytDirectUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(video.searchQuery)}`;
    const ytLink = document.getElementById("modalYtLink");
    if (ytLink) {
      ytLink.href = ytDirectUrl;
    }

    // Embed search video playlist on YouTube
    if (iframe) {
      // Use YouTube official channel videos embed or safe embed
      iframe.src = `https://www.youtube-nocookie.com/embed?listType=search&list=${encodeURIComponent(video.searchQuery)}`;
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

/* ROI CALCULATOR */
function initRoiCalc() {
  const slider = document.getElementById("calcSlider");
  const countEl = document.getElementById("calcEmpCount");
  const savedHoursEl = document.getElementById("calcSavedHours");

  if (!slider) return;

  function update() {
    const count = parseInt(slider.value, 10);
    if (countEl) countEl.textContent = `${count} funcionários`;

    const totalMinutes = count * 22;
    const hours = (totalMinutes / 60).toFixed(1);

    if (savedHoursEl) savedHoursEl.textContent = `${hours} Horas`;
  }

  slider.addEventListener("input", update);
  update();
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
  const employees = document.getElementById("formEmployees").value;
  const subject = document.getElementById("formSubject").value;

  const msg = `*Contato via Site - PAJO & EZPoint Web (RWTECH)*%0A%0A` +
              `*Nome:* ${encodeURIComponent(name)}%0A` +
              `*Empresa:* ${encodeURIComponent(company)}%0A` +
              `*Telefone:* ${encodeURIComponent(phone)}%0A` +
              `*Funcionários:* ${encodeURIComponent(employees)}%0A` +
              `*Interesse:* ${encodeURIComponent(subject)}`;

  window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank");
};
