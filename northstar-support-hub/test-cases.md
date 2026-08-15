# Northstar Support Hub — QA Test Cases
Owner: Member 5 (Testing & UX)
Status legend: ✅ Pass | ❌ Fail | **BLOCKED** (waiting on another member's feature)

## 1. Navigation / Usability — runnable now
| ID | Test | Steps | Expected | Status |
|---|---|---|---|---|
| UX-001 | App builds and starts | `npm run build` then `npm run dev` | No errors, app loads at localhost:3000 | ✅ Pass (verified) |
| UX-002 | Home page renders | Load `/` | Heading, subtitle, and 2 cards visible | ✅ Pass — fixed via Member 4's homepage merge, subtitle now reads "Self-service support for your Northstar orders" |
| UX-003 | Home → Order Status nav | Click "Order Status" card | Navigates to `/order-status`, placeholder text shown | ✅ Pass |
| UX-004 | Home → Returns nav | Click "Returns & Refunds" card | Navigates to `/returns`, placeholder text shown | ✅ Pass |
| UX-005 | Navbar links work from any page | From `/order-status`, click "Home" and "Returns & Refunds" in navbar | Both navigate correctly | ✅ Pass |
| UX-006 | Navbar stays visible | Scroll down on any page | Navbar remains sticky at top | ✅ Pass (sticky class present) |
| UX-007 | Responsive layout | Resize to mobile width | Cards stack, navbar doesn't overflow/break | ✅ Pass — fixed by adding `flex-wrap gap-y-2` to Navbar so it stacks under 640px instead of overflowing |

## 2. Order Status
| ID | Test | Expected | Status |
|---|---|---|---|
| OS-001 | Search with valid order ID | Returns correct status, ship date, customer and item details | ✅ Pass — verified with `ORD-123456` |
| OS-002 | Search with invalid/unknown order ID | Shows clean "not found" message, not a crash | ✅ Pass — verified with `ORD-99999` |
| OS-003 | Search with empty input | Shows validation message, doesn't perform lookup | ✅ Pass — verified |
| OS-004 | Search with whitespace around order ID | Valid order with surrounding whitespace should still be handled correctly | ✅ Pass — Fixed by trimming whitespaces before lookup and repeated the tests with ' ord-123456 ' |
| OS-005 | Result card matches design tokens | Uses the agreed design tokens and consistent styling | ✅ Pass — `--ice-blue` / `--accent-blue-text` confirmed defined in `globals.css` and correctly wired into Tailwind |
| OS-006 | Result card layout after search | Error message and result card appear below the search bar, not squeezed into the same row | ✅ Pass — fixed by moving `error`/`result` blocks outside the form's `flex` container in `app/order-status/page.tsx` |



## 3. Returns & Refunds — tested against Member 3 implementation
| ID | Test | Expected | Status |
|---|---|---|---|
| RR-001 | Start guided return with valid order | Flow begins and correct order details are shown | ✅ Pass |
| RR-002 | Select a return reason | Selected reason persists and enables Continue | ✅ Pass |
| RR-003 | Attempt return on ineligible order | Clear explanation shown and return cannot proceed | ✅ Pass |
| RR-004 | Complete full flow end-to-end | Confirmation, return ID, selected reason, and refund guidance shown | ✅ Pass |
| RR-005 | Start a new return after completion | Previous state clears and a new lookup can begin | ✅ Pass |
| RR-006 | Search with leading/trailing whitespace | Valid order is found after whitespace is trimmed | ✅ Pass |
| RR-007 | Invalid order lookup | Error appears only after Check Return is clicked | ✅ Pass |

## 4. Error Handling — partially testable
| ID | Test | Expected | Status |
|---|---|---|---|
| EH-001 | Navigate to a non-existent route (e.g. `/foo`) | Next.js 404 page shown, app doesn't crash | ✅ Pass |
| EH-002 | Order Status page with no data yet | Placeholder text shown, no console error | ✅ Pass (verified via build) |
| EH-003 | Malformed input in future search forms | Graceful validation message, no unhandled exception | **BLOCKED** |
| EH-004 | Network/data file missing or malformed | App shows fallback, doesn't hard-crash | **BLOCKED** |

## Notes

- UX-002 resolved via Member 4's homepage redesign, merged into this branch.
- Order Status testing is now active because Member 2's feature has been integrated into main.
- OS-004 was identified as a usability/input-handling issue and fixed by trimming surrounding whitespace before lookup.
- Returns & Refunds testing is complete against Member 3's implementation. QA findings and UX fixes have been documented below.
- Member 4's homepage work has been reviewed and merged. Emoji card icons (📦/🔄) were also swapped for `lucide-react` icons (`Package`, `RotateCcw`) for visual consistency with the rest of the UI.
- This file will be updated continuously through the sprint, not submitted once at the end.

### Returns QA notes

Tested the Returns & Refunds flow after Member 3's implementation was merged into the QA branch. Verified valid order lookup, return-reason selection, ineligible-order handling, completion/confirmation flow, state reset for a new return, whitespace-tolerant order lookup, and invalid-order validation.

Small UX/logic fixes were applied in `app/returns/page.tsx` to prevent premature lookup errors, clear stale state between searches, properly handle ineligible orders, and provide a clearer guided return flow with confirmation details.

### Follow-up QA pass (post Member 4 merge)

Re-tested the full app after Member 4's homepage was merged and the accidental `node_modules`/workspace files were cleaned from git tracking. Findings:

- UX-002 confirmed fixed (see above).
- Found and fixed a layout bug on Order Status (OS-006): the error message and result card were nested inside the search form's `flex` row, causing them to render beside the search bar instead of below it.
- Found and fixed a responsive nav issue (UX-007): navbar had no wrap behavior and would overflow on narrow screens.
- Verified OS-005 design tokens are real, not placeholders.
- Swapped homepage card emojis for `lucide-react` icons for visual consistency (cosmetic, not a functional test item, but noted here for traceability).




