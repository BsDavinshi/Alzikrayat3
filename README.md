# Alzikrayat (الذكريات) — MERN Edition (Course Project 3)

A full-stack photo-sharing web application rebuilt from the original **Alzikrayat** PHP MVC codebase onto the **MERN stack** (MongoDB, Express.js, React.js with Vite, Node.js), faithfully preserving its warm amber & cream editorial visual identity, dark mode, and full feature set.

## Features

- **Design & Visual Identity**: Warm cream paper (`#fbf8f3`) & amber (`#d97706` / `#b45309`) palette, `Fraunces` display serif + `Inter` sans-serif typography, custom camera-heart `logo.svg`, frosted-glass sticky navbar, and full **Dark Mode** toggle.
- **Basic Authentication (No JWT)**: Register/Login with `bcrypt` password hashing, password strength meter, show/hide password toggle, "Last login from this computer" notice, and navbar displaying `Hi <firstName>` + `Logout` or `Please Login`.
- **Home & About Us**: Warm amber hero with tabbed Login/Register card (for guests) or Polaroid stack (for signed-in members), community statistics band, Latest Memories grid, Feature cards, Top Contributors, and About Us page.
- **Gallery with 5 Display Styles & Search**: Search by title, story, or member; switch between **3 Columns**, **4 Columns**, **List Cards**, **Masonry**, and **Full-Width Slider**; plus pagination.
- **Upload & 13-Filter Canvas Studio**: Drag-and-drop image upload, 13 pixel-level canvas filters (grayscale, sepia, invert, warm, cool, noir, vintage, sharpen, blur, emboss, edge-detect, vignette, pixelate), brightness/contrast sliders, album picker, and member tagging autocomplete.
- **Photo Detail (`/photos/:id`)**: Dark cinema stage with click-to-zoom fullscreen Lightbox, Prev/Next keyboard navigation (`←` `→`), AJAX Likes with animation, Share menu (Web Share, X, Facebook, WhatsApp, Copy link), Tag chips with untag, owner-only Delete with confirmation modal, and live commenting without page reload.
- **Albums & Member Profiles**: Create/view/delete albums with rotated stacked covers, browse album photos in any of the 5 display styles, view member profiles (`Photos`, `Tagged in`, `Albums` tabs), and edit your own profile.

## Local Setup Instructions

### 1. Backend (`server/`)
```bash
cd server
npm install
cp .env.example .env
```
Edit `server/.env` and set `MONGODB_URI` (local MongoDB or MongoDB Atlas).

*(Optional, recommended)* Seed demo members, albums, and the 12 sample photos:
```bash
npm run seed
```
Demo account after seeding: `sara@alzikrayat.test` / `Password123`

Start the Express API:
```bash
npm run dev
```

### 2. Frontend (`client/`)
In a second terminal:
```bash
cd client
npm install
npm run dev
```
Open **http://localhost:5173** in your browser.
