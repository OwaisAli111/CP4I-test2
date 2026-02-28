# Simple Frontend Application

A minimal React-based frontend application with interactive components and full Docker support.

## Features

- ✅ React 18 with Hooks
- ✅ Interactive counter component
- ✅ Input form with real-time greeting
- ✅ Modern responsive UI with gradient design
- ✅ Fully containerized with Docker
- ✅ Multi-stage Docker build for optimization

## Project Structure

```
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js             # Main App component
│   ├── App.css            # Application styles
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── Dockerfile             # Docker configuration
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Docker Support

### Build the Docker image

```bash
docker build -t simple-frontend:latest .
```

### Run the container

```bash
docker run -p 3000:3000 simple-frontend:latest
```

Access the application at `http://localhost:3000`

### Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Run with:
```bash
docker-compose up
```

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (irreversible)

## Components

### Counter Demo
Interactive counter with increment, decrement, and reset buttons.

### Greeting Section
Input field that displays a greeting based on user input.

### Features List
Displays key features of the application.

## Styling

The application uses custom CSS with:
- CSS Flexbox for layout
- Responsive design for mobile devices
- Gradient background
- Smooth animations and transitions
- Interactive button effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
