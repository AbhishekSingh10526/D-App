# DBank - Decentralized Bank Application

## Overview
A simple DBank (Decentralized Bank) web application that allows users to manage a virtual balance with deposit, withdrawal, and compound interest features. Originally an Internet Computer (ICP/DFINITY) tutorial project, reconstructed as a standalone web app.

## Recent Changes
- 2026-02-07: Reconstructed project from broken submodule import. Set up Express server and static frontend.

## Project Architecture
- **Frontend**: Static HTML/CSS/JS served from `src/dbank_assets/src/`
- **Server**: Express.js (`server.js`) serving static files on port 5000
- **No database**: Balance is client-side only (in-memory per session)

### Key Files
- `server.js` - Express server entry point
- `src/dbank_assets/src/index.html` - Main HTML page
- `src/dbank_assets/src/styles.css` - Styling
- `src/dbank_assets/src/index.js` - Client-side logic
- `package.json` - Node.js dependencies

## Running
- Workflow: `node server.js` on port 5000
