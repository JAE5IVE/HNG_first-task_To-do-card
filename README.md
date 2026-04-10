# Todo Item Card

A testable, accessible, and responsive Todo Task Card built with semantic HTML, CSS, and vanilla JavaScript. Includes a full test suite using Vitest and Testing Library.

---

## Live Preview

Open `todo-card.html` directly in your browser — no server needed.

---

## Features

- Clean, modern card UI with priority badge, status indicator, and due date
- Live countdown timer that updates every 60 seconds (e.g. "Due in 3 days", "Overdue by 2 hours")
- Checkbox toggle that marks the task as done — strikes through the title and updates the status
- Tags/chips for task categories
- Edit and Delete action buttons
- Fully keyboard navigable and screen-reader accessible (WCAG AA compliant)
- Responsive from 320px to 1200px with no horizontal overflow

---

## Project Structure

```
todo-card-tests/
├── todo-card.html        # The main card component
├── todo-card.test.js     # Vitest test suite
├── vitest.config.js      # Vitest configuration
├── setup.js              # Testing Library setup
├── package.json          # Project dependencies and scripts
└── README.md             # You are here
```

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed. Check with:

```bash
node --version
npm --version
```

### Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/JAE5IVE/todo-card-tests.git
cd todo-card-tests
npm install
```

### Run the Card

Just open the HTML file in your browser:

```bash
# Mac/Linux
open todo-card.html

# Windows
start todo-card.html
```

---

## Running Tests

```bash
npm test
```

### Test Results

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

---

## Accessibility

- Real `<input type="checkbox">` with `aria-label`
- `aria-live="polite"` on dynamic elements (status, time remaining)
- All buttons have visible text and `aria-label`
- Visible focus rings on all interactive elements
- Semantic HTML throughout: `<article>`, `<h2>`, `<time>`, `<ul>`, `<button>`

---

## Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript
- [Vitest](https://vitest.dev/) — test runner
- [@testing-library/dom](https://testing-library.com/docs/dom-testing-library/intro/) — DOM querying utilities
- [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) — custom matchers

---

## Data Test IDs

All elements are queryable for automated testing:

| Element | `data-testid` |
|---|---|
| Card container | `test-todo-card` |
| Title | `test-todo-title` |
| Description | `test-todo-description` |
| Priority badge | `test-todo-priority` |
| Due date | `test-todo-due-date` |
| Time remaining | `test-todo-time-remaining` |
| Status | `test-todo-status` |
| Complete toggle | `test-todo-complete-toggle` |
| Tags list | `test-todo-tags` |
| Work tag | `test-todo-tag-work` |
| Urgent tag | `test-todo-tag-urgent` |
| Edit button | `test-todo-edit-button` |
| Delete button | `test-todo-delete-button` |

---

## Author

**Tuta Joseph Vershima**  
Frontend Engineering Student — AltSchool Africa  
[GitHub](https://github.com/JAE5IVE)
