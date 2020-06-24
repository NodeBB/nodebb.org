<template>
  <div class="cta content">
    <div class="content-pad">
      <div class="head">
        <!-- <home-icon icon="supporting" /> -->
        <h2 class="title">Have a question?</h2>
        <h3 class="sub-title">...we've got the answers</h3>
      </div>
      <div
        class="text"
      >Send our sales team an email or reach out to us via chat. We are here to answer any questions you may have regarding NodeBB.</div>
      <div class="action">
        <!-- <factor-email-list list-id="nodeBBProgram" /> -->
        <factor-link btn="primary" path="/contact">Contact us &rarr;</factor-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui";
import { factorEmailList } from "@factor/plugin-email-list";
export default {
  components: {
    factorLink,
    factorIcon,
    factorEmailList,
    homeIcon: () => import("../product/icon.vue")
  }
};
</script>

<style lang="less">
.cta {
  --bg-opacity: 1;
  text-align: center;
  padding: 6rem 0;
  .content-pad {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    z-index: -1;
    &:before {
      content: "";
      background-image: url(./img/nbb-bg-e.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      display: block;
      z-index: 0;
      position: absolute;
      height: 400px;
      width: 700px;
      left: -23rem;
      top: -16.5rem;
      opacity: 0.72;
      @media (max-width: 900px) {
        height: 400px;
        width: 500px;
        left: -16rem;
        top: -21.5rem;
      }
    }
  }
  figure.icon {
    width: 48px;
    height: 48px;
    margin: 1rem auto;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    color: #1952be;
    font-size: 2.5rem;
    i {
      position: relative;
      left: 0;
      margin-left: 0;
      top: 0;
      transform: translateY(0);
    }
  }
  line-height: 1.1;
  .title {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.025em;
  }
  .sub-title {
    font-size: 1.95rem;
    opacity: 0.8;
    margin-top: 1rem;
    font-family: var(--font-family-cursive);
  }
  .text,
  .action {
    font-size: 1.25rem;
  }
  .text {
    line-height: 1.5;
    margin: 2rem 0;
    font-weight: 400;
    opacity: 0.82;
  }
  .action {
    font-weight: 500;
  }
}
</style>
