# Kiln Balance

A tiny offline heat-sequencing puzzle. Use each signed tile once to land inside the firing ranges in order. Undo any move, or restart. Three short plans; no timer.

Extract the entire folder and open `index.html` in a modern browser. Keep `engine.js` and `ui.js` beside it. No installation, server, connection, account or saved data. Reloading loses progress. Keyboard: Tab between controls and Enter/Space to activate buttons.

This is a small prototype: the first plan teaches exact targets; the later plans allow ranges and require choosing which tiles to keep. No sound, persistence or procedural levels. Not a simulation of real kiln operation.

Development: with Node.js installed, run `node test-engine.js`. This checks rules with synthetic tests; it does not assess enjoyment or replace a browser playtest. See release notes for actual tested environments.
