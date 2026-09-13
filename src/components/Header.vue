<template>
  <header class="header">
    <div class="logo">Liao Junxin</div>

    <nav>
      <router-link to="/">
        {{ t('header.home') }}
      </router-link>
      <router-link to="/projects">
        {{ t('header.projects') }}
      </router-link>
      <router-link to="/faq">
        {{ t('header.faq') }}
      </router-link>
    </nav>

    <div class="language">
      <span :class="{ active: locale === 'en' }" @click="changeLang('en')">
        EN
      </span>
      |
      <span :class="{ active: locale === 'ja' }" @click="changeLang('ja')">
        日本語
      </span>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n({
  useScope: 'global'
})

function changeLang(lang) {
  locale.value = lang
  localStorage.setItem('language', lang)
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px; /* 屏幕边缘内边距，可根据喜好调整 */
  background: whitesmoke;
  border-bottom: 1px solid #ececec;
}
.logo {
  font-size: 28px;
  font-weight: 700;
}

nav {
  display: flex;
  gap: 35px;
}

nav a {
  color: #444;
  text-decoration: none;
  transition: .2s;
}

nav a:hover {
  color: #219fe3;
}

nav a.router-link-active {
  color: #219fe3;
  font-weight: 600;
}

.language {
  font-size: 14px;
  color: #666;
}

.language span {
  cursor: pointer;
  padding: 4px 6px;
}

.active {
  color: #219fe3;
  font-weight: 600;
}
</style>