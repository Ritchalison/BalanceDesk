# Installing and operating BalanceDesk v1.2.0 locally

BalanceDesk v1.2.0 is available as a Windows x64 installer, a Windows x64 portable ZIP, and an x86-64 Linux portable `.tar.gz`. Every package includes its own private Node.js runtime and local SQLite database tooling. The client computer does not need Node.js, pnpm, a cloud account, or an internet connection after the release files have been downloaded.

## Download the correct files

Open the [BalanceDesk v1.2.0 release](https://github.com/Ritchalison/BalanceDesk/releases/tag/v1.2.0) and download one application package plus its matching checksum:

- Windows installer: `BalanceDesk-Setup-v1.2.0-windows-x64.exe` and `BalanceDesk-Setup-v1.2.0-windows-x64.exe.sha256`
- Windows portable: `BalanceDesk-v1.2.0-client-windows-x64.zip` and `BalanceDesk-v1.2.0-client-windows-x64.sha256`
- Linux portable: `BalanceDesk-v1.2.0-client-linux-x64.tar.gz` and `BalanceDesk-v1.2.0-client-linux-x64.tar.gz.sha256`

Do not use GitHub's automatic **Source code (zip)** or **Source code (tar.gz)** archives. They contain the public documentation repository, not the application. The retained Linux ZIP used during testing is not a public release file.

## Verify the download

Each checksum file records the expected SHA-256 fingerprint of its application package.

On Windows, open PowerShell in the download folder and run the pair that matches the downloaded package:

```powershell
Get-FileHash .\BalanceDesk-Setup-v1.2.0-windows-x64.exe -Algorithm SHA256
Get-Content .\BalanceDesk-Setup-v1.2.0-windows-x64.exe.sha256
```

or:

```powershell
Get-FileHash .\BalanceDesk-v1.2.0-client-windows-x64.zip -Algorithm SHA256
Get-Content .\BalanceDesk-v1.2.0-client-windows-x64.sha256
```

On Linux, run:

```bash
sha256sum -c BalanceDesk-v1.2.0-client-linux-x64.tar.gz.sha256
```

The calculated fingerprint must match the fingerprint in the checksum file exactly. Do not run or extract a package whose checksum does not match.

## Windows installer — recommended

The Setup executable installs BalanceDesk for the current Windows account. Administrator rights are not required.

1. Open `BalanceDesk-Setup-v1.2.0-windows-x64.exe`.
2. On a new computer, choose either **Start with a new workspace** or **Use an existing BalanceDesk database or extracted portable folder**.
3. If importing, select a trusted local `.db` file or extracted portable BalanceDesk folder. The complete selected workspace replaces the empty installation; it is not merged. Its users and passwords become active, so know an Administrator login from that workspace before continuing.
4. Choose whether to create a desktop shortcut and select **Install BalanceDesk**.
5. Select **Open BalanceDesk** when installation completes.

The v1.2.0 executable is not code-signed. Windows may therefore show an unknown-publisher or SmartScreen warning. Verify the checksum before choosing to run a transferred installer.

Application files are installed under `%LOCALAPPDATA%\Programs\BalanceDesk`. Business data, settings, backups, diagnostics, and logs are kept separately under `%LOCALAPPDATA%\BalanceDesk`.

If installed data already exists, Setup preserves it automatically during reinstall or update. Uninstall removes the application files and shortcuts but deliberately retains the business data and backups. Reinstalling reconnects to that retained workspace.

### First Administrator on a new workspace

1. Open BalanceDesk after installation.
2. Keep the displayed local setup code private.
3. Enter the business name, Administrator name, username, password, and setup code.
4. Create the local workspace.

If an existing workspace should be used instead, select **Import existing data** beneath the first-Administrator form. BalanceDesk explains that the current workspace will be replaced, closes safely, opens Data & Recovery in import mode, and reopens at login after a successful import.

### Windows Start entries

Installed BalanceDesk provides:

- **BalanceDesk** — opens the application;
- **BalanceDesk Data & Recovery** — backup, restore, import, diagnostics, and stop;
- **BalanceDesk Diagnostics** — opens a direct health check;
- **Stop BalanceDesk** — directly stops the owned app window and server; and
- **Uninstall BalanceDesk** — removes application files while retaining business data.

Closing the owned BalanceDesk app window normally stops its local server and signs out local sessions. If Windows reports that BalanceDesk is still active, use **Stop BalanceDesk**.

## Windows portable

1. Extract the complete ZIP to a normal local folder such as `Documents\BalanceDesk`.
2. Keep every extracted file and folder together.
3. Open `BalanceDesk.exe`.

Portable settings, data, backups, diagnostics, and logs remain inside the extracted BalanceDesk folder. Keep the complete stopped folder together when moving it. Do not run it from inside the ZIP, a network share, OneDrive, Dropbox, or another synchronised folder.

`Setup BalanceDesk.bat` and `BalanceDesk.bat` are compatibility aliases for the native launcher. `BalanceDesk Data & Recovery.exe` provides maintenance actions; the adjacent Backup, Restore, Import, Diagnostics, and Stop batch files are lightweight compatibility aliases.

## Linux portable

The Linux package requires:

- an x86-64 Linux system;
- glibc 2.28 or newer; and
- OpenSSL 3, providing `libssl.so.3`.

The package does not support ARM, Alpine/musl, or systems that provide only an older OpenSSL library.

Extract and set up the complete archive in a normal writable local folder:

```bash
tar -xzf BalanceDesk-v1.2.0-client-linux-x64.tar.gz
cd BalanceDesk-v1.2.0-client-linux-x64
./Setup\ BalanceDesk.sh
```

Setup creates BalanceDesk and Data & Recovery entries for the current Linux user. It does not require root access or install a system service. The database, settings, backups, diagnostics, logs, and runtime state remain inside the extracted folder.

Open BalanceDesk from the application menu or the `BalanceDesk` launcher in the extracted folder. The launcher prefers Google Chrome, then Microsoft Edge, then Chromium, then the desktop's default browser. Closing an ordinary browser tab may not stop the private server; use `Stop BalanceDesk.sh` or the Stop action in Data & Recovery when finished.

Private Linux data directories use mode `0700` and private files use mode `0600`. The v1.2.0 launchers enforce a private `0077` file-creation mask and repair older permissive BalanceDesk data permissions without following symbolic links.

## Password guidance

New and reset passwords must:

- contain at least eight characters;
- include an uppercase letter, lowercase letter, number, and symbol;
- avoid obvious letter, number, keyboard, or repeated patterns;
- avoid common password words; and
- not be derived from the user's name, username, business name, or BalanceDesk.

The form checks these requirements while the user types, and the server checks them again when submitted.

## Backup, restore, and import

Always stop BalanceDesk before backup, restore, import, moving a portable folder, or updating it.

### Create a verified backup

1. Stop BalanceDesk.
2. Open **BalanceDesk Data & Recovery** and choose **Back up**.
3. BalanceDesk checks SQLite integrity, foreign keys, and the migration baseline.
4. It creates and verifies a timestamped snapshot in the local `backups` folder.

Copy verified backup files regularly to another protected local disk. Do not publish database, backup, diagnostic, or log files in GitHub issues or other public locations.

### Restore a backup

1. Stop BalanceDesk.
2. Open Data & Recovery and choose **Restore**.
3. Select a trusted local BalanceDesk `.db` backup.
4. Type `RESTORE` exactly when requested.
5. BalanceDesk verifies the backup, creates pre-restore recovery copies, restores it, and verifies the active database.
6. Open BalanceDesk and confirm the expected records.

Restore is for recovering a backup of the active workspace.

### Import an existing workspace

Import is for moving a complete older portable workspace or another local BalanceDesk database into the current installation. It is not a merge and is not the routine backup-recovery action.

1. Make sure an Administrator username and password from the selected workspace are known.
2. Stop BalanceDesk.
3. Open Data & Recovery and choose **Import data**.
4. Select a trusted extracted portable BalanceDesk folder or its local `.db` file.
5. Type `IMPORT` exactly when requested.
6. BalanceDesk verifies integrity, foreign keys, and the current migration baseline; creates recovery copies; activates the selected workspace; and signs out imported sessions.
7. Reopen BalanceDesk and sign in using an account from the imported workspace.

The imported business, users, passwords, customers, transactions, and history replace the active workspace.

## Diagnostics and troubleshooting

Diagnostics checks the bundled runtime, production server, database tool, settings shape, SQLite integrity, foreign keys, migrations, and the local application port. It writes a timestamped local report without setup codes, session secrets, passwords, or business records.

If BalanceDesk cannot start:

1. Run **BalanceDesk Diagnostics**.
2. Use **Stop BalanceDesk**, then open BalanceDesk again.
3. Confirm the application or portable folder is on a normal local disk.
4. Confirm another BalanceDesk copy or another program is not already using port `3210`.
5. Preserve the data, backups, diagnostics, and logs when requesting support. Do not delete the data folder to troubleshoot.

BalanceDesk listens only on `127.0.0.1:3210`; it is not exposed to other devices on the local network and does not require a Windows Firewall public or private network exception.
