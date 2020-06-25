<template>
  <figure class="icon">
    <!--  -->
    <i v-if="icon == 'slack'" class="fab fa-slack"></i>
    <i v-else-if="icon == 'question'" class="fad fa-question"></i>
    <i v-else-if="icon == 'support'" class="fad fa-life-ring"></i>
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
    <i v-else-if="icon == 'groups'" class="fad fa-users-class"></i>
    <i v-else-if="icon == 'play'" class="fad fa-play-circle"></i>
    <i v-else-if="icon == 'users'" class="fad fa-users-medical"></i>
    <i v-else-if="icon == 'encrypt'" class="fad fa-lock-alt"></i>
    <i v-else-if="icon == 'backup'" class="fad fa-save"></i>

    <!-- -->
    <img v-else-if="icon == 'lytics'" src="../home/img/benefit-analytics.svg" class />
    <img v-else-if="icon == 'international'" src="../home/img/benefit-i18n.svg" class />
    <img v-else-if="icon == 'mobile-responsive'" src="../home/img/benefit-responsive.svg" class />
    <img v-else-if="icon == 'sai'" src="../home/img/benefit-sai.svg" class />
    <img v-else-if="icon == 'searching'" src="../home/img/benefit-search.svg" class />
    <img v-else-if="icon == 'streaming'" src="../home/img/benefit-stream.svg" class />
    <img v-else-if="icon == 'supporting'" src="../home/img/support.svg" class />

    <!-- -->
    <img v-else-if="icon == 'user-created-groups'" src="../home/img/user-created-groups.svg" class />
    <img v-else-if="icon == 'advanced-search'" src="../home/img/advanced-search.svg" class />
    <img v-else-if="icon == 'tagging'" src="../home/img/tagging.svg" class />
    <img v-else-if="icon == 'roles-permissions'" src="../home/img/roles-permissions.svg" class />
    <img v-else-if="icon == 'moderating'" src="../home/img/moderation.svg" class />
    <img v-else-if="icon == 'apis'" src="../home/img/apis.svg" class />
    <img v-else-if="icon == 'customization'" src="../home/img/customization.svg" class />
    <img v-else-if="icon == 'spam-prevention'" src="../home/img/antispam.svg" class />

    <img v-else-if="icon == 'automated-backup'" src="../home/img/automated-backup.svg" class />
    <img v-else-if="icon == 'ssl-encryption'" src="../home/img/ssl-encryption.svg" class />
    <img v-else-if="icon == 'additional-users'" src="../home/img/additional-users.svg" class />

    <!--  -->
    <img v-else-if="icon == 'model-custom'" src="../home/img/model-custom.svg" class />
    <img v-else-if="icon == 'model-open'" src="../home/img/icon-opensource.svg" class />
    <img v-else-if="icon == 'model-instant'" src="../home/img/icon-instanthosting.svg" class />

    <!-- -->

    <!-- <i v-else-if="icon == 'backup'" class="fad fa-archive"></i> -->
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

<style lang="less">
.icon {
  .highlight {
    fill: var(--color-primary);
  }
}
</style>