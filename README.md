# Sorting Algorithm Visualizer

A web application that visualizes various sorting algorithms using Vue.js frontend and Flask backend.

## Features

- Multiple sorting algorithms supported:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Shell Sort
  - Heap Sort
- Step-by-step visualization of sorting process
- Interactive user interface
- Real-time sorting progress display

## Project Structure

```plaintext
sorting-visualizer/
├── frontend/           # Vue.js frontend
│   ├── src/
│   │   ├── main.js    # Vue application entry
│   │   ├── App.vue    # Root component
│   │   └── assets/    # Static assets
│   ├── vite.config.js
│   └── package.json
└── backend/           # Flask backend
    ├── app.py        # Flask application
    ├── services/
    │   └── playground.py  # Sorting algorithms
    └── requirements.txt
```

## Technology Stack

- Frontend:
  - Vue.js 3
  - Vite
  - Modern CSS
- Backend:
  - Python 3
  - Flask
  - Flask-CORS

## Getting Started

### Prerequisites

- Node.js (v14+)
- Python (v3.8+)
- pip

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sorting-visualizer
```

2. Set up the backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On macOS
pip install -r requirements.txt
```

3. Set up the frontend:
```bash
cd frontend
npm install
```

### Running the Application

1. Start the Flask backend:
```bash
cd backend
source venv/bin/activate  # On macOS
python app.py
```

2. Start the Vue.js frontend (in a new terminal):
```bash
cd frontend
npm run dev
```

3. Open your browser and visit:
```
http://localhost:5173
```

## Usage

1. Select a sorting algorithm from the dropdown menu
2. Enter 5 numbers in the input fields
3. Click "Sort Numbers" to start the visualization
4. Watch the step-by-step sorting process
5. View the final sorted result

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.