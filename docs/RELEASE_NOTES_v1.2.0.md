# BalanceDesk v1.2.0

BalanceDesk v1.2.0 is the verified local-only desktop release for Windows x64 and x86-64 Linux. It adds a normal Windows installer, the first public Linux package, consolidated data-safety utilities, cross-platform lifecycle tooling, reliability fixes, and a revised client interface while preserving the BalanceDesk data model and financial calculations.

## Download

Download one application package and its matching checksum:

- **Windows installer — recommended:** `BalanceDesk-Setup-v1.2.0-windows-x64.exe`
- **Windows portable:** `BalanceDesk-v1.2.0-client-windows-x64.zip`
- **Linux portable:** `BalanceDesk-v1.2.0-client-linux-x64.tar.gz`

The matching `.sha256` files are release assets beside those packages.

Do not use GitHub's automatic **Source code (zip)** or **Source code (tar.gz)** archives as the application. They contain only the public documentation repository. The public Linux package is the explicitly named `.tar.gz`; the retained Linux ZIP used during testing is not part of this release.

## SHA-256

- Windows installer: `F67ACA20ECA2CBE7F9F4069B67133879F673D3CB830D3651E55A158307C287A6`
- Windows portable ZIP: `010F8B4427D3607086CC232396AB770E2FB3C8D139E923C82277834353EEEA4F`
- Linux portable `.tar.gz`: `650A37E0EF956CEFFBFFE8B8CFD098003A47528B76BCE1850EB2B1CDC4AAB373`

## Highlights

- Recommended per-user Windows Setup executable with no Administrator-rights or external-runtime requirement.
- Portable Windows ZIP and deterministic x86-64 Linux `.tar.gz`, each with its own bundled local runtime.
- Existing workspace selection during clean Windows installation and a guarded first-setup import handoff.
- Consolidated Data & Recovery actions for verified backup, confirmed restore, guarded import, diagnostics, and safe stop.
- Installed Windows data retained separately across update, uninstall, and reinstall.
- Owner-only Linux data permissions and safe permission repair for an existing portable workspace.
- Submission-state reliability fixes across operational and administrative forms.
- Revised first-time setup, Reconciliation Review, responsive tables, and temporary toast notifications throughout the interface.
- Updated supported runtime stack, including Next.js 16.3.3 and React 19.2.8, with no schema or financial-calculation change.
- Illustrated client guide and updated installation, migration, recovery, and calculation documentation.

## Compatibility and important notes

- Windows: 64-bit Windows; the recommended installer installs for the current user.
- Linux: x86-64, glibc 2.28 or newer, and OpenSSL 3 (`libssl.so.3`). ARM, Alpine/musl, and older-OpenSSL-only systems are not supported by this package.
- macOS packaging remains deferred.
- Windows executables report product version `1.2.0` and file revision `1.2.0.1`.
- The Windows executables are not code-signed, so Windows may display an unknown-publisher or SmartScreen warning. Verify the supplied checksum before running a transferred package.
- Import replaces the complete active workspace; it does not merge data. The imported users and passwords become active.
- Individual Cash Sale entry, inventory, payroll, tax accounting, multi-branch networking, cloud sync, and hosted access remain outside this release.

## Documentation

- [Client guide](https://github.com/Ritchalison/BalanceDesk/blob/v1.2.0/docs/BalanceDesk-v1.2.0-Client-Guide.pdf)
- [Installation and data safety](https://github.com/Ritchalison/BalanceDesk/blob/v1.2.0/docs/INSTALLATION.md)
- [Application flow and calculation guide](https://github.com/Ritchalison/BalanceDesk/blob/v1.2.0/docs/BALANCEDESK_V1.2.0_APPLICATION_FLOW.txt)
- [Public changelog](https://github.com/Ritchalison/BalanceDesk/blob/v1.2.0/CHANGELOG.md)
