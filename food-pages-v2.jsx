// ─────────────────────────────────────────────────────────────────────
// HIVING FOOD — Sub-pages v2 (DA Studio: blanc cassé + lime + manuscrit)
// Agence, Talents, Talent (détail), Campagnes, Campagne (détail),
// Événementiel, Blog, Article
// Studios is a redirect (handled in studios.html).
// ─────────────────────────────────────────────────────────────────────

const PP = window.FOOD_PAL;

// Get URL slug helper
function getSlug() {
  const u = new URLSearchParams(window.location.search);
  return u.get('slug') || '';
}

// Hash a string to a stable 3-digit number (no gibberish letters)
function dossierNum(slug, fallback = '042') {
  if (!slug) return fallback;
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return String(101 + (h % 899)).padStart(3, '0');
}

// ╔════════════════════════════════════════════════════════════════════
// ║ AGENCE
// ╚════════════════════════════════════════════════════════════════════
function FoodAgencePage2() {
  const why = window.FOOD_WHY || [];
  return (
    <PageShell current="agence">
      <Crumbs items={[
        { label: 'Hiving Food', href: '/' },
        { label: "L'agence" },
      ]} />
      <PageHero
        eyebrow="L'agence influence food n°1 en France"
        hand="On"
        title="connaît la food"
        italic="mieux que personne."
        intro="Hiving Food est la première agence d'influence 100% food en France. des créateurs exclusifs, 2 studios cuisine pro à Clichy, et 4 ans d'expérience à transformer les marques food en bouchées mémorables."
      />

      {/* Manifesto — façon ardoise/menu du chef */}
      <section style={{ padding: '64px 40px 96px', position: 'relative' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          <SectionHead
            eyebrow="Le manifeste · Maison Hiving"
            title="Pourquoi nous"
            italic="(et pas un autre)."
          />
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
          }} className="food2-why-grid">
            {why.map((w, i) => {
              const tones = [PP.cream, PP.lime, PP.warm];
              const rot = [-1.2, 1, -0.8];
              return (
                <div key={i} style={{
                  background: tones[i % 3],
                  border: `1.5px solid ${PP.ink}`, borderRadius: 4,
                  padding: '36px 32px 32px', position: 'relative',
                  transform: `rotate(${rot[i % 3]}deg)`,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                }}>
                  <Tape width={84} color={PP.ink} rotate={-4} style={{
                    position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%) rotate(-4deg)', opacity: 0.18,
                  }} />
                  {/* Numéro de chapitre */}
                  <div style={{
                    fontFamily: PP.serif, fontStyle: 'italic',
                    fontSize: 12, color: PP.inkSoft, letterSpacing: '0.2em',
                    textTransform: 'uppercase', marginBottom: 8,
                  }}>Chapitre · 0{i + 1}</div>
                  <div style={{
                    fontFamily: PP.hand, fontWeight: 700, fontSize: 56,
                    color: PP.ink, lineHeight: 0.85, transform: 'rotate(-2deg)',
                    display: 'inline-block', marginBottom: 18,
                  }}>{w.icon}</div>
                  <h3 style={{
                    fontFamily: PP.display, fontWeight: 700, fontSize: 24,
                    color: PP.ink, margin: '0 0 12px', letterSpacing: '-0.01em',
                  }}>{w.title}</h3>
                  <p style={{
                    fontFamily: PP.sans, fontSize: 14, lineHeight: 1.65,
                    color: PP.ink, opacity: 0.78, margin: 0,
                  }}>{w.desc}</p>
                  <div style={{
                    marginTop: 20, paddingTop: 14, borderTop: `1px dashed ${PP.ink}30`,
                    fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.18em',
                    color: PP.inkSoft, textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between',
                  }}>
                    <span>Maison Hiving</span>
                    <span>Depuis 2022</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .food2-why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px)  { .food2-why-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Numbers */}
      <section style={{ padding: '96px 40px', background: PP.cream, position: 'relative' }}>
        <Grain opacity={0.04} />
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          <SectionHead
            eyebrow="L'agence en chiffres"
            title="4 ans"
            italic="à structurer le marché food."
          />
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
            background: PP.bg, border: `1.5px solid ${PP.ink}`, borderRadius: 16,
            overflow: 'hidden',
          }} className="food2-num-grid">
            {[
              { v: '14', l: 'Créateurs en exclusivité' },
              { v: '50+', l: 'Marques accompagnées' },
              { v: '420M+', l: 'Vues générées' },
              { v: '4', l: 'Années d\'existence' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: 32, textAlign: 'center',
                borderRight: i < 3 ? `1.5px dashed ${PP.ink}30` : 'none',
              }}>
                <div style={{
                  fontFamily: PP.display, fontWeight: 700,
                  fontSize: 'clamp(40px, 5.5vw, 80px)', lineHeight: 1,
                  color: PP.ink, letterSpacing: '-0.04em',
                  position: 'relative', display: 'inline-block',
                }}>
                  {s.v}
                  <span style={{
                    position: 'absolute', left: -4, right: -4, bottom: 6, height: 14,
                    background: PP.lime, zIndex: -1, borderRadius: 4,
                  }} />
                </div>
                <div style={{
                  fontFamily: PP.mono, fontSize: 11, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: PP.inkSoft, marginTop: 16,
                }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .food2-num-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .food2-num-grid > div { border-right: none !important; border-bottom: 1.5px dashed ${PP.ink}30; }
            .food2-num-grid > div:nth-child(1), .food2-num-grid > div:nth-child(2) { border-right: 1.5px dashed ${PP.ink}30 !important; }
            .food2-num-grid > div:nth-child(2) { border-right: none !important; }
            .food2-num-grid > div:nth-child(3), .food2-num-grid > div:nth-child(4) { border-bottom: none; }
          }
        `}</style>
      </section>

      {/* Founders / team — mur de polaroids */}
      <section style={{ padding: '96px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <SectionHead
            eyebrow="L'équipe"
            title="On gère le ballet"
            italic="entre marques & créateurs."
            kicker="Talent management, production, post-prod, stratégie. Tous food-obsessed depuis 2022."
          />

          {/* Note du chef — sticky note bas */}
          <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center' }}>
            <NotePaper color={PP.lime} tapeColor={PP.ink} rotate={-1.5} hand={true} padding="28px 36px" style={{ maxWidth: 480 }}>
              <div style={{ fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8, opacity: 0.6, fontStyle: 'normal', fontWeight: 400 }}>
                Le mot de l'équipe
              </div>
              "On vient tous de la food, du média, ou des deux.<br/>Ici, personne ne &laquo;&nbsp;découvre&nbsp;&raquo; le secteur."
            </NotePaper>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .food2-team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
      </section>

      <PageCTA
        title="On construit votre campagne food ?"
        subtitle="des créateurs exclusifs, 2 studios pro, et une équipe qui ne fait que ça depuis 2022."
        primary={{ label: 'Discuter du projet', href: '/#contact' }}
        secondary={{ label: 'Voir nos campagnes', href: 'campagnes.html' }}
      />
    </PageShell>
  );
}

// ╔════════════════════════════════════════════════════════════════════
// ║ TALENTS (roster)
// ╚════════════════════════════════════════════════════════════════════
function FoodTalentsPage2() {
  const all = window.FOOD_TALENTS || [];
  const [filter, setFilter] = React.useState('Tous');
  const filters = ['Tous', 'Chef Cuisinier', 'Chef Pâtissier', 'Pizzaiolo', 'Recettes Gourmandes', 'Créateur Cuisine', 'Créateur Pâtissier'];
  const list = filter === 'Tous' ? all : all.filter(t => t.role === filter);

  return (
    <PageShell current="talents">
      <Crumbs items={[
        { label: 'Hiving Food', href: '/' },
        { label: 'Talents' },
      ]} />
      <PageHero
        eyebrow="des créateurs en exclusivité"
        hand="Notre"
        title="roster"
        italic="food."
        intro="Chefs, pâtissiers, créateurs cuisine. Des talents accompagnés en management exclusif : chacun avec sa voix, sa cuisine, ses millions d'abonnés."
      />

      {/* Filter pills — façon onglets de carnet */}
      <section style={{ padding: '0 40px 56px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <span style={{
              fontFamily: PP.hand, fontWeight: 700, fontSize: 26, color: PP.ink,
              transform: 'rotate(-3deg)', display: 'inline-block',
            }}>les rayons →</span>
            <span style={{ flex: 1, height: 1, borderTop: `1px dashed ${PP.ink}40` }} />
            <span style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.18em', color: PP.inkSoft, textTransform: 'uppercase' }}>
              {list.length} {list.length > 1 ? 'talents' : 'talent'}
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} data-cursor style={{
                fontFamily: PP.display, fontSize: 13, fontWeight: 500,
                padding: '10px 18px', borderRadius: 999,
                border: `1.5px solid ${PP.ink}`,
                background: filter === f ? PP.ink : 'transparent',
                color: filter === f ? PP.bg : PP.ink,
                cursor: 'pointer',
              }}>{f}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid — wall of polaroids */}
      <section style={{ padding: '0 40px 96px', position: 'relative' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }} className="food2-roster-grid">
          {list.map((t, i) => {
            const tones = ['cream', 'warm', 'paper', 'lime'];
            const rotates = [-2, 1.5, -1, 2.2, -1.8, 1, -2.5, 1.8];
            const tapes = [PP.lime, PP.tomato || '#c8492f', PP.ink, PP.warm || '#f4d4a4'];
            const rot = rotates[i % rotates.length];
            return (
              <a key={t.slug} href={`talent.html?slug=${t.slug}`} data-cursor style={{
                textDecoration: 'none', color: PP.ink, position: 'relative', display: 'block',
                transition: 'transform 320ms',
                transform: `rotate(${rot}deg)`,
              }}
              onMouseEnter={e => e.currentTarget.style.transform = `translateY(-8px) rotate(${rot * 0.3}deg) scale(1.02)`}
              onMouseLeave={e => e.currentTarget.style.transform = `translateY(0) rotate(${rot}deg) scale(1)`}
              >
                <Polaroid taped={true} tapeColor={tapes[i % tapes.length]} caption={t.handle}>
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden', position: 'relative' }}>
                    {t.photo ? (<FoodImg src={t.photo} alt={t.name} loading="lazy" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }} />) : (<FoodPH aspect="3/4" label={t.name.toUpperCase()} tone={tones[i % 4]} />)}
                    {/* Stamp "exclusif" sur tous les talents — tous sont exclusifs Hiving Food */}
                    <div style={{
                      position: 'absolute', top: 12, right: 12,
                      transform: `rotate(${i % 2 ? 8 : -6}deg)`,
                    }}>
                      <Stamp top="EXCLUSIF" mid="hiving food" bottom="·" color={PP.tomato || '#c8492f'} size={64} rotate={0} />
                    </div>
                  </div>
                  {/* Bandeau nom + role à côté du caption polaroid */}
                  <div style={{
                    position: 'absolute', left: 14, right: 14, bottom: 38, textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: PP.display, fontSize: 16, fontWeight: 600, lineHeight: 1.1, color: PP.ink }}>{t.name}</div>
                    <div style={{ fontFamily: PP.mono, fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: PP.inkSoft, marginTop: 3 }}>{t.role}</div>
                  </div>
                </Polaroid>
                {/* Etiquette stats sous le polaroid */}
                <div style={{
                  marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center',
                  transform: `rotate(${-rot * 0.5}deg)`,
                }}>
                  <span style={{
                    fontFamily: PP.mono, fontSize: 10, padding: '4px 9px',
                    background: PP.bg, border: `1px solid ${PP.ink}`, borderRadius: 999, color: PP.ink,
                  }}>IG {t.insta}</span>
                  <span style={{
                    fontFamily: PP.mono, fontSize: 10, padding: '4px 9px',
                    background: PP.lime, border: `1px solid ${PP.ink}`, borderRadius: 999, color: PP.ink,
                  }}>TT {t.tiktok}</span>
                </div>
              </a>
            );
          })}
        </div>
        <style>{`
          @media (max-width: 1100px) { .food2-roster-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (max-width: 800px)  { .food2-roster-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 500px)  { .food2-roster-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <PageCTA
        title="Vous cherchez le bon créateur ?"
        subtitle="On vous brief en 30 minutes : votre marque, votre cible, vos KPIs. On revient avec une short-list."
        primary={{ label: 'Demander un casting', href: '/#contact' }}
      />
    </PageShell>
  );
}

// ╔════════════════════════════════════════════════════════════════════
// ║ TALENT (détail)
// ╚════════════════════════════════════════════════════════════════════
function FoodTalentPage2() {
  const slug = getSlug();
  const all = window.FOOD_TALENTS || [];
  const t = all.find(x => x.slug === slug) || all[0];
  if (!t) return null;
  const others = all.filter(x => x.slug !== t.slug).slice(0, 4);

  return (
    <PageShell current="talents">
      <Crumbs items={[
        { label: 'Hiving Food', href: '/' },
        { label: 'Talents', href: 'talents.html' },
        { label: t.name },
      ]} />

      <section style={{ padding: '40px 40px 96px', position: 'relative' }}>
        <Grain opacity={0.04} />
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start',
          }} className="food2-tdet-grid">

            {/* LEFT — Polaroid sticky + tampon exclusif */}
            <div style={{ position: 'sticky', top: 100 }}>
              <Polaroid taped={true} tapeColor={PP.lime} caption={t.handle} rotate={-1.5}>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
                  {t.photo ? (<FoodImg src={t.photo} alt={t.name} loading="lazy" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }} />) : (<FoodPH aspect="4/5" label={t.name.toUpperCase()} tone="cream" />)}
                  <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
                    <Stamp top="EXCLUSIF" mid="hiving food" bottom="·" color={PP.tomato || '#c8492f'} size={82} rotate={-8} />
                  </div>
                </div>
              </Polaroid>

              {/* Mini ticket "fiche talent" sous le polaroid */}
              <div style={{ marginTop: 32, transform: 'rotate(1.5deg)' }}>
                <Receipt
                  title="FICHE TALENT"
                  subtitle={`MATRICULE · HF-${t.slug.slice(0, 4).toUpperCase()}`}
                  lines={[
                    ['Nom', t.name],
                    ['Spécialité', t.role],
                    ['Instagram', t.insta],
                    ['TikTok', t.tiktok],
                    ['Statut', 'Exclusif'],
                  ]}
                  total="✓ Disponible"
                  totalLabel="2026"
                  footer="★ HIVING FOOD · CLICHY ★"
                />
              </div>
            </div>

            {/* RIGHT — détail */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                fontFamily: PP.mono, fontSize: 11, letterSpacing: '0.22em',
                color: PP.ink, textTransform: 'uppercase', marginBottom: 24,
                padding: '6px 14px', background: PP.lime, borderRadius: 999,
                border: `1.5px solid ${PP.ink}`,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: PP.ink }} />
                {t.role} · Exclusif Hiving
              </div>
              <h1 style={{
                fontFamily: PP.display, fontWeight: 700,
                fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.94,
                letterSpacing: '-0.04em', margin: 0, color: PP.ink,
              }}>
                {t.name}
              </h1>
              <div style={{
                fontFamily: PP.hand, fontWeight: 700, fontSize: 'clamp(40px, 5vw, 64px)',
                color: PP.lime, transform: 'rotate(-2deg)', display: 'inline-block',
                marginTop: 8, marginLeft: 12, lineHeight: 0.9,
                WebkitTextStroke: `1px ${PP.ink}`,
              }}>
                {t.handle}
              </div>

              {/* Audience tabs façon ardoise */}
              <div style={{
                marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
              }}>
                {[
                  { plat: 'Instagram', val: t.insta, color: PP.cream, accent: PP.tomato || '#c8492f' },
                  { plat: 'TikTok', val: t.tiktok, color: PP.lime, accent: PP.ink },
                ].map(s => (
                  <div key={s.plat} style={{
                    background: s.color, border: `1.5px solid ${PP.ink}`,
                    borderRadius: 4, padding: 24, position: 'relative',
                    boxShadow: `4px 4px 0 ${PP.ink}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: PP.inkSoft }}>{s.plat}</div>
                      <span style={{ fontFamily: PP.hand, fontSize: 18, color: s.accent, transform: 'rotate(-3deg)' }}>★</span>
                    </div>
                    <div style={{ fontFamily: PP.display, fontWeight: 700, fontSize: 44, color: PP.ink, letterSpacing: '-0.02em', lineHeight: 1, position: 'relative', display: 'inline-block' }}>
                      {s.val}
                      <span style={{ position: 'absolute', left: -2, right: -2, bottom: 4, height: 8, background: s.accent, opacity: 0.5, zIndex: -1 }} />
                    </div>
                    <div style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 13, color: PP.inkSoft, marginTop: 6 }}>abonnés actifs</div>
                  </div>
                ))}
              </div>

              {/* Citation manuscrite — note du chef de l'agence */}
              <div style={{ position: 'relative', marginTop: 56 }}>
                <NotePaper color={PP.cream} tapeColor={PP.tomato || '#c8492f'} rotate={-1} padding="32px 32px 28px">
                  <div style={{
                    fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em',
                    textTransform: 'uppercase', color: PP.inkSoft, marginBottom: 12,
                  }}>Le mot de l'agence</div>
                  <p style={{
                    fontFamily: PP.serif, fontStyle: 'italic',
                    fontSize: 22, lineHeight: 1.5, color: PP.ink, margin: 0,
                  }}>
                    « {t.name.split(' ')[0]} est l'un de nos talents historiques. Sa cuisine sincère et ses formats inventifs en font un partenaire incontournable pour les marques food premium. »
                  </p>
                  <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                    <HandSig name="Léa M." title="Cofondatrice · Talent" color={PP.tomato || '#c8492f'} size={32} />
                  </div>
                </NotePaper>
              </div>

              {/* CTAs */}
              <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="/#contact" data-cursor style={{
                  background: PP.ink, color: PP.lime, padding: '18px 28px', borderRadius: 999,
                  fontFamily: PP.display, fontWeight: 600, fontSize: 13, letterSpacing: '0.14em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  display: 'inline-flex', gap: 10, alignItems: 'center',
                  boxShadow: `4px 4px 0 ${PP.lime}`, border: `2px solid ${PP.ink}`,
                }}>Briefer une campagne avec {t.name.split(' ')[0]} →</a>
                <a href={`https://instagram.com/${t.handle.replace('@', '')}`} target="_blank" data-cursor style={{
                  color: PP.ink, padding: '18px 28px', borderRadius: 999,
                  fontFamily: PP.display, fontWeight: 600, fontSize: 13, letterSpacing: '0.14em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  border: `1.5px solid ${PP.ink}`,
                }}>Voir Instagram ↗</a>
              </div>

              {/* Reels signature avec étiquettes manuscrites */}
              <div style={{ marginTop: 64 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                  <span style={{
                    fontFamily: PP.hand, fontWeight: 700, fontSize: 28, color: PP.ink,
                    transform: 'rotate(-3deg)', display: 'inline-block',
                  }}>les hits →</span>
                  <span style={{ flex: 1, height: 1, borderTop: `1px dashed ${PP.ink}40` }} />
                  <span style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.18em', color: PP.inkSoft, textTransform: 'uppercase' }}>Contenus signature</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                  {['cream', 'warm', 'paper'].map((tone, i) => {
                    const labels = ['Tartare facile', 'Recette signature', 'Live cooking'];
                    const views = ['1.2M vues', '480K vues', '290K live'];
                    const rot = [-1.5, 1.5, -0.8];
                    return (
                      <div key={i} style={{ position: 'relative', transform: `rotate(${rot[i]}deg)` }}>
                        <div style={{
                          border: `1.5px solid ${PP.ink}`, borderRadius: 4, overflow: 'hidden',
                          boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                        }}>
                          <FoodPH aspect="9/16" kind="video" label={labels[i]} tone={tone} />
                        </div>
                        {/* Etiquette vues */}
                        <div style={{
                          position: 'absolute', bottom: -10, right: -10,
                          background: PP.lime, color: PP.ink,
                          padding: '6px 12px', borderRadius: 999,
                          border: `1.5px solid ${PP.ink}`,
                          fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.12em',
                          fontWeight: 700, transform: 'rotate(4deg)',
                        }}>{views[i]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .food2-tdet-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Other talents */}
      <section style={{ padding: '64px 40px', background: PP.cream }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <SectionHead eyebrow="Continuez" title="D'autres" italic="talents food." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="food2-other-grid">
            {others.map((o, i) => {
              const tones = ['paper', 'warm', 'lime', 'paper'];
              return (
                <a key={o.slug} href={`talent.html?slug=${o.slug}`} data-cursor style={{ textDecoration: 'none', color: PP.ink }}>
                  <div style={{ border: `1.5px solid ${PP.ink}`, borderRadius: 12, overflow: 'hidden' }}>
                    <FoodPH aspect="3/4" label={o.name.toUpperCase()} tone={tones[i]} />
                  </div>
                  <div style={{ marginTop: 10, fontFamily: PP.display, fontWeight: 600, fontSize: 18 }}>{o.name}</div>
                  <div style={{ fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: PP.inkSoft }}>{o.role}</div>
                </a>
              );
            })}
          </div>
        </div>
        <style>{`@media (max-width: 1024px) { .food2-other-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
      </section>

      <PageCTA primary={{ label: 'Discuter du projet', href: '/#contact' }} />
    </PageShell>
  );
}

// ╔════════════════════════════════════════════════════════════════════
// ║ CAMPAGNES (index)
// ╚════════════════════════════════════════════════════════════════════
function FoodCampagnesPage2() {
  const all = window.FOOD_CAMPAIGNS || [];
  return (
    <PageShell current="campagnes">
      <Crumbs items={[
        { label: 'Hiving Food', href: '/' },
        { label: 'Campagnes' },
      ]} />
      <PageHero
        eyebrow="50+ campagnes livrées"
        hand="Des marques,"
        title="des bouchées"
        italic="mémorables."
        intro="On accompagne les marques food à transformer leur produit en moment de consommation : recettes signature, UGC, brand content, lives. Voici quelques-unes de nos campagnes."
      />

      {/* CAMPAGNES — façon menu carte */}
      <section style={{ padding: '40px 40px 96px', position: 'relative' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>

          {/* En-tête menu */}
          <div style={{
            textAlign: 'center', marginBottom: 48, position: 'relative',
            paddingBottom: 32, borderBottom: `1.5px dashed ${PP.ink}30`,
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              fontFamily: PP.serif, fontStyle: 'italic', fontSize: 14, color: PP.inkSoft,
            }}>
              <span style={{ width: 32, height: 1, background: PP.ink, opacity: 0.3 }} />
              La carte des campagnes · service continu depuis 2022
              <span style={{ width: 32, height: 1, background: PP.ink, opacity: 0.3 }} />
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32,
          }} className="food2-camp2-grid">
            {all.map((c, i) => {
              const tones = ['cream', 'warm', 'paper', 'lime', 'cream', 'warm'];
              const rot = (i % 4 === 0 ? -0.6 : i % 4 === 2 ? 0.6 : 0);
              const accent = i % 3 === 0 ? PP.lime : (i % 3 === 1 ? (PP.tomato || '#c8492f') : PP.ink);
              return (
                <a key={c.slug} href={`campagnes/${c.slug}/`} data-cursor style={{
                  background: PP.bg, border: `1.5px solid ${PP.ink}`,
                  textDecoration: 'none', color: PP.ink, position: 'relative',
                  transform: `rotate(${rot}deg)`,
                  transition: 'transform 280ms, box-shadow 280ms',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = `translate(-4px, -6px) rotate(${rot}deg)`; e.currentTarget.style.boxShadow = `8px 8px 0 ${PP.lime}, 0 4px 20px rgba(0,0,0,0.08)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = `translate(0, 0) rotate(${rot}deg)`; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'; }}
                >
                  {/* Numéro de plat — top-left */}
                  <div style={{
                    position: 'absolute', top: 16, left: 16, zIndex: 2,
                    width: 44, height: 44, borderRadius: '50%',
                    background: PP.bg, border: `1.5px solid ${PP.ink}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 700, fontSize: 18, color: PP.ink,
                  }}>{(i + 1).toString().padStart(2, '0')}</div>

                  {/* Tag année rotated en haut à droite */}
                  <div style={{
                    position: 'absolute', top: 18, right: 18, zIndex: 2,
                    fontFamily: PP.hand, fontWeight: 700, fontSize: 22,
                    color: accent, transform: 'rotate(8deg)',
                  }}>2025</div>

                  {c.video ? (
                    <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: PP.ink }}>
                      <LazyVid src={c.video}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <FoodPH aspect="16/10" kind="video" label={c.brand.toUpperCase()} tone={tones[i % tones.length]} />
                  )}

                  <div style={{ padding: 32, position: 'relative' }}>
                    {/* Eyebrow brand · sector + dotted leader */}
                    <div style={{
                      display: 'flex', alignItems: 'baseline', gap: 8,
                      fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.18em',
                      color: PP.inkSoft, textTransform: 'uppercase', marginBottom: 14,
                    }}>
                      <span style={{ fontWeight: 700, color: PP.ink }}>{c.brand}</span>
                      <span style={{ flex: 1, height: 0, borderTop: `1px dotted ${PP.ink}40`, alignSelf: 'flex-end', marginBottom: 4 }} />
                      <span>{c.sector}</span>
                    </div>

                    {/* Titre du plat */}
                    <h3 style={{
                      fontFamily: PP.display, fontWeight: 600,
                      fontSize: 'clamp(22px, 2.2vw, 30px)', lineHeight: 1.15,
                      margin: '0 0 18px', letterSpacing: '-0.01em',
                    }}>
                      {c.title.split(/(\[.+?\])/).map((p, j) => p.startsWith('[') ?
                        <em key={j} style={{ fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 400 }}>{p.slice(1, -1)}</em>
                        : <React.Fragment key={j}>{p}</React.Fragment>)}
                    </h3>

                    {/* Description italique */}
                    <p style={{
                      fontFamily: PP.serif, fontStyle: 'italic',
                      fontSize: 14, lineHeight: 1.55, color: PP.inkSoft, margin: '0 0 24px',
                    }}>{c.excerpt}</p>

                    {/* "Composition du plat" — stats facon menu */}
                    <div style={{
                      paddingTop: 18, borderTop: `1px dashed ${PP.ink}30`,
                      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                      gap: 16, flexWrap: 'wrap',
                    }}>
                      <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
                        {Object.entries(c.stats).slice(0, 3).map(([k, v]) => (
                          <div key={k}>
                            <div style={{
                              fontFamily: PP.display, fontWeight: 700, fontSize: 22, lineHeight: 1,
                              position: 'relative', display: 'inline-block',
                            }}>
                              {v}
                              <span style={{
                                position: 'absolute', left: -2, right: -2, bottom: 2, height: 6,
                                background: accent, opacity: 0.55, zIndex: -1,
                              }} />
                            </div>
                            <div style={{ fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: PP.inkSoft, marginTop: 4 }}>{k}</div>
                          </div>
                        ))}
                      </div>
                      <span style={{
                        fontFamily: PP.display, fontWeight: 600, fontSize: 13,
                        textTransform: 'uppercase', letterSpacing: '0.12em',
                        color: PP.ink, display: 'inline-flex', alignItems: 'center', gap: 6,
                      }}>Voir le case <span aria-hidden="true">→</span></span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Note du chef en pied */}
          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <span style={{
              fontFamily: PP.serif, fontStyle: 'italic', fontSize: 14, color: PP.inkSoft,
            }}>* Liste non exhaustive. Le reste sur demande.</span>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .food2-camp2-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <PageCTA primary={{ label: 'Brief campagne', href: '/#contact' }} />
    </PageShell>
  );
}

// ╔════════════════════════════════════════════════════════════════════
// ║ CAMPAGNE (détail)
// ╚════════════════════════════════════════════════════════════════════
function FoodCampagneDetail2() {
  const slug = getSlug();
  const all = window.FOOD_CAMPAIGNS || [];
  const c = all.find(x => x.slug === slug) || all[0];
  if (!c) return null;
  const others = all.filter(x => x.slug !== c.slug).slice(0, 3);

  return (
    <PageShell current="campagnes">
      <Crumbs items={[
        { label: 'Hiving Food', href: '/' },
        { label: 'Campagnes', href: 'campagnes.html' },
        { label: c.brand },
      ]} />

      <section style={{ padding: '40px 40px 56px', position: 'relative' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          {/* Bandeau "DOSSIER" — façon journal d'agence */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <span style={{
              fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.3em',
              textTransform: 'uppercase', color: PP.inkSoft,
              padding: '6px 12px', background: PP.lime, border: `1.5px solid ${PP.ink}`,
              borderRadius: 4, fontWeight: 700,
            }}>★ DOSSIER HF-2025-{dossierNum(c.slug)} · {c.brand} ★</span>
            <span style={{ flex: 1, height: 1, background: PP.ink, opacity: 0.3 }} />
            <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 13, color: PP.inkSoft }}>case study · 2025</span>
          </div>

          {/* Titre + meta côte à côte */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 48, alignItems: 'flex-end',
          }} className="food2-cdet-head">
            <h1 style={{
              fontFamily: PP.display, fontWeight: 700,
              fontSize: 'clamp(48px, 7vw, 110px)', lineHeight: 0.92,
              letterSpacing: '-0.04em', margin: 0, color: PP.ink, textWrap: 'balance',
            }}>
              {c.title.split(/(\[.+?\])/).map((p, j) => p.startsWith('[') ?
                <span key={j} style={{ fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 400 }}>{p.slice(1, -1)}</span>
                : <React.Fragment key={j}>{p}</React.Fragment>)}
            </h1>

            {/* Mini "carte du chef" — secteur + stamp */}
            <div style={{
              background: PP.bg, border: `1.5px solid ${PP.ink}`,
              padding: 24, position: 'relative', transform: 'rotate(1deg)',
              boxShadow: `4px 4px 0 ${PP.ink}`,
            }}>
              <div style={{ fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: PP.inkSoft, marginBottom: 8 }}>Secteur</div>
              <div style={{ fontFamily: PP.display, fontSize: 22, fontWeight: 700, color: PP.ink, marginBottom: 14 }}>{c.sector}</div>
              <div style={{ fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: PP.inkSoft, marginBottom: 8 }}>Casting</div>
              <div style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 16, color: PP.ink }}>{c.creators}</div>
              {/* Stamp rond rouge — bas droit, dépassement léger */}
              <div style={{
                position: 'absolute', bottom: -22, right: -22,
                width: 76, height: 76, borderRadius: '50%',
                border: `2px solid ${PP.tomato || '#c8492f'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: PP.display, fontWeight: 800, fontSize: 10,
                color: PP.tomato || '#c8492f', textTransform: 'uppercase',
                letterSpacing: '0.1em', textAlign: 'center', lineHeight: 1.15,
                background: PP.bg, transform: 'rotate(-12deg)',
                boxShadow: `2px 2px 0 ${PP.ink}20`,
              }}>livré<br />2025</div>
            </div>
          </div>

          {/* Hero showreel avec offset shadow lime */}
          <div style={{ marginTop: 56, position: 'relative' }}>
            <div style={{
              border: `1.5px solid ${PP.ink}`, overflow: 'hidden',
              boxShadow: `12px 12px 0 ${PP.lime}, 0 8px 32px rgba(0,0,0,0.08)`,
            }}>
              {Array.isArray(c.videos) && c.videos.length >= 4 ? (
                /* Mosaïque de 4 vidéos côte à côte — ratio total ~21:9 sans crop */
                <div style={{
                  position: 'relative', display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, background: PP.ink,
                }}>
                  {c.videos.slice(0, 4).map((v, vi) => (
                    <div key={vi} style={{ position: 'relative', aspectRatio: '9/16', overflow: 'hidden', background: PP.ink, borderRight: vi < 3 ? `1.5px solid ${PP.ink}` : 'none' }}>
                      <LazyVid src={v}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{
                        position: 'absolute', bottom: 10, left: 10,
                        fontFamily: PP.mono, fontSize: 9, fontWeight: 700,
                        color: PP.bg, background: `${PP.ink}d0`,
                        padding: '3px 7px', letterSpacing: '0.16em',
                      }}>{(vi+1).toString().padStart(2, '0')} / {Math.min(c.videos.length, 99).toString().padStart(2, '0')}</div>
                    </div>
                  ))}
                </div>
              ) : c.video ? (
                <div style={{ position: 'relative', aspectRatio: '21/9', overflow: 'hidden', background: PP.ink }}>
                  <LazyVid src={c.video}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (
                <FoodPH aspect="21/9" kind="video" label={`SHOWREEL · ${c.brand.toUpperCase()}`} tone="cream" />
              )}
            </div>
            {/* Étiquette "Play" manuscrite */}
            <div style={{
              position: 'absolute', bottom: -18, left: 40,
              background: PP.tomato || '#c8492f', color: PP.bg,
              padding: '10px 18px', borderRadius: 999,
              border: `1.5px solid ${PP.ink}`,
              fontFamily: PP.hand, fontWeight: 700, fontSize: 22,
              transform: 'rotate(-3deg)', boxShadow: `3px 3px 0 ${PP.ink}`,
            }}>▶ regardez !</div>
          </div>
        </div>
      </section>

      {/* GALERIE DE CONTENUS — visible seulement si c.videos[] existe */}
      {Array.isArray(c.videos) && c.videos.length > 1 && (
      <section style={{ padding: '80px 40px', background: PP.cream, borderTop: `1.5px solid ${PP.ink}` }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontFamily: PP.mono, fontSize: 11, letterSpacing: '0.22em', color: PP.inkSoft, textTransform: 'uppercase', marginBottom: 8 }}>
                {c.videos.length} contenus livrés
              </div>
              <h2 style={{
                fontFamily: PP.display, fontWeight: 700,
                fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1, letterSpacing: '-0.02em',
                margin: 0, color: PP.ink,
              }}>
                Le <em style={{ fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 400 }}>portfolio</em> {c.brand}.
              </h2>
            </div>
            <div style={{ fontFamily: PP.hand, fontSize: 26, fontWeight: 700, color: PP.ink, transform: 'rotate(-2deg)' }}>
              ↓ scroll &amp; regarde
            </div>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14,
          }}>
            {c.videos.map((v, vi) => (
              <div key={vi} style={{
                position: 'relative', aspectRatio: '9/16', overflow: 'hidden',
                background: PP.ink, borderRadius: 4,
                border: `1.5px solid ${PP.ink}`,
                boxShadow: `4px 4px 0 ${vi % 2 === 0 ? PP.lime : PP.warm || '#e8dcc4'}`,
              }}>
                <LazyVid src={v}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', top: 8, right: 8,
                  fontFamily: PP.mono, fontSize: 9, fontWeight: 700,
                  color: PP.bg, background: PP.ink,
                  padding: '3px 7px', letterSpacing: '0.14em',
                }}>{(vi+1).toString().padStart(2, '0')} / {c.videos.length.toString().padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Stats strip — façon ticket de caisse "résultats" */}
      <section style={{ padding: '56px 40px 24px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <span style={{
              display: 'inline-block', fontFamily: PP.hand, fontWeight: 700, fontSize: 36,
              color: PP.ink, transform: 'rotate(-2deg)', lineHeight: 0.9,
            }}>l'addition →</span>
            <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 16, color: PP.inkSoft, marginLeft: 16 }}>résultats mesurés en J+30</span>
          </div>

          <div style={{
            background: PP.bg, border: `1.5px solid ${PP.ink}`,
            position: 'relative', maxWidth: 980, margin: '0 auto',
            padding: '32px 40px',
            boxShadow: '0 8px 28px rgba(0,0,0,0.08)',
          }}>
            {/* Bord déchiré bas — comme un vrai ticket */}
            <div style={{
              position: 'absolute', bottom: -10, left: 0, right: 0, height: 12,
              backgroundImage: `radial-gradient(circle at 8px 12px, ${PP.bg} 4px, transparent 4px)`,
              backgroundSize: '16px 12px',
              backgroundColor: 'transparent',
            }} aria-hidden="true" />

            <div style={{
              display: 'grid', gridTemplateColumns: `repeat(${Object.keys(c.stats).length}, 1fr)`, gap: 0,
            }}>
              {Object.entries(c.stats).map(([k, v], i, arr) => (
                <div key={k} style={{
                  padding: '8px 24px', textAlign: 'center',
                  borderRight: i < arr.length - 1 ? `1.5px dashed ${PP.ink}30` : 'none',
                }}>
                  <div style={{
                    fontFamily: PP.display, fontWeight: 700,
                    fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1,
                    color: PP.ink, letterSpacing: '-0.03em',
                    position: 'relative', display: 'inline-block',
                  }}>
                    {v}
                    <span style={{ position: 'absolute', left: -4, right: -4, bottom: 4, height: 10, background: PP.lime, zIndex: -1 }} />
                  </div>
                  <div style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: PP.inkSoft, marginTop: 12 }}>{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .food2-cdet-head { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Brief / livrable / résultats — fiche de prod */}
      <section style={{ padding: '64px 40px 96px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '260px 1fr', gap: 56 }} className="food2-cdet-grid">
          {/* LEFT — fiche technique scotchée */}
          <div style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
            <div style={{
              background: PP.cream, border: `1.5px solid ${PP.ink}`,
              padding: '28px 24px', position: 'relative', transform: 'rotate(-1.5deg)',
              boxShadow: `4px 4px 0 ${PP.ink}`,
            }}>
              {/* Tape jaune en haut */}
              <span style={{
                position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%) rotate(-3deg)',
                width: 100, height: 22, background: PP.lime,
                border: `1px solid ${PP.ink}40`,
                opacity: 0.95,
              }} />

              <div style={{ textAlign: 'center', borderBottom: `1.5px dashed ${PP.ink}40`, paddingBottom: 14, marginBottom: 18 }}>
                <div style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 12, color: PP.inkSoft, letterSpacing: '0.16em', textTransform: 'uppercase' }}>· fiche de prod ·</div>
                <div style={{ fontFamily: PP.display, fontWeight: 700, fontSize: 18, marginTop: 4, letterSpacing: '-0.01em' }}>HF-2025-{dossierNum(c.slug)}</div>
              </div>

              {[
                { k: 'Marque', v: c.brand },
                { k: 'Secteur', v: c.sector },
                { k: 'Plateformes', v: c.plateformes },
                { k: 'Casting', v: c.creators },
                { k: 'Tournage', v: 'Studios Hiving · 3j' },
                { k: 'Année', v: '2025' },
              ].map((row, i, arr) => (
                <div key={row.k} style={{
                  display: 'flex', alignItems: 'baseline', gap: 6,
                  paddingBottom: i < arr.length - 1 ? 10 : 0,
                  marginBottom: i < arr.length - 1 ? 10 : 0,
                  borderBottom: i < arr.length - 1 ? `1px dotted ${PP.ink}30` : 'none',
                }}>
                  <span style={{ fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: PP.inkSoft, flexShrink: 0 }}>{row.k}</span>
                  <span style={{ flex: 1, height: 0, borderTop: `1px dotted ${PP.ink}30`, alignSelf: 'flex-end', marginBottom: 4 }} />
                  <span style={{ fontFamily: PP.display, fontSize: 13, fontWeight: 600, color: PP.ink, textAlign: 'right' }}>{row.v}</span>
                </div>
              ))}
            </div>

            {/* Tampon "approved" */}
            <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 110, height: 110, borderRadius: '50%',
                border: `2.5px solid ${PP.tomato || '#c8492f'}`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                fontFamily: PP.display, fontWeight: 800,
                color: PP.tomato || '#c8492f', textAlign: 'center', lineHeight: 1.1,
                transform: 'rotate(-8deg)', textTransform: 'uppercase',
                opacity: 0.85,
              }}>
                <span style={{ fontSize: 10, letterSpacing: '0.18em' }}>★</span>
                <span style={{ fontSize: 18, letterSpacing: '0.06em', margin: '2px 0' }}>approved</span>
                <span style={{ fontSize: 9, letterSpacing: '0.2em', fontWeight: 600 }}>by client</span>
              </div>
            </div>
          </div>

          {/* RIGHT — narration */}
          <div>
            <div style={{
              fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: PP.inkSoft, marginBottom: 12,
            }}>Chapitre 01</div>
            <h2 style={{ fontFamily: PP.display, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: PP.ink, margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Le brief <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 400 }}>en deux mots.</span>
            </h2>
            <p style={{
              fontFamily: PP.serif, fontStyle: 'italic',
              fontSize: 22, lineHeight: 1.5, color: PP.ink, margin: '0 0 40px',
              position: 'relative', paddingLeft: 64,
            }}>
              <span aria-hidden="true" style={{
                position: 'absolute', left: 0, top: -10,
                fontFamily: PP.serif, fontWeight: 700, fontSize: 84,
                color: PP.lime, lineHeight: 0.9,
                WebkitTextStroke: `1.5px ${PP.ink}`,
              }}>« </span>
              {c.excerpt}
            </p>

            <div style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: PP.inkSoft, marginBottom: 12 }}>Chapitre 02</div>
            <h3 style={{ fontFamily: PP.display, fontSize: 28, fontWeight: 600, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
              Notre <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 400 }}>recette.</span>
            </h3>
            <p style={{ fontFamily: PP.sans, fontSize: 16, lineHeight: 1.7, color: PP.inkSoft, margin: '0 0 40px' }}>
              Casting de {c.creators.toLowerCase()} avec un fit produit fort. Tournage en studio Hiving sur 3 jours. Direction artistique alignée à la charte {c.brand}, post-production en interne et coordination de la fenêtre de publication.
            </p>

            {/* Polaroids du tournage */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: PP.inkSoft, marginBottom: 16 }}>Backstage · 3 jours de prod</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                {[
                  { tone: 'cream', label: 'Casting', cap: 'jour 01 · briefing créateurs', rot: -2.5 },
                  { tone: 'lime', label: 'Tournage', cap: 'jour 02 · STUDIO PRO', rot: 1.8 },
                  { tone: 'warm', label: 'Photo', cap: 'jour 03 · packshots produit', rot: -1.2 },
                ].map((p, i) => (
                  <div key={i} style={{
                    background: PP.bg, padding: '12px 12px 36px',
                    border: `1.5px solid ${PP.ink}`,
                    transform: `rotate(${p.rot}deg)`, position: 'relative',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                  }}>
                    {/* Tape coin */}
                    <span style={{
                      position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%) rotate(-4deg)',
                      width: 60, height: 16, background: PP.tomato || '#c8492f', opacity: 0.8,
                      border: `1px solid ${PP.ink}30`,
                    }} aria-hidden="true" />
                    <FoodPH aspect="1/1" label={p.label} tone={p.tone} />
                    <div style={{
                      position: 'absolute', bottom: 8, left: 12, right: 12,
                      fontFamily: PP.hand, fontWeight: 700, fontSize: 16, color: PP.ink, textAlign: 'center', lineHeight: 1.1,
                    }}>{p.cap}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: PP.inkSoft, marginBottom: 12 }}>Chapitre 03</div>
            <h3 style={{ fontFamily: PP.display, fontSize: 28, fontWeight: 600, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
              Au <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 400 }}>menu.</span>
            </h3>
            {/* Livrables = checklist façon menu */}
            <ul style={{ fontFamily: PP.sans, fontSize: 16, lineHeight: 1.7, color: PP.ink, padding: 0, margin: '0 0 48px', listStyle: 'none' }}>
              {[
                'Reels Instagram + TikToks signés par chaque créateur',
                'Versions 9:16 et 1:1 pour les paid ads',
                'Photos packshot + behind the scenes',
                'Reporting détaillé J+30 et J+90',
              ].map((it, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'baseline', gap: 12,
                  paddingBottom: 12, marginBottom: 12,
                  borderBottom: `1px dashed ${PP.ink}25`,
                }}>
                  <span style={{
                    fontFamily: PP.hand, fontWeight: 700, fontSize: 22,
                    color: PP.lime, transform: 'rotate(-8deg)', display: 'inline-block',
                    flexShrink: 0, lineHeight: 0.9, WebkitTextStroke: `0.6px ${PP.ink}`,
                  }}>✓</span>
                  <span style={{ flex: 1 }}>{it}</span>
                  <span style={{ fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.18em', color: PP.inkSoft, textTransform: 'uppercase', flexShrink: 0 }}>livré</span>
                </li>
              ))}
            </ul>

            {/* Verbatim — note manuscrite */}
            <div style={{
              background: PP.lime, border: `1.5px solid ${PP.ink}`,
              padding: '36px 36px 32px', position: 'relative',
              transform: 'rotate(-0.8deg)', boxShadow: '0 10px 28px rgba(0,0,0,0.12)',
            }}>
              {/* Tape tomato */}
              <span style={{
                position: 'absolute', top: -14, left: 30, transform: 'rotate(-6deg)',
                width: 110, height: 22, background: PP.tomato || '#c8492f',
                opacity: 0.85, border: `1px solid ${PP.ink}30`,
              }} aria-hidden="true" />
              <div style={{
                fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: PP.ink, marginBottom: 16, fontWeight: 700,
              }}>↳ Le mot du client</div>
              <p style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, color: PP.ink, margin: '0 0 20px' }}>
                « Hiving a su transformer notre brief produit en une campagne qui a fait parler la marque. ROI mesurable, créateurs au top et zéro friction. »
              </p>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                paddingTop: 16, borderTop: `1.5px dashed ${PP.ink}30`,
              }}>
                <div>
                  <div style={{ fontFamily: PP.hand, fontWeight: 700, fontSize: 30, color: PP.ink, transform: 'rotate(-3deg)', display: 'inline-block', lineHeight: 0.9 }}>L'équipe Hiving</div>
                  <div style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 13, color: PP.inkSoft, marginTop: 4 }}>Brand director · {c.brand}</div>
                </div>
                <div style={{ display: 'flex', gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ fontFamily: PP.display, fontSize: 22, color: PP.tomato || '#c8492f' }}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .food2-cdet-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </section>

      {/* Other cases */}
      <section style={{ padding: '64px 40px', background: PP.cream }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <SectionHead eyebrow="Autres campagnes" title="On" italic="continue ?" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="food2-cdet-other">
            {others.map((o, i) => {
              const tones = ['paper', 'warm', 'lime'];
              return (
                <a key={o.slug} href={`campagne.html?slug=${o.slug}`} data-cursor style={{ textDecoration: 'none', color: PP.ink }}>
                  <div style={{ border: `1.5px solid ${PP.ink}`, borderRadius: 12, overflow: 'hidden' }}>
                    <FoodPH aspect="16/10" kind="video" label={o.brand.toUpperCase()} tone={tones[i]} />
                  </div>
                  <div style={{ marginTop: 12, fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: PP.inkSoft }}>{o.brand}</div>
                  <div style={{ fontFamily: PP.display, fontSize: 18, fontWeight: 600, marginTop: 4, lineHeight: 1.2 }}>
                    {o.title.split(/(\[.+?\])/).map((p, j) => p.startsWith('[') ?
                      <em key={j} style={{ fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 400 }}>{p.slice(1, -1)}</em>
                      : <React.Fragment key={j}>{p}</React.Fragment>)}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .food2-cdet-other { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <PageCTA primary={{ label: 'Lancer un projet similaire', href: '/#contact' }} />
    </PageShell>
  );
}

// ╔════════════════════════════════════════════════════════════════════
// ║ ÉVÉNEMENTIEL
// ╚════════════════════════════════════════════════════════════════════
function FoodEventPage2() {
  const services = [
    { title: 'Pop-up & expériences', desc: "Pop-ups food brandés, dégustations, dîners signature. On conçoit l'expérience et on la produit clé en main.", tag: 'Brand experience' },
    { title: 'Pâtisseries signatures', desc: "Création de pâtisseries sur-mesure aux couleurs de votre marque. Idéal lancements produit & événements presse.", tag: 'Custom pastries' },
    { title: 'Traiteur premium', desc: "Buffets et cocktails dînatoires curatés par nos chefs. De 30 à 800 invités, à Paris ou ailleurs.", tag: 'Premium catering' },
    { title: 'Food trucks brandés', desc: "Camions cuisine entièrement habillés à votre identité, déployables sur événements et activations terrain.", tag: 'Event activation' },
    { title: 'Live cooking shows', desc: "Démonstrations en live avec un chef Hiving sur scène. Engagement maximal, contenu social bonus.", tag: 'Live cooking' },
    { title: 'Masterclass corporate', desc: "Ateliers cuisine pour vos équipes ou clients VIP. Animation par un chef, kit à emporter, format hybride possible.", tag: 'B2B' },
  ];

  return (
    <PageShell current="event">
      <Crumbs items={[
        { label: 'Hiving Food', href: '/' },
        { label: 'Événementiel' },
      ]} />
      <PageHero
        eyebrow="Événementiel culinaire"
        hand="On vous"
        title="construit l'événement"
        italic="food."
        intro="De la conception à la production. Pop-ups, dîners signatures, food trucks brandés, live cooking : on transforme la food en expérience de marque."
      />

      <section style={{ padding: '40px 40px 96px', position: 'relative' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>

          {/* Carton d'invitation en intro */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
            <div style={{
              background: PP.cream, border: `1.5px solid ${PP.ink}`,
              padding: '32px 44px', position: 'relative', maxWidth: 540,
              transform: 'rotate(-1deg)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            }}>
              {/* Coins déchirés / festonnés haut+bas */}
              <div style={{ position: 'absolute', top: -2, left: 0, right: 0, height: 6,
                backgroundImage: `radial-gradient(circle at 8px 0, ${PP.bg} 4px, transparent 4px)`,
                backgroundSize: '16px 12px',
                backgroundPosition: '0 -6px',
              }} />
              <div style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: 6,
                backgroundImage: `radial-gradient(circle at 8px 12px, ${PP.bg} 4px, transparent 4px)`,
                backgroundSize: '16px 12px',
              }} />

              <div style={{ textAlign: 'center', borderBottom: `1.5px dashed ${PP.ink}40`, paddingBottom: 16, marginBottom: 16 }}>
                <div style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: PP.inkSoft }}>· carton d'invitation ·</div>
                <div style={{ fontFamily: PP.display, fontWeight: 700, fontSize: 28, letterSpacing: '-0.01em', marginTop: 4 }}>Le programme</div>
              </div>

              <p style={{
                fontFamily: PP.serif, fontStyle: 'italic',
                fontSize: 16, lineHeight: 1.7, color: PP.ink, margin: 0, textAlign: 'center',
              }}>
                Six formats événementiels, conçus pour transformer la food<br />
                en moment{' '}
                <span style={{
                  fontFamily: PP.hand, fontWeight: 700, fontSize: 22,
                  color: PP.ink,
                  display: 'inline-block', verticalAlign: 'baseline',
                  position: 'relative', padding: '0 4px',
                  transform: 'rotate(-2deg)',
                }}>
                  mémorable
                  <span style={{
                    position: 'absolute', left: 0, right: 0, bottom: '6%',
                    height: '36%', background: PP.lime, zIndex: -1,
                    transform: 'skewX(-6deg)',
                  }} />
                </span>{' '}
                de marque.
              </p>

              <div style={{
                marginTop: 18, paddingTop: 14, borderTop: `1.5px dashed ${PP.ink}40`,
                display: 'flex', justifyContent: 'space-between',
                fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: PP.inkSoft,
              }}>
                <span>Maison Hiving · Clichy</span>
                <span>RSVP · 2026</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="food2-svc-grid">
            {services.map((s, i) => {
              const tones = ['cream', 'warm', 'paper', 'lime', 'cream', 'warm'];
              const accents = [PP.lime, PP.tomato || '#c8492f', PP.warm || '#f4d4a4'];
              const accent = accents[i % 3];
              return (
                <div key={i} style={{
                  background: PP.bg, border: `1.5px solid ${PP.ink}`,
                  position: 'relative', overflow: 'visible',
                  boxShadow: `0 4px 16px rgba(0,0,0,0.06)`,
                }}>
                  {/* Numéro de chapitre */}
                  <div style={{
                    position: 'absolute', top: -14, left: 20, zIndex: 2,
                    background: PP.ink, color: PP.bg,
                    padding: '4px 12px',
                    fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.2em',
                    textTransform: 'uppercase', fontWeight: 600,
                  }}>Format · 0{i + 1}</div>

                  <FoodPH aspect="4/3" label={s.title.toUpperCase()} tone={tones[i]} />

                  <div style={{ padding: 28, position: 'relative' }}>
                    <div style={{
                      display: 'inline-block', padding: '4px 10px',
                      background: accent, border: `1px solid ${PP.ink}`, borderRadius: 999,
                      fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.2em',
                      textTransform: 'uppercase', color: PP.ink, marginBottom: 14, fontWeight: 600,
                    }}>{s.tag}</div>
                    <h3 style={{ fontFamily: PP.display, fontWeight: 600, fontSize: 22, color: PP.ink, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{s.title}</h3>
                    <p style={{ fontFamily: PP.sans, fontSize: 14, lineHeight: 1.65, color: PP.inkSoft, margin: 0 }}>{s.desc}</p>

                    {/* Footer ticket avec dotted leader */}
                    <div style={{
                      marginTop: 20, paddingTop: 14, borderTop: `1px dashed ${PP.ink}30`,
                      display: 'flex', alignItems: 'baseline', gap: 8,
                      fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: PP.inkSoft,
                    }}>
                      <span>Sur devis</span>
                      <span style={{ flex: 1, height: 0, borderTop: `1px dotted ${PP.ink}40` }} />
                      <span style={{ fontFamily: PP.serif, fontStyle: 'italic', textTransform: 'none', fontSize: 11, letterSpacing: 0, color: PP.ink }}>au menu</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .food2-svc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px)  { .food2-svc-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Cases événementiels */}
      <section style={{ padding: '96px 40px', background: PP.cream }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <SectionHead
            eyebrow="Quelques événements"
            title="Pour nos"
            italic="meilleurs clients."
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="food2-evt-cases">
            {[
              { brand: 'Président', title: "Pop-up fromager au Marais", date: 'Sept 2025', tone: 'paper' },
              { brand: 'Feastables', title: "Soirée de lancement Paris", date: 'Juin 2025', tone: 'lime' },
            ].map((e, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{ border: `1.5px solid ${PP.ink}`, borderRadius: 16, overflow: 'hidden' }}>
                  <FoodPH aspect="4/3" label={`${e.brand.toUpperCase()} EVENT`} tone={e.tone} />
                </div>
                <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <div style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: PP.inkSoft }}>{e.brand}</div>
                    <div style={{ fontFamily: PP.display, fontSize: 24, fontWeight: 600, marginTop: 4 }}>{e.title}</div>
                  </div>
                  <div style={{ fontFamily: PP.hand, fontSize: 22, color: PP.ink, transform: 'rotate(-4deg)' }}>{e.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 800px) { .food2-evt-cases { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <PageCTA
        title="Un événement food à produire ?"
        subtitle="On vous accompagne du brief créatif à la livraison sur site. Devis sous 48h."
        primary={{ label: 'Demander un devis événement', href: '/#contact' }}
      />
    </PageShell>
  );
}

// ╔════════════════════════════════════════════════════════════════════
// ║ BLOG (index)
// ╚════════════════════════════════════════════════════════════════════
function FoodBlogPage2() {
  const all = window.FOOD_ARTICLES || [];
  const featured = all.find(a => a.featured) || all[0];
  const others = all.filter(a => a.slug !== featured.slug);

  return (
    <PageShell current="blog">
      <Crumbs items={[
        { label: 'Hiving Food', href: '/' },
        { label: 'Blog' },
      ]} />
      <PageHero
        eyebrow="Le carnet · Insights food"
        hand="Tout ce"
        title="qu'on apprend en"
        italic="faisant de la food."
        intro="Stratégie, tarifs, formats, cas pratiques. On documente ce qu'on observe sur le terrain, pour les marques et les créateurs food."
      />

      {/* Featured — la Une du journal */}
      <section style={{ padding: '40px 40px 32px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Masthead façon journal */}
          <div style={{
            borderTop: `2px solid ${PP.ink}`,
            borderBottom: `2px solid ${PP.ink}`,
            padding: '16px 0', marginBottom: 28,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: PP.inkSoft, flexWrap: 'wrap', gap: 14,
          }}>
            <span>★ Le Carnet · n°{dossierNum(featured.slug)} ★</span>
            <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 14, color: PP.ink, letterSpacing: 0, textTransform: 'none' }}>« Si on l'a appris, on le partage. »</span>
            <span>Édition · {featured.date}</span>
          </div>

          {/* Featured card avec offset shadow + tampon "À la une" */}
          <a href={`article.html?slug=${featured.slug}`} data-cursor style={{
            display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0,
            background: PP.cream, border: `1.5px solid ${PP.ink}`,
            overflow: 'hidden', textDecoration: 'none', color: PP.ink, alignItems: 'stretch',
            position: 'relative', boxShadow: `8px 8px 0 ${PP.lime}`,
            transition: 'transform 240ms',
          }} className="food2-blog-feat"
          onMouseEnter={e => e.currentTarget.style.transform = 'translate(-3px, -3px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translate(0, 0)'}
          >
            <div style={{ minHeight: 380, position: 'relative', borderRight: `1.5px solid ${PP.ink}` }}>
              <FoodPH aspect="auto" label={featured.title.toUpperCase()} tone="warm" />
              {/* Tampon À la une */}
              <div style={{
                position: 'absolute', top: 20, left: 20,
                width: 78, height: 78, borderRadius: '50%',
                border: `2px solid ${PP.tomato || '#c8492f'}`,
                background: `${PP.bg}f0`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                fontFamily: PP.display, fontWeight: 800, color: PP.tomato || '#c8492f',
                textAlign: 'center', lineHeight: 1.1, transform: 'rotate(-10deg)',
                textTransform: 'uppercase',
              }}>
                <span style={{ fontSize: 8, letterSpacing: '0.06em' }}>★★★</span>
                <span style={{ fontSize: 11, letterSpacing: '0.04em', margin: '2px 0' }}>à la une</span>
                <span style={{ fontSize: 7, letterSpacing: '0.2em', fontWeight: 600 }}>{featured.cat}</span>
              </div>
            </div>
            <div style={{ padding: 'clamp(32px, 4vw, 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: PP.inkSoft, marginBottom: 16,
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <span style={{ width: 18, height: 1, background: PP.ink }} />
                  Article du jour
                </div>
                <h2 style={{
                  fontFamily: PP.display, fontWeight: 700,
                  fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1, letterSpacing: '-0.025em',
                  margin: '0 0 24px', color: PP.ink, textWrap: 'balance',
                }}>{featured.title}</h2>
                <p style={{
                  fontFamily: PP.serif, fontStyle: 'italic',
                  fontSize: 19, lineHeight: 1.55, color: PP.inkSoft, margin: 0,
                  paddingLeft: 20, borderLeft: `3px solid ${PP.lime}`,
                }}>{featured.excerpt}</p>
              </div>
              <div style={{
                marginTop: 32, paddingTop: 16,
                borderTop: `1.5px dashed ${PP.ink}30`,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
              }}>
                <div style={{ display: 'flex', gap: 18, fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.18em', color: PP.inkSoft, textTransform: 'uppercase' }}>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span style={{
                  fontFamily: PP.display, fontWeight: 600, fontSize: 13,
                  textTransform: 'uppercase', letterSpacing: '0.14em', color: PP.ink,
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>Lire l'article <span aria-hidden="true">→</span></span>
              </div>
            </div>
          </a>
        </div>
        <style>{`@media (max-width: 900px) { .food2-blog-feat { grid-template-columns: 1fr !important; } .food2-blog-feat > div:first-child { min-height: 280px !important; border-right: none !important; border-bottom: 1.5px solid #0a0908 !important; } }`}</style>
      </section>

      {/* Newsletter strip — entre la Une et la grille, façon abonnement */}
      <section style={{ padding: '32px 40px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
            background: PP.lime, border: `1.5px solid ${PP.ink}`,
            padding: '24px 32px', position: 'relative',
          }} className="food2-blog-news">
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: PP.hand, fontWeight: 700, fontSize: 36,
                  color: PP.ink, transform: 'rotate(-3deg)', display: 'inline-block', lineHeight: 0.9,
                }}>la lettre du chef →</span>
                <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 16, color: PP.ink }}>1 mail / mois · 0 spam</span>
              </div>
              <p style={{ fontFamily: PP.sans, fontSize: 14, color: PP.ink, margin: '8px 0 0', maxWidth: 540 }}>Insights food, tarifs, cas d'études et coups de cœur de la rédac', à lire en mangeant.</p>
            </div>
            <form style={{ display: 'flex', gap: 0 }} onSubmit={(e) => {
              e.preventDefault();
              const em = e.currentTarget.querySelector('input').value.trim();
              if (em) window.location.href = 'mailto:contact@hivingfood.fr?subject=' + encodeURIComponent('Inscription à la lettre du chef') + '&body=' + encodeURIComponent('Bonjour, je souhaite recevoir la lettre du chef. Mon email : ' + em);
            }}>
              <input required type="email" placeholder="prenom@marque.com" style={{
                background: PP.bg, border: `1.5px solid ${PP.ink}`, borderRight: 'none',
                padding: '14px 18px', fontFamily: PP.sans, fontSize: 14, color: PP.ink,
                outline: 'none', width: 240,
              }} />
              <button type="submit" style={{
                background: PP.ink, color: PP.lime,
                padding: '14px 22px', border: `1.5px solid ${PP.ink}`,
                fontFamily: PP.display, fontWeight: 600, fontSize: 12, letterSpacing: '0.14em',
                textTransform: 'uppercase', cursor: 'pointer',
              }}>S'abonner →</button>
            </form>
          </div>
        </div>
        <style>{`@media (max-width: 800px) { .food2-blog-news { grid-template-columns: 1fr !important; } .food2-blog-news > div:last-child { width: 100%; } .food2-blog-news input { flex: 1; } }`}</style>
      </section>

      {/* Grid — façon kiosque, articles classés par "rubrique" */}
      <section style={{ padding: '64px 40px 96px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Section header */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32,
          }}>
            <span style={{
              fontFamily: PP.display, fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em',
              color: PP.ink, lineHeight: 1,
            }}>Les autres <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 400 }}>rubriques</span></span>
            <span style={{ flex: 1, height: 1, borderTop: `1.5px dashed ${PP.ink}40`, marginBottom: 8 }} />
            <span style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: PP.inkSoft }}>{others.length} articles</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="food2-blog-grid">
            {others.map((a, i) => {
              const tones = ['cream', 'warm', 'paper', 'lime', 'cream', 'warm'];
              const accents = [PP.lime, PP.tomato || '#c8492f', PP.ink, PP.lime];
              const accent = accents[i % accents.length];
              const rot = i % 3 === 0 ? -0.5 : i % 3 === 1 ? 0.4 : 0;
              return (
                <a key={a.slug} href={`article.html?slug=${a.slug}`} data-cursor style={{
                  background: PP.bg, border: `1.5px solid ${PP.ink}`,
                  textDecoration: 'none', color: PP.ink, position: 'relative',
                  transform: `rotate(${rot}deg)`,
                  transition: 'transform 280ms, box-shadow 280ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = `translate(-3px, -5px) rotate(${rot}deg)`; e.currentTarget.style.boxShadow = `6px 6px 0 ${accent}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = `translate(0, 0) rotate(${rot}deg)`; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  {/* Numéro article */}
                  <div style={{
                    position: 'absolute', top: 12, left: 12, zIndex: 2,
                    background: PP.bg, border: `1.5px solid ${PP.ink}`,
                    padding: '4px 10px',
                    fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.18em',
                    fontWeight: 700, color: PP.ink,
                  }}>N°{(i + 2).toString().padStart(2, '0')}</div>

                  <FoodPH aspect="16/10" label={a.title.toUpperCase()} tone={tones[i % tones.length]} />
                  <div style={{ padding: 24, position: 'relative' }}>
                    {/* Catégorie + dotted leader + temps de lecture */}
                    <div style={{
                      display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 14,
                      fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.2em',
                      textTransform: 'uppercase', color: PP.inkSoft,
                    }}>
                      <span style={{ fontWeight: 700, color: PP.ink, padding: '2px 8px', background: accent, border: `1px solid ${PP.ink}` }}>{a.cat}</span>
                      <span style={{ flex: 1, height: 0, borderTop: `1px dotted ${PP.ink}40`, alignSelf: 'flex-end', marginBottom: 3 }} />
                      <span>{a.readTime}</span>
                    </div>

                    <h3 style={{
                      fontFamily: PP.display, fontWeight: 600, fontSize: 22,
                      lineHeight: 1.18, margin: '0 0 12px', letterSpacing: '-0.01em',
                    }}>{a.title}</h3>
                    <p style={{
                      fontFamily: PP.serif, fontStyle: 'italic',
                      fontSize: 14, lineHeight: 1.55, color: PP.inkSoft, margin: '0 0 18px',
                    }}>{a.excerpt}</p>

                    <div style={{
                      paddingTop: 14, borderTop: `1px dashed ${PP.ink}25`,
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.18em',
                      textTransform: 'uppercase', color: PP.inkSoft,
                    }}>
                      <span>{a.date}</span>
                      <span style={{
                        fontFamily: PP.serif, fontStyle: 'italic', fontSize: 12,
                        letterSpacing: 0, textTransform: 'none', color: PP.ink,
                      }}>lire →</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Guides pratiques : maillage interne vers les dossiers SEO */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '10px 32px 56px' }}>
        <div style={{ fontFamily: PP.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: PP.ink, opacity: 0.55, marginBottom: 14 }}>( guides pratiques )</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            ["Marketing d'influence food : le guide", '/blog/marketing-influence-food.html'],
            ["Choisir son agence d'influence food", '/blog/comment-choisir-agence-influence-food.html'],
            ['Tarifs des campagnes food en 2026', '/blog/tarifs-campagne-influence-food-2026.html'],
            ['Influenceurs food TikTok en 2026', '/blog/influenceur-food-tiktok-2026.html'],
            ['Top 10 des agences influence food', '/blog/top-10-agences-influence-food-2026.html'],
            ['Louer un studio cuisine à Paris', '/blog/location-studio-cuisine-paris.html'],
            ['Spark Ads food : mode d\'emploi', '/blog/spark-ads-food-2026.html'],
            ['Tendances food marketing 2026', '/blog/tendances-food-marketing-2026.html'],
            ['IA et food marketing', '/blog/ia-food-marketing-2026.html'],
            ['Modèle de brief campagne food', '/blog/brief-campagne-influence-food-modele.html'],
          ].map(([t, hf]) => (
            <a key={hf} href={hf} data-cursor style={{ fontFamily: PP.display, fontSize: 13, color: PP.ink, textDecoration: 'none', border: '1.5px solid rgba(10,9,8,0.18)', borderRadius: 999, padding: '10px 16px', background: '#fff' }}>{t}</a>
          ))}
        </div>
      </div>
      {/* Pied de page blog — note manuscrite */}
          <div style={{
            marginTop: 64, textAlign: 'center',
            fontFamily: PP.serif, fontStyle: 'italic', fontSize: 16, color: PP.inkSoft,
          }}>
            ↓ on en publie un nouveau toutes les 2 semaines · <a href="/#contact" style={{ color: PP.ink, textDecoration: 'underline' }}>proposer un sujet</a>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .food2-blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px)  { .food2-blog-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </PageShell>
  );
}

// ╔════════════════════════════════════════════════════════════════════
// ║ ARTICLE (détail)
// ╚════════════════════════════════════════════════════════════════════
function FoodArticlePage2() {
  const slug = getSlug();
  const all = window.FOOD_ARTICLES || [];
  const a = all.find(x => x.slug === slug) || all[0];
  if (!a) return null;
  const others = all.filter(x => x.slug !== a.slug).slice(0, 3);

  return (
    <PageShell current="blog">
      <Crumbs items={[
        { label: 'Hiving Food', href: '/' },
        { label: 'Blog', href: 'blog.html' },
        { label: a.cat },
      ]} />

      <article style={{ padding: '40px 40px 96px', position: 'relative' }}>
        {/* Bande "ÉDITION DU JOUR" — façon journal */}
        <div style={{ maxWidth: 800, margin: '0 auto 32px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ flex: 1, height: 1, background: PP.ink, opacity: 0.3 }} />
          <span style={{
            fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: PP.inkSoft,
          }}>★ Édition · {a.date} · n°{dossierNum(a.slug)} ★</span>
          <span style={{ flex: 1, height: 1, background: PP.ink, opacity: 0.3 }} />
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px',
            background: PP.lime, border: `1.5px solid ${PP.ink}`, borderRadius: 999,
            fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: 24,
          }}>{a.cat}</div>
          <h1 style={{
            fontFamily: PP.display, fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em',
            margin: 0, color: PP.ink, textWrap: 'balance',
          }}>{a.title}</h1>
          <div style={{ marginTop: 24, fontFamily: PP.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: PP.inkSoft, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <span>{a.date}</span><span>·</span><span>{a.readTime}</span><span>·</span>
            <span style={{ fontFamily: PP.serif, fontStyle: 'italic', letterSpacing: 0, fontSize: 13, textTransform: 'none' }}>par la rédac' Hiving</span>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '48px auto 0', padding: '0 16px 16px 0', position: 'relative' }}>
          <div style={{ border: `1.5px solid ${PP.ink}`, overflow: 'hidden', boxShadow: `8px 8px 0 ${PP.lime}` }}>
            <FoodPH aspect="16/9" label={a.title.toUpperCase()} tone="cream" />
          </div>
          <div style={{
            marginTop: 12, fontFamily: PP.serif, fontStyle: 'italic',
            fontSize: 13, color: PP.inkSoft, textAlign: 'center',
          }}>↑ {a.excerpt.split('.')[0]}.</div>
        </div>

        <div style={{ maxWidth: 720, margin: '64px auto 0', fontFamily: PP.serif, fontSize: 19, lineHeight: 1.75, color: PP.ink }}>
          {/* Chapeau italique */}
          <div style={{
            fontFamily: PP.serif, fontStyle: 'italic',
            fontSize: 22, lineHeight: 1.55, color: PP.inkSoft, margin: '0 0 32px',
            position: 'relative', paddingLeft: 80, minHeight: 64,
          }}>
            <span aria-hidden="true" style={{
              position: 'absolute', left: 0, top: -10,
              fontFamily: PP.serif, fontWeight: 700, fontSize: 96, lineHeight: 0.9,
              color: PP.ink, letterSpacing: '-0.04em',
            }}>« </span>
            {a.excerpt}
          </div>

          <h2 style={{ fontFamily: PP.display, fontSize: 32, fontWeight: 600, color: PP.ink, margin: '48px 0 16px', letterSpacing: '-0.01em' }}>
            Pourquoi <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontWeight: 400 }}>maintenant</span>
          </h2>
          <p>L'influence food a basculé. Là où elle reposait sur quelques figures macro, elle s'est recomposée autour de créateurs spécialisés (chefs, pâtissiers, food storytellers) qui produisent des contenus mieux que la plupart des agences créa traditionnelles. C'est un changement structurel : la marque qui veut performer en food doit jouer sur ce terrain-là.</p>

          <h2 style={{ fontFamily: PP.display, fontSize: 32, fontWeight: 600, color: PP.ink, margin: '48px 0 16px', letterSpacing: '-0.01em' }}>
            Les <span style={{ fontFamily: PP.hand, color: PP.lime, WebkitTextStroke: `0.6px ${PP.ink}`, transform: 'rotate(-3deg)', display: 'inline-block', fontSize: 38, lineHeight: 0.8 }}>3</span> leviers à activer
          </h2>
          <p>D'abord, le casting. Pas le créateur le plus gros, mais celui dont la cuisine ressemble à votre produit. Ensuite, le format : recettes filmées, UGC, lives : chacun a sa logique de performance. Enfin, la diffusion : trop de marques sous-investissent dans le paid post-publication.</p>

          {/* Note de la rédac' — sticky note */}
          <div style={{ margin: '56px 0', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: PP.lime, border: `1.5px solid ${PP.ink}`,
              padding: '32px 36px 28px', maxWidth: 540, position: 'relative',
              transform: 'rotate(-1.5deg)', boxShadow: '0 8px 22px rgba(0,0,0,0.12)',
            }}>
              {/* Tape */}
              <span style={{
                position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%) rotate(-3deg)',
                width: 96, height: 22, background: PP.tomato || '#c8492f', opacity: 0.85,
                border: `1px solid ${PP.ink}30`,
              }} />
              <div style={{ fontFamily: PP.hand, fontSize: 32, color: PP.ink, transform: 'rotate(-2deg)', marginBottom: 12, lineHeight: 1, fontWeight: 700, display: 'inline-block' }}>note de la rédac'</div>
              <p style={{ fontFamily: PP.sans, fontSize: 15, lineHeight: 1.6, color: PP.ink, margin: 0 }}>
                Cet article est tiré de notre travail avec <strong>METRO</strong>, <strong>Président</strong>, <strong>Picard</strong> et <strong>Feastables</strong>. Si vous voulez creuser, on a aussi des templates de brief disponibles sur demande.
              </p>
              <div style={{
                marginTop: 16, fontFamily: PP.hand, fontWeight: 700, fontSize: 26,
                color: PP.ink, transform: 'rotate(-2deg)', textAlign: 'right',
              }}>la rédac'.</div>
            </div>
          </div>

          <h2 style={{ fontFamily: PP.display, fontSize: 32, fontWeight: 600, color: PP.ink, margin: '48px 0 16px', letterSpacing: '-0.01em' }}>Ce qu'on retient</h2>
          <p>La food est devenue l'un des terrains de marque les plus exigeants, mais aussi les plus rémunérateurs. Les marques qui prennent le sujet au sérieux gagnent en notoriété, en considération et en ventes mesurables.</p>

          {/* Pied d'article — signature + partage */}
          <div style={{
            marginTop: 64, paddingTop: 32, borderTop: `1.5px dashed ${PP.ink}30`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: 24,
          }}>
            <div>
              <div style={{ fontFamily: PP.mono, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: PP.inkSoft, marginBottom: 8 }}>Signé</div>
              <div style={{
                fontFamily: PP.hand, fontWeight: 700, fontSize: 38, color: PP.ink,
                transform: 'rotate(-3deg)', display: 'inline-block', lineHeight: 0.9,
              }}>La rédac' Hiving</div>
              <div style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 13, color: PP.inkSoft, marginTop: 4 }}>Carnet du chef · 2026</div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontFamily: PP.serif, fontStyle: 'italic', fontSize: 13, color: PP.inkSoft, marginRight: 8 }}>partager →</span>
              {['IG', 'TT', 'IN', '✉'].map((s, i) => (
                <a key={i} href="#" data-cursor style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: `1.5px solid ${PP.ink}`, background: PP.bg,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: PP.display, fontWeight: 700, fontSize: 11,
                  color: PP.ink, textDecoration: 'none', letterSpacing: '0.06em',
                  transition: 'background 200ms, color 200ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = PP.ink; e.currentTarget.style.color = PP.lime; }}
                onMouseLeave={e => { e.currentTarget.style.background = PP.bg; e.currentTarget.style.color = PP.ink; }}
                >{s}</a>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section style={{ padding: '64px 40px', background: PP.cream }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <SectionHead eyebrow="À lire aussi" title="On" italic="continue ?" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="food2-art-other">
            {others.map((o, i) => {
              const tones = ['paper', 'warm', 'lime'];
              return (
                <a key={o.slug} href={`article.html?slug=${o.slug}`} data-cursor style={{ textDecoration: 'none', color: PP.ink }}>
                  <div style={{ border: `1.5px solid ${PP.ink}`, borderRadius: 12, overflow: 'hidden' }}>
                    <FoodPH aspect="16/10" label={o.title.toUpperCase()} tone={tones[i]} />
                  </div>
                  <div style={{ marginTop: 12, fontFamily: PP.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: PP.inkSoft }}>{o.cat}</div>
                  <div style={{ fontFamily: PP.display, fontSize: 18, fontWeight: 600, marginTop: 4, lineHeight: 1.25 }}>{o.title}</div>
                </a>
              );
            })}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .food2-art-other { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </PageShell>
  );
}

Object.assign(window, {
  FoodAgencePage2, FoodTalentsPage2, FoodTalentPage2,
  FoodCampagnesPage2, FoodCampagneDetail2,
  FoodEventPage2, FoodBlogPage2, FoodArticlePage2,
});
