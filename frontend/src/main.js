const { createApp } = Vue

const app = createApp({
    data() {
        return {
            sortMethod: 'bubble',
            numbers: ['', '', '', '', ''],
            sortingSteps: [],
            sortingResult: '',
            isLoading: false
        }
    },
    methods: {
        async sortNumbers() {
            if (this.numbers.some(n => n === '')) {
                alert('Please enter all numbers');
                return;
            }

            try {
                this.isLoading = true;
                const response = await fetch('http://localhost:5001/api/sort', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    credentials: 'include',  // Include credentials
                    mode: 'cors',           // Explicitly set CORS mode
                    body: JSON.stringify({
                        method: this.sortMethod,
                        numbers: this.numbers.map(n => parseInt(n))
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                this.sortingSteps = data.steps;
                this.sortingResult = `[${data.sorted.join(', ')}]`;
            } catch (error) {
                console.error('Error:', error);
                this.sortingResult = `Error: ${error.message}`;
            } finally {
                this.isLoading = false;
            }
        }
    }
}).mount('#app')