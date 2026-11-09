#!/usr/bin/env python3
"""
Hiving Food - Événementiel Culinaire - PDF de présentation
"""

from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white
from reportlab.pdfgen import canvas
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import Paragraph, Frame
from reportlab.lib.styles import ParagraphStyle
import os

# ─── Config ───
OUTPUT = "/Users/maximebolleau/Desktop/hiving-food/Hiving-Food-Evenementiel.pdf"
LOGO_WHITE = "/Users/maximebolleau/Desktop/hiving-food/img/logo/hiving-white.png"

# Brand colors
BLACK = HexColor("#111111")
DARK = HexColor("#1a1a1a")
ACCENT = HexColor("#D4A853")
LIGHT_BG = HexColor("#F8F6F1")
GRAY = HexColor("#666666")
LIGHT_GRAY = HexColor("#999999")
WHITE_BG = HexColor("#FFFFFF")

W, H = landscape(A4)
TOTAL_PAGES = 11

# Margins
ML = 35*mm  # margin left
MR = 35*mm
MT = 30*mm  # margin top (from top of page)
MB = 22*mm  # margin bottom


def draw_footer(c, page_num, dark_bg=False):
    color_text = HexColor("#444444") if dark_bg else LIGHT_GRAY
    color_num = white if dark_bg else GRAY
    if not dark_bg:
        c.setStrokeColor(HexColor("#E0DDD5"))
        c.setLineWidth(0.5)
        c.line(ML, MB + 4*mm, W - MR, MB + 4*mm)
    c.setFillColor(color_text)
    c.setFont("Helvetica", 7.5)
    c.drawString(ML, MB - 4*mm, "HIVING FOOD  |  Evenementiel Culinaire")
    c.setFillColor(color_num)
    c.setFont("Helvetica", 7.5)
    c.drawRightString(W - MR, MB - 4*mm, f"{page_num} / {TOTAL_PAGES}")


def draw_accent_line(c, x, y, width, thickness=1.5):
    c.setStrokeColor(ACCENT)
    c.setLineWidth(thickness)
    c.line(x, y, x + width, y)


def draw_section_label(c, text, x, y):
    c.setFillColor(ACCENT)
    c.setFont("Helvetica", 9)
    c.drawString(x, y, f"( {text} )")


# ─── Styles ───
def make_style(name, **kw):
    defaults = dict(fontName='Helvetica', fontSize=11, leading=15, textColor=GRAY, alignment=TA_LEFT)
    defaults.update(kw)
    return ParagraphStyle(name, **defaults)

S_TITLE = make_style('T', fontName='Helvetica-Bold', fontSize=26, leading=32, textColor=BLACK)
S_TITLE_W = make_style('TW', fontName='Helvetica-Bold', fontSize=26, leading=32, textColor=white)
S_SUB = make_style('Sub', fontSize=12, leading=17, textColor=GRAY)
S_SUB_W = make_style('SubW', fontSize=12, leading=17, textColor=HexColor("#BBBBBB"))
S_BODY = make_style('B', fontSize=10, leading=14, textColor=GRAY)
S_BODY_W = make_style('BW', fontSize=10, leading=14, textColor=HexColor("#AAAAAA"))
S_H3 = make_style('H3', fontName='Helvetica-Bold', fontSize=11.5, leading=15, textColor=BLACK)
S_H3_W = make_style('H3W', fontName='Helvetica-Bold', fontSize=11.5, leading=15, textColor=white)
S_SMALL = make_style('Sm', fontSize=8.5, leading=12, textColor=GRAY)
S_SMALL_W = make_style('SmW', fontSize=8.5, leading=12, textColor=HexColor("#AAAAAA"))


def draw_paragraph(c, text, style, x, y, w, h):
    """Helper: draw paragraph in frame, returns remaining space"""
    f = Frame(x, y, w, h, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0, showBoundary=0)
    f.addFromList([Paragraph(text, style)], c)


# ──────────────────────────────────────────
# PAGE 1: COVER
# ──────────────────────────────────────────
def page_cover(c):
    c.setFillColor(DARK)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    # Gold top line
    c.setStrokeColor(ACCENT)
    c.setLineWidth(3)
    c.line(0, H - 3*mm, W, H - 3*mm)

    # Logo
    if os.path.exists(LOGO_WHITE):
        c.drawImage(LOGO_WHITE, ML, H - 32*mm, width=55*mm, height=17.8*mm,
                     preserveAspectRatio=True, mask='auto')

    # Title
    y = H / 2 + 35*mm
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 44)
    c.drawString(ML, y, "Événementiel")
    c.drawString(ML, y - 52, "Culinaire")

    draw_accent_line(c, ML, y - 66, 80*mm, 2.5)

    # Subtitle
    c.setFillColor(HexColor("#BBBBBB"))
    c.setFont("Helvetica", 13)
    c.drawString(ML, y - 92, "Conception, production, livraison.")
    c.drawString(ML, y - 112, "Des expériences culinaires sur mesure")
    c.drawString(ML, y - 132, "pour vos événements.")

    # Contact
    c.setFillColor(ACCENT)
    c.setFont("Helvetica", 9.5)
    c.drawString(ML, 18*mm, "www.hivingfood.fr/evenementiel")
    c.setFillColor(HexColor("#777777"))
    c.drawString(ML, 10*mm, "contact@hivingfood.fr")

    # Decorative
    c.setFillColor(HexColor("#222222"))
    c.setFont("Helvetica-Bold", 200)
    c.drawRightString(W - 15*mm, H / 2 - 50*mm, "HF")

    draw_footer(c, 1, dark_bg=True)


# ──────────────────────────────────────────
# PAGE 2: QUI SOMMES-NOUS
# ──────────────────────────────────────────
def page_about(c):
    c.setFillColor(WHITE_BG)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    top = H - MT
    draw_section_label(c, "Qui sommes-nous", ML, top)

    # Title
    draw_paragraph(c,
        "L'expérience food qui marque les <font color='#D4A853'>esprits.</font>",
        S_TITLE, ML, top - 40*mm, W - ML - MR, 32*mm)

    # Subtitle
    draw_paragraph(c,
        "Conception, production, livraison. On orchestre des expériences culinaires "
        "sur mesure pour vos événements, du macaron brandé au traiteur grand format.",
        S_SUB, ML, top - 65*mm, W/2 - 10*mm, 22*mm)

    # 3 stat cards - positioned well below subtitle
    stats = [("50+", "Événements\nproduits"), ("27", "Marques luxe\n& corporate"), ("30 à 1 000", "Convives")]
    card_w = 72*mm
    card_h = 60*mm
    gap = 12*mm
    cards_y = MB + 30*mm  # bottom of cards

    for i, (num, label) in enumerate(stats):
        x = ML + i * (card_w + gap)

        c.setFillColor(LIGHT_BG)
        c.roundRect(x, cards_y, card_w, card_h, 6, fill=True, stroke=False)

        # Gold top border
        c.setStrokeColor(ACCENT)
        c.setLineWidth(2.5)
        c.line(x + 6, cards_y + card_h, x + card_w - 6, cards_y + card_h)

        # Number
        c.setFillColor(ACCENT)
        fs = 30 if len(num) <= 3 else 22
        c.setFont("Helvetica-Bold", fs)
        tw = c.stringWidth(num, c._fontname, c._fontsize)
        c.drawString(x + (card_w - tw) / 2, cards_y + card_h - 28*mm, num)

        # Label
        c.setFillColor(GRAY)
        c.setFont("Helvetica", 9.5)
        for j, line in enumerate(label.split("\n")):
            lw = c.stringWidth(line, "Helvetica", 9.5)
            c.drawString(x + (card_w - lw) / 2, cards_y + 10*mm - j * 13, line)

    draw_footer(c, 2)


# ──────────────────────────────────────────
# PAGE 3: MARQUES
# ──────────────────────────────────────────
def page_brands(c):
    c.setFillColor(WHITE_BG)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    top = H - MT
    draw_section_label(c, "Ils nous font confiance", ML, top)

    draw_paragraph(c, "Du luxe au <font color='#D4A853'>corporate</font>",
                   S_TITLE, ML, top - 40*mm, W - ML - MR, 32*mm)

    draw_paragraph(c,
        "Lancements produits, galas, séminaires, soirées presse. "
        "Les marques les plus exigeantes nous confient leurs événements.",
        S_SUB, ML, top - 65*mm, W/2 + 20*mm, 22*mm)

    brands = [
        "Dior", "Nike", "LVMH", "Burberry", "Givenchy", "Armani",
        "Porsche", "Aston Martin", "Jordan", "PSG", "Loewe", "APM Monaco",
        "Djula", "Snapchat", "Pullman", "Uniqlo", "Adidas", "Hechter Paris",
        "Goutal Paris", "Jean-Louis David", "Crédit Agricole", "Courir",
        "PrettyLittleThing", "Paris Match", "Jetex", "Galeries Lafayette",
        "Qatar Prix Arc de Triomphe"
    ]

    pill_x = ML
    pill_y = top - 80*mm
    pill_h = 9*mm
    max_x = W - MR

    for brand in brands:
        c.setFont("Helvetica", 9)
        tw = c.stringWidth(brand, "Helvetica", 9)
        pill_w = tw + 14*mm

        if pill_x + pill_w > max_x:
            pill_x = ML
            pill_y -= (pill_h + 5*mm)

        c.setFillColor(LIGHT_BG)
        c.roundRect(pill_x, pill_y, pill_w, pill_h, pill_h / 2, fill=True, stroke=False)
        c.setStrokeColor(HexColor("#E0DDD5"))
        c.setLineWidth(0.5)
        c.roundRect(pill_x, pill_y, pill_w, pill_h, pill_h / 2, fill=False, stroke=True)
        c.setFillColor(BLACK)
        c.drawString(pill_x + 7*mm, pill_y + 2.8*mm, brand)

        pill_x += pill_w + 4*mm

    draw_footer(c, 3)


# ──────────────────────────────────────────
# PAGE 4: ACCOMPAGNEMENT (6 cards, 3x2)
# ──────────────────────────────────────────
def page_accompagnement(c):
    c.setFillColor(WHITE_BG)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    top = H - MT
    draw_section_label(c, "Notre accompagnement", ML, top)

    draw_paragraph(c,
        "Du brief au jour J, on gère <font color='#D4A853'>tout.</font>",
        S_TITLE, ML, top - 38*mm, W - ML - MR, 30*mm)

    items = [
        ("Un seul interlocuteur",
         "Un chef de projet dédié qui connaît votre marque, pilote les équipes et assure le suivi de A à Z."),
        ("Sur mesure intégral",
         "Logo imprimé sur chaque pièce, couleurs de marque, packaging custom. Chaque création incarne votre identité."),
        ("On vient à vous",
         "Bureaux, rooftop, salon, château, on se déplace partout en France avec notre matériel et nos équipes."),
        ("30 à 1 000 convives",
         "Petit-déjeuner d'équipe ou gala grand format. On monte en volume sans jamais rogner sur l'exécution."),
        ("Contenu clé en main",
         "Photo, vidéo, stories. On capte votre événement et on vous livre du contenu prêt à poster le jour même."),
        ("Délais serrés, pas de compromis",
         "5 jours pour tout organiser ? On l'a déjà fait. Devis en 24h, production express, même niveau d'exigence."),
    ]

    # Grid layout
    cols = 3
    usable_w = W - ML - MR
    gap_x = 8*mm
    gap_y = 8*mm
    col_w = (usable_w - (cols - 1) * gap_x) / cols
    card_h = 48*mm

    # Available vertical space: from below title to above footer
    grid_top = top - 50*mm
    grid_bottom = MB + 10*mm
    total_grid_h = grid_top - grid_bottom
    # Center the 2 rows vertically
    total_cards_h = 2 * card_h + gap_y
    offset_y = grid_bottom + (total_grid_h - total_cards_h) / 2

    for i, (title, desc) in enumerate(items):
        col = i % cols
        row = i // cols
        x = ML + col * (col_w + gap_x)
        y = offset_y + (1 - row) * (card_h + gap_y)  # row 0 on top

        # Card bg
        c.setFillColor(LIGHT_BG)
        c.roundRect(x, y, col_w, card_h, 5, fill=True, stroke=False)

        # Gold left accent
        c.setStrokeColor(ACCENT)
        c.setLineWidth(2.5)
        c.line(x, y + 4, x, y + card_h - 4)

        # Title
        draw_paragraph(c, title, S_H3, x + 8*mm, y + card_h - 18*mm, col_w - 14*mm, 14*mm)

        # Description
        draw_paragraph(c, desc, S_SMALL, x + 8*mm, y + 3*mm, col_w - 14*mm, card_h - 22*mm)

    draw_footer(c, 4)


# ──────────────────────────────────────────
# PAGE 5: PRESTATIONS (8 cards, 4x2)
# ──────────────────────────────────────────
def page_prestations(c):
    c.setFillColor(WHITE_BG)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    top = H - MT
    draw_section_label(c, "Nos prestations", ML, top)

    draw_paragraph(c,
        "De l'apéro au dessert, tout est <font color='#D4A853'>couvert.</font>",
        S_TITLE, ML, top - 38*mm, W - ML - MR, 30*mm)

    items = [
        ("Pâtisseries brandées", "Macarons, choux, madeleines, cookies imprimés à votre logo et déclinés dans vos couleurs."),
        ("Viennoiseries sur mesure", "Croissants, pains au chocolat, brioches marqués au fer avec votre identité."),
        ("Pizza show cooking", "Napolitaines cuites au feu de bois, en live, devant vos invités."),
        ("Bar & cocktails", "Cocktails signature, mocktails, jus pressés à vos couleurs. Bar éphémère élégant."),
        ("Salé & finger food", "Bouchées, sandwichs artisanaux, planches apéritives. Produits frais, de saison."),
        ("Pièces d'exception", "Gâteaux monumentaux, sculptures sucrées, number cakes."),
        ("Ateliers & masterclass", "Team building pâtisserie, pizza ou cocktails. Dans nos studios ou vos locaux."),
        ("Contenu & captation", "Photo, vidéo, stories. Du contenu pro livré le jour même."),
    ]

    cols = 4
    usable_w = W - ML - MR
    gap_x = 7*mm
    gap_y = 7*mm
    col_w = (usable_w - (cols - 1) * gap_x) / cols
    card_h = 44*mm

    grid_top = top - 50*mm
    grid_bottom = MB + 10*mm
    total_grid_h = grid_top - grid_bottom
    total_cards_h = 2 * card_h + gap_y
    offset_y = grid_bottom + (total_grid_h - total_cards_h) / 2

    for i, (title, desc) in enumerate(items):
        col = i % cols
        row = i // cols
        x = ML + col * (col_w + gap_x)
        y = offset_y + (1 - row) * (card_h + gap_y)

        c.setFillColor(LIGHT_BG)
        c.roundRect(x, y, col_w, card_h, 5, fill=True, stroke=False)

        # Number
        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 16)
        c.drawString(x + 5*mm, y + card_h - 12*mm, f"0{i+1}")

        # Title
        draw_paragraph(c, title, make_style(f'H4_{i}', fontName='Helvetica-Bold', fontSize=9.5, leading=12, textColor=BLACK),
                       x + 5*mm, y + card_h - 26*mm, col_w - 10*mm, 13*mm)

        # Desc
        draw_paragraph(c, desc, make_style(f'D_{i}', fontSize=8, leading=11, textColor=GRAY),
                       x + 5*mm, y + 2*mm, col_w - 10*mm, card_h - 28*mm)

    draw_footer(c, 5)


# ──────────────────────────────────────────
# PAGE 6: FORMATS (dark)
# ──────────────────────────────────────────
def page_formats(c):
    c.setFillColor(DARK)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    c.setStrokeColor(ACCENT)
    c.setLineWidth(2.5)
    c.line(0, H - 3*mm, W, H - 3*mm)

    top = H - MT
    draw_section_label(c, "Formats", ML, top)

    draw_paragraph(c,
        "Un événement, un <font color='#D4A853'>format</font>",
        S_TITLE_W, ML, top - 40*mm, W - ML - MR, 32*mm)

    formats = [
        ("01", "Soirées & Lancements",
         "Cocktail dînatoire, soirée presse, lancement produit. On conçoit l'offre culinaire complète, de l'accueil au dessert, contenu inclus."),
        ("02", "Activations & Pop-up",
         "Stand culinaire sur salon, animation en point de vente, pop-up food. Clé en main, pensé pour créer du trafic et du contenu."),
        ("03", "Séminaires & Team Building",
         "Petit-déjeuner, pause gourmande, atelier culinaire. Dans nos studios à Clichy ou directement dans vos locaux."),
    ]

    card_w = (W - ML - MR - 20*mm) / 3
    card_h = 75*mm
    card_y = (H - card_h) / 2 - 10*mm

    for i, (num, title, desc) in enumerate(formats):
        x = ML + i * (card_w + 10*mm)

        c.setFillColor(HexColor("#222222"))
        c.roundRect(x, card_y, card_w, card_h, 6, fill=True, stroke=False)

        # Gold accent top
        c.setStrokeColor(ACCENT)
        c.setLineWidth(2)
        c.line(x + 6, card_y + card_h, x + card_w - 6, card_y + card_h)

        # Number
        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 32)
        c.drawString(x + 10*mm, card_y + card_h - 22*mm, num)

        # Title
        draw_paragraph(c, title, S_H3_W, x + 10*mm, card_y + card_h - 36*mm, card_w - 20*mm, 14*mm)

        # Desc
        draw_paragraph(c, desc, S_SMALL_W, x + 10*mm, card_y + 4*mm, card_w - 20*mm, card_h - 42*mm)

    draw_footer(c, 6, dark_bg=True)


# ──────────────────────────────────────────
# PAGE 7: CASE STUDY DIOR
# ──────────────────────────────────────────
def page_case_dior(c):
    c.setFillColor(WHITE_BG)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    top = H - MT
    draw_section_label(c, "Nos réalisations", ML, top)

    # Brand badge
    c.setFillColor(ACCENT)
    c.roundRect(ML, top - 24*mm, 26*mm, 8*mm, 4, fill=True, stroke=False)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(ML + 6*mm, top - 22*mm, "DIOR")

    # Title
    draw_paragraph(c,
        "Lancement parfum : Pâtisseries <font color='#D4A853'>haute couture</font>",
        S_TITLE, ML, top - 62*mm, W / 2 - 10*mm, 28*mm)

    # Description
    draw_paragraph(c,
        "Pour le lancement d'un nouveau parfum, on a conçu une collection de macarons "
        "et choux aux couleurs de la maison Dior. Packaging sur mesure, livraison sur site, "
        "mise en scène buffet. Le tout en 10 jours.",
        S_BODY, ML, top - 100*mm, W / 2 - 20*mm, 34*mm)

    # Stats
    case_stats = [("500", "Pièces produites"), ("10j", "Délai de production"), ("200", "Invités")]
    for i, (num, label) in enumerate(case_stats):
        x = ML + i * 52*mm
        y = top - 118*mm

        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 22)
        c.drawString(x, y, num)

        c.setFillColor(GRAY)
        c.setFont("Helvetica", 8.5)
        c.drawString(x, y - 13, label)

    # Right: image placeholder
    img_x = W / 2 + 15*mm
    img_w = W / 2 - 50*mm
    img_h = H - MT - MB - 20*mm
    img_y = MB + 15*mm

    dior_img = "/Users/maximebolleau/Desktop/hiving-food/img/evenementiel/dorian/dior-3.webp"
    try:
        c.drawImage(dior_img, img_x, img_y, width=img_w, height=img_h,
                    preserveAspectRatio=True, mask='auto')
    except Exception:
        c.setFillColor(LIGHT_BG)
        c.roundRect(img_x, img_y, img_w, img_h, 8, fill=True, stroke=False)
        c.setFillColor(GRAY)
        c.setFont("Helvetica", 11)
        c.drawCentredString(img_x + img_w/2, img_y + img_h/2, "Photo Dior")

    draw_footer(c, 7)


# ──────────────────────────────────────────
# PAGE 8: CASE STUDY PORSCHE (dark)
# ──────────────────────────────────────────
def page_case_porsche(c):
    c.setFillColor(DARK)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    c.setStrokeColor(ACCENT)
    c.setLineWidth(2.5)
    c.line(0, H - 3*mm, W, H - 3*mm)

    top = H - MT
    draw_section_label(c, "Nos réalisations", ML, top)

    # Brand badge
    c.setFillColor(ACCENT)
    c.roundRect(ML, top - 24*mm, 36*mm, 8*mm, 4, fill=True, stroke=False)
    c.setFillColor(DARK)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(ML + 6*mm, top - 22*mm, "PORSCHE")

    # Title
    draw_paragraph(c,
        "Show cooking pizza : Concession <font color='#D4A853'>Porsche Paris</font>",
        S_TITLE_W, ML, top - 62*mm, W / 2, 28*mm)

    # Description
    draw_paragraph(c,
        "Nos pizzaioli ont installé leur four juste à côté des moteurs : cuisson minute, "
        "pizzas napolitaines non-stop, ambiance Naples au milieu des showrooms. Un format "
        "qui mêle expérience culinaire et univers automobile haut de gamme.",
        S_BODY_W, ML, top - 105*mm, W / 2 - 20*mm, 38*mm)

    # Stats
    case_stats = [("Live", "Show cooking"), ("Sur site", "Concession"), ("Premium", "Clientèle")]
    for i, (num, label) in enumerate(case_stats):
        x = ML + i * 52*mm
        y = top - 122*mm

        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 20)
        c.drawString(x, y, num)

        c.setFillColor(HexColor("#888888"))
        c.setFont("Helvetica", 8.5)
        c.drawString(x, y - 13, label)

    draw_footer(c, 8, dark_bg=True)


# ──────────────────────────────────────────
# PAGE 9: TALENTS
# ──────────────────────────────────────────
def page_talents(c):
    c.setFillColor(WHITE_BG)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    top = H - MT
    draw_section_label(c, "Nos talents", ML, top)

    draw_paragraph(c,
        "Les meilleurs dans leur <font color='#D4A853'>domaine</font>",
        S_TITLE, ML, top - 40*mm, W - ML - MR, 32*mm)

    draw_paragraph(c,
        "Des chefs reconnus, intégrés à notre collectif. Leur savoir-faire, notre direction artistique.",
        S_SUB, ML, top - 58*mm, W / 2 + 20*mm, 16*mm)

    talents = [
        ("Peppe", "Champion du monde de pizza 2025", "8 restaurants"),
        ("Vincent Salur", "Chef pâtissier · 426K abonnés", "4 boutiques"),
        ("Dorian Tudeau", "Pâtissier événementiel · 543K abonnés", ""),
    ]

    card_w = (W - ML - MR - 16*mm) / 3
    card_h = 55*mm
    card_y = (H - card_h) / 2 - 15*mm

    for i, (name, role, detail) in enumerate(talents):
        x = ML + i * (card_w + 8*mm)

        c.setFillColor(LIGHT_BG)
        c.roundRect(x, card_y, card_w, card_h, 6, fill=True, stroke=False)

        # Avatar circle
        ax = x + 14*mm
        ay = card_y + card_h / 2 + 2*mm
        c.setFillColor(ACCENT)
        c.circle(ax, ay, 9*mm, fill=True, stroke=False)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 12)
        initials = "".join([w[0] for w in name.split()[:2]])
        tw = c.stringWidth(initials, "Helvetica-Bold", 12)
        c.drawString(ax - tw / 2, ay - 4, initials)

        # Name
        tx = x + 28*mm
        c.setFillColor(BLACK)
        c.setFont("Helvetica-Bold", 12)
        c.drawString(tx, card_y + card_h - 16*mm, name)

        # Role
        c.setFillColor(GRAY)
        c.setFont("Helvetica", 8.5)
        c.drawString(tx, card_y + card_h - 27*mm, role)

        # Detail
        if detail:
            c.setFillColor(ACCENT)
            c.setFont("Helvetica-Bold", 8.5)
            c.drawString(tx, card_y + card_h - 38*mm, detail)

    draw_footer(c, 9)


# ──────────────────────────────────────────
# PAGE 10: TÉMOIGNAGES
# ──────────────────────────────────────────
def page_testimonials(c):
    c.setFillColor(WHITE_BG)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    top = H - MT
    draw_section_label(c, "Témoignages", ML, top)

    draw_paragraph(c,
        "Ce qu'en disent nos <font color='#D4A853'>clients</font>",
        S_TITLE, ML, top - 40*mm, W - ML - MR, 32*mm)

    testimonials = [
        ("On cherchait un partenaire capable de produire des macarons brandés Snapchat "
         "pour notre événement annuel. Hiving Food a tout géré : création, production, "
         "livraison. Le rendu était parfait, nos équipes ont adoré.",
         "Équipe Events", "Snapchat"),
        ("Le show cooking pizza a bluffé nos clients lors de notre soirée en concession. "
         "Ambiance, qualité, service, tout était au niveau. "
         "On recommence l'année prochaine, c'est sûr.",
         "Équipe Marketing", "Porsche"),
        ("Pour notre activation Armani Beauty avec L'Oréal, on avait besoin de "
         "pâtisseries haut de gamme aux couleurs de la maison. Hiving Food a livré "
         "des pièces impeccables dans un délai très court. Zéro fausse note.",
         "Équipe Événementiel", "Armani / L'Oréal"),
    ]

    card_w = (W - ML - MR - 16*mm) / 3
    card_h = 78*mm
    card_y = (H - card_h) / 2 - 18*mm

    for i, (quote, name, role) in enumerate(testimonials):
        x = ML + i * (card_w + 8*mm)

        c.setFillColor(LIGHT_BG)
        c.roundRect(x, card_y, card_w, card_h, 6, fill=True, stroke=False)

        # Stars
        c.setFillColor(ACCENT)
        c.setFont("Helvetica", 13)
        c.drawString(x + 10*mm, card_y + card_h - 13*mm, "★★★★★")

        # Quote
        draw_paragraph(c, f'« {quote} »',
            make_style(f'Q{i}', fontName='Helvetica-Oblique', fontSize=8, leading=11.5, textColor=GRAY),
            x + 10*mm, card_y + 20*mm, card_w - 20*mm, card_h - 36*mm)

        # Author
        c.setFillColor(BLACK)
        c.setFont("Helvetica-Bold", 8.5)
        c.drawString(x + 10*mm, card_y + 12*mm, name)

        c.setFillColor(LIGHT_GRAY)
        c.setFont("Helvetica", 7)
        c.drawString(x + 10*mm, card_y + 5*mm, role)

    draw_footer(c, 10)


# ──────────────────────────────────────────
# PAGE 11: CONTACT (dark)
# ──────────────────────────────────────────
def page_contact(c):
    c.setFillColor(DARK)
    c.rect(0, 0, W, H, fill=True, stroke=False)

    c.setStrokeColor(ACCENT)
    c.setLineWidth(3)
    c.line(0, H - 3*mm, W, H - 3*mm)

    # Logo
    if os.path.exists(LOGO_WHITE):
        c.drawImage(LOGO_WHITE, ML, H - 32*mm, width=48*mm, height=15.5*mm,
                     preserveAspectRatio=True, mask='auto')

    # Title
    cy = H / 2 + 20*mm
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 36)
    c.drawString(ML, cy, "Un projet ?")

    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 36)
    c.drawString(ML, cy - 42, "Parlons-en.")

    draw_accent_line(c, ML, cy - 56, 55*mm, 2.5)

    # Description
    c.setFillColor(HexColor("#BBBBBB"))
    c.setFont("Helvetica", 12)
    c.drawString(ML, cy - 80, "Date, lieu, nombre d'invités, ambiance.")
    c.drawString(ML, cy - 98, "Donnez-nous les grandes lignes.")
    c.drawString(ML, cy - 116, "On revient avec une proposition sur mesure sous 24h.")

    # Contact details right
    rx = W / 2 + 25*mm
    ry = H / 2 + 15*mm
    contact = [
        ("SITE WEB", "www.hivingfood.fr/evenementiel"),
        ("EMAIL", "contact@hivingfood.fr"),
        ("STUDIOS", "Clichy, Île-de-France"),
        ("ZONE", "France entière & international"),
    ]

    for i, (label, value) in enumerate(contact):
        y = ry - i * 26*mm
        c.setFillColor(ACCENT)
        c.setFont("Helvetica", 8)
        c.drawString(rx, y + 4, label)
        c.setFillColor(white)
        c.setFont("Helvetica", 12)
        c.drawString(rx, y - 10, value)

    # Bottom stats
    stats = [("50+", "Événements"), ("27", "Marques"), ("3", "Studios"), ("1 000", "Convives max.")]
    sw = (W - ML - MR) / 4
    sy = MB + 8*mm

    for i, (num, label) in enumerate(stats):
        x = ML + i * sw
        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 18)
        c.drawString(x, sy + 5, num)
        c.setFillColor(HexColor("#777777"))
        c.setFont("Helvetica", 8.5)
        c.drawString(x, sy - 8, label)

    draw_footer(c, 11, dark_bg=True)


# ──────────────────────────────────────────
# GENERATE
# ──────────────────────────────────────────
def generate():
    c = canvas.Canvas(OUTPUT, pagesize=landscape(A4))
    c.setTitle("Hiving Food - Événementiel Culinaire")
    c.setAuthor("Hiving Food")
    c.setSubject("Présentation des services événementiels culinaires")

    pages = [
        page_cover, page_about, page_brands, page_accompagnement,
        page_prestations, page_formats, page_case_dior, page_case_porsche,
        page_talents, page_testimonials, page_contact
    ]

    for fn in pages:
        fn(c)
        c.showPage()

    c.save()
    print(f"PDF généré : {OUTPUT}")
    print(f"Taille : {os.path.getsize(OUTPUT) / 1024:.1f} Ko")


if __name__ == "__main__":
    generate()
