# Lotus Garden Productivity - Alpha Revision 2

This revision is packaged as a standalone Electron app window and a phone-installable PWA. It does not require a phone-hosted URL: on a phone, serve the folder locally or publish it, then choose “Add to Home Screen.” The same interface remains available as a local browser fallback for development.

## Launch the app

1. Install Node.js 20 or newer.
2. From this folder, install the app runtime:

```bash
npm install
```

3. Launch the standalone app window:

```bash
npm run dev
```

`npm start` is equivalent. For browser-only fallback mode, use `npm run web` and open `http://localhost:3000`. To build an installable desktop package for the current operating system, run `npm run package`; the output is written to `release/`.

On a phone, run `npm run web`, open the displayed local-network address from the phone while both devices share Wi-Fi, then use the browser menu’s “Add to Home Screen” command. The included manifest and service worker make it launch like an app and retain its local data.

The app stores tasks, time blocks, theme, and the selected screen locally inside the app profile, so it continues to work after the window is closed.

## Revision 2 visual fixes

- The add sheet is capped to the viewport and uses a single-column form on narrow screens; it cannot spill horizontally.
- The center Add control is a fixed 64px circle with a centered plus icon.
- The light/dusk control is a true 52px by 30px switch with a readable thumb and accessible focus state.
- Export and Import use the same compact button dimensions and typography.
- Dusk mode uses lighter labels and stronger contrast instead of dark text on dark cards.
- Calendar and Settings spacing was normalized while preserving the current to-do list treatment.

## Prototype flows

- Home: today's briefing, work needing attention, daily plan, and focus timer.
- To-dos: real checkboxes, edit/delete icons, filters, search, subtasks, swipe-style action affordances, and drag reorder.
- Add: task or time block entry in a bottom sheet. Only a task name is required.
- Calendar: month and week views, date selection, task/event markers, and imported `.ics` events.
- Settings: theme, data export/import, and a short prototype status panel.
- Planning preferences: Balanced, Deadline first, Importance first, Difficulty first, Shortest first, or Longest first. The daily plan is regenerated from the selected preference.
- Schedule warnings: the Home screen flags unfinished work that cannot fit into the next 14 days of available time before its deadline.
