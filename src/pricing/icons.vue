<template>
  <figure class="icon">
    <i v-if="icon == 'plan'" class="fab fa-plan"></i>
    <i v-else-if="icon == 'features'" class="fad fa-stars"></i>
    <i v-else-if="icon == 'support'" class="fad fa-life-ring"></i>
    <i v-else-if="icon == 'benefits'" class="fad fa-coffee"></i>
    <i v-else class="fad fa-question-circle"></i>
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
.plan-icon {
  .highlight {
    fill: var(--color-primary);
  }
}
</style>
