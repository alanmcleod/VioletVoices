VIOLET VOICES 2.1 UI UPDATE

This is an update-only package. It assumes the Salamander piano update is already installed.

Replace these files in the root of the GitHub repository:
- index.html
- sw.js

Changes included:
- Restores “Prior two notes” in the chord editor.
- Adds an editor summary panel showing current notes, duration and label.
- Colour-codes Soprano, Alto, Tenor and Bass consistently.
- Keeps the chord editor in a compact two-column layout on iPhone.
- Prevents the first note selector opening automatically when the editor opens.
- Adds semiquaver / 1/16 chord duration.
- Shows musical note symbols for all durations.
- Shows the volume percentage.
- Removes the redundant “Chord X” lozenge; an optional chord label is shown only when entered.
- Retains the Salamander piano engine and Sustain toggle.

After uploading, allow GitHub Pages a minute to rebuild, then fully close and reopen the installed web app. If the old layout remains, refresh the page in Safari once to update the service worker cache.


SVG duration icon fix:
- Replaces unsupported Unicode music glyphs with built-in SVG note icons.
- Icons now display consistently on iPhone, desktop and offline.
- No changes are needed to the piano folder.
