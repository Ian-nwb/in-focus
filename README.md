# ☁️ in-focus

<div align="center">
  <img src="icon.png" width="128" height="128" alt="in-fcs mascot">
  <p><i>"Stay cute & stay on task ~"</i></p>
</div>

---

**in-focus** is a cutesy, lightweight site-blocker Chrome Extension built using Manifest V3 (MV3). It features a pastel cloud aesthetic designed to intercept distracting websites dynamically and keep your focus right where it belongs: on building great things!

## ✨ Features
- **Dynamic Site Blocking:** Add or remove distracting URLs instantly using the pop-up panel—no hardcoded values or manual file reloads required.
- **Chrome Storage Persistence:** Remembers your block list seamlessly even if you completely close your browser or restart your machine.
- **CSP-Compliant Design:** Fast, modern, and built strictly under Chrome's modern Manifest V3 standards.
- **Cinnamoroll Aesthetic:** Soft pastel blue gradients, fluffy cloud cards, and custom animated SVG decorations to make staying productive feel cozy.

## 🛠️ File Structure
```text
in-fcs/
├── manifest.json   # Configuration & permissions blueprint
├── background.js   # Service worker handling dynamic rule orchestration
├── popup.html      # The control panel UI layout
├── popup.js        # Event handling, storage syncing & messaging logic
├── blocked.html    # The custom pastel blue focus redirection screen
├── blocked.js      # The logic for blocked.html
└── icon.png        # Custom extension brand icon