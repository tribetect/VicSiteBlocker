# Vic's Site Blocker (Chrome Extension)

A lightweight Chrome extension that blocks specified websites using **Manifest V3** and Chrome's **Declarative Net Request API**.

---

## ✅ Features
- Blocks websites by domain (hardcoded list in `rules.json`)
- Fast and efficient (uses Chrome's built-in blocking API)
- No background scripts required

---

## 📂 Project Structure
```
simple-site-blocker/
├── manifest.json
├── rules.json
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

---

## 🛠 Installation (Using GitHub Web Interface)
1. **Create a GitHub account** at [https://github.com](https://github.com).
2. **Create a new repository** named `simple-site-blocker`.
3. Click **Add file → Upload files**.
4. Upload:
   - `manifest.json`
   - `rules.json`
   - `icons/` folder (with icon16.png, icon48.png, icon128.png)
   - `README.md`
5. Click **Commit changes**.
6. Share your repository link with others.

---

## 🚀 How to Install the Extension in Chrome
1. Download the repository as ZIP from GitHub.
2. Extract the ZIP file.
3. Open Chrome and go to `chrome://extensions`.
4. Enable **Developer mode** (top-right toggle).
5. Click **Load unpacked** and select the extracted folder.

---

## ✏️ Usage
- After loading, the extension will block all domains listed in `rules.json`.
- Try visiting a blocked site (e.g., `facebook.com`) — you should see Chrome's default error page.

---

## 🔧 Customization
- To block more sites:
  - Open `rules.json`.
  - Add new rules following this format:
    ```json
    {
      "id": 7,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "||example.com^",
        "resourceTypes": ["main_frame"]
      }
    }
    ```
  - Ensure each rule has a **unique `id`**.
  - Reload the extension after saving changes.

---

## 🧩 Optional Enhancements
- **Custom Block Page**: Redirect blocked sites to a local HTML page.
- **Dynamic Blocklist**: Upgrade to an Options page for managing domains interactively.
- **Scheduling**: Block sites only during work hours.

---

## ⚠️ Notes
- Works only in Chrome (or Chromium-based browsers supporting Manifest V3).
- Reload extension after any changes to `rules.json`.
- Use `||domain^` in `urlFilter` to block all subdomains.

---

## 📝 License
MIT License
