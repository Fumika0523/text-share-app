# ■ TextShare App
A **fully front-end React app** that lets users **share text instantly** using auto-generated, time-limited URLs —
with **no backend or database** required.
Built with **React + Vite + Tailwind CSS**, the app securely stores text in the browser’s `localStorage` and
generates a shareable link that expires in one hour.
---
## ■ Live Demo
■ [View on Vercel](https://your-textshare-app.vercel.app)
*(Update the link after deployment.)*
---
## ■ Features
- ■ **Instant Sharing** — Generate and share text links in one click
- ■ **Privacy-First** — 100% client-side; no servers or APIs involved
- ■ **Auto Expiry** — Shared text automatically expires after 1 hour
- ■ **Copy to Clipboard** — Copy your text or link with toast feedback
- ■ **Modern UI** — Clean Tailwind design with responsive layout
- ■ **Notifications** — Uses React Hot Toast for success/error alerts
---
## ■ Tech Stack
| Category | Technology |
|-----------|-------------|
| Frontend | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Icons | React Icons |
| Notifications | React Hot Toast |
| Hosting | Vercel |

---
## ■ Folder Structure
text-share-app/
■
■■■ public/
■ ■■■ vite.svg
■
■■■ src/
■ ■■■ App.jsx
■ ■■■ main.jsx
■ ■■■ index.html
■ ■■■ Component/
■ ■■■ TextCard.jsx
■ ■■■ TextInput.jsx
■ ■■■ TextView.jsx
■ ■■■ Modal.jsx
■ ■■■ Navbar.jsx
■
■■■ package.json
■■■ tailwind.config.js
■■■ postcss.config.js
■■■ README.md

---
## ■ How It Works
1. User types or pastes text into the text area.
2. The app generates a **unique random ID**.
3. The text and timestamp are saved in **localStorage**.
4. A shareable link like
https://yourdomain.vercel.app/?id=aB3cDe9X
is created.
5. When opened, the app loads the text (valid for 1 hour).
6. Expired links automatically show an “expired” message.
---
## ■ Run Locally
1. **Clone this repository**
git clone https://github.com//text-share-app.git
cd text-share-app
2. **Install dependencies**
npm install
3. **Start the development server**
npm run dev
4. Visit http://localhost:5173
---
## ■ Deploy to Vercel
1. Push the project to GitHub:
git add .
git commit -m "Initial commit"
git push origin main
2. Go to https://vercel.com
3. Click **Add New → Project**
4. Choose your GitHub repository and configure:
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
5. Click **Deploy** ■
Your app will be live at:
https://textshare.vercel.app


---
## ■ UI Preview
| Home Page | Shared Text View |
|------------|------------------|
| [Home Screenshot Placeholder] | [View Screenshot Placeholder] |
*(Replace with real screenshots after deployment.)*
---
## ■ Future Enhancements
- Password-protected links
- Dark/light mode toggle
- QR code sharing
- Encrypted text storage
---
## ■■■ Author
**Fumika Mikami**
■ Norwich, UK
■ [Portfolio](https://portfolio-fumika.netlify.app)
■ [GitHub](https://github.com/)
---
## ■ License
MIT License © 2025 Fumika Mikami
Free to use, modify, and share.
