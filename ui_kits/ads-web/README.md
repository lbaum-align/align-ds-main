# ADS Web UI kit — Doctor Site (sample)

A click-through prototype demonstrating the Align Design System applied to a realistic internal clinical web app. The app mimics the Doctor Site / case-management surface: a patient dashboard, case list, case detail, and request form.

## Run it

Open `index.html` in a browser.

## What's here

- `index.html` — the app shell (left rail + top bar + routing).
- `Shell.jsx` — `LeftRail`, `TopBar`, `NavItem`, and an inline `Icon` set (20×20 line icons matching the observed ADS stroke weight).
- `Kit.jsx` — primitive components: `Button`, `TextField`, `Checkbox`, `Radio`, `Toggle`, `Tag`, `Avatar`, `Card`, `Accordion`, `Tabs`, `ProgressBar`, `Notification`, `Modal`.
- `Screens.jsx` — four full screens: `Home`, `Cases`, `CaseDetail`, `NewRequestForm`.
- `ui.css` — all layout + component styles. Every value traces back to a token in `../../colors_and_type.css`.

## Click-through flow

1. **Home** — dashboard with stat cards, recent-cases table, treatment progress bars. Click "New request" in the header or top bar.
2. **Cases** — sortable/filterable case list with tag statuses. Click any row to open…
3. **Case detail** — patient profile accordion, scan preview placeholder, progress. "Delete case" opens the confirmation modal.
4. **New request** — radio group, text field with live validation, textarea, toggle. Submit to return home with a success toast.

## Flagged

- Icons are hand-drawn line SVG matching observed stroke weight (1.75, rounded caps). Swap with the real ADS icon set for production.
- The scan preview image is a CSS placeholder — real product would show an iTero scan thumbnail.
- Only the 4 screens above are wired. Patients / Scans / Messages / Settings show placeholder pages.
