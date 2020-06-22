<template>
  <div class="pricing-benefits">
    <header class="section-header">
      <h3 class="title">All our monthly hosting packages include:</h3>
    </header>

    <ul class="features-list">
      <li class="feature-block">
        <home-icon icon="users" />
        <h3 class="title">Unlimited staff and community users</h3>
        <!-- <p
          class="text"
        ></p>-->
      </li>

      <li class="feature-block">
        <home-icon icon="encrypt" />
        <h3 class="title">Free SSL encryption for security</h3>
        <!-- <p class="text"></p> -->
      </li>

      <li class="feature-block">
        <home-icon icon="backup" />
        <h3 class="title">Automated daily backup of all your data</h3>
        <!-- <p
          class="text"
        ></p>-->
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui";

export default {
  components: {
    factorLink,
    factorIcon,
    homeIcon: () => import("../product/icon.vue")
  },
  methods: {}
};
</script>
<style lang="less">
.pricing-benefits {
  position: relative;

  @media (max-width: 767px) {
    padding-bottom: 80px;
  }

  .section-header {
    font-size: 1em;
    text-align: center;
    max-width: 900px;
    margin: 3rem auto 0;
    letter-spacing: -0.02em;
    .title {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.1;
      color: #8192b3;
      letter-spacing: -0.025em;

      @media (max-width: 670px) {
        font-size: 2em;
        line-height: 1.2;
      }
    }
    .text {
      margin-top: 20px;
      font-weight: 400;
      font-size: 1.3em;
      line-height: 1.6;
    }
    @media (max-width: 767px) {
      text-align: left;
    }
  }
  .features-list {
    font-size: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
    list-style: none;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
    .feature-block {
      position: relative;
      .title {
        font-weight: 500;
        font-size: 1.2em;
        line-height: 1.5em;
      }
      .text {
        font-size: 1.15rem;
        font-weight: 400;
        line-height: 1.7rem;
        opacity: 0.85;
      }
      .icon {
        width: 48px;
        height: 48px;
        margin: 2rem 0 0;
        border-radius: 0.5rem;
        overflow: hidden;
        position: relative;
        color: #2a2f44;
        font-size: 1.5rem;
        i {
          position: relative;
          left: 0;
          margin-left: 0;
          top: 0;
          transform: translateY(0);
        }
      }
      h3,
      p {
        margin-bottom: 10px;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
