"""Genera la imagen para redes (1200x630) de cada caso de estudio, en es y en.

Parte de public/og-image.png (fondo, particulas, N y nombre), tapa el titulo y
la frase de la portada, y escribe el producto y su bajada. Renderiza con Chrome
sin ventana para usar las mismas fuentes del sitio.

Uso: python scripts/og-casos.py   (desde la raiz del repo)
Salida: public/og/<slug>.png y public/og/<slug>-en.png
"""
import json
import subprocess
import tempfile
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

# Mismo texto que la bajada (tagline) de src/data/cases.ts.
CASES = {
    "astrofit": {
        "product": "AstroFit",
        "es": "Del cuaderno del mostrador a un panel donde el dueño ve su negocio completo.",
        "en": "From the notebook on the counter to a dashboard where the owner sees the whole business.",
    },
    "hackathon-edutech": {
        "product": "Hackathon EduTech Mendoza",
        "es": "Me pidieron una landing para anunciar el evento. Propuse la plataforma completa, y el evento entero corrió ahí.",
        "en": "They asked me for a landing page to announce the event. I proposed the whole platform, and the entire event ran on it.",
    },
    "nimbus-ai": {
        "product": "Nimbus AI",
        "es": "Empezó con una pregunta en un micro a Tupungato, en medio de una tormenta de granizo. Terminó siendo un sistema de alerta temprana para Mendoza.",
        "en": "It started with a question on a bus to Tupungato, in the middle of a hailstorm. It ended up as an early warning system for Mendoza.",
    },
}

LABEL = {"es": "Caso de estudio", "en": "Case study"}
PATH = {"es": "/casos/{slug}", "en": "/en/cases/{slug}"}

TEMPLATE = """<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500&family=Source+Serif+4:opsz,wght@8..60,500&display=block" rel="stylesheet">
<style>
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
  body { background: #0B0D12 url("{bg}") no-repeat; position: relative; }
  .tapa { position: absolute; background: #0B0D12; }
  .contenido { position: absolute; left: 88px; top: 178px; width: 820px; }
  .label { font: 500 22px Onest, sans-serif; color: #5CC8D6; letter-spacing: .04em; text-transform: uppercase; }
  h1 { font: 500 {size}px/1.08 "Source Serif 4", serif; color: #E8EAEE; margin: 18px 0 22px; letter-spacing: -.01em; }
  p { font: 400 27px/1.42 Onest, sans-serif; color: #A3A9B5; margin: 0; max-width: 760px; }
  .url { position: absolute; left: 88px; top: 534px; font: 400 19px Onest, sans-serif; color: #5CC8D6; }
</style></head><body>
<div class="tapa" style="left:80px;top:170px;width:800px;height:320px"></div>
<div class="tapa" style="left:80px;top:530px;width:520px;height:34px"></div>
<div class="contenido">
  <div class="label">{label}</div>
  <h1>{product}</h1>
  <p>{tagline}</p>
</div>
<div class="url">nahuelghilardi.com.ar{path}</div>
</body></html>"""


def render(html: str, out: Path) -> None:
    # En Windows chrome.exe devuelve el control enseguida y saca la captura
    # despues, asi que se espera a que aparezca el archivo.
    out.unlink(missing_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        page = Path(tmp) / "og.html"
        page.write_text(html, encoding="utf-8")
        subprocess.run(
            [CHROME, "--headless=new", "--hide-scrollbars", "--force-device-scale-factor=1",
             f"--user-data-dir={tmp}", "--window-size=1200,630",
             "--virtual-time-budget=8000", f"--screenshot={out}", page.as_uri()],
            check=True, capture_output=True,
        )
        deadline = time.time() + 60
        while not out.exists() or out.stat().st_size == 0:
            if time.time() > deadline:
                raise TimeoutError(f"Chrome no genero {out.name}")
            time.sleep(0.5)
        time.sleep(1)  # que termine de escribir y suelte el perfil


def main() -> None:
    out_dir = ROOT / "public" / "og"
    out_dir.mkdir(exist_ok=True)
    bg = (ROOT / "public" / "og-image.png").as_uri()
    for slug, case in CASES.items():
        for lang in ("es", "en"):
            size = 76 if len(case["product"]) < 14 else 60
            html = (TEMPLATE
                    .replace("{bg}", bg)
                    .replace("{size}", str(size))
                    .replace("{label}", LABEL[lang])
                    .replace("{product}", case["product"])
                    .replace("{tagline}", case[lang])
                    .replace("{path}", PATH[lang].format(slug=slug)))
            name = f"{slug}.png" if lang == "es" else f"{slug}-en.png"
            render(html, out_dir / name)
            print(json.dumps({"ok": name}))


if __name__ == "__main__":
    main()
