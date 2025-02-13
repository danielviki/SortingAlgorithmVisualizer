def bubble_sort(a):
    for i in range(len(a)-1):
        for j in range(len(a)-1-i):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
                print(f"冒泡交换 {a[j]}↔{a[j+1]}，当前序列：{a}")
    return a

def insertion_sort(a):
    for i in range(1,len(a)):
        while i>0 and a[i]<a[i-1]:
            a[i], a[i-1] = a[i-1], a[i]
            print(f"插入移动 {a[i]}→位置{i}，当前序列：{a}")
            i -= 1
    return a

def selection_sort(a):
    for i in range(len(a)):
        min_idx = i
        for j in range(i+1, len(a)):
            if a[j] < a[min_idx]:
                min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i]
        print(f"选择交换 {a[i]}↔{a[min_idx]}，当前序列：{a}")
    return a

def quick_sort(a, start=None, end=None):
    if start is None:
        start = 0
        end = len(a) - 1
    
    if start >= end:
        return a

    pivot = a[end]
    i = start - 1

    for j in range(start, end):
        if a[j] <= pivot:
            i += 1
            if i != j:
                a[i], a[j] = a[j], a[i]
                print(f"快速排序交换 {a[i]}↔{a[j]}，当前序列：{a}")

    a[i + 1], a[end] = a[end], a[i + 1]
    if i + 1 != end:
        print(f"快速排序放置基准 {a[i + 1]}，当前序列：{a}")

    quick_sort(a, start, i)
    quick_sort(a, i + 2, end)
    return a

def merge_sort(a):
    if len(a) <= 1:
        return a
        
    mid = len(a) // 2
    left = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    print(f"归并排序分解：左半部分 {left}，右半部分 {right}")
    result = merge(left, right)
    print(f"归并排序合并结果：{result}")
    return result

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            print(f"归并取左边元素 {left[i]}")
            i += 1
        else:
            result.append(right[j])
            print(f"归并取右边元素 {right[j]}")
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

def shell_sort(a):
    n = len(a)
    gap = n // 2
    while gap > 0:
        print(f"希尔排序当前间隔：{gap}")
        for i in range(gap, n):
            temp = a[i]
            j = i
            while j >= gap and a[j - gap] > temp:
                a[j] = a[j - gap]
                print(f"希尔排序移动 {a[j]}→位置{j}，当前序列：{a}")
                j -= gap
            a[j] = temp
            if j != i:
                print(f"希尔排序插入 {temp}到位置{j}，当前序列：{a}")
        gap //= 2
    return a

def heap_sort(a):
    def heapify(a, n, i):
        largest = i
        l = 2 * i + 1
        r = 2 * i + 2
        
        if l < n and a[i] < a[l]:
            largest = l
        if r < n and a[largest] < a[r]:
            largest = r
            
        if largest != i:
            a[i], a[largest] = a[largest], a[i]
            print(f"堆排序调整 {a[i]}↔{a[largest]}，当前序列：{a}")
            heapify(a, n, largest)
    
    n = len(a)
    # Build max heap
    for i in range(n//2 - 1, -1, -1):
        heapify(a, n, i)
        print(f"堆排序建堆阶段，当前序列：{a}")
    
    # Extract elements from heap one by one
    for i in range(n-1, 0, -1):
        a[i], a[0] = a[0], a[i]
        print(f"堆排序取出最大值 {a[i]}，当前序列：{a}")
        heapify(a, i, 0)
    
    return a

if __name__ == "__main__":
    test = [64,34,25,12,22,11,90]
    print(f"冒泡排序结果: {bubble_sort(test.copy())}")
    print(f"插入排序结果: {insertion_sort(test.copy())}")
    print(f"选择排序结果: {selection_sort(test.copy())}")
    print(f"快速排序结果: {quick_sort(test.copy())}")
    print(f"归并排序结果: {merge_sort(test.copy())}")
    print(f"希尔排序结果: {shell_sort(test.copy())}")
    print(f"堆排序结果: {heap_sort(test.copy())}")

