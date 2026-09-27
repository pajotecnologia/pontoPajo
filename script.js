/**
 * PAJO TECNOLOGIA — EZPOINT WEB & RWTECH
 * Script Oficial de Treinamentos, Sincronização Dinâmica com o YouTube e Interatividade
 */

const PLAYLIST_ID = "PLVRRzSJdt2auVSiXtSTKkhodyjZAJZnKY";
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;

// BASE OFICIAL DE VÍDEOS DA SÉRIE "EZPOINT WEB: DIRETO AO PONTO" (RWTECH)
const DEFAULT_VIDEOS = [
  {
    id: "CBVuQZ39h5Q",
    youtubeId: "CBVuQZ39h5Q",
    title: "EzPoint Web: Direto ao ponto - Preferências da Plataforma",
    category: "configuracao",
    categoryName: "Configurações & Parâmetros",
    duration: "Aula 15",
    author: "RwTech Oficial",
    published: "2025-08-19",
    directUrl: `https://www.youtube.com/watch?v=CBVuQZ39h5Q&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/CBVuQZ39h5Q/hqdefault.jpg",
    description: "Configurações essenciais de preferências do sistema EzPoint Web para adequar a plataforma às regras e rotinas da sua empresa.",
    keyPoints: [
      "Ajuste de preferências globais e operacionais do sistema.",
      "Definição de regras de tolerância, notificações e permissões.",
      "Personalização do comportamento da plataforma de ponto."
    ]
  },
  {
    id: "hwWQr4vnmOs",
    youtubeId: "hwWQr4vnmOs",
    title: "EzPoint Web: Direto ao ponto - Utilitários na Plataforma EzpointWeb",
    category: "configuracao",
    categoryName: "Configurações & Parâmetros",
    duration: "Aula 14",
    author: "RwTech Oficial",
    published: "2025-08-12",
    directUrl: `https://www.youtube.com/watch?v=hwWQr4vnmOs&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/hwWQr4vnmOs/hqdefault.jpg",
    description: "Aprenda a utilizar os recursos e utilitários da plataforma para otimizar rotinas administrativas e manutenção preventiva de dados.",
    keyPoints: [
      "Ferramentas práticas e atalhos úteis do painel EzPoint Web.",
      "Manutenção e verificação de integridade de dados de ponto.",
      "Agilização de processos cotidianos e rotinas do RH."
    ]
  },
  {
    id: "UnQdHV7eg6E",
    youtubeId: "UnQdHV7eg6E",
    title: "EzPoint Web: Direto ao ponto - Funções Secundárias do Cadastro no Sistema",
    category: "configuracao",
    categoryName: "Configurações & Parâmetros",
    duration: "Aula 13",
    author: "RwTech Oficial",
    published: "2025-07-29",
    directUrl: `https://www.youtube.com/watch?v=UnQdHV7eg6E&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/UnQdHV7eg6E/hqdefault.jpg",
    description: "Detalhes avançados no cadastro de colaboradores: cargos, centros de custo, dados complementares e parâmetros específicos.",
    keyPoints: [
      "Estruturação hierárquica, cargos e centros de custos.",
      "Campos complementares e documentação individual.",
      "Vinculação de funcionários a regras e tabelas de horários."
    ]
  },
  {
    id: "AeflJ-m5av4",
    youtubeId: "AeflJ-m5av4",
    title: "EzPoint Web: Direto ao ponto - Webserver do Relógio Blue",
    category: "relogios_hardware",
    categoryName: "Relógios & Hardware",
    duration: "Aula 12",
    author: "RwTech Oficial",
    published: "2025-07-22",
    directUrl: `https://www.youtube.com/watch?v=AeflJ-m5av4&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/AeflJ-m5av4/hqdefault.jpg",
    description: "Acesso e configuração do webserver interno do relógio de ponto Blue da RwTech para comunicação direta e em nuvem com o EzPoint Web.",
    keyPoints: [
      "Acesso à interface web interna do equipamento Blue da RwTech.",
      "Configuração de rede TCP/IP e comunicação em nuvem sem pendrive.",
      "Diagnóstico de status, coleta em tempo real e sincronização."
    ]
  },
  {
    id: "1z9gH5z4ZIM",
    youtubeId: "1z9gH5z4ZIM",
    title: "EzPoint Web: Direto ao ponto - Funções Secundárias da Plataforma",
    category: "configuracao",
    categoryName: "Configurações & Parâmetros",
    duration: "Aula 11",
    author: "RwTech Oficial",
    published: "2025-07-15",
    directUrl: `https://www.youtube.com/watch?v=1z9gH5z4ZIM&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/1z9gH5z4ZIM/hqdefault.jpg",
    description: "Exploração de ferramentas auxiliares, configurações de segurança e recursos que facilitam o dia a dia do operador de ponto.",
    keyPoints: [
      "Recursos extras do painel EzPoint Web para produtividade.",
      "Otimização de filtros, visualização e exportações rápidas.",
      "Controles adicionais de segurança da informação."
    ]
  },
  {
    id: "5BtErS0HWVE",
    youtubeId: "5BtErS0HWVE",
    title: "EzPoint Web: Direto ao ponto - Maneiras de Liberar o Funcionário Bater Ponto",
    category: "mobile_bater_ponto",
    categoryName: "Ponto Mobile & Liberações",
    duration: "Aula 10",
    author: "RwTech Oficial",
    published: "2025-07-08",
    directUrl: `https://www.youtube.com/watch?v=5BtErS0HWVE&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/5BtErS0HWVE/hqdefault.jpg",
    description: "Conheça todas as formas e modelos de liberação para marcação de ponto: aplicativo móvel, biometria facial, senha ou relógio físico.",
    keyPoints: [
      "Liberação por aplicativo individual ou corporativo em tablet/celular.",
      "Controle por cerca geográfica (GPS) e biometria facial com liveness.",
      "Definição flexível de regras por perfil, departamento ou filial."
    ]
  },
  {
    id: "H5eqwtvPaXU",
    youtubeId: "H5eqwtvPaXU",
    title: "EzPoint Web: Direto ao ponto - Funcionalidades do Aplicativo Mobile",
    category: "mobile_bater_ponto",
    categoryName: "Ponto Mobile & Liberações",
    duration: "Aula 09",
    author: "RwTech Oficial",
    published: "2025-07-01",
    directUrl: `https://www.youtube.com/watch?v=H5eqwtvPaXU&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/H5eqwtvPaXU/hqdefault.jpg",
    description: "Tour completo pelas funcionalidades do aplicativo de ponto mobile: registro, consulta de extrato, solicitação de ajustes e atestados.",
    keyPoints: [
      "Interface moderna e intuitiva para os colaboradores.",
      "Comprovante digital emitido instantaneamente após a marcação.",
      "Envio de justificativas de atrasos e atestados com foto pelo app."
    ]
  },
  {
    id: "LvjRaqgXuHg",
    youtubeId: "LvjRaqgXuHg",
    title: "EzPoint Web: Direto ao ponto - Processo de Fechamento no EzPointWeb",
    category: "fechamento_relatorios",
    categoryName: "Fechamento & Relatórios",
    duration: "Aula 08",
    author: "RwTech Oficial",
    published: "2025-06-24",
    directUrl: `https://www.youtube.com/watch?v=LvjRaqgXuHg&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/LvjRaqgXuHg/hqdefault.jpg",
    description: "Passo a passo seguro para o fechamento mensal da folha de ponto: conferência, cálculo de banco de horas, tratamentos e bloqueio de período.",
    keyPoints: [
      "Tratamento final de marcações faltantes ou ímpares.",
      "Apuração consolidada de horas normais, extras, faltas e DSR.",
      "Trava de segurança do período e exportação direta para a folha."
    ]
  },
  {
    id: "6NVZ7FXI4Ag",
    youtubeId: "6NVZ7FXI4Ag",
    title: "EzPoint Web: Direto ao ponto - Configurações Gerais de Preferências",
    category: "configuracao",
    categoryName: "Configurações & Parâmetros",
    duration: "Aula 07",
    author: "RwTech Oficial",
    published: "2025-06-17",
    directUrl: `https://www.youtube.com/watch?v=6NVZ7FXI4Ag&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/6NVZ7FXI4Ag/hqdefault.jpg",
    description: "Guia detalhado de parametrização das preferências da empresa no sistema para total conformidade com a CLT e acordos sindicais.",
    keyPoints: [
      "Definição de tolerâncias da CLT (10 minutos diários).",
      "Configuração de jornadas padrões e percentuais de adicionais.",
      "Prazos limites para solicitações de ajuste pelos funcionários."
    ]
  },
  {
    id: "D95CKGKNDaU",
    youtubeId: "D95CKGKNDaU",
    title: "EzPoint Web: Direto ao ponto - Gestão de Horários e Regras",
    category: "regras_horarios",
    categoryName: "Horários & Banco de Horas",
    duration: "Aula 06",
    author: "RwTech Oficial",
    published: "2025-06-10",
    directUrl: `https://www.youtube.com/watch?v=D95CKGKNDaU&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/D95CKGKNDaU/hqdefault.jpg",
    description: "Como criar e aplicar tabelas de horários fixos, flexíveis, escalas 12x36, 6x1 e associar regras sindicais aos colaboradores.",
    keyPoints: [
      "Criação de grades de horários fixos, flexíveis e escalas de revezamento.",
      "Parametrização automática de intervalos intra e interjornada.",
      "Atribuição de horários em lote por departamento ou função."
    ]
  },
  {
    id: "k-sHyC_-7vA",
    youtubeId: "k-sHyC_-7vA",
    title: "EzPoint Web: Direto ao ponto - Banco de Horas e Horas Extras",
    category: "regras_horarios",
    categoryName: "Horários & Banco de Horas",
    duration: "Aula 05",
    author: "RwTech Oficial",
    published: "2025-06-03",
    directUrl: `https://www.youtube.com/watch?v=k-sHyC_-7vA&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/k-sHyC_-7vA/hqdefault.jpg",
    description: "Configuração de porcentagens de horas extras (50%, 100%), regras de compensação de banco de horas e limites máximos diários.",
    keyPoints: [
      "Cálculo automático de banco de horas positivo e negativo.",
      "Configuração de tabelas de horas extras para dias úteis, folgas e feriados.",
      "Geração de extratos de compensação claros para os colaboradores."
    ]
  },
  {
    id: "BJbW_1SgEck",
    youtubeId: "BJbW_1SgEck",
    title: "EzPoint Web: Direto ao ponto - Relatórios Mais Usados no EzPoint Web",
    category: "fechamento_relatorios",
    categoryName: "Fechamento & Relatórios",
    duration: "Aula 04",
    author: "RwTech Oficial",
    published: "2025-05-27",
    directUrl: `https://www.youtube.com/watch?v=BJbW_1SgEck&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/BJbW_1SgEck/hqdefault.jpg",
    description: "Aprenda a gerar os principais relatórios: espelho de ponto, resumo de ocorrências, absenteísmo, banco de horas e arquivos fiscais AFD/AEJ.",
    keyPoints: [
      "Emissão do espelho de ponto individual ou consolidado por empresa.",
      "Relatórios de ocorrências, atrasos, faltas e absenteísmo.",
      "Exportação em PDF, planilhas Excel e arquivos fiscais da Portaria 671."
    ]
  },
  {
    id: "0kABlbuNR6I",
    youtubeId: "0kABlbuNR6I",
    title: "EzPoint Web: Direto ao ponto - Criação de Usuários Administradores",
    category: "configuracao",
    categoryName: "Configurações & Parâmetros",
    duration: "Aula 03",
    author: "RwTech Oficial",
    published: "2025-05-20",
    directUrl: `https://www.youtube.com/watch?v=0kABlbuNR6I&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/0kABlbuNR6I/hqdefault.jpg",
    description: "Como cadastrar novos gestores, supervisores e operadores no sistema definindo permissões específicas por setor ou filial.",
    keyPoints: [
      "Criação de perfis de acesso com permissões granulares.",
      "Acesso restrito para gestores visualizarem apenas sua equipe.",
      "Trilha de auditoria com histórico de todas as alterações feitas."
    ]
  },
  {
    id: "YwjnHrvAQIo",
    youtubeId: "YwjnHrvAQIo",
    title: "EzPoint Web: Direto ao ponto - Parametrização: Configure Seu Sistema de Ponto",
    category: "configuracao",
    categoryName: "Configurações & Parâmetros",
    duration: "Aula 02",
    author: "RwTech Oficial",
    published: "2025-05-13",
    directUrl: `https://www.youtube.com/watch?v=YwjnHrvAQIo&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/YwjnHrvAQIo/hqdefault.jpg",
    description: "Primeiros passos fundamentais na implantação do EzPoint Web: dados da empresa, estrutura organizacional e regras fundamentais.",
    keyPoints: [
      "Cadastro dos dados cadastrais da empresa e filiais (CNPJ).",
      "Definição da estrutura de departamentos e centros de custo.",
      "Boas práticas para início imediato e sem erros operacionais."
    ]
  },
  {
    id: "JYYoAlbLQkg",
    youtubeId: "JYYoAlbLQkg",
    title: "EzPoint Web: Direto ao ponto - Cálculos Noturnos do Espelho de Ponto",
    category: "regras_horarios",
    categoryName: "Horários & Banco de Horas",
    duration: "Aula 01",
    author: "RwTech Oficial",
    published: "2025-05-06",
    directUrl: `https://www.youtube.com/watch?v=JYYoAlbLQkg&list=${PLAYLIST_ID}`,
    thumbnail: "https://img.youtube.com/vi/JYYoAlbLQkg/hqdefault.jpg",
    description: "Como o sistema calcula automaticamente a hora noturna reduzida (52m30s), adicional noturno e prorrogação da jornada noturna.",
    keyPoints: [
      "Cálculo automático da hora noturna reduzida de 52min30s.",
      "Adicional noturno urbano e prorrogação após as 05h da manhã.",
      "Demonstração visual do cálculo direto no espelho de ponto."
    ]
  }
];

// LISTA ATUAL DE VÍDEOS EM MEMÓRIA (CARREGADA DO CACHE OU PADRÃO)
let currentVideos = loadCachedVideos();

function loadCachedVideos() {
  try {
    const cached = localStorage.getItem("pajo_rwtech_playlist_cache_v2");
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Erro ao carregar cache de vídeos:", e);
  }
  return [...DEFAULT_VIDEOS];
}

function saveCachedVideos(videos) {
  try {
    localStorage.setItem("pajo_rwtech_playlist_cache_v2", JSON.stringify(videos));
    localStorage.setItem("pajo_playlist_last_sync", new Date().toISOString());
  } catch (e) {
    console.warn("Erro ao salvar cache de vídeos:", e);
  }
}

// INICIALIZAÇÃO DA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();

  const yearEl = document.getElementById("yearVal");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initTheme();
  initVideoHub();
  initMobileDrawer();

  // Sincronização automática em segundo plano com o feed da Playlist do YouTube
  setTimeout(() => {
    syncYouTubePlaylist(false);
  }, 1200);
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

/* HELPER PARA CATEGORIZAR AUTOMATICAMENTE VÍDEOS NOVOS */
function autoCategorizeVideo(title, desc) {
  const text = `${title} ${desc}`.toLowerCase();

  if (text.includes("relógio") || text.includes("relogio") || text.includes("blue") || text.includes("hardware") || text.includes("webserver") || text.includes("rep")) {
    return { category: "relogios_hardware", categoryName: "Relógios & Hardware" };
  }
  if (text.includes("aplicativo") || text.includes("app") || text.includes("mobile") || text.includes("bater o ponto") || text.includes("facial") || text.includes("bater ponto")) {
    return { category: "mobile_bater_ponto", categoryName: "Ponto Mobile & Liberações" };
  }
  if (text.includes("fechamento") || text.includes("relatório") || text.includes("relatorio") || text.includes("espelho") || text.includes("folha")) {
    return { category: "fechamento_relatorios", categoryName: "Fechamento & Relatórios" };
  }
  if (text.includes("banco de horas") || text.includes("hora extra") || text.includes("noturno") || text.includes("escala") || text.includes("horário") || text.includes("horario")) {
    return { category: "regras_horarios", categoryName: "Horários & Banco de Horas" };
  }
  return { category: "configuracao", categoryName: "Configurações & Parâmetros" };
}

/* SINCRONIZAÇÃO EM TEMPO REAL COM A PLAYLIST DO YOUTUBE */
async function syncYouTubePlaylist(isManual = false) {
  const syncBtn = document.getElementById("syncPlaylistBtn");
  const syncStatus = document.getElementById("syncStatusText");
  const syncIcon = document.getElementById("syncIcon");

  if (syncIcon) syncIcon.classList.add("spinning");
  if (syncStatus) syncStatus.textContent = "Sincronizando com o YouTube...";

  const feedRssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;
  let fetchedItems = [];

  // Método 1: API rss2json (CORS safe, rápido e estruturado)
  try {
    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedRssUrl)}`;
    const res = await fetch(rss2jsonUrl, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.status === "ok" && Array.isArray(data.items) && data.items.length > 0) {
        fetchedItems = data.items.map(item => {
          // Extrair ID do YouTube do link (ex: https://www.youtube.com/watch?v=CBVuQZ39h5Q)
          let vidId = "";
          if (item.link) {
            const match = item.link.match(/[?&]v=([^&#]+)/);
            if (match) vidId = match[1];
          }
          if (!vidId && item.guid) {
            const parts = item.guid.split(":");
            vidId = parts[parts.length - 1];
          }
          return {
            id: vidId,
            youtubeId: vidId,
            title: item.title || "Treinamento EzPoint Web",
            desc: item.description || "",
            published: item.pubDate || new Date().toISOString()
          };
        }).filter(v => v.youtubeId && v.youtubeId.length > 3);
      }
    }
  } catch (err) {
    console.warn("Método 1 rss2json falhou, tentando fallback...", err);
  }

  // Método 2: Fallback AllOrigins XML Parser (Caso rss2json falhe ou retorne incompleto)
  if (fetchedItems.length === 0) {
    try {
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedRssUrl)}`;
      const res = await fetch(proxyUrl);
      if (res.ok) {
        const data = await res.json();
        if (data.contents) {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data.contents, "text/xml");
          const entries = xmlDoc.querySelectorAll("entry");
          entries.forEach(entry => {
            const vidIdNode = entry.querySelector("videoId") || entry.getElementsByTagName("yt:videoId")[0];
            const titleNode = entry.querySelector("title");
            const descNode = entry.getElementsByTagName("media:description")[0];
            const pubNode = entry.querySelector("published");

            const vidId = vidIdNode ? vidIdNode.textContent.trim() : "";
            if (vidId) {
              fetchedItems.push({
                id: vidId,
                youtubeId: vidId,
                title: titleNode ? titleNode.textContent.trim() : "Treinamento EzPoint Web",
                desc: descNode ? descNode.textContent.trim() : "",
                published: pubNode ? pubNode.textContent.trim() : new Date().toISOString()
              });
            }
          });
        }
      }
    } catch (err2) {
      console.warn("Método 2 XML parser falhou:", err2);
    }
  }

  // Processar itens encontrados e atualizar o estado da aplicação
  let newVideosAdded = 0;
  if (fetchedItems.length > 0) {
    const existingIds = new Set(currentVideos.map(v => v.youtubeId));

    fetchedItems.forEach(item => {
      if (!existingIds.has(item.youtubeId)) {
        const catInfo = autoCategorizeVideo(item.title, item.desc);
        const newVideoObj = {
          id: item.youtubeId,
          youtubeId: item.youtubeId,
          title: item.title,
          category: catInfo.category,
          categoryName: catInfo.categoryName,
          duration: "Vídeo Novo",
          author: "RwTech Oficial",
          published: item.published,
          directUrl: `https://www.youtube.com/watch?v=${item.youtubeId}&list=${PLAYLIST_ID}`,
          thumbnail: `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`,
          description: item.desc ? item.desc.slice(0, 180) + "..." : "Novo treinamento oficial da série EzPoint Web: Direto ao ponto disponibilizado pela RwTech no YouTube.",
          keyPoints: [
            "Conteúdo atualizado publicado no canal oficial da RwTech.",
            "Visualização em alta definição com passo a passo prático.",
            "Acesso aos recursos oficiais do software EzPoint Web."
          ]
        };

        // Adicionar novo vídeo no topo
        currentVideos.unshift(newVideoObj);
        existingIds.add(item.youtubeId);
        newVideosAdded++;
      }
    });

    saveCachedVideos(currentVideos);
  }

  if (syncIcon) syncIcon.classList.remove("spinning");

  const now = new Date();
  const timeStr = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

  if (syncStatus) {
    if (newVideosAdded > 0) {
      syncStatus.innerHTML = `<span class="sync-dot live"></span> Sincronizado: <strong>+${newVideosAdded} novos vídeos</strong> adicionados (${timeStr})`;
    } else {
      syncStatus.innerHTML = `<span class="sync-dot live"></span> Sincronizado com o YouTube (${timeStr}) &bull; <strong>${currentVideos.length} aulas</strong>`;
    }
  }

  // Re-renderizar vídeos na interface
  if (window.renderVideosGrid) {
    window.renderVideosGrid();
  }

  if (isManual) {
    showToastNotification(newVideosAdded > 0 
      ? `Playlist atualizada! ${newVideosAdded} novos vídeos carregados.` 
      : `Playlist sincronizada! Todos os ${currentVideos.length} vídeos estão atualizados.`);
  }
}

/* NOTIFICAÇÃO TOAST */
function showToastNotification(msg) {
  let toast = document.getElementById("toastNotify");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotify";
    toast.className = "pajo-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i data-lucide="check-circle-2"></i> <span>${msg}</span>`;
  if (window.lucide) window.lucide.createIcons();
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

/* VIDEO HUB */
function initVideoHub() {
  const container = document.getElementById("videosContainer");
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");
  const tabs = document.querySelectorAll(".cat-tab");
  const countEl = document.getElementById("videoCountDisplay");
  const syncBtn = document.getElementById("syncPlaylistBtn");
  const openPlaylistModalBtn = document.getElementById("openPlaylistModalBtn");

  let activeCat = "all";
  let query = "";

  function render() {
    if (!container) return;

    const filtered = currentVideos.filter(v => {
      const matchCat = activeCat === "all" || v.category === activeCat;
      const matchQuery = query === "" ||
        v.title.toLowerCase().includes(query.toLowerCase()) ||
        v.description.toLowerCase().includes(query.toLowerCase()) ||
        v.categoryName.toLowerCase().includes(query.toLowerCase());

      return matchCat && matchQuery;
    });

    if (countEl) {
      countEl.innerHTML = `Exibindo <strong>${filtered.length}</strong> de ${currentVideos.length} aulas da playlist oficial RWTECH`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="v-empty">
          <i data-lucide="search-x" class="empty-icon"></i>
          <p>Nenhuma aula encontrada para <strong>"${query}"</strong>.</p>
          <button class="btn btn-primary btn-sm" style="margin-top: 0.75rem;" onclick="resetSearch()">
            <i data-lucide="refresh-cw"></i> Ver Todas as Aulas
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    container.innerHTML = filtered.map(v => {
      return `
        <div class="video-card-item">
          <div class="v-thumb-box" onclick="openVideoPlayer('${v.id}')">
            <img src="${v.thumbnail}" alt="${v.title}" class="v-thumb-img" loading="lazy" onerror="this.src='https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg'">
            <div class="v-play-mask">
              <div class="v-play-icon">
                <i data-lucide="play"></i>
              </div>
            </div>
            <span class="v-dur">${v.duration}</span>
          </div>
          <div class="v-info">
            <span class="v-cat-tag">${v.categoryName}</span>
            <h3 class="v-title" onclick="openVideoPlayer('${v.id}')" title="${v.title}">${v.title}</h3>
            <p class="v-desc">${v.description}</p>
            <div class="v-foot">
              <span class="v-author"><i data-lucide="youtube"></i> ${v.author}</span>
              <button class="btn-play-card" onclick="openVideoPlayer('${v.id}')">
                <i data-lucide="play-circle"></i> Assistir Aula
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) window.lucide.createIcons();
  }

  // Exportar para recarregar após sincronização
  window.renderVideosGrid = render;

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

  if (syncBtn) {
    syncBtn.addEventListener("click", () => {
      syncYouTubePlaylist(true);
    });
  }

  if (openPlaylistModalBtn) {
    openPlaylistModalBtn.addEventListener("click", () => {
      openFullPlaylistPlayer();
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
    const video = currentVideos.find(v => v.id === id || v.youtubeId === id);
    if (!video || !modal) return;

    document.getElementById("modalTag").textContent = video.categoryName;
    document.getElementById("modalTitle").textContent = video.title;
    document.getElementById("modalDesc").textContent = video.description;

    const bullets = document.getElementById("modalBullets");
    if (bullets && video.keyPoints) {
      bullets.innerHTML = `
        <strong>Tópicos abordados nesta aula:</strong>
        ${video.keyPoints.map(p => `<div>&bull; ${p}</div>`).join("")}
      `;
    }

    const ytLink = document.getElementById("modalYtLink");
    if (ytLink) {
      ytLink.href = video.directUrl || `https://www.youtube.com/watch?v=${video.youtubeId}&list=${PLAYLIST_ID}`;
    }

    // Carregar player com vídeo específico mantendo o contexto da playlist
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&list=${PLAYLIST_ID}`;
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    if (window.lucide) window.lucide.createIcons();
  };

  window.openFullPlaylistPlayer = function() {
    if (!modal) return;

    document.getElementById("modalTag").textContent = "Playlist Completa RWTECH";
    document.getElementById("modalTitle").textContent = "Série EzPoint Web: Direto ao ponto (Playlist Oficial)";
    document.getElementById("modalDesc").textContent = "Assista a todas as aulas de capacitação em sequência no player oficial do YouTube com navegação por índice.";

    const bullets = document.getElementById("modalBullets");
    if (bullets) {
      bullets.innerHTML = `
        <strong>Conteúdos integrados nesta playlist:</strong>
        <div>&bull; Gestão de jornadas, escalas e tabelas de horários.</div>
        <div>&bull; Parametrização, preferências e criação de administradores.</div>
        <div>&bull; Aplicativo mobile com reconhecimento facial e cercas GPS.</div>
        <div>&bull; Fechamento de folha de ponto, banco de horas e relatórios.</div>
      `;
    }

    const ytLink = document.getElementById("modalYtLink");
    if (ytLink) {
      ytLink.href = PLAYLIST_URL;
    }

    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&rel=0`;
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

/* CONTACT FORM (ENVIO DIRETO PARA PAULOJSILVA@LIVE.COM) */
window.handleFormSubmit = async function(e) {
  e.preventDefault();

  const name = document.getElementById("formName").value.trim();
  const company = document.getElementById("formCompany").value.trim();
  const email = document.getElementById("formEmail") ? document.getElementById("formEmail").value.trim() : "";
  const phone = document.getElementById("formPhone").value.trim();
  const subject = document.getElementById("formSubject").value;
  const message = document.getElementById("formMessage") ? document.getElementById("formMessage").value.trim() : "";

  const submitBtn = document.getElementById("submitBtn");
  const submitBtnText = document.getElementById("submitBtnText");
  const statusBox = document.getElementById("formStatus");

  if (submitBtn) submitBtn.disabled = true;
  if (submitBtnText) submitBtnText.textContent = "Enviando mensagem...";
  if (statusBox) {
    statusBox.style.display = "none";
    statusBox.className = "form-status-box";
  }

  const payload = {
    _subject: `Novo Contato Site PAJO: ${name} - ${company}`,
    _template: "table",
    _captcha: "false",
    Nome: name,
    Empresa: company,
    Email: email,
    Telefone: phone,
    Interesse: subject,
    Mensagem: message || "Nenhuma mensagem adicional informada.",
    DataEnvio: new Date().toLocaleString("pt-BR")
  };

  try {
    const response = await fetch("https://formsubmit.co/ajax/paulojsilva@live.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      if (statusBox) {
        statusBox.className = "form-status-box success";
        statusBox.innerHTML = `
          <i data-lucide="check-circle-2"></i>
          <div>
            <strong>Mensagem enviada com sucesso!</strong>
            <p>Recebemos suas informações e entraremos em contato em breve através do e-mail <strong>${email}</strong> ou telefone.</p>
          </div>
        `;
        statusBox.style.display = "flex";
      }
      document.getElementById("leadForm").reset();
      showToastNotification("Mensagem enviada com sucesso para paulojsilva@live.com!");
    } else {
      throw new Error("Erro no servidor de envio");
    }
  } catch (err) {
    console.warn("Erro ao enviar por AJAX, oferecendo fallback:", err);
    if (statusBox) {
      statusBox.className = "form-status-box error";
      const mailtoLink = `mailto:paulojsilva@live.com?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(
        `Nome: ${name}\nEmpresa: ${company}\nEmail: ${email}\nTelefone: ${phone}\nInteresse: ${subject}\nMensagem: ${message}`
      )}`;
      statusBox.innerHTML = `
        <i data-lucide="alert-circle"></i>
        <div>
          <strong>Aviso no envio automático:</strong>
          <p>Você também pode enviar diretamente clicando no botão abaixo:</p>
          <a href="${mailtoLink}" class="btn btn-sm btn-outline" style="margin-top: 0.5rem; display: inline-flex;">
            <i data-lucide="mail"></i> Abrir no seu aplicativo de E-mail
          </a>
        </div>
      `;
      statusBox.style.display = "flex";
    }
  } finally {
    if (submitBtn) submitBtn.disabled = false;
    if (submitBtnText) submitBtnText.textContent = "Enviar Mensagem para a PAJO";
    if (window.lucide) window.lucide.createIcons();
  }
};

