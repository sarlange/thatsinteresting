# Alpha Revision 2

## Reference applied

This revision responds to the attached **Web App pictures** feedback.

| Reference concern | Implemented change |
| --- | --- |
| Add-task panel wider than the device | The sheet has a fixed viewport-safe width, hidden horizontal overflow, and a one-column form below 560px. |
| Add button looked oval and the plus was off-center | The center action is a 64px square footprint rendered as a true circle with a centered SVG plus. |
| Light/dark control looked deformed | The appearance control is a 52px x 30px switch with a fixed thumb, alignment, focus outline, and `role="switch"`. |
| Export and Import did not match | Both controls use the same `.compact-action` sizing, padding, font, and line height. |
| Dark-mode text was hard to read | Dusk mode now raises muted text contrast and changes form labels to the light ink color. |
| Calendar and Settings needed a consistency pass | Cards, spacing, badges, selected states, and action sizing now share the same visual tokens. |
| The prototype should be an app | Electron is now the default launch path; the project opens a standalone desktop app window and includes optional installer packaging. |

## Launch

```bash
npm install
npm start
```

For an installer/package:

```bash
npm run package
```
