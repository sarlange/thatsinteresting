# Prototype 1 (Alpha) - Information Page

## A. Brief description of the project

Lotus Garden Productivity is a standalone productivity app for high-school students and busy people. It combines tasks, deadlines, recurring free time, and busy events in one place. The app helps a user decide what needs attention today, plan work around real availability, and keep longer assignments manageable through smaller sessions and progress tracking.

## B. Parts of the project shown in this prototype

- **Home:** Today’s briefing, work needing attention, a generated daily plan, completion progress, schedule warnings, and a focus timer.
- **To-dos:** Searchable task list with checkboxes, titles, categories, due dates, estimates, notes, subtasks, edit/delete controls, completion filters, and drag reorder.
- **Add:** Bottom-sheet entry for either a task or a time block. Only the task name is required; other task details are optional.
- **Calendar:** Monthly calendar with a weekly view, selected-day details, task markers, free-time blocks, busy events, and imported `.ics` events.
- **Settings:** Light/dusk theme switch, calendar import, JSON backup export/import, and prototype status.
- **Planning preferences:** Users can choose Balanced, Deadline first, Importance first, Difficulty first, Shortest first, or Longest first; the generated plan changes immediately.
- **Persistence:** Tasks, blocks, theme, and view state are stored locally in the app profile.

## C. Instructions to start or restart the project from source code

1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Launch the standalone app:

   ```bash
   npm run dev
   ```

5. To restart it, close the app window and run `npm run dev` again.

6. To create a distributable desktop build, run:

   ```bash
   npm run package
   ```

   The installer or portable package is written to `release/`.

The app does not require a phone-hosted website. The Electron launcher is the computer app path. The included manifest and service worker allow the same interface to be installed from a phone browser with “Add to Home Screen.” `npm run web` is available for local browser/PWA testing.

## D. Submitted app deliverables

- `2026_Lange_S_Alpha.zip`: source code, Electron launcher, packaging configuration, launch instructions, revision notes, and this information page.
- The source includes Windows NSIS, macOS, and Linux AppImage targets through `electron-builder`.
