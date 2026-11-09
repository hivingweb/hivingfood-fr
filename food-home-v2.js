// ─────────────────────────────────────────────────────────────────────
// HIVING FOOD — Home (DA Hiving Studio authentique)
// Blanc cassé chaud + noir profond + soft lime green signature.
// Logo manuscrit, swooshs peints, croix +, splats, grain, custom cursor.
// ─────────────────────────────────────────────────────────────────────

// Asset path helper — works from root + /food/ subpages
function foodAsset(p) {
  const inSub = typeof window !== 'undefined' && window.location.pathname.includes('/food/');
  return (inSub ? '../' : '') + p;
}
function foodHomePath() {
  return '/';
}
const FOOD_PAL = {
  bg: '#fafaf5',
  ink: '#0a0908',
  inkSoft: '#3a3a35',
  cream: '#f0ecdf',
  warm: '#e8dcc4',
  lime: '#d4e85a',
  limeDeep: '#b5d039',
  paper: '#ffffff',
  hand: '"Caveat", "Bradley Hand", cursive',
  display: '"Familjen Grotesk", "Archivo", "Inter", sans-serif',
  serif: '"Fraunces", Georgia, serif',
  sans: '"Inter", -apple-system, sans-serif',
  mono: '"JetBrains Mono", "SF Mono", ui-monospace, monospace'
};

// ── SIGNATURE GRAPHICS ──────────────────────────────────────────────
function Link({
  color = '#0a0908',
  size = 80,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    style: {
      display: 'block',
      ...style
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 22 Q 22 18 28 24 L 48 70 Q 50 76 52 70 L 72 24 Q 78 18 82 22 Q 84 26 80 32 L 56 86 Q 50 96 44 86 L 20 32 Q 16 26 18 22 Z",
    fill: color
  }));
}
function Swoosh({
  color = '#0a0908',
  width = 400,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 80",
    width: width,
    style: {
      display: 'block',
      ...style
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 42 Q 100 8 220 14 T 388 38 Q 320 52 200 50 T 28 38",
    stroke: color,
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 24 50 Q 120 22 230 24 T 380 46",
    stroke: color,
    strokeWidth: "1",
    strokeLinecap: "round",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "368",
    cy: "22",
    r: "1.2",
    fill: color,
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "378",
    cy: "28",
    r: "0.8",
    fill: color,
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "358",
    cy: "14",
    r: "0.6",
    fill: color,
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "385",
    cy: "34",
    r: "0.5",
    fill: color,
    opacity: "0.3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "58",
    r: "0.7",
    fill: color,
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "48",
    r: "0.5",
    fill: color,
    opacity: "0.3"
  }));
}
function Plus({
  color = '#0a0908',
  size = 24,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    style: {
      display: 'block',
      ...style
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 3 L 12 21 M 3 12 L 21 12",
    stroke: color,
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "5",
    r: "0.6",
    fill: color,
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "19",
    r: "0.6",
    fill: color,
    opacity: "0.5"
  }));
}
function Splat({
  color = '#d4e85a',
  size = 80,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    style: {
      display: 'block',
      ...style
    },
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50 10 Q 70 20 75 35 Q 90 40 88 55 Q 95 70 78 78 Q 75 92 58 88 Q 45 95 38 82 Q 20 88 18 70 Q 5 60 15 45 Q 8 28 25 25 Q 32 10 50 10 Z",
    opacity: "0.92"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "92",
    cy: "22",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "86",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "88",
    cy: "84",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "14",
    r: "1.2"
  }));
}
function Grain({
  opacity = 0.06
}) {
  return /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      opacity,
      mixBlendMode: 'multiply'
    }
  }, /*#__PURE__*/React.createElement("filter", {
    id: "grain-noise-food"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.85",
    numOctaves: "2"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0"
  })), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    filter: "url(#grain-noise-food)"
  }));
}

// ── PLACEHOLDER (zebra) ──────────────────────────────────────────────
function FoodPH({
  aspect = '4/5',
  label,
  kind = 'photo',
  tone = 'cream'
}) {
  const isVid = kind === 'video';
  const bgMap = {
    cream: FOOD_PAL.cream,
    warm: FOOD_PAL.warm,
    ink: FOOD_PAL.ink,
    lime: FOOD_PAL.lime,
    paper: FOOD_PAL.paper
  };
  const bg = bgMap[tone] || FOOD_PAL.cream;
  const dark = tone === 'ink';
  const fg = dark ? 'rgba(255,255,255,0.6)' : 'rgba(10,9,8,0.45)';
  const stripe = dark ? 'rgba(255,255,255,0.05)' : 'rgba(10,9,8,0.06)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: aspect,
      background: bg,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 1,
      backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${stripe} 14px 15px)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      color: fg,
      padding: 16
    }
  }, isVid ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      border: `1.5px solid ${fg}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 12px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 2l9 6-9 6V2z",
    fill: fg
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 6,
      border: `1.5px solid ${fg}`,
      margin: '0 auto 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "2",
    stroke: fg,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 16l5-5 4 4 3-3 4 4",
    stroke: fg,
    strokeWidth: "1.5"
  }))), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      maxWidth: 240,
      margin: '0 auto'
    }
  }, label)));
}

// ── CUSTOM CURSOR ───────────────────────────────────────────────────
function FoodCursor() {
  React.useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia('(hover: none)').matches || window.innerWidth < 1024) return;

    // Dot — always exact at pointer
    const dot = document.createElement('div');
    dot.className = 'food-cursor';
    dot.style.cssText = `
      position: fixed; top: 0; left: 0; width: 6px; height: 6px;
      background: ${FOOD_PAL.ink}; border-radius: 50%;
      pointer-events: none; z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 180ms, height 180ms, background 180ms, opacity 180ms;
    `;
    document.body.appendChild(dot);

    // Ring — follows with easing (lerp)
    const ring = document.createElement('div');
    ring.className = 'food-cursor';
    ring.style.cssText = `
      position: fixed; top: 0; left: 0; width: 32px; height: 32px;
      border: 1.5px solid ${FOOD_PAL.ink}40; border-radius: 50%;
      pointer-events: none; z-index: 9998;
      transform: translate(-50%, -50%);
      transition: width 220ms cubic-bezier(.5,1.6,.4,1),
                  height 220ms cubic-bezier(.5,1.6,.4,1),
                  background 220ms, border-color 220ms, opacity 180ms;
      display: flex; align-items: center; justify-content: center;
      font-family: ${FOOD_PAL.display}; font-size: 11px; font-weight: 600;
      color: transparent; letter-spacing: 0.04em;
    `;
    document.body.appendChild(ring);
    let mx = -100,
      my = -100;
    let rx = -100,
      ry = -100;
    let rafId;
    const onMove = e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    const onOver = e => {
      const link = e.target.closest('a, button, [data-cursor]');
      if (link) {
        ring.style.width = '52px';
        ring.style.height = '52px';
        ring.style.background = FOOD_PAL.lime;
        ring.style.borderColor = FOOD_PAL.ink;
        ring.style.color = FOOD_PAL.ink;
        ring.textContent = '→';
        dot.style.opacity = '0';
      } else {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.background = 'transparent';
        ring.style.borderColor = `${FOOD_PAL.ink}40`;
        ring.style.color = 'transparent';
        ring.textContent = '';
        dot.style.opacity = '1';
      }
    };
    const onLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };
    const onEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };
    const tick = () => {
      // Lerp ring towards mouse pos
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(tick);
    };
    tick();
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      dot.remove();
      ring.remove();
    };
  }, []);
  return null;
}

// ── STATUS BAR ──────────────────────────────────────────────────────
function FoodStatus() {
  const items = ['AGENCE INFLUENCE FOOD #01', '⊹ CLICHY · 92 ⊹', 'CRÉATEURS EXCLUSIFS', '★ +420M VUES GÉNÉRÉES ★', '2 STUDIOS PRO', 'DEPUIS 2022'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: FOOD_PAL.lime,
      color: FOOD_PAL.ink,
      padding: '10px 0',
      overflow: 'hidden',
      position: 'relative',
      borderBottom: `1.5px solid ${FOOD_PAL.ink}`,
      borderTop: `1.5px solid ${FOOD_PAL.ink}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      whiteSpace: 'nowrap',
      animation: 'food-marquee 50s linear infinite'
    }
  }, [...items, ...items, ...items].map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      padding: '0 32px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 32,
      flexShrink: 0,
      fontWeight: 500
    }
  }, it, /*#__PURE__*/React.createElement("span", {
    style: {
      color: FOOD_PAL.ink
    }
  }, "✦")))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes food-marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }
      `));
}

// ── NAV ─────────────────────────────────────────────────────────────
function FoodNav2({
  current = 'home'
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Menu mobile : fermeture au clavier (Échap)
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  const inSub = typeof window !== 'undefined' && window.location.pathname.includes('/food/');
  const sub = p => inSub ? p : 'food/' + p;
  const links = [{
    id: 'agence',
    label: "L'agence",
    href: sub('agence.html')
  }, {
    id: 'talents',
    label: 'Talents',
    href: sub('talents.html')
  }, {
    id: 'studios',
    label: 'Studios',
    href: sub('studios.html')
  }, {
    id: 'campagnes',
    label: 'Campagnes',
    href: sub('campagnes.html')
  }, {
    id: 'event',
    label: 'Événementiel',
    href: sub('evenementiel.html')
  }, {
    id: 'blog',
    label: 'Blog',
    href: sub('blog.html')
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: "#contenu",
    className: "food-skip"
  }, "Aller au contenu"), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: scrolled ? '14px 32px' : '20px 32px',
      transition: 'all 280ms ease',
      background: scrolled ? 'rgba(250,250,245,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? `1px solid ${FOOD_PAL.ink}15` : '1px solid transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: foodHomePath(),
    style: {
      display: 'inline-flex',
      alignItems: 'flex-end',
      textDecoration: 'none',
      position: 'relative',
      padding: '8px 4px',
      gap: scrolled ? 8 : 10
    },
    "data-cursor": true
  }, /*#__PURE__*/React.createElement("img", {
    src: foodAsset('assets/hiving-full-black.svg'),
    alt: "HIVING",
    style: {
      height: scrolled ? 30 : 40,
      width: 'auto',
      display: 'block',
      transition: 'height 280ms'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 700,
      fontSize: scrolled ? 24 : 32,
      lineHeight: 0.85,
      color: FOOD_PAL.ink,
      transform: 'rotate(-6deg)',
      transition: 'all 280ms',
      pointerEvents: 'none',
      position: 'relative',
      display: 'inline-block',
      marginBottom: scrolled ? 2 : 4
    }
  }, "food", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -3,
      right: -5,
      bottom: '12%',
      height: '36%',
      background: FOOD_PAL.lime,
      zIndex: -1,
      borderRadius: 2,
      transform: 'rotate(1deg) skewX(-4deg)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)'
    }
  }, "HIVING food")), /*#__PURE__*/React.createElement("div", {
    className: "food2-nav-links",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: scrolled ? 'transparent' : `${FOOD_PAL.cream}cc`,
      border: scrolled ? `1.5px solid ${FOOD_PAL.ink}10` : `1.5px solid ${FOOD_PAL.ink}`,
      padding: 4,
      borderRadius: 999,
      backdropFilter: 'blur(8px)',
      transition: 'all 280ms ease',
      position: 'relative'
    }
  }, links.map((l, i) => {
    const isActive = current === l.id;
    return /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: l.href,
      "data-cursor": true,
      className: "food2-pill",
      "data-active": isActive ? 'true' : 'false',
      style: {
        fontFamily: FOOD_PAL.display,
        fontSize: 13,
        fontWeight: 500,
        color: isActive ? FOOD_PAL.bg : FOOD_PAL.ink,
        background: isActive ? FOOD_PAL.ink : 'transparent',
        textDecoration: 'none',
        padding: '10px 18px',
        borderRadius: 999,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        transition: 'all 220ms cubic-bezier(.5,1.6,.4,1)',
        whiteSpace: 'nowrap',
        transform: 'rotate(0deg)'
      }
    }, isActive && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: -14,
        right: -10,
        fontFamily: FOOD_PAL.hand,
        fontSize: 18,
        fontWeight: 700,
        color: FOOD_PAL.lime,
        transform: 'rotate(-12deg)',
        pointerEvents: 'none',
        lineHeight: 1
      }
    }, "✦"), /*#__PURE__*/React.createElement("span", null, l.label), /*#__PURE__*/React.createElement("span", {
      className: "food2-pill-dot",
      style: {
        position: 'absolute',
        left: 8,
        top: '50%',
        transform: 'translateY(-50%) scale(0)',
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: FOOD_PAL.lime,
        transition: 'transform 220ms cubic-bezier(.5,1.6,.4,1)',
        pointerEvents: 'none'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: inSub ? '/#contact' : '#contact',
    "data-cursor": true,
    className: "food2-cta",
    style: {
      background: FOOD_PAL.lime,
      color: FOOD_PAL.ink,
      border: `1.5px solid ${FOOD_PAL.ink}`,
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '13px 22px 13px 26px',
      borderRadius: 999,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      transition: 'transform 200ms, box-shadow 200ms',
      boxShadow: `2px 2px 0 ${FOOD_PAL.ink}`,
      position: 'relative'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translate(-2px, -2px)';
      e.currentTarget.style.boxShadow = `4px 4px 0 ${FOOD_PAL.ink}`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translate(0, 0)';
      e.currentTarget.style.boxShadow = `2px 2px 0 ${FOOD_PAL.ink}`;
    }
  }, "On se met à table", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '2px 6px',
      background: FOOD_PAL.ink,
      color: FOOD_PAL.lime,
      borderRadius: 999,
      lineHeight: 1,
      fontWeight: 700
    }
  }, "↗")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(true),
    "aria-label": "Ouvrir le menu",
    "aria-expanded": open,
    className: "food2-toggle",
    style: {
      display: 'none',
      background: 'transparent',
      border: `1.5px solid ${FOOD_PAL.ink}`,
      color: FOOD_PAL.ink,
      padding: '10px 12px',
      borderRadius: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 1h18M0 7h18M0 13h18",
    stroke: "currentColor",
    strokeWidth: "1.6"
  })))))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: FOOD_PAL.bg,
      padding: '32px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: foodAsset('assets/hiving-full-black.svg'),
    alt: "HIVING",
    style: {
      height: 34,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -10,
      bottom: -8,
      fontFamily: FOOD_PAL.hand,
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 0.8,
      color: FOOD_PAL.ink,
      transform: 'rotate(-8deg)',
      textShadow: `2px 0 0 ${FOOD_PAL.bg}, -2px 0 0 ${FOOD_PAL.bg}, 0 2px 0 ${FOOD_PAL.bg}, 0 -2px 0 ${FOOD_PAL.bg}, 2px 2px 0 ${FOOD_PAL.bg}, -2px -2px 0 ${FOOD_PAL.bg}, 2px -2px 0 ${FOOD_PAL.bg}, -2px 2px 0 ${FOOD_PAL.bg}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, "food", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -2,
      right: -4,
      bottom: '14%',
      height: '38%',
      background: FOOD_PAL.lime,
      zIndex: -1,
      borderRadius: 2,
      transform: 'rotate(1deg) skewX(-4deg)'
    }
  })))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(false),
    "aria-label": "Fermer le menu",
    style: {
      background: 'transparent',
      border: 'none',
      color: FOOD_PAL.ink,
      fontSize: 32,
      cursor: 'pointer'
    }
  }, "×")), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href,
    style: {
      fontFamily: FOOD_PAL.display,
      fontSize: 36,
      fontWeight: 600,
      color: FOOD_PAL.ink,
      textDecoration: 'none',
      padding: '12px 0',
      borderBottom: `1px solid ${FOOD_PAL.ink}10`
    }
  }, l.label))), /*#__PURE__*/React.createElement("style", null, `
      .food2-pill[data-active="false"]:hover {
        background: ${FOOD_PAL.bg} !important;
        padding-left: 24px !important;
        padding-right: 18px !important;
      }
      .food2-pill[data-active="false"]:hover .food2-pill-dot {
        transform: translateY(-50%) scale(1) !important;
      }
      .food-skip { position: absolute; left: 12px; top: -200px; z-index: 2000; padding: 10px 16px; background: ${FOOD_PAL.ink}; color: ${FOOD_PAL.bg}; font-family: ${FOOD_PAL.sans}; font-size: 14px; border-radius: 8px; text-decoration: none; }
      .food-skip:focus { top: 12px; }
      a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible, summary:focus-visible, [tabindex]:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
      }
      @media (max-width: 1024px) {
        .food2-nav-links { display: none !important; }
        .food2-toggle { display: inline-flex !important; }
      }
    `));
}

// ── HERO ────────────────────────────────────────────────────────────
function FoodHero2() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '60px 40px 80px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Grain, {
    opacity: 0.05
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 80,
      right: '8%'
    }
  }, /*#__PURE__*/React.createElement(Splat, {
    color: FOOD_PAL.lime,
    size: 120,
    style: {
      transform: 'rotate(15deg)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 40,
      left: '6%'
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    color: FOOD_PAL.ink,
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 120,
      right: '14%'
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    color: FOOD_PAL.ink,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 18px',
      borderRadius: 999,
      background: FOOD_PAL.cream,
      border: `1.5px solid ${FOOD_PAL.ink}`,
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: FOOD_PAL.ink
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: FOOD_PAL.lime,
      boxShadow: `0 0 0 3px ${FOOD_PAL.lime}40`
    }
  }), "Agence influence food B2B · Marques food · CPG · Retail"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(64px, 11vw, 184px)',
      lineHeight: 0.88,
      letterSpacing: '-0.04em',
      color: FOOD_PAL.ink,
      margin: '40px 0 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'clamp(20px, 2.5vw, 48px)',
      flexWrap: 'wrap',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 700,
      fontSize: 'clamp(28px, 3.2vw, 56px)',
      transform: 'rotate(-4deg)',
      display: 'inline-block',
      lineHeight: 1,
      paddingBottom: '0.45em',
      color: FOOD_PAL.ink
    }
  }, "On fait", /*#__PURE__*/React.createElement("svg", {
    width: "60",
    height: "20",
    viewBox: "0 0 60 20",
    fill: "none",
    style: {
      display: 'block',
      marginTop: 4,
      marginLeft: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 10 Q 20 2, 50 10 M50 10 L 44 5 M50 10 L 46 16",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      lineHeight: 0.88
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, "saliver"), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 400 60",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-0.32em',
      width: '100%',
      height: '0.42em',
      zIndex: 1,
      pointerEvents: 'none'
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 0 Q 14 30, 18 50 Q 22 30, 26 0 M70 0 Q 74 38, 78 56 Q 82 38, 86 0 M180 0 Q 184 28, 188 44 Q 192 28, 196 0 M280 0 Q 284 36, 288 52 Q 292 36, 296 0 M340 0 Q 344 22, 348 38 Q 352 22, 356 0",
    fill: FOOD_PAL.lime,
    stroke: FOOD_PAL.ink,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-12%',
      right: 0,
      transform: 'rotate(6deg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      fontFamily: FOOD_PAL.mono,
      fontSize: 'clamp(9px, 0.85vw, 11px)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: FOOD_PAL.ink,
      lineHeight: 1.3,
      background: FOOD_PAL.bg,
      padding: '8px 14px',
      border: `1.5px solid ${FOOD_PAL.ink}`,
      borderRadius: 4,
      boxShadow: `3px 3px 0 ${FOOD_PAL.tomato}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: FOOD_PAL.tomato
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: FOOD_PAL.tomato
    }
  }), "+28% engagement vs. avg"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, "brief → live · 21 jours"))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'clamp(16px, 1.8vw, 36px)',
      flexWrap: 'wrap',
      marginTop: 'clamp(8px, 1vw, 18px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "vos audiences"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 700,
      fontSize: '0.34em',
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 10,
      transform: 'translateY(-0.4em)',
      color: FOOD_PAL.inkSoft
    }
  }, "avec", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      padding: '6px 14px 4px',
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '0.85em',
      color: FOOD_PAL.bg,
      lineHeight: 1,
      letterSpacing: '-0.01em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: FOOD_PAL.ink,
      borderRadius: 6,
      transform: 'rotate(-1.5deg)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, "des talents food"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-0.2em',
      right: '-0.3em',
      zIndex: 3,
      fontSize: '1em',
      color: FOOD_PAL.lime,
      transform: 'rotate(15deg)'
    }
  }, "✦")))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'clamp(8px, 1vw, 18px)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, "qui convertissent"), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 580 30",
    style: {
      position: 'absolute',
      left: -8,
      right: -8,
      bottom: '-0.18em',
      width: 'calc(100% + 16px)',
      height: '0.36em',
      zIndex: 1,
      pointerEvents: 'none'
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 18 C 80 6, 200 22, 320 12 S 540 18, 576 14",
    stroke: FOOD_PAL.tomato,
    strokeWidth: "10",
    strokeLinecap: "round",
    fill: "none",
    opacity: "0.85"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: FOOD_PAL.tomato,
      marginLeft: 6
    }
  }, "."), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 'clamp(4%, 6%, 10%)',
      bottom: '-1.6em',
      fontFamily: FOOD_PAL.hand,
      fontWeight: 600,
      fontSize: 'clamp(14px, 1.3vw, 20px)',
      color: FOOD_PAL.inkSoft,
      lineHeight: 1.2,
      transform: 'rotate(-4deg)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "48",
    height: "36",
    viewBox: "0 0 48 36",
    fill: "none",
    style: {
      display: 'block',
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40 4 Q 30 14, 18 18 Q 8 22, 4 32 M4 32 L 11 28 M4 32 L 8 24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    fill: "none"
  })), /*#__PURE__*/React.createElement("span", null, "en ventes, pas en likes")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 120,
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 64,
      alignItems: 'end'
    },
    className: "food2-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontSize: 'clamp(22px, 2.4vw, 32px)',
      fontStyle: 'italic',
      lineHeight: 1.35,
      color: FOOD_PAL.ink,
      margin: 0,
      maxWidth: 640,
      fontWeight: 400
    }
  }, "Pour les marques food, retail & CPG qui veulent transformer du contenu en", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      background: FOOD_PAL.lime,
      padding: '0 8px',
      fontStyle: 'normal',
      fontFamily: FOOD_PAL.display,
      fontWeight: 600
    }
  }, "croissance mesurable"), ".", ' ', "des talents en exclusivité, 2 studios, une équipe stratégie-prod-média sous le même toit."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    "data-cursor": true,
    style: {
      background: FOOD_PAL.ink,
      color: FOOD_PAL.bg,
      padding: '18px 32px',
      borderRadius: 999,
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      border: `1.5px solid ${FOOD_PAL.ink}`
    }
  }, "Demander un brief ", /*#__PURE__*/React.createElement("span", null, "→")), /*#__PURE__*/React.createElement("a", {
    href: "food/campagnes.html",
    "data-cursor": true,
    style: {
      background: 'transparent',
      color: FOOD_PAL.ink,
      padding: '18px 32px',
      borderRadius: 999,
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      border: `1.5px solid ${FOOD_PAL.ink}`
    }
  }, "Voir les case studies"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: FOOD_PAL.cream,
      padding: 32,
      borderRadius: 12,
      border: `1.5px solid ${FOOD_PAL.ink}`,
      position: 'relative',
      transform: 'rotate(0.5deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -16,
      right: 16,
      background: FOOD_PAL.lime,
      padding: '6px 14px',
      borderRadius: 999,
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.18em',
      border: `1.5px solid ${FOOD_PAL.ink}`,
      textTransform: 'uppercase'
    }
  }, "Showreel 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 6,
      border: `1.5px solid ${FOOD_PAL.ink}`
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: "/showreel-2026.mp4",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    poster: "",
    style: {
      width: '100%',
      display: 'block',
      aspectRatio: '16/10',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.18em',
      color: FOOD_PAL.inkSoft,
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, "Découvrez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontSize: 18,
      fontWeight: 600
    }
  }, "Notre savoir-faire en 90 sec")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Lire ou mettre en pause la vidéo",
    onClick: () => {
      const v = document.querySelector('video[src="/showreel-2026.mp4"]');
      if (v) {
        if (v.paused) v.play();else v.pause();
      }
    },
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: FOOD_PAL.ink,
      color: FOOD_PAL.bg,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      padding: '40px 40px',
      borderRadius: 24,
      background: FOOD_PAL.cream,
      color: FOOD_PAL.ink,
      position: 'relative',
      border: `1.5px solid ${FOOD_PAL.ink}`,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    },
    className: "food2-stats"
  }, [{
    value: '14',
    label: 'Créateurs exclusifs'
  }, {
    value: '420M+',
    label: 'Vues générées'
  }, {
    value: '50+',
    label: 'Marques'
  }, {
    value: '3',
    label: 'Studios à Clichy'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center',
      borderLeft: i > 0 ? `1.5px dashed ${FOOD_PAL.ink}30` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(40px, 5vw, 72px)',
      lineHeight: 1,
      color: FOOD_PAL.ink,
      letterSpacing: '-0.03em',
      position: 'relative',
      display: 'inline-block'
    }
  }, s.value, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -4,
      right: -4,
      bottom: 4,
      height: 12,
      background: FOOD_PAL.lime,
      zIndex: -1,
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: FOOD_PAL.inkSoft,
      marginTop: 12
    }
  }, s.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -20,
      left: 32,
      background: FOOD_PAL.bg,
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    color: FOOD_PAL.ink,
    size: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -20,
      right: 32,
      background: FOOD_PAL.bg,
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    color: FOOD_PAL.ink,
    size: 24
  })))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .food2-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .food2-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `));
}

// ── MANIFESTO ──────────────────────────────────────────────────────
function FoodManifesto2() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 40px',
      position: 'relative',
      background: FOOD_PAL.cream
    }
  }, /*#__PURE__*/React.createElement(Grain, {
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      color: FOOD_PAL.ink,
      textTransform: 'uppercase',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: FOOD_PAL.ink
    }
  }), "Manifesto · L'agence"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(56px, 7vw, 104px)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      margin: 0,
      maxWidth: 1100,
      color: FOOD_PAL.ink
    }
  }, "On fait de la ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: FOOD_PAL.lime,
      padding: '0 12px'
    }
  }, "food"), ". ", /*#__PURE__*/React.createElement("br", null), "Et on ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 600
    }
  }, "connaît"), " la food ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "mieux que personne.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    },
    className: "food2-mani-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FOOD_PAL.sans,
      fontSize: 17,
      lineHeight: 1.7,
      color: FOOD_PAL.inkSoft,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: FOOD_PAL.ink
    }
  }, "Hiving Food"), ", c'est la première agence d'influence en France ", /*#__PURE__*/React.createElement("em", null, "100% food"), ". On gère un roster de créateurs culinaires exclusifs (chefs, pâtissiers, food storytellers) qu'on accompagne en management, production et stratégie de contenu."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FOOD_PAL.sans,
      fontSize: 17,
      lineHeight: 1.7,
      color: FOOD_PAL.inkSoft,
      marginTop: 24
    }
  }, "On a aussi 2 studios cuisine pro à Clichy, une équipe de production interne, et 4 ans d'expérience à construire des campagnes qui transforment la marque en bouchée mémorable."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "food/agence.html",
    "data-cursor": true,
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: FOOD_PAL.ink,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      paddingBottom: 4,
      borderBottom: `2px solid ${FOOD_PAL.ink}`
    }
  }, "Découvrir l'agence ", /*#__PURE__*/React.createElement("span", null, "→")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, [{
    num: '01',
    title: 'Talent management',
    desc: 'Casting, négo, suivi de campagnes pour nos créateurs food exclusifs'
  }, {
    num: '02',
    title: 'Production studio',
    desc: '2 plateaux, équipe technique, post-prod : du brief à la livraison'
  }, {
    num: '03',
    title: 'Stratégie d\'influence',
    desc: 'Brand content, UGC, recettes, lives : on choisit le bon format'
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.num,
    style: {
      background: FOOD_PAL.bg,
      padding: '24px 28px',
      borderRadius: 12,
      border: `1.5px solid ${FOOD_PAL.ink}`,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontSize: 32,
      color: FOOD_PAL.lime,
      fontWeight: 700,
      lineHeight: 1,
      flexShrink: 0
    }
  }, c.num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 18,
      color: FOOD_PAL.ink,
      marginBottom: 4
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.sans,
      fontSize: 14,
      color: FOOD_PAL.inkSoft,
      lineHeight: 1.5
    }
  }, c.desc))))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .food2-mani-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `));
}

// ── TALENTS ────────────────────────────────────────────────────────
function FoodTalents2() {
  const featured = (window.FOOD_TALENTS || []).slice(0, 6);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 80,
      left: '5%'
    }
  }, /*#__PURE__*/React.createElement(Splat, {
    color: FOOD_PAL.lime,
    size: 80,
    style: {
      opacity: 0.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 32,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      color: FOOD_PAL.ink,
      textTransform: 'uppercase',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: FOOD_PAL.ink
    }
  }), "Roster · Nos talents"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(56px, 7vw, 104px)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      margin: 0,
      color: FOOD_PAL.ink
    }
  }, "nos créateurs", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "en exclusivité"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 600
    }
  }, "+"))), /*#__PURE__*/React.createElement("a", {
    href: "food/talents.html",
    "data-cursor": true,
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: FOOD_PAL.ink,
      textDecoration: 'none',
      padding: '14px 24px',
      borderRadius: 999,
      border: `1.5px solid ${FOOD_PAL.ink}`,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, "Voir tout le roster ↗")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    },
    className: "food2-talents-grid"
  }, featured.map((t, i) => {
    const tones = ['cream', 'warm', 'paper', 'lime', 'cream', 'warm'];
    return /*#__PURE__*/React.createElement("a", {
      key: t.slug,
      href: `food/talent.html?slug=${t.slug}`,
      "data-cursor": true,
      style: {
        position: 'relative',
        textDecoration: 'none',
        color: FOOD_PAL.ink,
        display: 'block',
        overflow: 'visible',
        transition: 'transform 320ms'
      },
      onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-6px) rotate(-0.5deg)',
      onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0) rotate(0)'
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: `1.5px solid ${FOOD_PAL.ink}`,
        borderRadius: 12,
        overflow: 'hidden'
      }
    }, t.photo ? /*#__PURE__*/React.createElement(FoodImg, {
      src: t.photo,
      alt: t.name,
      loading: "lazy",
      style: {
        width: '100%',
        aspectRatio: '3/4',
        objectFit: 'cover',
        display: 'block',
        filter: 'saturate(1.05)'
      }
    }) : /*#__PURE__*/React.createElement(FoodPH, {
      aspect: "3/4",
      label: t.name.toUpperCase(),
      tone: tones[i]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 2,
        fontFamily: FOOD_PAL.mono,
        fontSize: 10,
        letterSpacing: '0.16em',
        color: FOOD_PAL.ink,
        background: FOOD_PAL.bg,
        padding: '6px 10px',
        borderRadius: 999,
        border: `1.5px solid ${FOOD_PAL.ink}`
      }
    }, t.handle), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FOOD_PAL.display,
        fontWeight: 600,
        fontSize: 22,
        color: FOOD_PAL.ink,
        lineHeight: 1.1
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FOOD_PAL.mono,
        fontSize: 10,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: FOOD_PAL.inkSoft,
        marginTop: 4
      }
    }, t.role)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FOOD_PAL.hand,
        fontSize: 20,
        color: FOOD_PAL.ink,
        background: FOOD_PAL.lime,
        padding: '4px 10px',
        borderRadius: 999,
        border: `1.5px solid ${FOOD_PAL.ink}`,
        whiteSpace: 'nowrap'
      }
    }, t.insta)));
  }))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 1024px) { .food2-talents-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .food2-talents-grid { grid-template-columns: 1fr !important; } }
      `));
}

// ── BRANDS TRUST ───────────────────────────────────────────────────
function FoodBrands2() {
  const brands = window.FOOD_BRANDS || [];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 0',
      background: FOOD_PAL.warm,
      color: FOOD_PAL.ink,
      position: 'relative',
      overflow: 'hidden',
      borderTop: `1.5px solid ${FOOD_PAL.ink}`,
      borderBottom: `1.5px solid ${FOOD_PAL.ink}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 24,
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      color: FOOD_PAL.ink,
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: FOOD_PAL.ink
    }
  }), "Ils nous font confiance", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: FOOD_PAL.ink
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "food2-brandsmq",
    style: {
      display: 'flex',
      whiteSpace: 'nowrap'
    }
  }, [...brands, ...brands, ...brands].map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "food2-brand",
    "data-cursor": true,
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(32px, 4.5vw, 52px)',
      letterSpacing: '-0.02em',
      padding: '0 36px',
      flexShrink: 0,
      color: FOOD_PAL.ink,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 36
    }
  }, b, /*#__PURE__*/React.createElement("span", {
    className: "food2-brand-dot",
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: FOOD_PAL.ink,
      transition: 'transform 250ms, background 250ms'
    }
  })))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes food-marquee2 { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }
        .food2-brandsmq { animation: food-marquee2 16s linear infinite; will-change: transform; }
        .food2-brandsmq:hover { animation-play-state: paused; }
        .food2-brand { transition: transform 250ms cubic-bezier(.22,1,.36,1), color 250ms; }
        .food2-brand:hover { color: #b5d039 !important; transform: translateY(-5px) rotate(-1.5deg); }
        .food2-brand:hover .food2-brand-dot { background: #d4e85a !important; transform: scale(1.7); }
      `));
}

// ── CAMPAIGNS ──────────────────────────────────────────────────────
function FoodCampaigns2() {
  const items = (window.FOOD_CAMPAIGNS || []).slice(0, 4);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 32,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      color: FOOD_PAL.ink,
      textTransform: 'uppercase',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: FOOD_PAL.ink
    }
  }), "Case studies · Nos campagnes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(56px, 7vw, 104px)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      margin: 0,
      color: FOOD_PAL.ink
    }
  }, "Des campagnes qui", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "donnent faim"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400,
      color: FOOD_PAL.inkSoft
    }
  }, "& performent."))), /*#__PURE__*/React.createElement("a", {
    href: "food/campagnes.html",
    "data-cursor": true,
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: FOOD_PAL.ink,
      textDecoration: 'none',
      padding: '14px 24px',
      borderRadius: 999,
      border: `1.5px solid ${FOOD_PAL.ink}`
    }
  }, "Toutes les campagnes ↗")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24
    },
    className: "food2-camp-grid"
  }, items.map((c, i) => {
    const tones = ['cream', 'warm', 'paper', 'lime'];
    return /*#__PURE__*/React.createElement("a", {
      key: c.slug,
      href: `food/campagne.html?slug=${c.slug}`,
      "data-cursor": true,
      style: {
        background: FOOD_PAL.bg,
        borderRadius: 16,
        overflow: 'hidden',
        border: `1.5px solid ${FOOD_PAL.ink}`,
        textDecoration: 'none',
        color: FOOD_PAL.ink,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 280ms'
      },
      onMouseEnter: e => e.currentTarget.style.transform = 'translate(-4px, -4px)',
      onMouseLeave: e => e.currentTarget.style.transform = 'translate(0, 0)'
    }, c.video ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '16/9',
        overflow: 'hidden',
        background: FOOD_PAL.ink
      }
    }, /*#__PURE__*/React.createElement(LazyVid, {
      src: c.video,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })) : /*#__PURE__*/React.createElement(FoodPH, {
      aspect: "16/9",
      kind: "video",
      label: c.brand.toUpperCase(),
      tone: tones[i]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
        fontFamily: FOOD_PAL.mono,
        fontSize: 10,
        letterSpacing: '0.18em',
        color: FOOD_PAL.inkSoft,
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", null, c.sector)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: FOOD_PAL.display,
        fontWeight: 600,
        fontSize: 'clamp(24px, 2.4vw, 34px)',
        lineHeight: 1.1,
        color: FOOD_PAL.ink,
        margin: '0 0 16px',
        letterSpacing: '-0.01em'
      }
    }, c.title.split(/(\[.+?\])/).map((p, j) => p.startsWith('[') ? /*#__PURE__*/React.createElement("em", {
      key: j,
      style: {
        fontFamily: FOOD_PAL.serif,
        fontStyle: 'italic',
        fontWeight: 400
      }
    }, p.slice(1, -1)) : /*#__PURE__*/React.createElement(React.Fragment, {
      key: j
    }, p))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: FOOD_PAL.sans,
        fontSize: 14,
        lineHeight: 1.6,
        color: FOOD_PAL.inkSoft,
        margin: '0 0 24px',
        flex: 1
      }
    }, c.excerpt), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        paddingTop: 24,
        borderTop: `1px dashed ${FOOD_PAL.ink}30`
      }
    }, Object.entries(c.stats).slice(0, 3).map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FOOD_PAL.display,
        fontWeight: 700,
        fontSize: 24,
        color: FOOD_PAL.ink,
        lineHeight: 1
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FOOD_PAL.mono,
        fontSize: 9,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: FOOD_PAL.inkSoft,
        marginTop: 4
      }
    }, k))))));
  }))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) { .food2-camp-grid { grid-template-columns: 1fr !important; } }
      `));
}

// ── PROCESS ────────────────────────────────────────────────────────
function FoodProcess2() {
  const steps = window.FOOD_PROCESS || [];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 40px',
      background: FOOD_PAL.cream,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Grain, {
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      color: FOOD_PAL.ink,
      textTransform: 'uppercase',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: FOOD_PAL.ink
    }
  }), "Notre méthode"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(56px, 7vw, 104px)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      margin: 0,
      color: FOOD_PAL.ink,
      marginBottom: 64
    }
  }, "Du brief à la ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "diffusion"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginLeft: 16,
      transform: 'translateY(8px)'
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    color: FOOD_PAL.ink,
    size: 32
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0
    },
    className: "food2-proc-grid"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 32,
      borderRight: i < steps.length - 1 ? `1.5px dashed ${FOOD_PAL.ink}30` : 'none',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontSize: 80,
      color: FOOD_PAL.lime,
      fontWeight: 700,
      lineHeight: 0.85,
      marginBottom: 16,
      WebkitTextStroke: `1.5px ${FOOD_PAL.ink}`
    }
  }, s.num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 28,
      color: FOOD_PAL.ink,
      margin: '0 0 16px',
      letterSpacing: '-0.01em'
    }
  }, s.step), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FOOD_PAL.sans,
      fontSize: 14,
      lineHeight: 1.6,
      color: FOOD_PAL.inkSoft,
      margin: 0
    }
  }, s.desc))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .food2-proc-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .food2-proc-grid > div { border-right: none !important; border-bottom: 1.5px dashed ${FOOD_PAL.ink}30; padding-bottom: 32px !important; }
        }
        @media (max-width: 540px) {
          .food2-proc-grid { grid-template-columns: 1fr !important; }
        }
      `));
}

// ── STUDIOS — POLAROIDS 3D INCLINÉS ──────────────────────────────
function FoodStudios2() {
  const STUDIOS = [{
    slug: 'pro',
    num: '01',
    name: 'Studio',
    italic: 'Pro.',
    tag: 'Cuisine inox · Pro',
    pitch: 'Plateau pro inox, plafond technique, projecteurs Neewer. Pour les recettes high-end, brand films, pubs.',
    surface: '80m²',
    capacity: '2 chefs · 6 crew',
    price: '850€ HT',
    unit: '/ jour',
    hand: 'cuisine pro',
    tape: '#d4e85a',
    photos: ['/assets/studios/pro-1.webp?v=2', '/assets/studios/pro-2.webp?v=2', '/assets/studios/pro-3.webp?v=2', '/assets/studios/pro-4.webp?v=2', '/assets/studios/pro-5.webp?v=2', '/assets/studios/pro-6.webp?v=2'],
    rotate: -7
  }, {
    slug: 'famille',
    num: '02',
    name: 'Studio',
    italic: 'Famille.',
    tag: 'Maison · Lifestyle',
    pitch: 'Cuisine maison, parquet chevron, lumière douce. Format UGC, recettes lifestyle, contenus chaleureux.',
    surface: '65m²',
    capacity: '1 talent · 4 crew',
    price: '1 000€ HT',
    unit: '/ jour',
    hand: 'lifestyle',
    tape: '#e8dcc4',
    photos: ['/assets/studios/famille-1.webp?v=2', '/assets/studios/famille-2.webp?v=2', '/assets/studios/famille-3.webp?v=2', '/assets/studios/famille-4.webp?v=2', '/assets/studios/famille-5.webp?v=2', '/assets/studios/famille-6.webp?v=2', '/assets/studios/famille-7.webp?v=2', '/assets/studios/famille-8.webp?v=2', '/assets/studios/famille-9.webp?v=2'],
    rotate: 4
  }];
  const [active, setActive] = React.useState(null);
  const [photoIdx, setPhotoIdx] = React.useState({
    pro: 0,
    famille: 0,
    photo: 0
  });

  // auto-cycle photos on the hovered card
  React.useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setPhotoIdx(p => {
        const studio = STUDIOS.find(s => s.slug === active);
        const len = studio ? studio.photos.length : 3;
        return {
          ...p,
          [active]: ((p[active] || 0) + 1) % len
        };
      });
    }, 1400);
    return () => clearInterval(id);
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '140px 40px 160px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      pointerEvents: 'none',
      background: `radial-gradient(ellipse at top, ${FOOD_PAL.cream} 0%, transparent 60%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 80,
      left: '6%',
      fontFamily: FOOD_PAL.hand,
      fontSize: 22,
      color: FOOD_PAL.ink,
      opacity: 0.4,
      transform: 'rotate(-8deg)',
      pointerEvents: 'none'
    }
  }, "2 plateaux ↓"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 140,
      right: '8%',
      pointerEvents: 'none',
      fontFamily: FOOD_PAL.hand,
      fontSize: 32,
      color: FOOD_PAL.lime,
      WebkitTextStroke: `1px ${FOOD_PAL.ink}`,
      transform: 'rotate(6deg)'
    }
  }, "↗ Clichy"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 32,
      marginBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      color: FOOD_PAL.ink,
      textTransform: 'uppercase',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: FOOD_PAL.ink
    }
  }), "2 plateaux · Clichy 92"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(56px, 7vw, 104px)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      margin: 0,
      color: FOOD_PAL.ink
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 700,
      fontSize: '0.42em',
      display: 'inline-block',
      transform: 'rotate(-4deg)',
      marginRight: 16,
      color: FOOD_PAL.ink
    }
  }, "Nos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "studios "), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '0 8px',
      color: active === 'photo' ? FOOD_PAL.bg : FOOD_PAL.ink,
      transition: 'color 360ms'
    }
  }, (() => {
    const map = {
      pro: 'cuisine pro.',
      famille: 'cuisine famille.'
    };
    const label = active ? map[active] : 'cuisine pro.';
    return label.split('').map((ch, i) => /*#__PURE__*/React.createElement("span", {
      key: `${active || 'idle'}-${i}`,
      style: {
        display: 'inline-block',
        animation: `food2-letter 360ms ${i * 18}ms cubic-bezier(.2,1.6,.4,1) backwards`,
        whiteSpace: 'pre'
      }
    }, ch));
  })()), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: -4,
      right: -8,
      bottom: '8%',
      height: '34%',
      background: active === 'famille' ? FOOD_PAL.warm : active === 'photo' ? FOOD_PAL.ink : FOOD_PAL.lime,
      zIndex: 0,
      borderRadius: 2,
      transform: 'rotate(-1deg) skewX(-4deg)',
      transition: 'background 360ms'
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 540,
      marginTop: 32,
      marginBottom: 0,
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(18px, 1.5vw, 22px)',
      lineHeight: 1.5,
      color: FOOD_PAL.inkSoft
    }
  }, "80m² inox pro ou 65m² parquet chevron lifestyle. Deux ambiances, deux usages, une seule adresse à Clichy.")), /*#__PURE__*/React.createElement("a", {
    href: "https://hivingstudio.fr/",
    target: "_blank",
    rel: "noopener",
    "data-cursor": true,
    className: "food2-cta",
    style: {
      background: FOOD_PAL.lime,
      color: FOOD_PAL.ink,
      border: `1.5px solid ${FOOD_PAL.ink}`,
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '14px 22px 14px 26px',
      borderRadius: 999,
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      transition: 'transform 200ms, box-shadow 200ms',
      boxShadow: `2px 2px 0 ${FOOD_PAL.ink}`,
      flexShrink: 0
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translate(-2px, -2px)';
      e.currentTarget.style.boxShadow = `4px 4px 0 ${FOOD_PAL.ink}`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translate(0, 0)';
      e.currentTarget.style.boxShadow = `2px 2px 0 ${FOOD_PAL.ink}`;
    }
  }, "Réserver un plateau", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '2px 6px',
      background: FOOD_PAL.ink,
      color: FOOD_PAL.lime,
      borderRadius: 999,
      lineHeight: 1,
      fontWeight: 700
    }
  }, "↗"))), /*#__PURE__*/React.createElement("div", {
    className: "food2-studios-stage",
    style: {
      position: 'relative',
      perspective: '2000px',
      minHeight: 720,
      padding: '20px 0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '20px 0 60px',
      zIndex: 0,
      transform: 'rotateX(8deg)',
      transformOrigin: 'center bottom',
      background: `linear-gradient(180deg, transparent 0%, ${FOOD_PAL.ink}06 60%, ${FOOD_PAL.ink}10 100%)`,
      borderRadius: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 60,
      maxWidth: 960,
      margin: '0 auto',
      transformStyle: 'preserve-3d',
      transform: 'rotateX(6deg)',
      transformOrigin: 'center top'
    },
    className: "food2-studios-grid"
  }, STUDIOS.map((s, i) => {
    const isActive = active === s.slug;
    const isOther = active && active !== s.slug;
    const baseRotate = s.rotate;
    const liftZ = isActive ? 80 : 0;
    const scale = isActive ? 1.06 : isOther ? 0.96 : 1;
    const rotate = isActive ? 0 : baseRotate;
    const currentPhoto = s.photos[photoIdx[s.slug] || 0];
    return /*#__PURE__*/React.createElement("div", {
      key: s.slug,
      "data-cursor": true,
      onMouseEnter: () => setActive(s.slug),
      onMouseLeave: () => setActive(null),
      style: {
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `translateZ(${liftZ}px) scale(${scale})`,
        transition: 'transform 600ms cubic-bezier(.2,.9,.3,1.1)',
        zIndex: isActive ? 10 : 3 - i,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: FOOD_PAL.paper,
        padding: '20px 20px 80px',
        boxShadow: isActive ? `0 30px 60px -20px ${FOOD_PAL.ink}55, 0 12px 24px -8px ${FOOD_PAL.ink}30` : `0 12px 28px -8px ${FOOD_PAL.ink}40, 0 4px 12px -4px ${FOOD_PAL.ink}20`,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: 'center center',
        transition: 'box-shadow 600ms, transform 600ms cubic-bezier(.2,.9,.3,1.1)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: -14,
        left: '50%',
        transform: `translateX(-50%) rotate(${i % 2 === 0 ? -3 : 3}deg)`,
        width: 88,
        height: 28,
        background: s.tape,
        opacity: 0.85,
        borderLeft: `1px dashed ${FOOD_PAL.ink}25`,
        borderRight: `1px dashed ${FOOD_PAL.ink}25`,
        boxShadow: `0 2px 4px ${FOOD_PAL.ink}15`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '4/3',
        overflow: 'hidden',
        background: FOOD_PAL.cream
      }
    }, s.photos.map((src, pi) => /*#__PURE__*/React.createElement("img", {
      key: src,
      src: foodAsset(src),
      alt: `Studio ${s.italic.replace('.', '')} · vue ${pi + 1}`,
      loading: "lazy",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: pi === (photoIdx[s.slug] || 0) ? 1 : 0,
        transition: 'opacity 700ms'
      }
    })), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        background: `${FOOD_PAL.ink}d0`,
        color: FOOD_PAL.bg,
        fontFamily: FOOD_PAL.mono,
        fontSize: 9,
        letterSpacing: '0.14em',
        padding: '3px 8px',
        borderRadius: 2,
        opacity: isActive ? 1 : 0,
        transition: 'opacity 300ms'
      }
    }, ((photoIdx[s.slug] || 0) + 1).toString().padStart(2, '0'), " / ", s.photos.length.toString().padStart(2, '0')), isActive && /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: 12,
        left: 12,
        width: 64,
        height: 64,
        borderRadius: '50%',
        border: `2px solid ${FOOD_PAL.lime}`,
        color: FOOD_PAL.lime,
        background: `${FOOD_PAL.ink}88`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FOOD_PAL.display,
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        transform: 'rotate(-12deg)',
        animation: 'food2-stamp 280ms cubic-bezier(.2,1.6,.4,1)'
      }
    }, "OUVERT")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FOOD_PAL.hand,
        fontWeight: 600,
        fontSize: 24,
        color: FOOD_PAL.ink,
        lineHeight: 1,
        transform: 'rotate(-2deg)'
      }
    }, s.hand), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FOOD_PAL.mono,
        fontSize: 9,
        letterSpacing: '0.18em',
        color: FOOD_PAL.inkSoft,
        textTransform: 'uppercase'
      }
    }, "n°", s.num))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 64,
        background: isActive ? FOOD_PAL.ink : 'transparent',
        color: isActive ? FOOD_PAL.bg : FOOD_PAL.ink,
        border: `1.5px solid ${FOOD_PAL.ink}`,
        borderRadius: 16,
        padding: '22px 24px',
        transition: 'background 400ms, color 400ms'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: FOOD_PAL.mono,
        fontSize: 10,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: 12,
        opacity: 0.8
      }
    }, /*#__PURE__*/React.createElement("span", null, s.tag), /*#__PURE__*/React.createElement("span", null, s.surface)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: FOOD_PAL.display,
        fontWeight: 600,
        fontSize: 30,
        lineHeight: 1,
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, s.name, ' ', /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: FOOD_PAL.serif,
        fontStyle: 'italic',
        fontWeight: 400
      }
    }, s.italic)), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 14,
        marginBottom: 0,
        fontFamily: FOOD_PAL.display,
        fontSize: 13.5,
        lineHeight: 1.5,
        opacity: 0.85
      }
    }, s.pitch), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        paddingTop: 14,
        borderTop: `1px dashed ${isActive ? FOOD_PAL.bg + '40' : FOOD_PAL.ink + '30'}`,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FOOD_PAL.display,
        fontWeight: 700,
        fontSize: 26,
        display: 'flex',
        alignItems: 'baseline',
        gap: 6
      }
    }, s.price, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: FOOD_PAL.mono,
        fontSize: 10,
        letterSpacing: '0.14em',
        opacity: 0.6,
        fontWeight: 400
      }
    }, s.unit)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FOOD_PAL.mono,
        fontSize: 10,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        opacity: 0.7
      }
    }, s.capacity))));
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: FOOD_PAL.hand,
      fontSize: 18,
      color: FOOD_PAL.inkSoft,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "14",
    viewBox: "0 0 40 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 7 Q 10 2, 20 7 T 40 7",
    stroke: FOOD_PAL.ink,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    fill: "none",
    strokeDasharray: "2 3"
  })), "survolez pour explorer", /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "14",
    viewBox: "0 0 40 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 7 Q 10 12, 20 7 T 40 7",
    stroke: FOOD_PAL.ink,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    fill: "none",
    strokeDasharray: "2 3"
  }))))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes food2-stamp {
          0% { transform: rotate(-12deg) scale(0.4); opacity: 0; }
          60% { transform: rotate(-12deg) scale(1.15); opacity: 1; }
          100% { transform: rotate(-12deg) scale(1); opacity: 1; }
        }
        @keyframes food2-letter {
          0% { transform: translateY(28px) rotate(8deg); opacity: 0; }
          100% { transform: translateY(0) rotate(0deg); opacity: 1; }
        }
        @media (max-width: 1024px) {
          .food2-studios-grid { grid-template-columns: 1fr !important; gap: 60px !important; transform: none !important; }
          .food2-studios-stage { perspective: none !important; min-height: auto !important; }
        }
      `));
}

// ── FAQ ───────────────────────────────────────────────────────────
function FoodFAQ2() {
  const faq = window.FOOD_FAQ || [];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 40px',
      background: FOOD_PAL.cream,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr',
      gap: 64
    },
    className: "food2-faq-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      color: FOOD_PAL.ink,
      textTransform: 'uppercase',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: FOOD_PAL.ink
    }
  }), "FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(56px, 7vw, 104px)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      margin: 0,
      color: FOOD_PAL.ink
    }
  }, "Vos ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "questions")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FOOD_PAL.sans,
      fontSize: 15,
      color: FOOD_PAL.inkSoft,
      lineHeight: 1.6,
      marginTop: 24
    }
  }, "Tout ce que vous devez savoir avant de collaborer avec nous."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Splat, {
    color: FOOD_PAL.lime,
    size: 100
  }))), /*#__PURE__*/React.createElement("div", null, faq.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: i === 0 ? `1.5px solid ${FOOD_PAL.ink}` : 'none',
      borderBottom: `1.5px solid ${FOOD_PAL.ink}`
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    "data-cursor": true,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '24px 0',
      background: 'transparent',
      border: 'none',
      color: FOOD_PAL.ink,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: FOOD_PAL.display,
      fontSize: 'clamp(16px, 1.6vw, 20px)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontSize: 24,
      color: FOOD_PAL.lime,
      WebkitTextStroke: `1px ${FOOD_PAL.ink}`
    }
  }, String(i + 1).padStart(2, '0')), f.q), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: `1.5px solid ${FOOD_PAL.ink}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
      transition: 'transform 200ms',
      background: open === i ? FOOD_PAL.lime : 'transparent'
    }
  }, "+")), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24,
      paddingLeft: 40,
      fontFamily: FOOD_PAL.sans,
      fontSize: 15,
      lineHeight: 1.7,
      color: FOOD_PAL.inkSoft
    }
  }, f.a)))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) { .food2-faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `));
}

// ── FORMULAIRES (fonctions Vercel /api/*, envoi par e-mail via Resend) ──
// Aucun traceur. Messages lus par les lecteurs d'écran (aria-live).
const HF_CONTACT = 'contact@hivingfood.fr';
const HF_INDISPO = `Envoi momentanément indisponible, écrivez-nous à ${HF_CONTACT}.`;
const HF_SR_ONLY = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: 0
};
const HF_PIEGE = {
  position: 'absolute',
  left: '-10000px',
  width: 1,
  height: 1,
  overflow: 'hidden'
};
function hfPost(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(r => r.json().catch(() => ({})).then(d => ({
    ok: r.ok,
    status: r.status,
    data: d
  }))).catch(() => ({
    ok: false,
    status: 0,
    data: {}
  }));
}
function hfMessageErreur(res) {
  if (res.status === 503 || res.status === 0) return HF_INDISPO;
  return res.data && res.data.error || HF_INDISPO;
}

// Champ piège invisible : les robots le remplissent, les humains ne le voient pas.
function HfPiege() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: HF_PIEGE
  }, /*#__PURE__*/React.createElement("label", null, "Ne pas remplir", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "website",
    tabIndex: -1,
    autoComplete: "off",
    defaultValue: ""
  })));
}

// Newsletter « La carte du chef » / « la lettre du chef » — variant 'footer' (fond sombre) ou 'blog' (bandeau lime)
function FoodNewsletterForm({
  source = 'footer',
  variant = 'footer'
}) {
  const [etat, setEtat] = React.useState('idle'); // idle | envoi | ok | erreur
  const [msg, setMsg] = React.useState('');
  const id = 'hf-nl-' + source;
  const sombre = variant === 'footer';
  const envoyer = e => {
    e.preventDefault();
    const f = e.currentTarget;
    const email = f.elements.email.value.trim();
    if (!email || !f.elements.email.checkValidity()) {
      setEtat('erreur');
      setMsg('Indiquez une adresse e-mail valide.');
      return;
    }
    setEtat('envoi');
    setMsg('Envoi en cours…');
    hfPost('/api/newsletter', {
      email,
      source,
      website: f.elements.website.value
    }).then(res => {
      if (res.ok) {
        setEtat('ok');
        setMsg('Merci, c’est noté !');
        f.reset();
      } else {
        setEtat('erreur');
        setMsg(hfMessageErreur(res));
      }
    });
  };
  const formStyle = sombre ? {
    display: 'flex',
    gap: 6,
    padding: 5,
    position: 'relative',
    background: FOOD_PAL.bg,
    color: FOOD_PAL.ink,
    borderRadius: 999,
    border: `1.5px solid ${FOOD_PAL.lime}`
  } : {
    display: 'flex',
    gap: 0,
    position: 'relative'
  };
  const inputStyle = sombre ? {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: FOOD_PAL.ink,
    padding: '10px 14px',
    fontFamily: FOOD_PAL.sans,
    fontSize: 13,
    minWidth: 0
  } : {
    background: FOOD_PAL.bg,
    border: `1.5px solid ${FOOD_PAL.ink}`,
    borderRight: 'none',
    padding: '14px 18px',
    fontFamily: FOOD_PAL.sans,
    fontSize: 14,
    color: FOOD_PAL.ink,
    width: 240,
    minWidth: 0
  };
  const btnStyle = sombre ? {
    background: FOOD_PAL.ink,
    color: FOOD_PAL.lime,
    border: 'none',
    fontFamily: FOOD_PAL.display,
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '10px 18px',
    borderRadius: 999,
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  } : {
    background: FOOD_PAL.ink,
    color: FOOD_PAL.lime,
    padding: '14px 22px',
    border: `1.5px solid ${FOOD_PAL.ink}`,
    fontFamily: FOOD_PAL.display,
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: envoyer,
    noValidate: true,
    style: formStyle,
    "aria-describedby": id + '-statut'
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: HF_SR_ONLY
  }, "Votre adresse e-mail"), /*#__PURE__*/React.createElement("input", {
    id: id,
    name: "email",
    type: "email",
    required: true,
    autoComplete: "email",
    placeholder: sombre ? 'votre@email.com' : 'prenom@marque.com',
    style: inputStyle,
    "aria-invalid": etat === 'erreur' ? 'true' : undefined
  }), /*#__PURE__*/React.createElement(HfPiege, null), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "data-cursor": true,
    disabled: etat === 'envoi',
    "aria-disabled": etat === 'envoi',
    style: {
      ...btnStyle,
      opacity: etat === 'envoi' ? 0.6 : 1
    }
  }, etat === 'envoi' ? 'Envoi…' : 'S’abonner →')), /*#__PURE__*/React.createElement("p", {
    id: id + '-statut',
    role: "status",
    "aria-live": "polite",
    style: {
      margin: msg ? '8px 0 0' : 0,
      minHeight: 0,
      fontFamily: FOOD_PAL.sans,
      fontSize: 13,
      lineHeight: 1.4,
      color: sombre ? FOOD_PAL.lime : FOOD_PAL.ink,
      fontWeight: etat === 'erreur' ? 600 : 400
    }
  }, msg));
}

// Brief en 3 étapes — envoyé à /api/brief (validation refaite côté serveur)
const HF_BRIEF_TYPES = ['Campagne influence', 'Production de contenus / studio', 'Événementiel', 'Talents / créateurs food', 'Autre'];
const HF_BRIEF_BUDGETS = ['Moins de 5 000 € HT', '5 000 à 15 000 € HT', '15 000 à 50 000 € HT', 'Plus de 50 000 € HT', 'À définir'];
const HF_BRIEF_ECHEANCES = ['Dès que possible', 'Sous 1 mois', '1 à 3 mois', 'Plus de 3 mois', 'Pas encore fixée'];
function FoodBriefForm() {
  const [etape, setEtape] = React.useState(1);
  const [d, setD] = React.useState({
    type: '',
    company: '',
    budget: '',
    deadline: '',
    message: '',
    email: '',
    name: ''
  });
  const [erreurs, setErreurs] = React.useState({});
  const [etat, setEtat] = React.useState('idle'); // idle | envoi | ok | erreur
  const [msg, setMsg] = React.useState('');
  const titreRef = React.useRef(null);
  const premierRendu = React.useRef(true);
  React.useEffect(() => {
    if (premierRendu.current) {
      premierRendu.current = false;
      return;
    }
    if (titreRef.current) titreRef.current.focus();
  }, [etape, etat === 'ok']);
  const maj = k => e => setD({
    ...d,
    [k]: e.target.value
  });
  const verifier = n => {
    const er = {};
    if (n === 1 && !d.type) er.type = 'Choisissez un type de demande.';
    if (n === 2) {
      if (d.company.trim().length < 2) er.company = 'Indiquez votre marque ou société.';
      if (!d.budget) er.budget = 'Choisissez un budget indicatif.';
      if (!d.deadline) er.deadline = 'Choisissez une échéance.';
    }
    if (n === 3) {
      if (d.message.trim().length < 10) er.message = 'Décrivez votre projet en quelques mots (10 caractères minimum).';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) er.email = 'Adresse e-mail invalide.';
    }
    setErreurs(er);
    const cles = Object.keys(er);
    if (cles.length) {
      setEtat('erreur');
      setMsg(er[cles[0]]);
    } else {
      setEtat('idle');
      setMsg('');
    }
    return cles.length === 0;
  };
  const suivant = () => {
    if (verifier(etape)) setEtape(etape + 1);
  };
  const retour = () => {
    setErreurs({});
    setEtat('idle');
    setMsg('');
    setEtape(etape - 1);
  };
  const envoyer = e => {
    e.preventDefault();
    if (etape < 3) {
      suivant();
      return;
    }
    if (!verifier(3) || etat === 'envoi') return;
    setEtat('envoi');
    setMsg('Envoi en cours…');
    hfPost('/api/brief', {
      ...d,
      website: e.currentTarget.elements.website.value
    }).then(res => {
      if (res.ok) {
        setEtat('ok');
        setMsg('');
      } else {
        if (res.data && res.data.fields) setErreurs(res.data.fields);
        setEtat('erreur');
        setMsg(hfMessageErreur(res));
      }
    });
  };
  const champ = {
    width: '100%',
    boxSizing: 'border-box',
    background: FOOD_PAL.paper,
    color: FOOD_PAL.ink,
    border: `1.5px solid ${FOOD_PAL.ink}`,
    borderRadius: 12,
    padding: '12px 14px',
    fontFamily: FOOD_PAL.sans,
    fontSize: 15
  };
  const etiquette = {
    display: 'block',
    fontFamily: FOOD_PAL.mono,
    fontSize: 11,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    margin: '0 0 8px',
    color: FOOD_PAL.ink
  };
  const erreurTxt = {
    fontFamily: FOOD_PAL.sans,
    fontSize: 13,
    fontWeight: 600,
    margin: '6px 0 0',
    color: FOOD_PAL.ink
  };
  const bouton = plein => ({
    background: plein ? FOOD_PAL.ink : 'transparent',
    color: plein ? FOOD_PAL.lime : FOOD_PAL.ink,
    border: `2px solid ${FOOD_PAL.ink}`,
    borderRadius: 999,
    padding: '14px 26px',
    cursor: 'pointer',
    fontFamily: FOOD_PAL.display,
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '0.12em',
    textTransform: 'uppercase'
  });
  const pastilles = (nom, options) => /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-labelledby": 'hf-brief-' + nom + '-l',
    "aria-describedby": erreurs[nom] ? 'hf-brief-' + nom + '-e' : undefined,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, options.map(o => {
    const actif = d[nom] === o;
    return /*#__PURE__*/React.createElement("label", {
      key: o,
      "data-cursor": true,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        padding: '10px 16px',
        borderRadius: 999,
        border: `1.5px solid ${FOOD_PAL.ink}`,
        background: actif ? FOOD_PAL.ink : FOOD_PAL.paper,
        color: actif ? FOOD_PAL.lime : FOOD_PAL.ink,
        fontFamily: FOOD_PAL.sans,
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: nom,
      value: o,
      checked: actif,
      onChange: maj(nom),
      style: {
        accentColor: FOOD_PAL.ink,
        margin: 0
      }
    }), o);
  }));
  const carte = {
    maxWidth: 760,
    margin: '56px auto 0',
    textAlign: 'left',
    position: 'relative',
    background: FOOD_PAL.bg,
    color: FOOD_PAL.ink,
    border: `2px solid ${FOOD_PAL.ink}`,
    borderRadius: 24,
    padding: 'clamp(24px, 4vw, 40px)',
    boxShadow: `6px 6px 0 ${FOOD_PAL.ink}`
  };
  if (etat === 'ok') {
    return /*#__PURE__*/React.createElement("div", {
      style: carte
    }, /*#__PURE__*/React.createElement("h3", {
      ref: titreRef,
      tabIndex: -1,
      style: {
        fontFamily: FOOD_PAL.display,
        fontWeight: 700,
        fontSize: 28,
        margin: '0 0 12px',
        outline: 'none'
      }
    }, "Brief reçu, merci !"), /*#__PURE__*/React.createElement("p", {
      role: "status",
      "aria-live": "polite",
      style: {
        fontFamily: FOOD_PAL.sans,
        fontSize: 16,
        lineHeight: 1.55,
        margin: 0
      }
    }, "On revient vers vous sous 48h à l’adresse indiquée."));
  }
  const titres = {
    1: 'Votre demande',
    2: 'Votre marque et votre cadre',
    3: 'Votre projet'
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: envoyer,
    noValidate: true,
    style: carte,
    "aria-labelledby": "hf-brief-titre"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Brief en 3 étapes · étape ", etape, " / 3"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 20
    }
  }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      flex: 1,
      height: 6,
      borderRadius: 999,
      border: `1.5px solid ${FOOD_PAL.ink}`,
      background: n <= etape ? FOOD_PAL.ink : 'transparent'
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    id: "hf-brief-titre",
    ref: titreRef,
    tabIndex: -1,
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(22px, 2.4vw, 30px)',
      margin: '0 0 24px',
      outline: 'none'
    }
  }, titres[etape]), etape === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    id: "hf-brief-type-l",
    style: etiquette
  }, "Type de demande *"), pastilles('type', HF_BRIEF_TYPES), erreurs.type && /*#__PURE__*/React.createElement("p", {
    id: "hf-brief-type-e",
    style: erreurTxt
  }, erreurs.type)), etape === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "hf-brief-company",
    style: etiquette
  }, "Marque / société *"), /*#__PURE__*/React.createElement("input", {
    id: "hf-brief-company",
    type: "text",
    autoComplete: "organization",
    value: d.company,
    onChange: maj('company'),
    style: champ,
    "aria-invalid": erreurs.company ? 'true' : undefined,
    "aria-describedby": erreurs.company ? 'hf-brief-company-e' : undefined
  }), erreurs.company && /*#__PURE__*/React.createElement("p", {
    id: "hf-brief-company-e",
    style: erreurTxt
  }, erreurs.company)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    id: "hf-brief-budget-l",
    style: etiquette
  }, "Budget indicatif (HT) *"), pastilles('budget', HF_BRIEF_BUDGETS), erreurs.budget && /*#__PURE__*/React.createElement("p", {
    id: "hf-brief-budget-e",
    style: erreurTxt
  }, erreurs.budget)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "hf-brief-deadline",
    style: etiquette
  }, "Échéance *"), /*#__PURE__*/React.createElement("select", {
    id: "hf-brief-deadline",
    value: d.deadline,
    onChange: maj('deadline'),
    style: champ,
    "aria-invalid": erreurs.deadline ? 'true' : undefined,
    "aria-describedby": erreurs.deadline ? 'hf-brief-deadline-e' : undefined
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Choisir…"), HF_BRIEF_ECHEANCES.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), erreurs.deadline && /*#__PURE__*/React.createElement("p", {
    id: "hf-brief-deadline-e",
    style: erreurTxt
  }, erreurs.deadline))), etape === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "hf-brief-message",
    style: etiquette
  }, "Votre message *"), /*#__PURE__*/React.createElement("textarea", {
    id: "hf-brief-message",
    rows: 5,
    value: d.message,
    onChange: maj('message'),
    style: {
      ...champ,
      resize: 'vertical'
    },
    placeholder: "Produit, cible, objectifs, formats envisagés…",
    "aria-invalid": erreurs.message ? 'true' : undefined,
    "aria-describedby": erreurs.message ? 'hf-brief-message-e' : undefined
  }), erreurs.message && /*#__PURE__*/React.createElement("p", {
    id: "hf-brief-message-e",
    style: erreurTxt
  }, erreurs.message)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "hf-brief-email",
    style: etiquette
  }, "E-mail *"), /*#__PURE__*/React.createElement("input", {
    id: "hf-brief-email",
    type: "email",
    autoComplete: "email",
    value: d.email,
    onChange: maj('email'),
    style: champ,
    "aria-invalid": erreurs.email ? 'true' : undefined,
    "aria-describedby": erreurs.email ? 'hf-brief-email-e' : undefined
  }), erreurs.email && /*#__PURE__*/React.createElement("p", {
    id: "hf-brief-email-e",
    style: erreurTxt
  }, erreurs.email)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "hf-brief-name",
    style: etiquette
  }, "Nom (facultatif)"), /*#__PURE__*/React.createElement("input", {
    id: "hf-brief-name",
    type: "text",
    autoComplete: "name",
    value: d.name,
    onChange: maj('name'),
    style: champ
  })))), /*#__PURE__*/React.createElement(HfPiege, null), /*#__PURE__*/React.createElement("p", {
    role: "status",
    "aria-live": "polite",
    style: {
      fontFamily: FOOD_PAL.sans,
      fontSize: 14,
      fontWeight: etat === 'erreur' ? 600 : 400,
      margin: msg ? '20px 0 0' : 0
    }
  }, msg, etat === 'erreur' && msg === HF_INDISPO && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + HF_CONTACT,
    style: {
      color: FOOD_PAL.ink
    }
  }, "Écrire un e-mail"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: 24
    }
  }, etape > 1 ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-cursor": true,
    onClick: retour,
    style: bouton(false)
  }, "← Retour") : /*#__PURE__*/React.createElement("span", null), etape < 3 ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-cursor": true,
    onClick: suivant,
    style: bouton(true)
  }, "Suivant →") : /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "data-cursor": true,
    disabled: etat === 'envoi',
    "aria-disabled": etat === 'envoi',
    style: {
      ...bouton(true),
      opacity: etat === 'envoi' ? 0.6 : 1
    }
  }, etat === 'envoi' ? 'Envoi en cours…' : 'Envoyer mon brief →')));
}
// ── CONTACT/FOOTER ──────────────────────────────────────────────────
function FoodFooter2() {
  const inSub = typeof window !== 'undefined' && window.location.pathname.includes('/food/');
  const homeBase = '/';
  const sub = p => inSub ? p : 'food/' + p;
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: FOOD_PAL.lime,
      color: FOOD_PAL.ink,
      padding: 'clamp(80px, 12vw, 140px) 40px 100px',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: `2px solid ${FOOD_PAL.ink}`
    }
  }, /*#__PURE__*/React.createElement(Grain, {
    opacity: 0.07
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 60,
      left: '6%',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Splat, {
    color: FOOD_PAL.ink,
    size: 140,
    style: {
      transform: 'rotate(-18deg)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 80,
      right: '8%',
      opacity: 0.35
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    color: FOOD_PAL.ink,
    size: 48
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 20px',
      borderRadius: 999,
      background: FOOD_PAL.ink,
      color: FOOD_PAL.lime,
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: FOOD_PAL.lime
    }
  }), "On parle ? Réponse sous 24h"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(64px, 14vw, 220px)',
      lineHeight: 0.82,
      letterSpacing: '-0.05em',
      margin: 0,
      color: FOOD_PAL.ink,
      textWrap: 'balance'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 600,
      transform: 'rotate(-3deg)',
      display: 'inline-block',
      fontSize: '0.7em',
      marginRight: 16,
      color: FOOD_PAL.ink
    }
  }, "passez"), "à ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400,
      position: 'relative',
      display: 'inline-block'
    }
  }, "table", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -12,
      right: -12,
      bottom: '8%',
      height: '20%',
      background: FOOD_PAL.ink,
      opacity: 0.12,
      zIndex: -1,
      transform: 'rotate(-1deg) skewX(-6deg)',
      borderRadius: 4
    }
  })), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '36px auto 48px',
      maxWidth: 640,
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontSize: 'clamp(18px, 1.6vw, 22px)',
      lineHeight: 1.55,
      color: FOOD_PAL.ink
    }
  }, "Brief en 30 min. Devis sous 48h. Une équipe qui ne fait que ça depuis 2022. Si la food, c'est votre marque, c'est notre métier."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@hivingfood.fr",
    "data-cursor": true,
    style: {
      background: FOOD_PAL.ink,
      color: FOOD_PAL.lime,
      padding: '20px 36px',
      borderRadius: 999,
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      boxShadow: `4px 4px 0 ${FOOD_PAL.ink}`,
      border: `2px solid ${FOOD_PAL.ink}`
    }
  }, "contact@hivingfood.fr ", /*#__PURE__*/React.createElement("span", null, "↗")), /*#__PURE__*/React.createElement("a", {
    href: sub('agence.html'),
    "data-cursor": true,
    style: {
      background: 'transparent',
      color: FOOD_PAL.ink,
      padding: '20px 36px',
      borderRadius: 999,
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      border: `2px solid ${FOOD_PAL.ink}`
    }
  }, "Découvrir l'agence")), /*#__PURE__*/React.createElement(FoodBriefForm, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: FOOD_PAL.cream,
      borderBottom: `1.5px solid ${FOOD_PAL.ink}`,
      padding: '20px 0',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      animation: 'food2-marq 38s linear infinite',
      fontFamily: FOOD_PAL.display,
      fontWeight: 600,
      fontSize: 18,
      color: FOOD_PAL.ink,
      whiteSpace: 'nowrap',
      alignItems: 'center'
    }
  }, [...FOOD_BRANDS, ...FOOD_BRANDS, ...FOOD_BRANDS].map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, b), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: FOOD_PAL.lime,
      fontSize: 14
    }
  }, "✦"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: FOOD_PAL.ink,
      color: FOOD_PAL.bg,
      padding: '88px 40px 40px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Grain, {
    opacity: 0.08
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
      gap: 48,
      paddingBottom: 72,
      borderBottom: `1px dashed ${FOOD_PAL.bg}20`
    },
    className: "food2-foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: homeBase,
    style: {
      position: 'relative',
      display: 'inline-block',
      textDecoration: 'none',
      marginBottom: 28
    },
    "data-cursor": true
  }, /*#__PURE__*/React.createElement("img", {
    src: foodAsset('assets/hiving-full-white.svg'),
    alt: "HIVING",
    style: {
      height: 36,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -10,
      bottom: -8,
      fontFamily: FOOD_PAL.hand,
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 0.8,
      color: FOOD_PAL.lime,
      transform: 'rotate(-8deg)',
      pointerEvents: 'none'
    }
  }, "food")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.3,
      color: FOOD_PAL.bg,
      marginTop: 6,
      marginBottom: 22,
      letterSpacing: '0.01em'
    }
  }, "une cuisine d'idées."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FOOD_PAL.sans,
      fontSize: 14,
      lineHeight: 1.65,
      color: FOOD_PAL.bg,
      opacity: 0.7,
      maxWidth: 360,
      margin: '0 0 24px'
    }
  }, "Première agence d'influence food en France. Des créateurs exclusifs, 2 studios cuisine pro à Clichy, et une obsession : faire saliver vos audiences."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, [['Instagram', 'https://www.instagram.com/hivingfood/'], ['TikTok', 'https://www.tiktok.com/@hivingfood']].map(([s, u]) => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: u,
    target: "_blank",
    rel: "noopener",
    "data-cursor": true,
    style: {
      fontFamily: FOOD_PAL.display,
      fontSize: 11,
      color: FOOD_PAL.bg,
      padding: '8px 14px',
      border: `1px solid ${FOOD_PAL.bg}30`,
      borderRadius: 999,
      textDecoration: 'none',
      fontWeight: 500,
      letterSpacing: '0.06em',
      transition: 'all 200ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = FOOD_PAL.lime;
      e.currentTarget.style.color = FOOD_PAL.ink;
      e.currentTarget.style.borderColor = FOOD_PAL.lime;
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = FOOD_PAL.bg;
      e.currentTarget.style.borderColor = FOOD_PAL.bg + '30';
    }
  }, s, " ↗")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.22em',
      color: FOOD_PAL.lime,
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "Le menu"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [{
    l: "L'agence",
    h: sub('agence.html')
  }, {
    l: 'Talents',
    h: sub('talents.html')
  }, {
    l: 'Campagnes',
    h: sub('campagnes.html')
  }, {
    l: 'Événementiel',
    h: sub('evenementiel.html')
  }, {
    l: 'Studios',
    h: sub('studios.html')
  }].map(it => /*#__PURE__*/React.createElement("li", {
    key: it.l
  }, /*#__PURE__*/React.createElement("a", {
    href: it.h,
    "data-cursor": true,
    style: {
      color: FOOD_PAL.bg,
      textDecoration: 'none',
      fontFamily: FOOD_PAL.display,
      fontSize: 15,
      opacity: 0.85
    }
  }, it.l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.22em',
      color: FOOD_PAL.lime,
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "Resources"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [{
    l: 'Blog & insights',
    h: sub('blog.html')
  }, {
    l: 'Influence gastronomie',
    h: '/food/agence-influenceurs-gastronomie/'
  }, {
    l: 'Influence restaurant',
    h: '/food/influence-restaurant/'
  }, {
    l: 'Influence GMS',
    h: '/food/influence-grande-distribution/'
  }, {
    l: 'Vins & spiritueux',
    h: '/food/influence-vins-spiritueux/'
  }, {
    l: 'Contact',
    h: 'mailto:contact@hivingfood.fr'
  }].map(it => /*#__PURE__*/React.createElement("li", {
    key: it.l
  }, /*#__PURE__*/React.createElement("a", {
    href: it.h,
    "data-cursor": true,
    style: {
      color: FOOD_PAL.bg,
      textDecoration: 'none',
      fontFamily: FOOD_PAL.display,
      fontSize: 15,
      opacity: 0.85
    }
  }, it.l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.22em',
      color: FOOD_PAL.lime,
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "La carte du chef"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FOOD_PAL.sans,
      fontSize: 13,
      color: FOOD_PAL.bg,
      opacity: 0.7,
      margin: '0 0 16px',
      lineHeight: 1.55
    }
  }, "Une fois par mois, les insights food et les coulisses des campagnes."), /*#__PURE__*/React.createElement(FoodNewsletterForm, {
    source: "footer",
    variant: "footer"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.18em',
      color: FOOD_PAL.bg,
      opacity: 0.5,
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contact@hivingfood.fr",
    "data-cursor": true,
    style: {
      color: FOOD_PAL.bg,
      fontFamily: FOOD_PAL.display,
      fontSize: 16,
      fontWeight: 500,
      textDecoration: 'none',
      borderBottom: `2px solid ${FOOD_PAL.lime}`
    }
  }, "contact@hivingfood.fr")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.18em',
      color: FOOD_PAL.bg,
      opacity: 0.5,
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Adresse"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: FOOD_PAL.bg,
      fontFamily: FOOD_PAL.display,
      fontSize: 14,
      opacity: 0.85,
      lineHeight: 1.5
    }
  }, "4 Rue Mozart", /*#__PURE__*/React.createElement("br", null), "92110 Clichy")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72,
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 1fr',
      gap: 28,
      alignItems: 'stretch'
    },
    className: "food2-creative-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: FOOD_PAL.bg,
      color: FOOD_PAL.ink,
      padding: '24px 26px 20px',
      position: 'relative',
      fontFamily: FOOD_PAL.mono,
      fontSize: 11,
      lineHeight: 1.6,
      boxShadow: `4px 4px 0 ${FOOD_PAL.lime}`,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 96% 97%, 92% 100%, 88% 97%, 84% 100%, 80% 97%, 76% 100%, 72% 97%, 68% 100%, 64% 97%, 60% 100%, 56% 97%, 52% 100%, 48% 97%, 44% 100%, 40% 97%, 36% 100%, 32% 97%, 28% 100%, 24% 97%, 20% 100%, 16% 97%, 12% 100%, 8% 97%, 4% 100%, 0 97%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      borderBottom: `1.5px dashed ${FOOD_PAL.ink}`,
      paddingBottom: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: '0.16em'
    }
  }, "HIVING FOOD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      opacity: 0.6,
      marginTop: 2
    }
  }, "4 RUE MOZART · 92110 CLICHY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      opacity: 0.6
    }
  }, "TICKET N°2026-001")), [['Influence campaigns', '×38'], ['Talents exclusifs', '×14'], ['Studios cuisine pro', '×3'], ['Vues cumulées', '420M+'], ['Audiences saliées', '∞']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3px 0'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      paddingTop: 12,
      borderTop: `1.5px dashed ${FOOD_PAL.ink}`,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "TOTAL"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: FOOD_PAL.tomato
    }
  }, "Saliv'addiction")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      textAlign: 'center',
      fontSize: 9,
      opacity: 0.7,
      letterSpacing: '0.1em'
    }
  }, "★ MERCI DE VOTRE VISITE ★")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: FOOD_PAL.lime,
      color: FOOD_PAL.ink,
      padding: '48px 28px 32px',
      position: 'relative',
      border: `2px solid ${FOOD_PAL.bg}`,
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 240,
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement(Grain, {
    opacity: 0.05
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -14,
      left: '50%',
      transform: 'translateX(-50%) rotate(-2deg)',
      background: FOOD_PAL.bg,
      color: FOOD_PAL.ink,
      padding: '6px 16px',
      fontFamily: FOOD_PAL.mono,
      fontSize: 9,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      border: `1.5px solid ${FOOD_PAL.ink}`,
      whiteSpace: 'nowrap',
      zIndex: 2
    }
  }, "Plat du jour"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontSize: 14,
      opacity: 0.7
    }
  }, "ouvert depuis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 96,
      lineHeight: 0.9,
      letterSpacing: '-0.04em',
      margin: '4px 0'
    }
  }, "2022"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 700,
      fontSize: 28,
      transform: 'rotate(-4deg)',
      display: 'inline-block',
      marginTop: -4
    }
  }, "la maison")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: FOOD_PAL.mono,
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.7,
      paddingTop: 16,
      borderTop: `1px dashed ${FOOD_PAL.ink}40`
    }
  }, /*#__PURE__*/React.createElement("span", null, "Clichy · FR"), /*#__PURE__*/React.createElement("span", null, "48.9039°N"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'transparent',
      color: FOOD_PAL.bg,
      padding: '28px 24px',
      position: 'relative',
      border: `1px dashed ${FOOD_PAL.bg}30`,
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 220,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.22em',
      color: FOOD_PAL.lime,
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Le mot du chef"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontSize: 16,
      lineHeight: 1.5,
      margin: 0,
      color: FOOD_PAL.bg
    }
  }, "« On ne fait pas que de la com food.", /*#__PURE__*/React.createElement("br", null), "On ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: FOOD_PAL.lime,
      fontWeight: 600
    }
  }, "cuisine"), " des marques. »")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 700,
      fontSize: 38,
      color: FOOD_PAL.lime,
      lineHeight: 1,
      transform: 'rotate(-3deg)',
      display: 'inline-block'
    }
  }, "L'équipe Hiving"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 9,
      letterSpacing: '0.16em',
      color: FOOD_PAL.bg,
      opacity: 0.5,
      textTransform: 'uppercase',
      marginTop: 6
    }
  }, "Toute l'équipe en cuisine"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -8,
      top: -8,
      width: 88,
      height: 88,
      borderRadius: '50%',
      border: `2px solid ${FOOD_PAL.tomato}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      transform: 'rotate(-12deg)',
      color: FOOD_PAL.tomato,
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.14em'
    }
  }, "APPROVED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontSize: 10,
      marginTop: 1
    }
  }, "by the team"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.mono,
      fontSize: 8,
      letterSpacing: '0.1em',
      marginTop: 1
    }
  }, "· 2026 ·"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      paddingTop: 40,
      borderTop: `1px dashed ${FOOD_PAL.bg}20`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: foodAsset('assets/hiving-full-white.svg'),
    alt: "HIVING",
    style: {
      height: 28,
      display: 'block',
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontSize: 15,
      color: FOOD_PAL.bg,
      opacity: 0.6
    }
  }, "une cuisine d'idées.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      fontFamily: FOOD_PAL.mono,
      fontSize: 9,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: FOOD_PAL.bg,
      opacity: 0.5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: FOOD_PAL.lime,
      animation: 'food2-pulse 2s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", null, "Studio ouvert · Lun–Ven · 09–19h"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FOOD_PAL.display,
      fontWeight: 700,
      fontSize: 'clamp(48px, 9vw, 140px)',
      lineHeight: 0.88,
      letterSpacing: '-0.045em',
      color: FOOD_PAL.bg,
      textWrap: 'balance'
    }
  }, "On fait ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "saliver"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FOOD_PAL.hand,
      fontWeight: 700,
      color: FOOD_PAL.lime,
      transform: 'rotate(-2deg)',
      display: 'inline-block'
    }
  }, "vos"), ' ', "audiences ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      transform: 'rotate(-12deg)',
      color: FOOD_PAL.lime
    }
  }, "↗"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 24,
      borderTop: `1px dashed ${FOOD_PAL.bg}20`,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: 32,
      alignItems: 'center',
      flexWrap: 'wrap',
      fontFamily: FOOD_PAL.mono,
      fontSize: 10,
      letterSpacing: '0.14em',
      color: FOOD_PAL.bg,
      textTransform: 'uppercase'
    },
    className: "food2-foot-legal"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "© 2026 HIVING FOOD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      opacity: 0.55
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      background: FOOD_PAL.lime,
      borderRadius: '50%'
    }
  }), "Table 04"), /*#__PURE__*/React.createElement("span", null, "·"), /*#__PURE__*/React.createElement("span", null, "Cuisson medium-rare"), /*#__PURE__*/React.createElement("span", null, "·"), /*#__PURE__*/React.createElement("span", null, "Fait ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: FOOD_PAL.tomato
    }
  }, "♥"), " à Clichy"), /*#__PURE__*/React.createElement("span", null, "·"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      textTransform: 'none',
      fontFamily: FOOD_PAL.serif,
      letterSpacing: 0,
      fontSize: 12
    }
  }, "« bon appétit »")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      opacity: 0.55
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/mentions-legales.html",
    "data-cursor": true,
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Mentions"), /*#__PURE__*/React.createElement("a", {
    href: "/politique-confidentialite.html",
    "data-cursor": true,
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Confidentialité"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "data-hf-consent-open": true,
    "data-cursor": true,
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Gérer mes cookies"))))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes food2-marq { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes food2-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        @media (max-width: 1100px) {
          .food2-foot-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .food2-creative-grid { grid-template-columns: 1fr 1fr !important; }
          .food2-foot-legal { grid-template-columns: 1fr !important; gap: 16px !important; text-align: center; }
        }
        @media (max-width: 700px) {
          .food2-foot-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .food2-creative-grid { grid-template-columns: 1fr !important; }
        }
      `));
}

// ── ECOSYSTEME (le groupe : Hiving Food · Hiving · SËNSE) ───────────
function FoodEcosystem2() {
  const P = FOOD_PAL;
  const bands = [{
    key: 'food',
    marq: 'HIVING FOOD',
    tag: 'Vous êtes ici',
    name: 'Hiving Food',
    logo: 'img/eco-v2/food-dark.svg',
    disc: 'La verticale food',
    line: 'Chefs, pâtissiers et food creators. La facette que vous connaissez déjà.',
    cta: 'C’est déjà chez vous',
    href: null,
    here: true,
    stat: {
      to: 420,
      suf: 'M+',
      lbl: 'vues produites'
    },
    photos: [{
      src: 'img/eco-v2/food-1.jpg',
      name: 'Qistoh'
    }, {
      src: 'img/eco-v2/food-2.jpg',
      name: 'Jules'
    }, {
      src: 'img/eco-v2/food-3.jpg',
      name: 'Damien Pichon'
    }, {
      src: 'img/eco-v2/food-4.jpg',
      name: 'Kilian'
    }, {
      src: 'img/eco-v2/food-6.jpg',
      name: 'Swiss Fit Cook'
    }]
  }, {
    key: 'hiving',
    marq: 'HIVING · LIFESTYLE & SPORT',
    tag: 'L’agence',
    name: 'Hiving',
    logo: 'img/logo/hiving-black.png',
    disc: 'Lifestyle & sport',
    line: 'L’agence de talents du groupe. Les mêmes marques, d’autres terrains de jeu.',
    cta: 'Découvrir l’agence',
    href: 'https://hiving.me?utm_source=hivingfood&utm_medium=ecosysteme&utm_campaign=crosssell',
    stat: {
      to: 100,
      suf: 'M+',
      lbl: 'communauté'
    },
    photos: [{
      src: 'img/eco-v2/hiving-1.jpg',
      name: 'Gaël Monfils'
    }, {
      src: 'img/eco-v2/hiving-2.jpg',
      name: 'Matteo'
    }, {
      src: 'img/eco-v2/hiving-3.jpg',
      name: 'Amandine'
    }, {
      src: 'img/eco-v2/hiving-4.jpg',
      name: 'Ethan'
    }, {
      src: 'img/eco-v2/hiving-5.jpg',
      name: 'Shana'
    }, {
      src: 'img/eco-v2/hiving-6.jpg',
      name: 'Jimmy Gressier'
    }]
  }, {
    key: 'sense',
    marq: 'SËNSE · STUDIO',
    tag: 'Le studio créatif',
    name: 'SËNSE',
    logo: 'img/eco-v2/sense-noir.svg',
    disc: 'Stratégie · prod · amplif',
    line: 'La stratégie et la production derrière l’influence. Pensée, tournée, amplifiée.',
    cta: 'Entrer dans le studio',
    href: 'https://sense.contact?utm_source=hivingfood&utm_medium=ecosysteme&utm_campaign=crosssell',
    stat: {
      to: 50,
      suf: '+',
      lbl: 'marques'
    },
    photos: [{
      src: 'img/eco-v2/sense-1.jpg',
      name: 'Kenzo'
    }, {
      src: 'img/eco-v2/sense-2.jpg',
      name: 'Kenzo'
    }, {
      src: 'img/eco-v2/sense-3.jpg',
      name: 'Campagne'
    }, {
      src: 'img/eco-v2/sense-4.jpg',
      name: 'Studio'
    }, {
      src: 'img/eco-v2/sense-5.jpg',
      name: 'ECLA'
    }, {
      src: 'img/eco-v2/sense-6.jpg',
      name: 'Direction'
    }]
  }];
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.prototype.slice.call(root.querySelectorAll('.eco2-band'));
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const canHover = window.matchMedia('(hover:hover)').matches;
    function countUp(band) {
      if (band.dataset.counted) return;
      band.dataset.counted = '1';
      const el = band.querySelector('.eco2-stat-num');
      if (!el) return;
      const to = parseInt(el.getAttribute('data-to'), 10) || 0;
      const dur = 1300;
      let start = null;
      function step(ts) {
        if (start === null) start = ts;
        const k = Math.min((ts - start) / dur, 1);
        const e = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(to * e);
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (reduce) {
      els.forEach(e => {
        e.classList.add('is-live');
        const n = e.querySelector('.eco2-stat-num');
        if (n) n.textContent = n.getAttribute('data-to');
      });
      return;
    }
    const io = new IntersectionObserver(ents => {
      ents.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-live');
          countUp(e.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-24% 0px -24% 0px'
    });
    els.forEach(e => io.observe(e));
    const handlers = [];
    if (canHover) {
      els.forEach(band => {
        const enter = () => {
          band.classList.add('is-live');
          countUp(band);
          els.forEach(o => {
            if (o !== band) o.classList.add('is-dim');
          });
        };
        const leave = () => {
          els.forEach(o => o.classList.remove('is-dim'));
        };
        band.addEventListener('mouseenter', enter);
        band.addEventListener('mouseleave', leave);
        handlers.push([band, enter, leave]);
      });
    }
    return () => {
      io.disconnect();
      handlers.forEach(([b, en, lv]) => {
        b.removeEventListener('mouseenter', en);
        b.removeEventListener('mouseleave', lv);
      });
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    ref: rootRef,
    style: {
      padding: '110px 0 40px',
      position: 'relative',
      background: P.cream
    }
  }, /*#__PURE__*/React.createElement(Grain, {
    opacity: 0.04
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      padding: '0 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eco2-float",
    style: {
      position: 'absolute',
      top: -6,
      right: 40
    }
  }, /*#__PURE__*/React.createElement(Splat, {
    color: P.lime,
    size: 90,
    style: {
      opacity: 0.6
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 30,
      right: 116,
      fontFamily: P.hand,
      fontSize: 26,
      color: P.ink,
      transform: 'rotate(-8deg)',
      lineHeight: 1
    }
  }, "une même adresse", /*#__PURE__*/React.createElement(Swoosh, {
    color: P.ink,
    width: 120,
    style: {
      marginTop: 2,
      transform: 'rotate(2deg)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: 'rotate(-3deg)',
      fontFamily: P.mono,
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: P.ink,
      background: P.paper,
      border: `1.5px solid ${P.ink}`,
      padding: '5px 12px',
      boxShadow: '2px 2px 0 rgba(10,9,8,0.25)',
      marginBottom: 22
    }
  }, "◦ Le groupe ◦"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: P.display,
      fontWeight: 700,
      fontSize: 'clamp(48px, 6.2vw, 96px)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      margin: 0,
      color: P.ink
    }
  }, "La food n’est qu’une ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: P.lime,
      padding: '0 12px'
    }
  }, "facette"), ".", /*#__PURE__*/React.createElement("br", null), "Une ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.hand,
      fontWeight: 600
    }
  }, "même"), " maison, trois ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, "métiers.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: P.sans,
      fontSize: 17,
      lineHeight: 1.7,
      color: P.inkSoft,
      marginTop: 24,
      maxWidth: 700
    }
  }, "Hiving Food, c’est la verticale food du groupe. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: P.ink
    }
  }, "Même adresse, même équipe"), " à Clichy, avec les talents lifestyle & sport de Hiving et le studio créatif SËNSE derrière chaque campagne.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      borderTop: `1.5px solid ${P.ink}`
    }
  }, bands.map(b => {
    const Tag = b.href ? 'a' : 'article';
    const linkProps = b.href ? {
      href: b.href,
      target: '_blank',
      rel: 'noopener',
      'data-cursor': ''
    } : {};
    return /*#__PURE__*/React.createElement(Tag, {
      key: b.key,
      className: `eco2-band${b.href ? ' eco2-band--link' : ''}`,
      "data-brand": b.key,
      ...linkProps
    }, /*#__PURE__*/React.createElement("div", {
      className: "eco2-marq",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eco2-track"
    }, Array.from({
      length: 8
    }).map((_, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "eco2-word"
    }, b.marq), /*#__PURE__*/React.createElement("span", {
      className: "eco2-dot",
      style: {
        '--d': i % 4
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "eco2-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eco2-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eco2-copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eco2-label",
      style: b.here ? {
        background: P.lime,
        border: `1.5px solid ${P.ink}`,
        padding: '5px 11px',
        borderRadius: 999
      } : {}
    }, b.tag), /*#__PURE__*/React.createElement("div", {
      className: "eco2-idr"
    }, /*#__PURE__*/React.createElement("img", {
      className: "eco2-logo",
      src: b.logo,
      alt: b.name,
      "data-brand": b.key
    }), /*#__PURE__*/React.createElement("span", {
      className: "eco2-disc"
    }, b.disc)), /*#__PURE__*/React.createElement("p", null, b.line), /*#__PURE__*/React.createElement("div", {
      className: "eco2-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eco2-stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eco2-stat-num",
      "data-to": b.stat.to
    }, "0"), /*#__PURE__*/React.createElement("span", {
      className: "eco2-stat-suf"
    }, b.stat.suf), /*#__PURE__*/React.createElement("span", {
      className: "eco2-stat-lbl"
    }, b.stat.lbl)), /*#__PURE__*/React.createElement("span", {
      className: "eco2-cta"
    }, b.cta, " ", /*#__PURE__*/React.createElement("span", null, b.href ? '→' : '✓')))), /*#__PURE__*/React.createElement("div", {
      className: "eco2-reel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eco2-reel__track"
    }, [...b.photos, ...b.photos, ...b.photos].map((p, i) => /*#__PURE__*/React.createElement("div", {
      className: "eco2-rcard",
      key: i
    }, /*#__PURE__*/React.createElement(FoodImg, {
      src: p.src,
      alt: p.name,
      loading: "lazy"
    }), /*#__PURE__*/React.createElement("span", {
      className: "eco2-rname"
    }, p.name))))))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '48px auto 0',
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eco2-addr",
    style: {
      padding: '20px 28px',
      borderRadius: 14,
      border: `1.5px solid ${P.ink}`,
      background: P.bg,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.hand,
      fontSize: 27,
      color: P.ink,
      lineHeight: 1
    }
  }, "Une même maison"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.mono,
      fontSize: 12,
      letterSpacing: '0.1em',
      color: P.inkSoft
    }
  }, "Studio Concept · 4 Rue Mozart, Clichy"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    "data-cursor": true,
    className: "eco2-bigcta",
    style: {
      marginLeft: 'auto',
      fontFamily: P.display,
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: P.ink,
      background: P.lime,
      border: `1.5px solid ${P.ink}`,
      padding: '14px 26px',
      borderRadius: 999,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, "Parler à toute la maison →"))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes eco2-marq{to{transform:translateX(-50%);}}
        @keyframes eco2-reel{to{transform:translateX(-33.3333%);}}
        @keyframes eco2-float{0%,100%{transform:translateY(0) rotate(0);}50%{transform:translateY(-10px) rotate(6deg);}}
        @keyframes eco2-pulse{0%,100%{transform:scale(1);opacity:.9;}50%{transform:scale(1.35);opacity:1;}}
        .eco2-float{display:inline-block;animation:eco2-float 6s ease-in-out infinite;transform-origin:center;}
        .eco2-band{display:block;position:relative;border-bottom:1.5px solid ${P.ink};overflow:hidden;background:${P.cream};transition:opacity .4s;}
        .eco2-band.is-dim{opacity:.5;}
        .eco2-band--link{color:inherit;text-decoration:none;cursor:pointer;}
        .eco2-band--link:hover .eco2-cta{gap:14px;}
        .eco2-band--link:hover .eco2-logo{transform:translateX(4px);}
        .eco2-marq{position:relative;padding:14px 0 2px;overflow:hidden;}
        .eco2-track{display:flex;align-items:center;gap:34px;white-space:nowrap;width:max-content;animation:eco2-marq 48s linear infinite;will-change:transform;}
        .eco2-band.is-live .eco2-track{animation-duration:22s;}
        .eco2-band:hover .eco2-track{animation-duration:14s;}
        .eco2-band[data-brand="hiving"] .eco2-track{animation-direction:reverse;}
        .eco2-word{font-family:${P.display};font-weight:700;font-size:clamp(44px,8.4vw,118px);letter-spacing:-0.03em;line-height:1;color:transparent;-webkit-text-stroke:1.4px ${P.ink};transition:color .5s,-webkit-text-stroke-color .5s;}
        .eco2-band.is-live .eco2-word{color:${P.ink};-webkit-text-stroke-color:transparent;}
        .eco2-dot{width:16px;height:16px;border-radius:50%;background:${P.lime};border:1.5px solid ${P.ink};flex-shrink:0;}
        .eco2-band.is-live .eco2-dot{animation:eco2-pulse 2.4s ease-in-out infinite;animation-delay:calc(var(--d,0)*0.3s);}
        .eco2-wrap{max-width:1400px;margin:0 auto;padding:0 40px;}
        .eco2-body{display:grid;grid-template-columns:minmax(280px,0.95fr) 1.55fr;gap:44px;align-items:center;padding:18px 0 44px;}
        .eco2-label{display:inline-block;font-family:${P.mono};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${P.ink};margin-bottom:14px;}
        .eco2-idr{display:flex;flex-direction:column;align-items:flex-start;gap:9px;margin:2px 0 16px;}
        .eco2-logo{display:block;width:auto;height:34px;max-width:230px;object-fit:contain;object-position:left center;transition:transform .3s ease;}
        .eco2-logo[data-brand="hiving"]{height:26px;}
        .eco2-logo[data-brand="sense"]{height:30px;}
        .eco2-disc{font-family:${P.serif};font-style:italic;font-weight:400;font-size:17px;color:${P.inkSoft};letter-spacing:0;line-height:1;}
        .eco2-copy p{font-family:${P.sans};font-size:15px;line-height:1.6;color:${P.inkSoft};max-width:38ch;margin:0 0 18px;}
        .eco2-meta{display:flex;align-items:center;gap:18px;flex-wrap:wrap;}
        .eco2-stat{display:inline-flex;align-items:baseline;gap:4px;background:${P.lime};border:1.5px solid ${P.ink};border-radius:999px;padding:5px 14px;}
        .eco2-stat-num{font-family:${P.hand};font-weight:700;font-size:26px;color:${P.ink};line-height:1;}
        .eco2-stat-suf{font-family:${P.hand};font-weight:700;font-size:20px;color:${P.ink};}
        .eco2-stat-lbl{font-family:${P.mono};font-size:9.5px;letter-spacing:0.12em;text-transform:uppercase;color:${P.ink};margin-left:6px;align-self:center;}
        .eco2-cta{font-family:${P.display};font-weight:600;font-size:12.5px;letter-spacing:0.12em;text-transform:uppercase;color:${P.ink};text-decoration:none;display:inline-flex;align-items:center;gap:8px;padding-bottom:3px;border-bottom:2px solid ${P.ink};transition:gap .25s;}
        .eco2-cta:hover{gap:14px;}
        .eco2-reel{position:relative;overflow:hidden;opacity:0;transition:opacity .6s;-webkit-mask:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);}
        .eco2-band.is-live .eco2-reel{opacity:1;}
        .eco2-reel__track{display:flex;gap:12px;width:max-content;animation:eco2-reel 32s linear infinite;will-change:transform;}
        .eco2-band[data-brand="hiving"] .eco2-reel__track{animation-direction:reverse;}
        .eco2-reel:hover .eco2-reel__track{animation-play-state:paused;}
        .eco2-rcard{position:relative;flex:0 0 auto;width:clamp(130px,12.5vw,166px);aspect-ratio:3/4;border-radius:10px;overflow:hidden;border:1.5px solid ${P.ink};background:${P.cream};cursor:pointer;}
        .eco2-rcard img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;filter:saturate(1.05);transition:transform .5s;}
        .eco2-rcard:hover img{transform:scale(1.08);}
        .eco2-rcard::after{content:'';position:absolute;inset:0;box-shadow:inset 0 -40px 40px -30px rgba(10,9,8,0.5);opacity:0;transition:opacity .3s;}
        .eco2-rcard:hover::after{opacity:1;}
        .eco2-rname{position:absolute;left:8px;bottom:8px;z-index:2;font-family:${P.hand};font-weight:700;font-size:15px;color:${P.ink};background:${P.lime};border:1.5px solid ${P.ink};border-radius:999px;padding:1px 10px;opacity:0;transform:translateY(6px);transition:opacity .3s,transform .3s;}
        .eco2-rcard:hover .eco2-rname{opacity:1;transform:none;}
        .eco2-bigcta{transition:transform .25s ease, box-shadow .25s ease;}
        .eco2-bigcta:hover{transform:translateY(-3px) rotate(-1deg);box-shadow:4px 6px 0 rgba(10,9,8,0.22);}
        @media (max-width:900px){
          .eco2-body{grid-template-columns:1fr;gap:22px;}
          .eco2-addr{flex-direction:column;align-items:flex-start;}
          .eco2-addr a{margin-left:0 !important;}
        }
        @media (prefers-reduced-motion:reduce){ .eco2-track,.eco2-reel__track,.eco2-dot,.eco2-float{animation:none !important;} .eco2-reel{opacity:1 !important;} }
      `));
}

// ── PAGE WRAPPER ────────────────────────────────────────────────────
function FoodHomePage2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: FOOD_PAL.bg,
      color: FOOD_PAL.ink,
      fontFamily: FOOD_PAL.sans,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(FoodCursor, null), /*#__PURE__*/React.createElement(FoodNav2, {
    current: "home"
  }), /*#__PURE__*/React.createElement("main", {
    id: "contenu"
  }, /*#__PURE__*/React.createElement(FoodHero2, null), /*#__PURE__*/React.createElement(FoodContentWall2, null), /*#__PURE__*/React.createElement(FoodManifesto2, null), /*#__PURE__*/React.createElement(FoodEcosystem2, null), /*#__PURE__*/React.createElement(FoodCampaigns2, null), /*#__PURE__*/React.createElement(FoodBrands2, null), /*#__PURE__*/React.createElement(FoodTalents2, null), /*#__PURE__*/React.createElement(FoodProcess2, null), /*#__PURE__*/React.createElement(FoodStudios2, null), /*#__PURE__*/React.createElement(FoodFAQ2, null)), /*#__PURE__*/React.createElement(FoodFooter2, null));
}
Object.assign(window, {
  FoodHomePage2,
  FOOD_PAL
});
