// HIVING FOOD — 3D Content Wall
// Mur de contenus verticaux 9:16, perspective inclinée, parallax infini.
// 6 colonnes qui défilent à des vitesses différentes (3 montent, 3 descendent).
// ─────────────────────────────────────────────────────────────────

// CW_PAL est résolu lazy au render (FOOD_PAL est défini dans food-home-v2.jsx, qui charge après)

// Real content cards — vidéos réelles tournées en studio Hiving
const CW_ITEMS = [
// Top 4 cas brands (lime accent)
{
  handle: '',
  type: 'showreel',
  brand: 'Coyote',
  label: '20 ans · Trompe-l’œil',
  accent: 'lime',
  video: '/videos/wall/wall-2.mp4'
}, {
  handle: '',
  type: 'showreel',
  brand: 'Feastables',
  label: 'MrBeast · Box premium',
  accent: 'lime',
  video: '/videos/wall/wall-6.mp4'
}, {
  handle: '',
  type: 'showreel',
  brand: 'Levi’s Paris',
  label: 'Une journée habillé',
  accent: 'lime',
  video: '/videos/wall/wall-7.mp4'
}, {
  handle: '',
  type: 'showreel',
  brand: 'Uber Eats',
  label: 'YouTube · Cas client',
  accent: 'lime',
  video: '/videos/wall/wall-4.mp4'
}, {
  handle: '',
  type: 'showreel',
  brand: 'BMW',
  label: 'iX3 · avant-gardiste',
  accent: 'cream',
  video: '/videos/wall/wall-8.mp4'
}, {
  handle: '',
  type: 'reels',
  brand: 'Galeries Lafayette',
  label: 'Le Gourmet',
  accent: 'warm',
  video: '/videos/wall/wall-11.mp4'
}, {
  handle: '',
  type: 'reels',
  brand: 'Tefal',
  label: 'Concours saveur',
  accent: 'cream',
  video: '/videos/wall/wall-12.mp4'
},
// Picard portfolio (6 mois de campagne, 41% ventes premium)
{
  handle: '',
  type: 'recette',
  brand: 'Picard',
  label: 'Bûches signature',
  accent: 'lime',
  video: '/videos/picard/picard-1.mp4'
}, {
  handle: '',
  type: 'reels',
  brand: 'Picard',
  label: 'Atelier Père Noël',
  accent: 'cream',
  video: '/videos/picard/picard-3.mp4'
}, {
  handle: '',
  type: 'recette',
  brand: 'Picard',
  label: 'Brunch de Noël',
  accent: 'warm',
  video: '/videos/picard/picard-5.mp4'
}, {
  handle: '',
  type: 'reels',
  brand: 'Picard',
  label: 'Apéro saumon fumé',
  accent: 'cream',
  video: '/videos/picard/picard-7.mp4'
}, {
  handle: '',
  type: 'recette',
  brand: 'Picard',
  label: 'Volaille Airfryer',
  accent: 'lime',
  video: '/videos/picard/picard-9.mp4'
}, {
  handle: '',
  type: 'reels',
  brand: 'Picard',
  label: 'Mini-fondants Noël',
  accent: 'warm',
  video: '/videos/picard/picard-12.mp4'
},
// Hiving Studio originals
{
  handle: '',
  type: 'reels',
  brand: 'Hiving',
  label: 'Aux commandes en cuisine',
  accent: 'lime',
  video: '/videos/wall/wall-1.mp4'
}, {
  handle: '',
  type: 'showreel',
  brand: 'Hiving',
  label: 'Ça cook',
  accent: 'cream',
  video: '/videos/wall/wall-3.mp4'
}, {
  handle: '',
  type: 'reels',
  brand: 'Hiving',
  label: 'Plaisir en barre',
  accent: 'warm',
  video: '/videos/wall/wall-5.mp4'
}, {
  handle: '',
  type: 'recette',
  brand: 'Hiving',
  label: 'Maquereau × asperge',
  accent: 'cream',
  video: '/videos/wall/wall-9.mp4'
}, {
  handle: '',
  type: 'recette',
  brand: 'Hiving',
  label: 'Mille-feuille croustillant',
  accent: 'warm',
  video: '/videos/wall/wall-10.mp4'
}, {
  handle: '',
  type: 'showreel',
  brand: 'Hiving',
  label: 'BTS YouTube',
  accent: 'lime',
  video: '/videos/wall/wall-13.mp4'
}];

// Splat helper (réutilise celui du home si dispo)
function CWSplat({
  color,
  size = 60,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    fill: color,
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M50 10 C 65 12, 80 25, 78 42 C 92 45, 95 65, 80 72 C 82 88, 60 92, 52 80 C 45 95, 22 88, 25 72 C 8 70, 5 50, 22 42 C 18 22, 35 8, 50 10 Z"
  }));
}

// One card in a column
function CWCard({
  item,
  idx
}) {
  const P = window.FOOD_PAL;
  const accentColor = item.accent === 'lime' ? P.lime : item.accent === 'warm' ? P.warm || '#f4d4a4' : P.cream;
  const typeIcons = {
    recette: '◉',
    reels: '▶',
    live: '●',
    ugc: '✦',
    showreel: '◆'
  };
  const typeLabel = item.type.toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '9/16',
      width: '100%',
      background: P.ink,
      border: `1.5px solid ${P.ink}`,
      overflow: 'hidden',
      boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(180deg, ${accentColor} 0%, ${accentColor}cc 60%, ${P.ink}99 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -20,
      right: -20,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement(CWSplat, {
    color: P.ink,
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.mono,
      fontSize: 8,
      fontWeight: 700,
      color: P.bg,
      background: item.type === 'live' ? '#c8492f' : P.ink,
      padding: '3px 7px',
      letterSpacing: '0.16em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: item.type === 'live' ? P.bg : P.lime,
      display: 'inline-block'
    }
  }), typeLabel)), item.video ? /*#__PURE__*/React.createElement(LazyVid, {
    src: item.video,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '52%',
      aspectRatio: '1',
      borderRadius: '50%',
      background: P.bg,
      opacity: 0.92,
      boxShadow: `inset 0 0 0 2.5px ${P.ink}, 0 6px 16px rgba(0,0,0,0.3)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 32,
      color: P.ink
    }
  }, typeIcons[item.type] || '◉'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 14,
      right: 14,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: P.mono,
      fontSize: 9,
      letterSpacing: '0.18em',
      color: P.bg,
      opacity: 0.7,
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, "× ", item.brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: P.display,
      fontSize: 14,
      fontWeight: 700,
      color: P.bg,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, item.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 8,
      fontFamily: P.mono,
      fontSize: 7.5,
      color: P.bg,
      opacity: 0.65,
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "♥ ", (120 + idx * 17) % 900 + 100, "K"), /*#__PURE__*/React.createElement("span", null, "↪ ", (40 + idx * 9) % 200 + 20, "K"), /*#__PURE__*/React.createElement("span", null, "◉ ", (800 + idx * 23) % 2000 + 200, "K"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(ellipse at center, transparent 40%, ${P.ink}30 100%)`,
      pointerEvents: 'none'
    }
  }));
}

// One column — duplicates content for infinite scroll
function CWColumn({
  items,
  direction = 'up',
  speed = 40,
  offset = 0
}) {
  const animName = `cw-scroll-${direction}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      position: 'relative',
      maskImage: 'linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      animation: `${animName} ${speed}s linear infinite`,
      animationDelay: `${-offset}s`
    }
  }, [...items, ...items].map((item, i) => /*#__PURE__*/React.createElement(CWCard, {
    key: i,
    item: item,
    idx: i
  }))));
}
function FoodContentWall2() {
  const P = window.FOOD_PAL;

  // Split into 6 columns, mix items
  const cols = [{
    items: CW_ITEMS.filter((_, i) => i % 6 === 0),
    dir: 'up',
    speed: 50,
    offset: 0
  }, {
    items: CW_ITEMS.filter((_, i) => i % 6 === 1),
    dir: 'down',
    speed: 60,
    offset: 12
  }, {
    items: CW_ITEMS.filter((_, i) => i % 6 === 2),
    dir: 'up',
    speed: 45,
    offset: 6
  }, {
    items: CW_ITEMS.filter((_, i) => i % 6 === 3),
    dir: 'down',
    speed: 55,
    offset: 20
  }, {
    items: CW_ITEMS.filter((_, i) => i % 6 === 4),
    dir: 'up',
    speed: 65,
    offset: 8
  }, {
    items: CW_ITEMS.filter((_, i) => i % 6 === 5),
    dir: 'down',
    speed: 48,
    offset: 14
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '80px 0 90px',
      background: P.ink,
      color: P.bg,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      mixBlendMode: 'overlay',
      opacity: 0.15,
      pointerEvents: 'none',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("filter", {
    id: "cw-grain"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.85",
    numOctaves: "2"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0"
  })), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    filter: "url(#cw-grain)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 50,
      left: '4%',
      zIndex: 2,
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(CWSplat, {
    color: P.lime,
    size: 56
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      right: '50%',
      zIndex: 2,
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement(CWSplat, {
    color: P.lime,
    size: 42,
    style: {
      transform: 'rotate(180deg)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1500,
      margin: '0 auto',
      padding: '0 40px',
      position: 'relative',
      zIndex: 5,
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 40,
      alignItems: 'center'
    },
    className: "cw-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cw-text"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: P.mono,
      fontSize: 10,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: P.lime,
      marginBottom: 20,
      padding: '6px 12px',
      border: `1px solid ${P.lime}40`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#c8492f',
      animation: 'cw-pulse 1.4s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", null, "LIVE · 24h/24")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: P.display,
      fontWeight: 700,
      fontSize: 'clamp(36px, 4.4vw, 64px)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      margin: '0 0 20px',
      color: P.bg,
      textWrap: 'balance'
    }
  }, "420M+ vues", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.serif,
      fontStyle: 'italic',
      fontWeight: 400,
      color: P.lime
    }
  }, "produites"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.hand,
      fontWeight: 700,
      color: P.bg,
      display: 'inline-block',
      transform: 'rotate(-3deg)'
    }
  }, "en cuisine →")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: P.serif,
      fontStyle: 'italic',
      fontSize: 16,
      lineHeight: 1.55,
      color: P.bg,
      opacity: 0.7,
      margin: '0 0 28px',
      maxWidth: 380
    }
  }, "Recettes, reels, lives, UGC : un échantillon de ce qu'on tourne chaque semaine pour les marques."), /*#__PURE__*/React.createElement("a", {
    href: "food/campagnes.html",
    "data-cursor": true,
    style: {
      fontFamily: P.display,
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: P.ink,
      background: P.lime,
      padding: '12px 20px',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, "Toutes les campagnes ", /*#__PURE__*/React.createElement("span", null, "→"))), /*#__PURE__*/React.createElement("div", {
    style: {
      perspective: '1400px',
      perspectiveOrigin: '20% 50%',
      position: 'relative',
      height: 'min(70vh, 560px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      height: '100%',
      transform: 'rotateY(-22deg) rotateZ(-2deg)',
      transformStyle: 'preserve-3d',
      transformOrigin: 'left center'
    },
    className: "cw-wall"
  }, cols.map((c, i) => /*#__PURE__*/React.createElement(CWColumn, {
    key: i,
    items: c.items,
    direction: c.dir,
    speed: c.speed,
    offset: c.offset
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '6%',
      left: '-4%',
      fontFamily: P.hand,
      fontWeight: 700,
      fontSize: 22,
      color: P.lime,
      transform: 'rotate(-6deg)',
      zIndex: 4,
      pointerEvents: 'none'
    }
  }, "en direct ↗"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '8%',
      right: '-2%',
      fontFamily: P.hand,
      fontWeight: 700,
      fontSize: 18,
      color: P.bg,
      transform: 'rotate(4deg)',
      zIndex: 4,
      pointerEvents: 'none',
      background: '#c8492f',
      padding: '5px 11px',
      border: `1.5px solid ${P.bg}`
    }
  }, "★ J+1"))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes cw-scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes cw-scroll-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        @keyframes cw-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @media (max-width: 1024px) {
          .cw-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .cw-wall { transform: rotateY(-12deg) !important; }
        }
        @media (max-width: 700px) {
          .cw-wall { transform: none !important; gap: 8px !important; }
          .cw-wall > div:nth-child(n+5) { display: none !important; }
        }
      `));
}
Object.assign(window, {
  FoodContentWall2
});
