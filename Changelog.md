# Changelog

All notable changes to "Vic's Site Blocker" will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-04-18

### Added
- **Dynamic Options Page**: Users can now add or remove blocked domains via a dedicated settings page without editing code.
- **Popup Interface**: Added a quick-toggle popup to enable/disable the blocker instantly.
- **Storage Sync**: Blocklists now sync across Chrome devices using `chrome.storage.sync`.
- **Real-time Updates**: Rules update automatically when the domain list changes.

### Changed
- **Architecture**: Migrated from static `rules.json` to dynamic rule management via `chrome.declarativeNetRequest.updateDynamicRules()`.
- **Permissions**: Updated `manifest.json` to include `storage` and `declarativeNetRequestWithHostAccess`.
- **User Experience**: Removed the need to manually edit JSON files or reload the extension to apply changes.

### Removed
- `rules.json`: No longer required; domain lists are now managed via the Options page.

### Fixed
- Resolved potential ID conflicts by generating unique rule IDs dynamically.
- Fixed typo in documentation regarding domain formatting.

### Migration Note for Users
If you are upgrading from v1.0:
1. **Uninstall** the old extension (optional, but recommended to clear old static rules).
2. **Install** the new version.
3. Your previous blocklist is **not** automatically migrated. You will need to re-enter your domains in the new Options page.

---

## [1.0.0] - 2025-07-23

### Added
- Initial release of "Vic's Site Blocker".
- Static domain blocking via `rules.json`.
- Manifest V3 implementation using Declarative Net Request API.
- Basic installation guide.