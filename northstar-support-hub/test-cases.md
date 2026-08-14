# Northstar Support Hub — QA Test Cases
Owner: Member 5 (Testing & UX)
Status legend: ✅ Pass | ❌ Fail | ⏳ Blocked (waiting on another member's feature)

## 1. Navigation / Usability — runnable now
| ID | Test | Steps | Expected | Status |
|---|---|---|---|---|
| UX-001 | App builds and starts | `npm run build` then `npm run dev` | No errors, app loads at localhost:3000 | ✅ Pass (verified) |
| UX-002 | Home page renders | Load `/` | Heading, subtitle, and 2 cards visible | ❌ Fail — subtitle text is empty (blank line under heading) |
| UX-003 | Home → Order Status nav | Click "Order Status" card | Navigates to `/order-status`, placeholder text shown | ✅ Pass |
| UX-004 | Home → Returns nav | Click "Returns & Refunds" card | Navigates to `/returns`, placeholder text shown | ✅ Pass |
| UX-005 | Navbar links work from any page | From `/order-status`, click "Home" and "Returns & Refunds" in navbar | Both navigate correctly | ✅ Pass |
| UX-006 | Navbar stays visible | Scroll down on any page | Navbar remains sticky at top | ✅ Pass (sticky class present) |
| UX-007 | Responsive layout | Resize to mobile width | Cards stack, navbar doesn't overflow/break | ⏳ Not yet tested on real device |

## 2. Order Status — blocked until Member 2 pushes code
| ID | Test | Expected | Status |
|---|---|---|---|
| OS-001 | Search with valid order ID | Returns correct status, ship date | ⏳ Blocked |
| OS-002 | Search with invalid/unknown order ID | Shows clean "not found" message, not a crash | ⏳ Blocked |
| OS-003 | Search with empty input | Shows validation message, doesn't call lookup | ⏳ Blocked |
| OS-004 | Search with whitespace-only input | Treated as invalid, not a false match | ⏳ Blocked |
| OS-005 | Result card matches design tokens | Uses `bg-ice-blue` / `text-accent-blue-text`, not hardcoded colors | ⏳ Blocked |

## 3. Returns & Refunds — blocked until Member 3 pushes code
| ID | Test | Expected | Status |
|---|---|---|---|
| RR-001 | Start guided return with valid order | Flow begins, correct steps shown | ⏳ Blocked |
| RR-002 | Select a return reason | Selection persists to next step | ⏳ Blocked |
| RR-003 | Attempt return on ineligible order | Clear message on why it's not eligible | ⏳ Blocked |
| RR-004 | Complete full flow end-to-end | Final confirmation/refund guidance shown | ⏳ Blocked |
| RR-005 | Abandon flow midway and return to Home | No broken state on revisiting `/returns` | ⏳ Blocked |

## 4. Error Handling — partially testable
| ID | Test | Expected | Status |
|---|---|---|---|
| EH-001 | Navigate to a non-existent route (e.g. `/foo`) | Next.js 404 page shown, app doesn't crash | ✅ Pass |
| EH-002 | Order Status page with no data yet | Placeholder text shown, no console error | ✅ Pass (verified via build) |
| EH-003 | Malformed input in future search forms | Graceful validation message, no unhandled exception | ⏳ Blocked |
| EH-004 | Network/data file missing or malformed | App shows fallback, doesn't hard-crash | ⏳ Blocked |

## Notes
- UX-002 has been flagged to Member 1 (empty homepage subtitle) — awaiting fix, do not edit `app/page.tsx` directly per Handoff rules.
- OS/RR sections will be filled in with real pass/fail results once Members 2 and 3 push their branches.
- This file will be updated continuously through the sprint, not submitted once at the end.
