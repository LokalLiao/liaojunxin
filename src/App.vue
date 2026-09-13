<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-layout">
    <Header class="fixed-header" />
    <main class="main-content">
      <div class="content-wrapper">
        <router-view />
      </div>
    </main>
    <Footer class="fixed-footer" />
  </div>
</template>

<style>
/* 全局基础重置 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  background-color: #ffffff;
  color: #333333;
  line-height: 1.6;
}

/* 布局高度严格占满当前视口（100vh） */
.app-layout {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 防止 Header 和 Footer 在空间不足时被挤压变形 */
.fixed-header,
.fixed-footer {
  flex-shrink: 0;
}

/* 中间主区域：吃满剩余空间，超出部分出现纵向滚动条 */
.main-content {
  flex: 1;
  width: 100%;
  overflow-y: auto; /* 仅在这里开启独立滚动条 */
}

/* 内容居中约束与内边距 */
.content-wrapper {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>