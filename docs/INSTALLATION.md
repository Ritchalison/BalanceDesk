# Installing and operating BalanceDesk locally

BalanceDesk v1.1.0 is a self-contained Windows x64 application. It includes its own private Node.js runtime and local SQLite database template. The client computer does not need Node.js, pnpm, a cloud account, or an internet connection after the release files have been downloaded.

## Download the correct files

Open the [BalanceDesk Releases page](https://github.com/Ritchalison/BalanceDesk/releases) and download:

- `BalanceDesk-v1.1.0-client-windows-x64.zip`
- `BalanceDesk-v1.1.0-client-windows-x64.sha256`

Do not use GitHub's automatic **Source code (zip)** or **Source code (tar.gz)** archives. They contain the public documentation repository, not the application.

## Verify the download

The checksum file records the expected SHA-256 fingerprint of the client ZIP. In PowerShell, open the folder containing both downloads and run:

```powershell
Get-FileHash .\BalanceDesk-v1.1.0-client-windows-x64.zip -Algorithm SHA256
Get-Content .\BalanceDesk-v1.1.0-client-windows-x64.sha256
```

The two long hexadecimal fingerprints must match exactly. Do not use a ZIP whose checksum does not match.

## First-time setup

1. Extract the complete ZIP to a normal folder on a local Windows disk, such as `Documents\BalanceDesk`.
2. Keep all extracted files and folders together.
3. Double-click `Setup BalanceDesk.bat`.
4. Setup creates private local settings, a new empty database, and a desktop shortcut named `BalanceDesk`.
5. Copy the first-run Administrator setup code shown in the setup window.
6. In the BalanceDesk setup form, enter the business name, Administrator name, username, password, and setup code.

Setup does not require Windows Administrator privileges. Do not extract or run the application from OneDrive, Dropbox, another synchronised folder, a network share, or directly inside the ZIP.

Running setup again is safe: it preserves existing settings and business data and recreates the desktop shortcut. It is not required for daily startup.

## Password guidance

New and reset passwords must:

- contain at least eight characters;
- include an uppercase letter, lowercase letter, number, and symbol;
- avoid obvious letter, number, keyboard, or repeated patterns;
- avoid common password words; and
- not be derived from the user's name, username, business name, or BalanceDesk.

The form checks these requirements while the user types, and the application checks them again when the form is submitted.

## Starting BalanceDesk

Double-click the desktop shortcut named `BalanceDesk`.

The shortcut starts the private local application and opens a maximized app window. It prefers Google Chrome, then Microsoft Edge, and finally the user's default browser. If the application is already running, the shortcut reopens it instead of starting another server.

BalanceDesk listens only on `127.0.0.1:3210`. It is accessible only from the same computer.

## Closing the window and stopping the server

Closing the browser or app window does not lose data and does not immediately stop the private local server. Double-click the `BalanceDesk` shortcut to reopen it. Windows stops the server when the computer shuts down.

Run `Stop BalanceDesk.bat` inside the extracted folder before:

- moving or replacing the BalanceDesk folder;
- creating a backup;
- restoring a backup; or
- troubleshooting the local server.

## Creating a verified backup

1. Run `Stop BalanceDesk.bat`.
2. Run `Backup BalanceDesk.bat`.
3. BalanceDesk checks SQLite integrity, foreign keys, and the migration baseline.
4. A timestamped verified snapshot is created in the local `backups` folder.

Copy verified backup files to another protected local disk regularly. Do not publish database or backup files in GitHub issues or other public locations.

## Restoring a backup

1. Run `Stop BalanceDesk.bat`.
2. Run `Restore BalanceDesk.bat`.
3. Select a local `.db` backup created by BalanceDesk v1.1.0.
4. Type `RESTORE` exactly when requested.
5. BalanceDesk verifies the selected backup.
6. It creates a pre-restore safety backup and raw fallback.
7. It restores and verifies the active database.
8. Open BalanceDesk and confirm the expected records.

Restore deliberately refuses network paths, invalid databases, a running application, or an incorrect confirmation.

## Protecting local data

All active business data is stored in `data\balancedesk.db` inside the extracted BalanceDesk folder. Private settings are stored under `config`, logs under `logs`, and verified snapshots under `backups`.

- Do not delete the `data` or `config` folders.
- Keep the Windows account and computer protected.
- Do not share setup codes, passwords, databases, or backup files publicly.
- Stop BalanceDesk before copying the complete folder to another local disk.
- Keep more than one recent verified backup.

## Troubleshooting startup

If BalanceDesk cannot start:

1. Confirm the whole ZIP was extracted and all files remain together.
2. Confirm the folder is on a normal local Windows disk.
3. Run `Stop BalanceDesk.bat`, then use the `BalanceDesk` shortcut again.
4. Check `logs\server.stderr.log` inside the extracted folder.
5. If another extracted BalanceDesk copy is already running, stop that copy before starting this one.

The launcher will not silently take control of a port owned by another BalanceDesk installation or another program.
