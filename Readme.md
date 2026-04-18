# Vic's Site Blocker (v1.1.0)

A lightweight, privacy-focused Chrome extension that blocks specified websites using **Manifest V3** and Chrome's **Declarative Net Request API**.

Unlike older versions, this update features a **dynamic Options page** and a **quick-toggle Popup**, allowing you to manage your blocklist and enable/disable blocking instantly without editing code.

![License](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)

---

## ✨ Key Features

- **🚀 Dynamic Management**: Add or remove blocked domains via a user-friendly Options page (no JSON editing required).
- **⚡ Instant Toggle**: Enable or disable the blocker instantly using the extension popup.
- **🔄 Auto-Sync**: Your blocklist automatically syncs across all Chrome devices where you are logged in.
- **🛡️ Privacy First**: Uses Chrome's built-in blocking API. No background scripts running constantly.
- **📱 Cross-Device**: Changes made on one device reflect everywhere via `chrome.storage.sync`.

---

Here is the updated Project Structure section for your README.md, reflecting the current v1.1.0 files and removing the obsolete rules.json.

You can replace the existing ## 📂 Project Structure section in your README with this:

## 📂 Project Structure

VicSiteBlocker-main/
├── manifest.json       # Extension configuration (Manifest V3, v1.1.0)
├── background.js       # Service worker: handles dynamic rule updates & storage sync
├── popup.html          # Quick toggle UI for enabling/disabling the blocker
├── popup.js            # Logic for the popup interface
├── options.html        # User interface for managing the domain blocklist
├── options.js          # Logic for saving domains to chrome.storage.sync
├── icons/              # Extension icons
│   ├── icon16.png      # Small icon (toolbar)
│   ├── icon48.png      # Medium icon (extension page)
│   └── icon128.png     # Large icon (store/install)
├── README.md           # Documentation
├── CHANGELOG.md        # Version history and updates
└── LICENSE             # CC BY-NC-SA 4.0 License text

Key Changes in v1.1.0:

Removed: rules.json (No longer used; domains are now stored dynamically).
Added: background.js, popup.*, options.* for dynamic management.


🚀 Installation
Manual Installation (Unpacked)
Download the source code as a ZIP file from the Releases page or clone the repository.
Extract the ZIP file to a folder on your computer.
Open Google Chrome and navigate to chrome://extensions.
Enable Developer mode (toggle switch in the top-right corner).
Click Load unpacked.
Select the folder containing the extracted files (e.g., VicSiteBlocker-main).
The extension icon will appear in your toolbar.
✏️ Usage
1. Manage Blocked Domains
Click the extension icon in your toolbar.
Click the "Manage List" link (or right-click the icon → Options).
In the text area, enter one domain per line (e.g., facebook.com, twitter.com).
Do not include http:// or https://.
Click Save & Update Rules.
Changes apply instantly. No reload required.
2. Enable/Disable Blocking
Click the extension icon.
Toggle the switch to ON (blue) to start blocking.
Toggle to OFF (gray) to temporarily allow all sites.
Your blocklist is saved even when disabled.
3. Sync Across Devices
If you are logged into Chrome on multiple devices, your blocklist and enabled/disabled state will automatically sync.

🔧 Customization & Advanced
Blocking Subdomains
The extension automatically blocks all subdomains.

Adding example.com will block www.example.com, mail.example.com, etc.
Resource Types
By default, the extension blocks:

Main frames (the website itself)
Sub-frames (embedded content)
Scripts, Images, Stylesheets, and XMLHttpRequests
Troubleshooting
Changes not applying? Ensure the extension is toggled ON in the popup.
Site not blocked? Check that the domain is spelled correctly in the Options page (e.g., reddit.com not reddith.com).
Need to reset? Clear your browser cache or reload the extension in chrome://extensions.
🧩 Optional Enhancements
The following features are planned for future versions or can be implemented as community contributions:

Custom Block Page: Redirect blocked sites to a local HTML page with a custom message or branding.
Scheduling: Block sites only during specific hours (e.g., work hours) using a time-based service worker.
Whitelist Mode: Allow specific domains to bypass blocking even if they are in the blocklist.
Statistics Dashboard: View how many requests were blocked per day or per site.
📝 Changelog
See CHANGELOG.md for a detailed history of updates.

v1.1.0 (Current)
Added dynamic Options page for easy domain management.
Added Popup with instant enable/disable toggle.
Migrated from static rules.json to dynamic rule generation.
Added chrome.storage.sync for cross-device syncing.
Updated license to CC BY-NC-SA 4.0.
v1.0.0
Initial release with static rules.json blocking.
📜 License
This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0).

What this means:

✅ You can: Share and adapt this code for personal/non-commercial use.
✅ You must: Give appropriate credit to the original author.
✅ You must: If you remix or modify, distribute under the same license.
❌ You cannot: Use this for commercial purposes without explicit permission.
See the LICENSE file for the full legal text.

Commercial Licensing: If you wish to use this extension for commercial purposes, please contact the author for a separate agreement.

🤝 Contributing
Contributions are welcome for non-commercial projects!

Fork the repository.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.
Please ensure your contributions adhere to the CC BY-NC-SA 4.0 license.

⚠️ Disclaimer
This extension is provided "as is" without warranty of any kind. The author is not responsible for any issues arising from the use of this software. Use responsibly and respect website terms of service.


### Changes Made:
- **Removed** the "Chrome Web Store (Coming Soon)" section from Installation.
- **Restored** the `## 🧩 Optional Enhancements` section with your original list (Custom Block Page, Scheduling, Whitelist/Stats added as a bonus idea).
- **Kept** the rest of the professional structure intact.
