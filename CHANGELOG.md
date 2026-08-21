# BalanceDesk public changelog

This changelog records public client releases. Internal development history is intentionally maintained outside this public documentation repository.

## 1.1.0 — 21 August 2026

### Daily workflow and reconciliation

- Added a cleaner date-specific Daily Balance Sheet with explicit Accounted Sales, Sales Position, MoMo Control, Overage, and Shortage presentation.
- Simplified saved Total Sales editing and supporting-figure inspection for desktop and mobile screens.
- Required Administrator acknowledgement whenever the final sales difference is non-zero, while keeping the explanation optional.
- Compacted Closed Day summaries, count-correction controls, Activity History filters, and customer filters until they are needed.

### Operations and customers

- Streamlined Credit Sale customer creation and selection.
- Streamlined Credit Payment customer selection and optional invoice allocation.
- Improved bounded customer, invoice, duplicate-review, activity, allocation, ledger, and local-user searches.
- Added clearer result feedback and prevented blank or unchanged search/form submissions from causing unnecessary local requests.

### Interface

- Refined the BalanceDesk visual identity, responsive shell, mobile navigation, typography, dark theme, status treatments, and account menu.
- Added the local web-app manifest, favicons, Apple touch icon, pinned-tab icon, Windows tile icon, and standard/maskable app icons.
- Improved touch targets, responsive headers, collapsible controls, and field-associated validation feedback.

### Local accounts and passwords

- Added guided password rules requiring uppercase, lowercase, number, and symbol characters.
- Rejects common, sequential, repetitive, and name-, username-, business-, or BalanceDesk-derived password choices.
- Preserves independent server-side validation even when the interface blocks an obvious invalid submission.

### Offline Windows delivery

- Provides a self-contained Windows x64 client with a bundled local runtime and pristine migrated SQLite database.
- Provides one-time setup, a branded desktop shortcut, safe start/stop behavior, and verified local backup/restore tools.
- Runs only on the local computer and does not require a cloud service or hosted database.

The complete application ZIP and checksum are distributed through [GitHub Releases](https://github.com/Ritchalison/BalanceDesk/releases), not through this repository's automatic source archives.
