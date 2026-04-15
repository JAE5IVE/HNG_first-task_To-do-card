#  Todo Task Card — Stage 1A

An advanced, interactive, and stateful Todo Task Card built with semantic HTML, CSS, and vanilla JavaScript. This is the Stage 1A upgrade of the Stage 0 card, featuring full edit mode, status transitions, priority changes, expand/collapse behaviour, and richer accessibility patterns.

---

##  Live Demo

[View on Netlify →](https://todocardhng.netlify.app/)

---

##  Project Structure

```
todo-card-tests/
├── index.html            # The main card component (Stage 1A)
├── todo-card.test.js     # Vitest test suite
├── vitest.config.js      # Vitest configuration
├── setup.js              # Testing Library setup
├── package.json          # Project dependencies and scripts
└── README.md             # You are here
```

---

##  Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed:

```bash
node --version
npm --version
```

### Installation

```bash
git clone https://github.com/JAE5IVE/HNG_TODOCARD-TESTS.git
cd HNG_TODOCARD-TESTS
npm install
```

### Run in Browser

```bash
# Mac/Linux
open index.html

# Windows
start index.html
```

### Run Tests

```bash
npm test
```

---

##  What Changed from Stage 0

Stage 0 was a static, display-only card. Stage 1A turns it into a fully interactive, stateful component.

| Feature | Stage 0 | Stage 1A |
|---|---|---|
| Edit button | Logged to console | Opens inline edit form |
| Status | Display only | Editable via dropdown |
| Priority | Display only | Editable in edit form, with visual indicator |
| Description | Always visible | Collapsible with expand/collapse toggle |
| Time remaining | Updates every 60s | Updates every 30s, granular text |
| Overdue state | Basic red text | Full overdue indicator badge + red border |
| Done state | Strike-through | Strike-through + time stops + shows "Completed" |
| Cancel edit | N/A | Restores all previous values via snapshot |
| Focus management | Basic | Returns focus to Edit button after form closes |

---

##  New Design Decisions

**Inline edit form over a modal**
The edit form replaces the card body in-place rather than opening a modal overlay. This keeps the experience contained and avoids z-index or scroll issues on mobile.

**State snapshot for cancel**
When Edit is opened, a full snapshot of the current state is saved. If the user cancels, the snapshot is restored — meaning no partial edits bleed through.

**Priority left-border indicator**
A coloured 4px left border accent was chosen as the `test-todo-priority-indicator` because it's visible at a glance without adding visual clutter to an already information-dense card. Red for High, Gold for Medium, Green for Low.

**Bidirectional status sync**
The checkbox and the status dropdown are always in sync. Ticking the checkbox sets status to Done. Setting status to Done via the dropdown checks the checkbox. Unchecking reverts to Pending. This avoids confusing states where the checkbox and the label disagree.

**Time freezes on Done**
When a task is marked Done, the time remaining stops updating and displays "Completed" instead. This reflects real-world behaviour — an overdue completed task shouldn't keep screaming at you.

**Expand/collapse for description**
Long descriptions are truncated to ~80 characters with a "Show more" toggle. This keeps the card compact by default while still making the full content accessible.

---

##  Known Limitations

- **Single card only** — This is a single component, not a full task management app. There is no list, no persistence, and no backend.
- **No localStorage** — Edits do not persist across page refreshes. Refreshing the page resets all values to the defaults.
- **Tags are static** — Tags (`work`, `mandatory`) are hardcoded and cannot be edited through the UI in this stage.
- **Date input format** — The due date input uses the browser's native `date` picker, which renders differently across browsers and operating systems.
- **No form validation beyond empty title** — The edit form only blocks saving if the title is empty. It does not validate date logic (e.g. setting a due date in the past).
- **Scripts do not run in jsdom** — The Vitest test suite uses jsdom which does not execute inline `<script>` tags. The checkbox-to-status sync test manually mirrors the DOM update rather than triggering the real event listener.

---

##  Accessibility Notes

- All interactive elements are fully keyboard navigable in logical tab order: checkbox → status control → expand toggle → edit button → delete button
- The checkbox uses a real `<input type="checkbox">` with a visible `aria-label`
- The status control is a native `<select>` element — fully accessible to screen readers without custom ARIA roles
- `aria-live="polite"` is applied to the status badge, time remaining, and overdue indicator so screen readers announce changes without interrupting the user
- `aria-expanded` on the expand/collapse toggle reflects the current state and updates on every toggle
- `aria-controls` links the expand toggle to the collapsible section it controls
- The edit form has `role="form"` and `aria-label` for screen reader context
- Focus is returned to the Edit button when the edit form is closed (both Save and Cancel), meeting WCAG 2.1 focus management guidelines
- All buttons have either visible text labels or explicit `aria-label` attributes
- Colour contrast meets WCAG AA across all priority states, status badges, and body text
- The priority indicator left-border is marked `aria-hidden="true"` since it is supplementary to the text badge
- The card itself uses `role="region"` with a dynamic `aria-label` that reflects the current task title

---

##  Test Coverage

```
✓ renders the card container
✓ renders the title
✓ renders the description
✓ renders the priority badge
✓ renders the due date
✓ renders time remaining
✓ renders the status badge
✓ renders the tags list
✓ renders work and urgent tags
✓ renders edit and delete buttons
✓ checkbox toggles and status changes to Done
✓ checkbox is keyboard accessible

Tests: 12 passed (12)
```

> Stage 1A test expansion (covering edit form, status control, expand toggle, and overdue indicator) is planned for the next iteration.

---

##  Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript (no frameworks)
- [Vitest](https://vitest.dev/) — test runner
- [@testing-library/dom](https://testing-library.com/docs/dom-testing-library/intro/) — DOM query utilities
- [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) — custom matchers
- [Google Fonts](https://fonts.google.com/) — Playfair Display, DM Mono, DM Sans

---

##  Data Test IDs Reference

### Stage 0 (still present)

| Element | `data-testid` |
|---|---|
| Card container | `test-todo-card` |
| Title | `test-todo-title` |
| Description | `test-todo-description` |
| Priority badge | `test-todo-priority` |
| Due date | `test-todo-due-date` |
| Time remaining | `test-todo-time-remaining` |
| Status display | `test-todo-status` |
| Complete toggle | `test-todo-complete-toggle` |
| Tags list | `test-todo-tags` |
| Work tag | `test-todo-tag-work` |
| Mandatory tag | `test-todo-tag-urgent` |
| Edit button | `test-todo-edit-button` |
| Delete button | `test-todo-delete-button` |

### Stage 1A (new)

| Element | `data-testid` |
|---|---|
| Edit form container | `test-todo-edit-form` |
| Title input | `test-todo-edit-title-input` |
| Description textarea | `test-todo-edit-description-input` |
| Priority select | `test-todo-edit-priority-select` |
| Due date input | `test-todo-edit-due-date-input` |
| Save button | `test-todo-save-button` |
| Cancel button | `test-todo-cancel-button` |
| Status control | `test-todo-status-control` |
| Priority indicator | `test-todo-priority-indicator` |
| Expand/collapse toggle | `test-todo-expand-toggle` |
| Collapsible section | `test-todo-collapsible-section` |
| Overdue indicator | `test-todo-overdue-indicator` |

---

## Author

**Tuta Joseph Vershima**
[GitHub →](https://github.com/JAE5IVE)