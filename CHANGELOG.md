# BalanceDesk public changelog

This changelog records public client releases. Internal development history is intentionally maintained outside this public documentation repository.

## 1.2.0 — 30 August 2026

### Windows and Linux delivery

- Added the recommended per-user Windows x64 Setup executable alongside the Windows portable ZIP.
- Added the first public x86-64 Linux package as a deterministic `.tar.gz` for glibc 2.28 or newer and OpenSSL 3 systems.
- Kept the public product version at `1.2.0`; accepted Windows executables report file revision `1.2.0.1`.
- Added a native Windows launcher that owns one Chrome or Edge app window, reactivates an existing instance, stops its local server when the owned window closes, and signs out local sessions.
- Added clean Windows Start entries for BalanceDesk, Data & Recovery, Diagnostics, Stop, and Uninstall.
- Kept installed Windows business data separate under `%LOCALAPPDATA%\BalanceDesk`, allowing updates, uninstall, and reinstall without deleting it.

### Data safety and migration

- Added a consolidated Data & Recovery utility for verified backup, confirmed restore, guarded existing-data import, diagnostics, and safe stop.
- Added existing-workspace import during a clean Windows installation, accepting a trusted BalanceDesk `.db` or extracted portable folder before first launch.
- Added an **Import existing data** handoff beneath first-time Administrator setup; BalanceDesk now closes safely before starting the native import workflow and reopens at login after success.
- Made import warnings explicit that the selected business, users, passwords, customers, transactions, and history replace the active workspace rather than merging with it.
- Added pre-import and pre-restore recovery copies, migration-baseline verification, session invalidation, and client-facing diagnostics that exclude secrets and business records.
- Hardened Linux private data to owner-only directories and files and added safe permission repair for existing portable workspaces.

### Reliability and interface

- Removed the recurring stale-browser submission state that could leave forms showing **Processing** or **Recording** after the server had already completed the write.
- Added bounded submission handling and verification across operational, setup, authentication, customer, user, closing, and reconciliation workflows.
- Reworked first-time Administrator setup into a desktop-height layout with a two-column form while preserving a compact mobile flow.
- Redesigned Reconciliation Review, clarified balanced and discrepancy states, and aligned confirmation and return actions.
- Replaced persistent success-message stacks with temporary toast notifications throughout the application.
- Added responsive fixed-width data tables that scroll horizontally instead of squeezing columns into unreadable layouts.

### Runtime and documentation

- Updated the supported runtime stack, including Next.js 16.3.3 and React 19.2.8, without changing the database schema or financial calculations.
- Added exact-artifact Windows and native Linux acceptance for checksums, packaged runtime health, database setup, backup, restore, import, update, uninstall, and restart behavior.
- Added the illustrated [BalanceDesk v1.2.0 client guide](docs/BalanceDesk-v1.2.0-Client-Guide.pdf), revised installation guidance, and the v1.2.0 application-flow guide.

The Windows executables are not code-signed, so Windows may display an unknown-publisher or SmartScreen warning. Code signing is deferred to a later release. A macOS package is also deferred.

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
