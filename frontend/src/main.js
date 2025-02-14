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
                bubble: '冒泡排序：1. 相邻元素两两比较，左边>右边则交换 2. 每轮遍历使最大元素浮到末尾 3. 重复直到无交换发生',
                insertion: '插入排序：1. 将数组分为已排序区(左)和未排序区(右) 2. 每次取未排序区首元素，反向扫描插入到已排序区的正确位置 3. 插入时可能需要右移元素腾出空间',
                selection: '选择排序：1. 将数组分为已排序区(左)和未排序区(右) 2. 每轮从未排序区选出最小值 3. 与未排序区首元素交换位置，扩展已排序区',
                merge: '归并排序：1. 递归拆分数组至单个元素 2. 合并两个有序子数组：比较头部元素取较小值 3. 重复合并直至完整有序',
                quick: '快速排序：1. 选基准元素(pivot) 2. 将数组分为小于基准/基准/大于基准三部分 3. 递归排序左右分区',
                shell: '希尔排序：1. 按间隔(gap)分组进行插入排序 2. 逐步缩小间隔重复排序 3. 最终间隔为1时完成整体排序',
                heap: '堆排序：1. 构建最大堆(父节点≥子节点) 2. 取堆顶最大值放到数组末尾 3. 调整剩余元素重建堆结构，重复至堆为空'            }
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