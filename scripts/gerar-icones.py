"""Gera favicons, apple-touch-icon e card social a partir dos assets da marca.

Uso: python3 scripts/gerar-icones.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
MARCA = RAIZ / "src" / "assets" / "newbrand"
PUBLIC = RAIZ / "public"

MARINHO = (20, 40, 74)
MARINHO_FUNDO = (16, 32, 60)
OURO = (216, 185, 95)
BRANCO = (255, 255, 255)

SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"


def simbolo_recortado() -> Image.Image:
    """Símbolo LS em ouro, recortado na borda do quadrado."""
    im = Image.open(MARCA / "simbolo-ouro.png").convert("RGBA")
    return im.crop(im.split()[-1].getbbox())


def gerar_favicons() -> None:
    base = simbolo_recortado()

    for tamanho in (32, 192, 512):
        base.resize((tamanho, tamanho), Image.LANCZOS).save(PUBLIC / f"favicon-{tamanho}.png")

    # Apple recorta os cantos, então o símbolo entra com respiro sobre fundo marinho.
    apple = Image.new("RGBA", (180, 180), MARINHO + (255,))
    simbolo = base.resize((132, 132), Image.LANCZOS)
    apple.paste(simbolo, (24, 24), simbolo)
    apple.convert("RGB").save(PUBLIC / "apple-touch-icon.png")


def texto_espacado(
    draw: ImageDraw.ImageDraw,
    posicao: tuple[int, int],
    texto: str,
    fonte: ImageFont.FreeTypeFont,
    cor: tuple[int, int, int],
    espaco: int,
) -> None:
    x, y = posicao
    for caractere in texto:
        draw.text((x, y), caractere, font=fonte, fill=cor)
        x += draw.textlength(caractere, font=fonte) + espaco


def gerar_og() -> None:
    largura, altura = 1200, 630
    card = Image.new("RGB", (largura, altura), MARINHO_FUNDO)
    draw = ImageDraw.Draw(card)

    # Faixa vertical de ouro na borda esquerda como assinatura da marca.
    draw.rectangle([0, 0, 10, altura], fill=OURO)
    draw.rectangle([44, 34, largura - 45, altura - 35], outline=(216, 185, 95, 60), width=1)

    logo = Image.open(MARCA / "logo-horizontal-branco.png").convert("RGBA")
    logo = logo.crop(logo.split()[-1].getbbox())
    logo_largura = 560
    logo = logo.resize(
        (logo_largura, round(logo.height * logo_largura / logo.width)), Image.LANCZOS
    )
    card.paste(logo, (96, 196), logo)

    draw.rectangle([96, 352, 216, 353], fill=OURO)

    fonte_titulo = ImageFont.truetype(SERIF, 25)
    fonte_credencial = ImageFont.truetype(SERIF, 19)
    texto_espacado(draw, (96, 386), "DEFESA DO EXECUTADO", fonte_titulo, BRANCO, 3)
    texto_espacado(draw, (96, 422), "PROTEÇÃO PATRIMONIAL", fonte_titulo, BRANCO, 3)
    texto_espacado(
        draw, (96, 474), "OAB/PA 18.239  ·  OAB/SP 549.491", fonte_credencial, OURO, 2
    )

    retrato = Image.open(MARCA / "luiz-santiago-800.webp").convert("RGBA")
    diametro = 330
    retrato = retrato.resize((diametro, diametro), Image.LANCZOS)

    mascara = Image.new("L", (diametro, diametro), 0)
    ImageDraw.Draw(mascara).ellipse([0, 0, diametro - 1, diametro - 1], fill=255)

    centro = (904, 315)
    canto = (centro[0] - diametro // 2, centro[1] - diametro // 2)
    card.paste(retrato, canto, mascara)
    draw.ellipse(
        [canto[0] - 6, canto[1] - 6, canto[0] + diametro + 5, canto[1] + diametro + 5],
        outline=OURO,
        width=2,
    )

    card.save(PUBLIC / "og-social-share.png", optimize=True)


if __name__ == "__main__":
    gerar_favicons()
    gerar_og()
    print("Ícones e card social gerados em public/")
