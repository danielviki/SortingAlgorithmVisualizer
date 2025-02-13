from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os

# Add the parent directory to Python path to import playground
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from backend.services.playground import bubble_sort, insertion_sort, selection_sort, quick_sort, merge_sort, shell_sort, heap_sort

app = Flask(__name__)
CORS(app)

# Global variable to store sorting steps
sorting_steps = []

def clear_steps():
    global sorting_steps
    sorting_steps = []

def add_step(step):
    global sorting_steps
    sorting_steps.append(step)

# Modify the original print statements to store steps
def custom_print(message):
    add_step(message)

@app.route('/api/sort', methods=['POST'])
def sort():
    data = request.get_json()
    numbers = data.get('numbers', [])
    method = data.get('method', 'bubble')
    
    # Clear previous steps
    clear_steps()
    
    # Create a copy of the numbers to avoid modifying the original
    numbers_copy = numbers.copy()
    
    # Dictionary of sorting functions
    sort_functions = {
        'bubble': bubble_sort,
        'insertion': insertion_sort,
        'selection': selection_sort,
        'merge': merge_sort,
        'quick': quick_sort,
        'shell': shell_sort,
        'heap': heap_sort
    }
    
    if method not in sort_functions:
        return jsonify({'error': 'Invalid sorting method'}), 400
    
    # Temporarily redirect print output to our custom function
    import builtins
    original_print = builtins.print
    builtins.print = custom_print
    
    try:
        # Run the sorting algorithm
        sorted_numbers = sort_functions[method](numbers_copy)
        
        # Restore original print function
        builtins.print = original_print
        
        return jsonify({
            'sorted': sorted_numbers,
            'steps': sorting_steps
        })
    except Exception as e:
        builtins.print = original_print
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)