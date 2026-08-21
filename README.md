# BalanceDesk

![BalanceDesk — Daily reconciliation](assets/balancedesk-logo.svg)

BalanceDesk is a private, local-only Windows application for recording daily sales, credit activity, expenses, physical closing counts, reconciliation, and final Business Day closure.

It is designed for a small business that wants a clear operational record without placing business data in a cloud database. The application, user accounts, audit history, backups, and SQLite database remain inside the extracted BalanceDesk folder on the user's computer.

## Download BalanceDesk

Download the application from [GitHub Releases](https://github.com/Ritchalison/BalanceDesk/releases).

For the current Windows release, choose the explicitly named files:

- `BalanceDesk-v1.1.0-client-windows-x64.zip` — the actual offline application.
- `BalanceDesk-v1.1.0-client-windows-x64.sha256` — the checksum used to verify the ZIP.

GitHub also adds automatic **Source code (zip)** and **Source code (tar.gz)** links to every release. Those automatic archives contain only this public documentation repository; they are not the BalanceDesk application. Always download the explicitly named `BalanceDesk-v...-client-windows-x64.zip` file.

## What BalanceDesk does

- Opens, reviews, reconciles, and closes one Business Day at a time.
- Records MoMo Sales, Credit Sales, Credit Payments, and Cash or MoMo Expenses.
- Tracks credit customers, invoices, payment allocations, balances, classifications, and possible duplicates.
- Captures physical closing Cash and actual closing MoMo balances.
- Calculates Cash Sales, Expected Closing MoMo, MoMo Variance, Accounted Sales, Overage, and Shortage.
- Preserves cancellation, correction, reopening, allocation-reversal, closing-snapshot, and actor history.
- Provides distinct Standard-user and Administrator workflows.
- Runs entirely on the local Windows computer and binds only to `127.0.0.1`.
- Includes its own Windows runtime, local setup, desktop shortcut, backup, and restore tools.

Individual Cash Sale entry, inventory, payroll, tax accounting, bank/MoMo-provider integration, multi-branch networking, cloud sync, and hosted access are not part of the current release.

## Quick start

1. Download the BalanceDesk client ZIP from [Releases](https://github.com/Ritchalison/BalanceDesk/releases).
2. Verify the checksum if desired; instructions are in [Installation and data safety](docs/INSTALLATION.md#verify-the-download).
3. Extract the entire ZIP to a normal local folder such as `Documents\BalanceDesk`.
4. Double-click `Setup BalanceDesk.bat` once.
5. Copy the setup code shown by the setup window into the first Administrator form.
6. After setup, open the application with the desktop shortcut named `BalanceDesk`.

Do not run BalanceDesk from inside the ZIP, a network share, OneDrive, Dropbox, or another synchronised folder.

## Everyday use

Use the `BalanceDesk` desktop shortcut to open the application. The shortcut starts the private local server and opens a maximized app window using Google Chrome when available, then Microsoft Edge, then the default browser.

Closing the app window does not delete data or stop the local server. Open the shortcut again to return to BalanceDesk. Windows stops the server when the computer shuts down.

Use `Stop BalanceDesk.bat` before moving or updating the extracted folder, creating or restoring a backup, or troubleshooting the local server.

## Documentation

- [Installation, daily startup, backup, restore, and data safety](docs/INSTALLATION.md)
- [BalanceDesk v1.1.0 application flow and calculation guide](docs/BALANCEDESK_V1.1.0_APPLICATION_FLOW.txt)
- [Public changelog](CHANGELOG.md)

## Local-only privacy model

BalanceDesk does not require a hosted database, cloud authentication, remote API, telemetry service, CDN, email, SMS, WhatsApp, or external storage. It is not made available to other devices on the local network.

The user remains responsible for protecting the Windows account and computer, keeping verified backups, and avoiding public disclosure of business data, setup codes, passwords, or database files.

## About this repository

This repository is intentionally the public face of BalanceDesk. It contains public documentation, release guidance, and approved brand material—not the private development source tree or internal project records.

Packaged application ZIPs and checksum files are published as GitHub Release assets and are not committed into this repository.
