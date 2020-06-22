<template>
  <div class="header-banner">
    <div class="cta">
      Welcome to the NodeBB
      <div class="cta-link">Preview</div>
    </div>
  </div>
</template>

<script lang="ts">
import { factorLink } from "@factor/ui";
export default {
  components: {
    factorLink
  }
};
</script>

<style lang="less">
.header-banner {
  position: fixed;
  bottom: 0px;
  height: 2.25rem;
  font-size: 0.855rem;
  width: 100%;
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.05) 0px -1px 0px 0px inset;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  place-content: center;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background: linear-gradient(90deg, #1952be, #1952be, #193dbe);
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(0, 0, 0, 0.12);
    transition: opacity 0.16s ease-in-out 0s;
  }
  .cta {
    text-align: center;
    &.cta-link {
      opacity: 0.6;
      transition: opacity 0.3s ease 0s;
    }
  }
}
.scrolled {
  .header-banner {
    opacity: 0;
    visibility: hidden;
  }
}
</style>