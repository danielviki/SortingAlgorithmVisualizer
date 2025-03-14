# Sorting Algorithm Visualizer

A web application that visualizes various sorting algorithms using Vue.js frontend and Flask backend. Watch and learn how different sorting algorithms work through interactive step-by-step visualization.

## Features

- Multiple sorting algorithms supported:
  - Bubble Sort (O(n²))
  - Selection Sort (O(n²))
  - Insertion Sort (O(n²))
  - Merge Sort (O(n log n))
  - Quick Sort (O(n log n))
  - Shell Sort (O(n log n))
  - Heap Sort (O(n log n))
- Step-by-step visualization of sorting process
- Interactive user interface
- Real-time sorting progress display
- Algorithm time complexity information
- Color-coded array elements to track changes

## Project Structure

```plaintext
sorting-visualizer/
├── frontend/           # Vue.js frontend
│   ├── src/
│   │   ├── main.js    # Vue application entry
│   │   ├── App.vue    # Root component
│   │   ├── components/ # Vue components
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
  - Vue.js 3 (Composition API)
  - Vite (Build tool)
  - Modern CSS with animations
  - Axios for API calls
- Backend:
  - Python 3.8+
  - Flask (Web framework)
  - Flask-CORS (Cross-origin support)

## Getting Started

### Prerequisites

- Node.js (v14+)
- Python (v3.8+)
- pip (Python package manager)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sorting-visualizer.git
cd sorting-visualizer
```

2. Set up the backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On macOS/Linux
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
source venv/bin/activate  # On macOS/Linux
export FLASK_ENV=development  # For development mode
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
2. Enter numbers (5-15 recommended) in the input fields
3. Click "Sort Numbers" to start the visualization
4. Use controls to:
   - Play/Pause the visualization
   - Step forward/backward
   - Reset the array
5. View the current step description and array state
6. See the final sorted result

## Algorithm Details

| Algorithm      | Best Case  | Average Case | Worst Case | Space Complexity |
|---------------|------------|--------------|------------|------------------|
| Bubble Sort   | O(n)       | O(n²)        | O(n²)      | O(1)            |
| Selection Sort| O(n²)      | O(n²)        | O(n²)      | O(1)            |
| Insertion Sort| O(n)       | O(n²)        | O(n²)      | O(1)            |
| Merge Sort    | O(n log n) | O(n log n)   | O(n log n) | O(n)            |
| Quick Sort    | O(n log n) | O(n log n)   | O(n²)      | O(log n)        |
| Shell Sort    | O(n log n) | O(n log n)   | O(n²)      | O(1)            |
| Heap Sort     | O(n log n) | O(n log n)   | O(n log n) | O(1)            |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Algorithm visualizations inspired by various computer science resources
- Vue.js and Flask communities for excellent documentation
- Contributors and users of this project
