<template>
  <div class="resume-sheet">
    <!-- 1. 基本情报 -->
    <section class="doc-section">
      <h2 class="section-title">{{ t('resume.basicInfo.title') }}</h2>
      <table class="word-table">
        <tbody>
          <tr>
            <th class="label-cell">{{ t('resume.basicInfo.labels.name') }}</th>
            <td class="value-cell name-cell" colspan="3">
              <strong>{{ t('resume.basicInfo.data.name') }}</strong>
            </td>
          </tr>
          <tr>
            <th class="label-cell">{{ t('resume.basicInfo.labels.birth') }}</th>
            <td class="value-cell">{{ t('resume.basicInfo.data.birth') }}</td>
            <th class="label-cell">{{ t('resume.basicInfo.labels.origin') }}</th>
            <td class="value-cell">{{ t('resume.basicInfo.data.origin') }}</td>
          </tr>
          <tr>
            <th class="label-cell">{{ t('resume.basicInfo.labels.address') }}</th>
            <td class="value-cell" colspan="3">{{ t('resume.basicInfo.data.address') }}</td>
          </tr>
          <tr>
            <th class="label-cell">{{ t('resume.basicInfo.labels.station') }}</th>
            <td class="value-cell" colspan="3">{{ t('resume.basicInfo.data.station') }}</td>
          </tr>
          <tr>
            <th class="label-cell">{{ t('resume.basicInfo.labels.contact') }}</th>
            <td class="value-cell" colspan="3">
              {{ t('resume.basicInfo.data.email') }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 2. 学历信息 -->
    <section class="doc-section">
      <h2 class="section-title">{{ t('resume.education.title') }}</h2>
      <table class="word-table list-table">
        <thead>
          <tr>
            <th class="col-year">{{ t('resume.education.headers.year') }}</th>
            <th class="col-month">{{ t('resume.education.headers.month') }}</th>
            <th class="col-detail">{{ t('resume.education.headers.detail') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tm('resume.education.history')" :key="'edu-' + index">
            <td class="cell-center col-year-border">{{ rt(item.year) }}</td>
            <td class="cell-center col-month-border">{{ rt(item.month) }}</td>
            <td class="cell-left">{{ rt(item.detail) }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 3. 工作经历（職歴） -->
    <section class="doc-section">
      <h2 class="section-title">{{ t('resume.experience.title') }}</h2>
      <table class="word-table list-table">
        <thead>
          <tr>
            <th class="col-year">{{ t('resume.experience.headers.year') }}</th>
            <th class="col-month">{{ t('resume.experience.headers.month') }}</th>
            <th class="col-detail">{{ t('resume.experience.headers.detail') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(item, index) in tm('resume.experience.history')" 
            :key="'exp-' + index"
            :class="{ 'desc-row': item.isDesc }"
          >
            <td class="cell-center col-year-border">{{ rt(item.year) }}</td>
            <td class="cell-center col-month-border">{{ rt(item.month) }}</td>
            <td class="cell-left" :class="{ 'desc-detail': item.isDesc }">
              {{ rt(item.detail) }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 4. 保有技能 -->
    <section class="doc-section">
      <h2 class="section-title">{{ t('resume.skills.title') }}</h2>
      <table class="word-table skill-table">
        <thead>
          <tr>
            <th class="col-skill-name">{{ t('resume.skills.headers.name') }}</th>
            <th class="col-skill-detail">{{ t('resume.skills.headers.detail') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tm('resume.skills.items')" :key="'skill-' + index">
            <td class="skill-name-cell">{{ rt(item.name) }}</td>
            <td class="skill-detail-cell">{{ rt(item.detail) }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 5. 语学能力（語学力） -->
    <section class="doc-section">
      <h2 class="section-title">{{ t('resume.languages.title') }}</h2>
      <table class="word-table skill-table">
        <thead>
          <tr>
            <th class="col-lang-name">{{ t('resume.languages.headers.name') }}</th>
            <th class="col-lang-level">{{ t('resume.languages.headers.level') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tm('resume.languages.items')" :key="'lang-' + index">
            <td class="skill-name-cell">{{ rt(item.name) }}</td>
            <td class="skill-detail-cell">{{ rt(item.level) }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 6. 自己PR・志望動機 -->
    <section class="doc-section">
      <h2 class="section-title">{{ t('resume.selfPr.title') }}</h2>
      <div class="pr-box">
        <p>{{ t('resume.selfPr.content') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
</script>

<style scoped>
/* Word 纸张风格外框 */
.resume-sheet {
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  padding: 36px 40px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.doc-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  color: #219fe3;
  border-left: 4px solid #219fe3;
  padding-left: 10px;
  margin: 0;
}

/* 通用网格表格样式 */
.word-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  border: 1px solid #cccccc;
}

.word-table th,
.word-table td {
  border: 1px solid #cccccc;
  padding: 9px 12px;
  text-align: left;
}

.label-cell {
  background-color: #f7f9fa;
  color: #444444;
  font-weight: 600;
  width: 18%;
  white-space: nowrap;
}

.value-cell {
  color: #222222;
  width: 32%;
}

.name-cell {
  font-size: 15px;
  color: #111111;
}

/* 学历与履历列表表格样式 */
.list-table th {
  background-color: #f7f9fa;
  color: #444444;
  font-weight: 600;
  text-align: center;
}

.col-year {
  width: 75px;
}

.col-month {
  width: 55px;
}

.col-detail {
  text-align: left !important;
}

.cell-center {
  text-align: center !important;
  color: #222222;
}

.cell-left {
  text-align: left !important;
  color: #222222;
  letter-spacing: 0.2px;
}

.col-year-border {
  border-right: 1px dotted #bbbbbb !important;
}

.col-month-border {
  border-left: none !important;
}

.desc-row td {
  background-color: #fafbfc;
}

.desc-detail {
  padding-left: 24px !important;
  color: #555555;
  font-size: 13px;
}

/* 技能与语言表格专属样式 */
.skill-table th {
  background-color: #f7f9fa;
  color: #444444;
  font-weight: 600;
  text-align: center;
}

.col-skill-name,
.col-lang-name {
  width: 130px;
}

.col-skill-detail,
.col-lang-level {
  text-align: left !important;
}

.skill-name-cell {
  background-color: #fcfcfc;
  font-weight: 600;
  color: #333333;
  text-align: center !important;
  white-space: nowrap;
}

.skill-detail-cell {
  color: #333333;
  line-height: 1.6;
}

.pr-box {
  background: #fbfbfb;
  border: 1px solid #cccccc;
  padding: 16px 20px;
  line-height: 1.8;
  color: #333333;
  font-size: 14px;
  white-space: pre-line;
}
</style>