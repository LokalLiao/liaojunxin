<template>
  <div class="faq-view">
    <!-- 页面头部 -->
    <header class="page-header">
      <h1 class="page-title">{{ t('faq.pageTitle') }}</h1>
    </header>

    <!-- 问答列表 -->
    <div class="faq-list">
      <article 
        v-for="(item, index) in tm('faq.items')" 
        :key="index" 
        class="faq-card"
      >
        <div class="faq-question">
          <span class="q-badge">Q{{ index + 1 }}</span>
          <h2 class="q-text">{{ rt(item.q) }}</h2>
        </div>
        <div class="faq-answer">
          <span class="a-badge">A</span>
          <p class="a-text">{{ rt(item.a) }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
</script>

<style scoped>
.faq-view {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.page-header {
  border-bottom: 2px solid #219fe3;
  padding-bottom: 12px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.page-subtitle {
  font-size: 13.5px;
  color: #666666;
  margin-top: 6px;
  margin-bottom: 0;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 问答卡片容器 */
.faq-card {
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 问题行 */
.faq-question {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 12px;
}

.q-badge {
  background-color: #219fe3;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  flex-shrink: 0;
}

.q-text {
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1.5;
}

/* 回答行 */
.faq-answer {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.a-badge {
  background-color: #e0f2fe;
  color: #0284c7;
  border: 1px solid #bae6fd;
  font-size: 13px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  flex-shrink: 0;
}

.a-text {
  font-size: 14px;
  color: #374151;
  line-height: 1.8;
  margin: 0;
  white-space: pre-line;
}
</style>