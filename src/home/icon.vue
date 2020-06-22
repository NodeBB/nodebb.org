<template>
  <figure class="icon">
    <i v-if="icon == 'slack'" class="fab fa-slack"></i>
    <i v-else-if="icon == 'question'" class="fad fa-question"></i>
    <i v-else-if="icon == 'support'" class="fad fa-user-headset"></i>
    <i v-else-if="icon == 'responsive'" class="fad fa-expand"></i>
    <i v-else-if="icon == 'i18n'" class="fad fa-globe"></i>
    <i v-else-if="icon == 'seo'" class="fad fa-bullseye-pointer"></i>
    <i v-else-if="icon == 'sso'" class="fad fa-people-arrows"></i>
    <i v-else-if="icon == 'stream'" class="fad fa-stream"></i>
    <i v-else-if="icon == 'analytics'" class="fad fa-chart-bar"></i>
    <i v-else-if="icon == 'stars'" class="fad fa-star-shooting"></i>
    <i v-else-if="icon == 'key'" class="fad fa-key"></i>
    <i v-else-if="icon == 'search'" class="fad fa-search"></i>
    <i v-else-if="icon == 'spam'" class="fad fa-shield"></i>
    <i v-else-if="icon == 'api'" class="fad fa-cog"></i>
    <i v-else-if="icon == 'roles'" class="fad fa-user-lock"></i>
    <i v-else-if="icon == 'tags'" class="fad fa-tags"></i>
    <i v-else-if="icon == 'analytic-dashboard'" class="fad fa-chart-area"></i>
    <i v-else-if="icon == 'moderation'" class="fad fa-users-crown"></i>
    <i v-else-if="icon == 'code'" class="fad fa-code"></i>
    <i v-else-if="icon == 'customize'" class="fad fa-tachometer-alt-average"></i>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <path fill="#62bdff" />
    </svg>
  </figure>
</template>

<script lang="ts">
export default {
  props: {
    icon: { type: String, default: "" }
  }
};
</script>
