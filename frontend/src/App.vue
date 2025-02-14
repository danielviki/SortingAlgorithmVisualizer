<template>
  <div class="app-wrapper">
    <div class="container">
      <h1>Sorting Visualizer</h1>
      
      <div class="input-section">
        <div class="method-selector">
          <label for="sortMethod">Select Sorting Method:</label>
          <select v-model="sortMethod">
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="shell">Shell Sort</option>
            <option value="heap">Heap Sort</option>
          </select>
        </div>

        <div class="numbers-input">
          <label>Enter 5 Numbers:</label>
          <div class="input-group">
            <input
              v-for="(num, index) in numbers"
              :key="index"
              type="number"
              v-model="numbers[index]"
              :placeholder="`Number ${index + 1}`"
              class="number-input"
            >
          </div>
        </div>

        <button @click="sortNumbers" :disabled="isLoading">
          {{ isLoading ? 'Sorting...' : 'Sort Numbers' }}
        </button>
      </div>

      <div class="output-section">
        <div class="steps-container">
          <h2>Sorting Steps:</h2>
          <div id="sortingSteps" class="steps-list">
            <div v-for="(step, index) in sortingSteps" 
                 :key="index" 
                 class="step-item">
              {{ step }}
            </div>
          </div>
        </div>
        <div class="result-container">
          <h2>Final Result:</h2>
          <div id="sortingResult" class="result">{{ result }}</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  setup() {
    const sortMethod = ref('bubble')
    const numbers = ref(Array(5).fill(''))
    const sortingSteps = ref([])
    const result = ref('')
    const isLoading = ref(false)

    const sortNumbers = async () => {
      // Validate inputs
      if (numbers.value.some(n => n === '')) {
        alert('Please enter all numbers')
        return
      }

      try {
        // Clear previous results
        sortingSteps.value = []
        result.value = ''
        isLoading.value = true

        // Send request to backend
        const response = await fetch('http://localhost:5001/api/sort', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            method: sortMethod.value,
            numbers: numbers.value.map(n => parseInt(n))
          })
        })

        const data = await response.json()
        
        if (data.error) {
          throw new Error(data.error)
        }

        sortingSteps.value = data.steps
        result.value = `[${data.sorted.join(', ')}]`
      } catch (error) {
        result.value = `Error: ${error.message}`
      } finally {
        isLoading.value = false
      }
    }

    return {
      sortMethod,
      numbers,
      sortingSteps,
      result,
      isLoading,
      sortNumbers
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.input-section {
  margin: 20px 0;
}

.method-selector, .numbers-input {
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
}

.number-input {
  width: 80px;
  padding: 5px;
}

.steps-list {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}

.step-item {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

.result {
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
</style>