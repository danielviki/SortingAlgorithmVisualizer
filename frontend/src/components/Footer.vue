<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>关于本项目</h3>
        <p>排序算法可视化工具，帮助理解各种排序算法的工作原理。</p>
      </div>
      <div class="footer-section">
        <h3>支持的算法</h3>
        <ul>
          <li>冒泡排序</li>
          <li>插入排序</li>
          <li>选择排序</li>
          <li>归并排序</li>
          <li>快速排序</li>
          <li>希尔排序</li>
          <li>堆排序</li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>技术栈</h3>
        <ul>
          <li>Vue.js 3</li>
          <li>Flask</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Algorithm Sorting Visualizer. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
    background: white;
    margin-top: 2rem;
    padding: 2rem 0;
    box-shadow: var(--shadow);
}

.footer-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.footer-section h3 {
    color: var(--text-color);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
}

.footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-section li {
    margin-bottom: 0.5rem;
    color: var(--text-color);
    opacity: 0.8;
}

.footer-section p {
    color: var(--text-color);
    opacity: 0.8;
    line-height: 1.5;
}

.footer-bottom {
    max-width: 1000px;
    margin: 2rem auto 0;
    padding: 1.5rem 20px 0;
    border-top: 1px solid var(--border-color);
    text-align: center;
}

.footer-bottom p {
    color: var(--text-color);
    opacity: 0.6;
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .footer-section {
        text-align: center;
    }
}
</style>