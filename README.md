# Content Rating

A simple React app for approving content with Like and Dislike buttons. Each click updates the corresponding counter and displays the total number of ratings.

## Features

- Like and Dislike rating buttons
- Live like, dislike, and total rating counters
- Responsive, component-based React interface
- Fast development and builds with Vite

## Tech Stack

- React 18
- Vite
- JavaScript / JSX
- CSS

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Gloriane7767/content_rating.git
cd content_rating
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production-ready files are generated in `dist/`.

### Preview the Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Project Structure

```text
content_rating/
├── public/                 # Static public assets
├── src/
│   ├── Components/         # ContentRating React component and styles
│   ├── App.jsx             # Root application component
│   └── main.jsx            # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

`ContentRating` is a class-based React component that stores `likes` and `dislikes` in local component state. Clicking a button increments its counter with `setState`, and the total is calculated from both values.

## License

This project is licensed under the [Apache License 2.0](LICENSE).
