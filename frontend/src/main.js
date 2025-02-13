const { createApp } = Vue

const app = createApp({
    data() {
        return {
            sortMethod: 'bubble',
            numbers: ['', '', '', '', ''],
            sortingSteps: [],
            sortingResult: '',
            isLoading: false,
            methodDescriptions: {
                bubble: '冒泡排序：重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序错误就把他们交换过来，直到没有再需要交换的元素为止。',
                insertion: '插入排序：构建有序序列，对于未排序的数据，在已排序序列中从后向前扫描，找到相应位置并插入。',
                selection: '选择排序：每次从未排序区间选择最小的元素，放到已排序区间的末尾。',
                merge: '归并排序：采用分治法，将已有序的子序列合并，得到完全有序的序列。把序列分为长度相同的两个子序列，对每个子序列采用归并排序。',
                quick: '快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序。',
                shell: '希尔排序：把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。',
                heap: '堆排序：利用堆这种数据结构所设计的一种排序算法。堆是一个近似完全二叉树的结构，并同时满足堆积的性质：即子节点的键值或索引总是小于（或者大于）它的父节点。'
            }
        }
    },
    computed: {
        currentDescription() {
            return this.methodDescriptions[this.sortMethod]
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