<template>
  <div class="cta content">
    <div class="content-pad">
      <div class="head">
        <!-- <home-icon icon="supporting" /> -->
        <h2 class="title">Have a question?</h2>
        <h3 class="sub-title">We've got the answers.</h3>
      </div>
      <div
        class="text"
      >Send our sales team an email or reach out to us via chat. We are here to answer any questions you may have regarding NodeBB.</div>
      <div class="action">
        <!-- <factor-email-list list-id="nodeBBProgram" /> -->
        <!-- <factor-link btn="primary" path="/contact">Contact us</factor-link> -->
        <factor-link btn="primary" size="medium" @click="vis = !vis">Contact us &rarr;</factor-link>
      </div>
    </div>

    <factor-modal class="content-cta-contact" :vis.sync="vis">
      <iframe class="content-cta-iframe" src="/contact"></iframe>
    </factor-modal>
  </div>
</template>

<script lang="ts">
import { factorModal, factorLink, factorIcon } from "@factor/ui"
export default {
  components: {
    factorModal,
    factorLink,
    factorIcon,
    homeIcon: () => import("../product/icon.vue")
  },
  data() {
    return {
      vis: false
    }
  }
}
</script>

<style lang="less">
.cta {
  --bg-opacity: 1;
  text-align: center;
  padding: 6rem 0;
  position: relative;
  z-index: 1;
  @media (max-width: 900px) {
    text-align: left;
  }
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
      height: 300px;
      width: 400px;
      left: -12rem;
      top: -17.25rem;
      transform: rotate(-45deg);
      @media (max-width: 900px) {
        height: 300px;
        width: 500px;
        left: -16rem;
        top: -18.5rem;
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
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.025em;
  }
  .sub-title {
    font-size: 1.75rem;
    font-weight: 300;
    opacity: 0.9;
    margin-top: 1rem;
  }
  .text,
  .action {
    font-size: 1.25rem;
  }
  .text {
    margin: 2rem 0;
    font-size: 1.4rem;
    line-height: 1.6;
    font-weight: 400;

    margin: 2rem auto 2.5rem;
    max-width: 600px;
    @media (max-width: 900px) {
      margin: 2rem 0 2.5rem;
      max-width: inherit;
    }
  }
  .action {
    font-weight: 500;
  }

  .content-cta-iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
