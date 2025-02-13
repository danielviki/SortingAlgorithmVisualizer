document.addEventListener('DOMContentLoaded', function() {
    const sortButton = document.getElementById('sortButton');
    const sortingSteps = document.getElementById('sortingSteps');
    const sortingResult = document.getElementById('sortingResult');

    sortButton.addEventListener('click', async function() {
        // Clear previous results
        sortingSteps.innerHTML = '';
        sortingResult.innerHTML = '';

        // Get selected sort method
        const method = document.getElementById('sortMethod').value;

        // Get numbers from inputs
        const numbers = Array.from(document.querySelectorAll('.number-input'))
            .map(input => parseInt(input.value));

        // Validate inputs
        if (numbers.some(isNaN)) {
            alert('Please enter valid numbers in all fields');
            return;
        }

        try {
            // Disable button while sorting
            sortButton.disabled = true;
            sortButton.textContent = 'Sorting...';

            // Send request to backend
            const response = await fetch('http://localhost:5000/api/sort', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    method: method,
                    numbers: numbers
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            // Display sorting steps
            data.steps.forEach((step, index) => {
                const stepElement = document.createElement('div');
                stepElement.className = 'step-item';
                stepElement.textContent = `Step ${index + 1}: ${step}`;
                sortingSteps.appendChild(stepElement);
            });

            // Display final result
            sortingResult.textContent = `[${data.sorted.join(', ')}]`;

        } catch (error) {
            sortingResult.textContent = `Error: ${error.message}`;
        } finally {
            // Re-enable button
            sortButton.disabled = false;
            sortButton.textContent = 'Sort Numbers';
        }
    });
});