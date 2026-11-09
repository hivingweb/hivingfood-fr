// ─────────────────────────────────────────────────────────────────────
// HIVING FOOD — Shared chrome v2 (sub-pages)
// Reuses FOOD_PAL, FoodNav2, FoodFooter2, FoodCursor, FoodStatus from food-home-v2.jsx
// Adds: PageHero (consistent header across sub-pages), Section utility,
//       Crumbs, common deco helpers.
// ─────────────────────────────────────────────────────────────────────

const P = window.FOOD_PAL;

// ─────────────────────────────────────────────────────────────────────
// CREATIVE PRIMITIVES — reusable food-agency objects
// ─────────────────────────────────────────────────────────────────────

// Round stamp — like "APPROVED 2026"
function Stamp({
  top = 'APPROVED',
  mid = 'by the team',
  bottom = '· 2026 ·',
  color = '#c8492f',
  size = 100,
  rotate = -12,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: `2px solid ${color}`,
      color: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      transform: `rotate(${rotate}deg)`,
      fontFamily: P.display,
      opacity: 0.88,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: size * 0.12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, top), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: P.serif,
      fontStyle: 'italic',
      fontSize: size * 0.10,
      marginTop: 2
    }
  }, mid), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: P.mono,
      fontSize: size * 0.085,
      letterSpacing: '0.1em',
      marginTop: 2
    }
  }, bottom));
}

// Tape strip — short masking-tape rectangle
function Tape({
  width = 80,
  color = '#d4e85a',
  rotate = -4,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width,
      height: 22,
      background: color,
      opacity: 0.85,
      transform: `rotate(${rotate}deg)`,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.08)',
      ...style
    }
  });
}

// Polaroid frame — photo with handwritten caption beneath
function Polaroid({
  children,
  caption,
  rotate = 0,
  taped = true,
  tapeColor = '#d4e85a',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: P.bg,
      padding: '14px 14px 56px',
      position: 'relative',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 1px 0 rgba(0,0,0,0.04)',
      transform: `rotate(${rotate}deg)`,
      border: `1px solid ${P.ink}10`,
      ...style
    }
  }, taped && /*#__PURE__*/React.createElement(Tape, {
    width: 80,
    color: tapeColor,
    rotate: -6,
    style: {
      position: 'absolute',
      top: -10,
      left: '50%',
      transform: 'translateX(-50%) rotate(-6deg)'
    }
  }), children, caption && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 16,
      textAlign: 'center',
      fontFamily: P.hand,
      fontWeight: 600,
      fontSize: 22,
      color: P.ink,
      lineHeight: 1
    }
  }, caption));
}

// Note paper — yellow/cream sticky with handwritten text + tape
function NotePaper({
  children,
  color = '#fef3c7',
  tapeColor = '#d4e85a',
  rotate = -2,
  hand = false,
  padding = 24,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: color,
      padding,
      position: 'relative',
      boxShadow: '0 6px 16px rgba(0,0,0,0.10), inset 0 0 0 1px rgba(0,0,0,0.04)',
      transform: `rotate(${rotate}deg)`,
      fontFamily: hand ? P.hand : P.sans,
      fontSize: hand ? 22 : 14,
      lineHeight: hand ? 1.2 : 1.6,
      color: P.ink,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Tape, {
    width: 70,
    color: tapeColor,
    rotate: 4,
    style: {
      position: 'absolute',
      top: -10,
      left: 20
    }
  }), children);
}

// Receipt — printed cash receipt with torn bottom edge
function Receipt({
  title,
  subtitle,
  lines = [],
  total,
  totalLabel = 'TOTAL',
  stamp,
  footer = '★ MERCI DE VOTRE VISITE ★',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: P.bg,
      color: P.ink,
      padding: '24px 26px 20px',
      position: 'relative',
      fontFamily: P.mono,
      fontSize: 11,
      lineHeight: 1.6,
      boxShadow: `4px 4px 0 ${P.lime}, 0 8px 18px rgba(0,0,0,0.06)`,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 96% 97%, 92% 100%, 88% 97%, 84% 100%, 80% 97%, 76% 100%, 72% 97%, 68% 100%, 64% 97%, 60% 100%, 56% 97%, 52% 100%, 48% 97%, 44% 100%, 40% 97%, 36% 100%, 32% 97%, 28% 100%, 24% 97%, 20% 100%, 16% 97%, 12% 100%, 8% 97%, 4% 100%, 0 97%)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      borderBottom: `1.5px dashed ${P.ink}`,
      paddingBottom: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: P.display,
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: '0.16em'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      opacity: 0.6,
      marginTop: 4
    }
  }, subtitle)), lines.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      padding: '4px 0',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      opacity: 0.85
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 0,
      borderBottom: `1px dotted ${P.ink}40`,
      alignSelf: 'flex-end',
      marginBottom: 4,
      minWidth: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      textAlign: 'right',
      whiteSpace: 'nowrap',
      maxWidth: '60%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, v))), total && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      paddingTop: 12,
      borderTop: `1.5px dashed ${P.ink}`,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: P.display,
      fontWeight: 700,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, totalLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      color: P.tomato
    }
  }, total)), stamp && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -16,
      top: 36
    }
  }, /*#__PURE__*/React.createElement(Stamp, stamp)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      textAlign: 'center',
      fontSize: 9,
      opacity: 0.7,
      letterSpacing: '0.1em'
    }
  }, footer));
}

// Menu card — restaurant menu line with dotted leaders
function MenuLine({
  name,
  desc,
  price,
  leftTag,
  italic = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      padding: '14px 0',
      borderBottom: `1px dotted ${P.ink}30`
    }
  }, leftTag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.mono,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: P.inkSoft,
      padding: '3px 8px',
      border: `1px solid ${P.ink}30`,
      borderRadius: 999,
      whiteSpace: 'nowrap',
      alignSelf: 'center'
    }
  }, leftTag), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: P.display,
      fontWeight: 600,
      fontSize: 18,
      color: P.ink,
      letterSpacing: '-0.005em'
    }
  }, name, italic && desc && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.serif,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 15,
      color: P.inkSoft,
      marginLeft: 8
    }
  }, "· ", desc)), !italic && desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: P.sans,
      fontSize: 13,
      color: P.inkSoft,
      marginTop: 4,
      lineHeight: 1.5
    }
  }, desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 0,
      borderTop: `1px dotted ${P.ink}40`,
      alignSelf: 'flex-end',
      marginBottom: 6,
      minWidth: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.display,
      fontWeight: 700,
      fontSize: 18,
      color: P.ink,
      whiteSpace: 'nowrap'
    }
  }, price));
}

// Handwritten signature line
function HandSig({
  name,
  title,
  color,
  rotate = -3,
  size = 38,
  style = {}
}) {
  const c = color || P.ink;
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: P.hand,
      fontWeight: 700,
      fontSize: size,
      color: c,
      lineHeight: 1,
      transform: `rotate(${rotate}deg)`,
      display: 'inline-block'
    }
  }, name), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: P.mono,
      fontSize: 9,
      letterSpacing: '0.16em',
      color: P.inkSoft,
      textTransform: 'uppercase',
      marginTop: 6
    }
  }, title));
}
Object.assign(window, {
  Stamp,
  Tape,
  Polaroid,
  NotePaper,
  Receipt,
  MenuLine,
  HandSig
});

// ── Page hero header ────────────────────────────────────────────────
function PageHero({
  eyebrow,
  title,
  italic,
  hand,
  intro,
  accent = P.lime,
  decoTone = 'cream'
}) {
  // title can contain markup via children-equivalent — passed as JSX from caller.
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 40px 96px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Grain, {
    opacity: 0.05
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 100,
      right: '6%',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(Splat, {
    color: accent,
    size: 110,
    style: {
      transform: 'rotate(-12deg)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 60,
      left: '4%',
      opacity: 0.4
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    color: P.ink,
    size: 28
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
      background: P.cream,
      border: `1.5px solid ${P.ink}`,
      fontFamily: P.mono,
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: P.ink,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: accent
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: P.display,
      fontWeight: 700,
      fontSize: 'clamp(56px, 9vw, 144px)',
      lineHeight: 0.94,
      letterSpacing: '-0.04em',
      color: P.ink,
      margin: 0,
      maxWidth: 1200
    }
  }, hand && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.hand,
      fontWeight: 600,
      color: P.ink,
      display: 'inline-block',
      transform: 'rotate(-2deg)',
      marginRight: 18
    }
  }, hand), title, ' ', italic && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.serif,
      fontStyle: 'italic',
      fontWeight: 400,
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, italic), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -8,
      right: -8,
      bottom: -12,
      height: 24,
      zIndex: 1,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Swoosh, {
    color: accent,
    width: Math.max(280, italic.length * 22)
  })))), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 80,
      maxWidth: 760,
      fontFamily: P.serif,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(20px, 1.8vw, 26px)',
      lineHeight: 1.45,
      color: P.inkSoft
    }
  }, intro)));
}

// ── Breadcrumbs ─────────────────────────────────────────────────────
function Crumbs({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 40px 0',
      fontFamily: P.mono,
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: P.inkSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "/"), it.href ? /*#__PURE__*/React.createElement("a", {
    href: it.href,
    "data-cursor": true,
    style: {
      color: P.inkSoft,
      textDecoration: 'none'
    }
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: P.ink
    }
  }, it.label)))));
}

// ── Section header (compact, used inside pages) ─────────────────────
function SectionHead({
  eyebrow,
  title,
  italic,
  kicker,
  accent = P.lime,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56,
      textAlign: align,
      maxWidth: align === 'center' ? 900 : 'none',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: P.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      color: P.ink,
      textTransform: 'uppercase',
      marginBottom: 24
    }
  }, align !== 'center' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: P.ink
    }
  }), eyebrow, align === 'center' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: P.ink
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: P.display,
      fontWeight: 700,
      fontSize: 'clamp(48px, 6vw, 88px)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      margin: 0,
      color: P.ink
    }
  }, title, italic && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: P.serif,
      fontStyle: 'italic',
      fontWeight: 400
    }
  }, italic))), kicker && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: P.sans,
      fontSize: 16,
      lineHeight: 1.65,
      color: P.inkSoft,
      margin: '20px 0 0',
      maxWidth: 720,
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, kicker));
}

// ── Page wrapper (chrome stack for every sub-page) ──────────────────
function PageShell({
  current,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: P.bg,
      color: P.ink,
      fontFamily: P.sans,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(FoodCursor, null), /*#__PURE__*/React.createElement(FoodNav2, {
    current: current
  }), /*#__PURE__*/React.createElement("main", {
    id: "contenu"
  }, children), /*#__PURE__*/React.createElement(FoodFooter2, null));
}

// ── CTA banner used at bottom of pages ──────────────────────────────
function PageCTA({
  eyebrow = 'On parle ?',
  title = 'On construit votre campagne ?',
  subtitle = 'Brief en 30 minutes. Devis sous 48h. Pas de bullshit.',
  primary = {
    label: 'Discuter du projet',
    href: '#contact'
  },
  secondary
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1300,
      margin: '0 auto',
      background: P.cream,
      border: `1.5px solid ${P.ink}`,
      borderRadius: 24,
      padding: 'clamp(40px, 6vw, 72px)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -30,
      right: -30,
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement(Splat, {
    color: P.lime,
    size: 180
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 48,
      alignItems: 'center'
    },
    className: "food2-pcta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: P.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      color: P.ink,
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: P.ink
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: P.display,
      fontWeight: 700,
      fontSize: 'clamp(36px, 4.5vw, 64px)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      margin: 0,
      color: P.ink
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: P.sans,
      fontSize: 17,
      lineHeight: 1.6,
      color: P.inkSoft,
      margin: '20px 0 0',
      maxWidth: 540
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: primary.href,
    "data-cursor": true,
    style: {
      background: P.ink,
      color: P.bg,
      padding: '20px 32px',
      borderRadius: 999,
      fontFamily: P.display,
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12
    }
  }, primary.label, " ", /*#__PURE__*/React.createElement("span", null, "→")), secondary && /*#__PURE__*/React.createElement("a", {
    href: secondary.href,
    "data-cursor": true,
    style: {
      color: P.ink,
      padding: '12px 0',
      textDecoration: 'none',
      fontFamily: P.display,
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      borderBottom: `2px solid ${P.ink}`
    }
  }, secondary.label)))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 800px) { .food2-pcta-grid { grid-template-columns: 1fr !important; } }
      `));
}
Object.assign(window, {
  PageHero,
  Crumbs,
  SectionHead,
  PageShell,
  PageCTA
});
