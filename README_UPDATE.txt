VIOLET VOICES 2.1 — EMBEDDED SVG DURATION ICON FIX

Upload these two files to the root of your GitHub repository and replace the existing versions:

• index.html
• sw.js

No separate SVG files are required. The note drawings are embedded directly inside index.html.

The update uses embedded vector drawings for semibreve, dotted minim, minim, dotted crotchet, crotchet, quaver and semiquaver. It also changes the service-worker cache name so the corrected interface is fetched instead of an older cached copy.

After GitHub Pages has updated, close Violet Voices completely and reopen it. If the old symbols remain, reload the page once in Safari before reopening the Home Screen app.

The piano folder does not need to be changed.
