# 0.1.0 preview

Three offline firing plans, undo, restart and plan selection. Free MIT-licensed preview from Gong LLC.

Tested on Linux with Node.js 22.23.2 and automated Chromium 156.0.8078.4 file-page journeys: each plan completed, failure/undo/restart, next plan, Enter activation, and 375px viewport without horizontal overflow. Firefox, Safari, Windows, macOS and touch devices are untested. Browser automation does not assess puzzle enjoyment. No support SLA.

Extract all files together into a trusted folder; open index.html. To recover a stuck run, use Restart plan or reload (all progress clears). No network connection needed.

## Single-file download

`kiln-balance.html` bundles the same rules, three plans and interface into one file, including the MIT license. Save it and open it locally. Build reproducibly with `python3 build-single.py`. Linux Chromium 156 automated journeys passed with browser networking disabled and no companion files: all three plans, failure/undo, restart, next plan, Enter activation and 375px layout. Other browsers and operating systems remain untested.
