# 💝 Valentine's Day Project

A romantic and interactive single-page application built with React & Vite to celebrate Valentine's Day. This project serves as a digital gift, featuring a love letter, a date planner, a memory gallery, and a timeline of your love story.

## ✨ Features

- **🎵 Background Music**: Integrated audio player with Play/Pause controls that persists across different views.
- **💌 Digital Love Letter**: A dedicated section to express your feelings with a smooth scroll experience.
- **💍 Interactive Proposal**: A playful "Will you be my Valentine?" question where the "No" button mischievously runs away and "Yes" triggers a celebration.
- **� Date Night Planner**: An interactive form to plan the perfect date (Restaurant, Time, Location).
- **📸 Memory Gallery**: A responsive photo grid to showcase your favorite moments together.
- **⏳ Love Story Timeline**: A vertical timeline highlighting key milestones in your relationship.
- **🎨 Glassmorphism UI**: A modern, frosted-glass design aesthetic with floating heart animations.
- **📱 Fully Responsive**: Looks great on both desktop and mobile devices.

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface.
- **Vite**: Fast build tool and development server.
- **CSS3**: Custom styling with animations, gradients, and media queries.

## � Project Structure

```
frontend/
├── dist/              # Production build output
├── src/
│   ├── assets/        # Images, audio, and other static files
│   ├── Components/    # React components (Home, OpenLoveLetter, PlanDate)
│   ├── App.css        # Global styles and animations
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Entry point
├── index.html         # HTML template
└── README.md          # Project documentation
```

## �� Getting Started

Follow these steps to run the project locally:

1.  **Navigate to the project folder**:

    ```bash
    cd frontend
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Run the Development Server**:

    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Click the link shown in the terminal (usually `http://localhost:5173`) to view the website.

## 📦 Building for Production

To create an optimized build for deployment:

```bash
npm run build
```

The output will be generated in the `dist` folder, ready to be deployed to platforms like Vercel, Netlify, or GitHub Pages.

## 📝 Customization

- **Photos**: Update the `PHOTOS` array in `src/Components/Home.jsx` with your own image URLs or imports.
- **Music**: Replace `src/assets/audio.mp3` with your preferred song.
- **Text**: Edit the text in `Home.jsx`, `OpenLoveLetter.jsx`, and `PlanDate.jsx` to personalize your message.

## Execution Flow (From `index.html`)

1. `index.html` loads first and provides `<div id="root"></div>`.
2. `index.html` loads `/src/main.jsx` using:
   `<script type="module" src="/src/main.jsx"></script>`.
3. In `src/main.jsx`:
   - React app is mounted with `createRoot(document.getElementById('root'))`.
   - `<App />` is rendered inside `<StrictMode>`.
4. In `src/App.jsx`:
   - `App` returns `<Home />`.
5. In `src/Components/Home.jsx`:
   - Main state is managed (`showLoveLetter`, `showPlanDate`, `isPlaying`).
   - Conditional rendering decides which view is shown:
     - `OpenLoveLetter` when `showLoveLetter` is `true`
     - `PlanDate` when `showPlanDate` is `true`
     - Otherwise the main Home page (hero, timeline, gallery, music controls)
6. In child components:
   - `OpenLoveLetter` and `PlanDate` receive callback props (`onBack`) from `Home`.
   - Clicking Back calls those callbacks, updates `Home` state, and returns to Home view.
