# Violet Voices Salamander piano update

This update replaces the previous synthetic piano samples with a two-layer Salamander Grand Piano set. It adds every semitone from C2 to C6, expressive soft/loud velocity blending, and a saved Sustain toggle beside Playback.

## Install

Upload the contents of this folder to the root of the Violet Voices GitHub repository, replacing files when asked. The new `piano` folder must replace the old one completely. Keep the folder structure unchanged.

Because the service-worker cache version has changed, close and reopen the installed web app after GitHub Pages finishes deploying. If the old sound remains, remove Violet Voices from the iPhone Home Screen, open the GitHub Pages site in Safari once, then add it to the Home Screen again.

## Piano behaviour

The Volume slider now controls both loudness and the blend between genuine soft and loud samples. Sustain is off by default. When enabled, adjacent chords overlap gently by about 120 ms.

See `ATTRIBUTION.txt` and `LICENSE-SALAMANDER.txt` for audio credit and licence details.
