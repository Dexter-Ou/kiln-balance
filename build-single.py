"""Build the offline single-file edition using only Python's standard library."""
from pathlib import Path
import hashlib

root = Path(__file__).resolve().parent
html = (root / 'index.html').read_text(encoding='utf-8')
license_text = (root / 'LICENSE').read_text(encoding='utf-8')
assert '-->' not in license_text
for name in ('engine.js', 'ui.js'):
    marker = '<script src="' + name + '"></script>'
    script = (root / name).read_text(encoding='utf-8')
    assert html.count(marker) == 1
    assert '</script' not in script.lower()
    html = html.replace(marker, '<script>\n' + script + '\n</script>')
html = html.replace('<html', '<!--\n' + license_text + '\n-->\n<html', 1)
output = root / 'kiln-balance.html'
output.write_text(html, encoding='utf-8', newline='\n')
print(output.name, len(output.read_bytes()), hashlib.sha256(output.read_bytes()).hexdigest())
