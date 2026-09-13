<template>
  <div class="projects-view">
    <!-- 页面标题 -->
    <header class="page-header">
      <h1 class="page-title">{{ t('projects.pageTitle') }}</h1>
      <p class="page-subtitle">{{ t('projects.pageSubtitle') }}</p>
    </header>

    <!-- 项目列表（时间倒序） -->
    <div class="project-list">
      <article 
        v-for="project in tm('projects.list')" 
        :key="rt(project.id)" 
        class="project-card"
      >
        <!-- 卡片头部：项目名称与开发期间 -->
        <div class="card-top">
          <div class="title-wrap">
            <span class="period-badge">{{ rt(project.period) }}</span>
            <h2 class="project-title">{{ rt(project.title) }}</h2>
          </div>

          <!-- 担当角色标签 -->
          <div class="roles-wrap">
            <span 
              v-for="(role, rIdx) in project.roles" 
              :key="rIdx" 
              class="role-tag"
            >
              {{ rt(role) }}
            </span>
          </div>
        </div>

        <!-- 项目概要 -->
        <div class="section-block">
          <h3 class="block-title">{{ t('projects.labels.overview') }}</h3>
          <p class="overview-text">{{ rt(project.desc) }}</p>
        </div>

        <!-- 项目描述/架构预览图 -->
        <div v-if="project.image" class="section-block">
          <h3 class="block-title">{{ t('projects.labels.architectureImg') }}</h3>
          <div class="project-image-container">
            <img 
              :src="getImageUrl(rt(project.image))" 
              :alt="rt(project.title)" 
              class="project-img"
              loading="lazy"
            />
          </div>
        </div>

        <!-- 详细技术实现（用什么技术做了什么事） -->
        <div class="section-block">
          <h3 class="block-title">{{ t('projects.labels.skillsSection') }}</h3>
          <ul class="skills-list">
            <li v-for="(skill, sIdx) in project.skills" :key="sIdx">
              {{ rt(skill) }}
            </li>
          </ul>
        </div>

        <!-- 运行环境与技术栈元数据 -->
        <div class="section-block">
          <h3 class="block-title">{{ t('projects.labels.environment') }}</h3>
          <div class="env-grid">
            <div class="env-item">
              <span class="env-label">OS:</span>
              <span class="env-values">
                {{ project.environment.os.map(o => rt(o)).join(' / ') }}
              </span>
            </div>
            <div class="env-item">
              <span class="env-label">Languages / Frameworks:</span>
              <span class="env-values">
                {{ project.environment.languages.map(l => rt(l)).join(', ') }}
              </span>
            </div>
            <div class="env-item">
              <span class="env-label">Tools / Services:</span>
              <span class="env-values">
                {{ project.environment.tools.map(t => rt(t)).join(', ') }}
              </span>
            </div>
          </div>
        </div>

        <!-- 技术参考 Demo 链接 -->
        <div v-if="project.demo" class="demo-block">
          <span class="demo-label">{{ t('projects.labels.demoLink') }}:</span>
          <a :href="rt(project.demo.url)" target="_blank" rel="noopener" class="demo-link">
            🔗 {{ rt(project.demo.title) }}
          </a>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

// 动态解析 assets 目录下的图片资源（兼容打包构建）
const getImageUrl = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href
}
</script>

<style scoped>
.projects-view {
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

.project-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* 履历纸张质感卡片 */
.project-card {
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 头部信息 */
.card-top {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 14px;
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.period-badge {
  background-color: #f0f9ff;
  color: #0284c7;
  border: 1px solid #bae6fd;
  font-size: 12.5px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
}

.project-title {
  font-size: 19px;
  font-weight: 700;
  color: #111111;
  margin: 0;
}

.roles-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.role-tag {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
}

/* 各区块 */
.section-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.block-title {
  font-size: 14px;
  font-weight: 700;
  color: #219fe3;
  margin: 0;
}

.overview-text {
  font-size: 13.5px;
  color: #333333;
  line-height: 1.7;
  margin: 0;
}

/* 项目图片容器与样式 */
.project-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fcfcfc;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 12px;
}

.project-img {
  max-width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* 技能实现点列表 */
.skills-list {
  margin: 0;
  padding-left: 20px;
  font-size: 13.5px;
  color: #333333;
  line-height: 1.8;
}

/* 运行环境表格网格 */
.env-grid {
  background: #fafbfc;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
}

.env-item {
  display: flex;
  gap: 8px;
}

.env-label {
  font-weight: 600;
  color: #555555;
  min-width: 170px;
}

.env-values {
  color: #222222;
}

/* Demo 外链 */
.demo-block {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: 13px;
}

.demo-label {
  color: #166534;
  font-weight: 600;
}

.demo-link {
  color: #15803d;
  font-weight: 600;
  text-decoration: none;
}

.demo-link:hover {
  text-decoration: underline;
}
</style>