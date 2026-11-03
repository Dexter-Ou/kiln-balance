# Kiln Balance

A tiny offline heat-sequencing puzzle. Use each signed tile once to land inside the firing ranges in order. Undo any move, or restart. Three short plans; no timer.

Download [`kiln-balance.html`](https://raw.githubusercontent.com/Dexter-Ou/kiln-balance/main/kiln-balance.html) (Save link as), then open the saved file in a modern browser. It contains the complete game and license; no companion files are needed. If your browser adds `.txt`, rename the saved file to end in `.html`.

Alternatively, download the repository ZIP, extract the entire folder and open `index.html`. Keep `engine.js` and `ui.js` beside that source edition. No installation, server, connection, account or saved data. Reloading loses progress. Keyboard: Tab between controls and Enter/Space to activate buttons.

This is a small prototype: the first plan teaches exact targets; the later plans allow ranges and require choosing which tiles to keep. No sound, persistence or procedural levels. Not a simulation of real kiln operation.

Development: with Node.js installed, run `node test-engine.js`. This checks rules with synthetic tests; it does not assess enjoyment or replace a browser playtest. See release notes for actual tested environments.

Build the single-file edition from source with Python 3: `python3 build-single.py`. It writes `kiln-balance.html`; no packages are needed.
