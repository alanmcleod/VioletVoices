# Violet Voices 1.10

This is the self-contained offline-piano edition.

## Changes

- Includes 17 local acoustic-piano MP3 samples.
- No external audio host is required.
- Samples load only when nearby notes are played.
- Pitch and chord names always remain note names.
- A visible full-width Duration names selector switches between UK and US terminology.
- The synthesised tone remains as an emergency fallback.

## Uploading

Replace the existing GitHub repository contents with everything in this folder,
including the piano and icons folders.

After GitHub Pages updates, close and reopen the installed app. If Safari keeps
the old version, remove the home-screen app once and add it again from Safari.

See AUDIO-LICENCE.txt and GPL-2.txt for the included audio licensing.


## Duration naming

The main settings panel now has a full-width selector:

- UK: quaver, crotchet, minim, dotted minim, semibreve
- US: eighth note, quarter note, half note, dotted half note, whole note

This changes duration wording on chord cards and in the chord editor. It does not
change pitch names or detected chord names.


## Practice log

Use the two-button mode bar to switch between Chord mode and Practise log.
The active mode is purple and labelled on.

Practice entries include activity, instrument or voice, date, minutes and optional notes.
The app shows totals for today, this week and all time. Practice data is stored in
the browser and can be exported as a JSON backup.


## Version 1.9

- The active workspace button now uses a dark purple background with white text.
- “Practice mode” has been renamed “Practise log”.


## Version 1.10

The workspace buttons now use the fixed labels “Chord mode” and “Practise log”.
The active workspace is indicated by the dark-purple button and displayed content.
