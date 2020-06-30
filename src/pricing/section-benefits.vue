<template>
  <div class="pricing-benefits">
    <header class="section-header">
      <h3 class="title">All our monthly hosting packages include:</h3>
    </header>

    <ul class="features-list">
      <li class="feature-block">
        <home-icon icon="additional-users" />
        <h3 class="title">Unlimited staff and community users</h3>
        <!-- <p class="text">so that you, all your staff and community can have their own logins</p> -->
      </li>

      <li class="feature-block">
        <home-icon icon="ssl-encryption" />
        <h3 class="title">Free SSL encryption for security</h3>
        <!-- <p class="text">protect your site and customers, while boosting your page rank</p> -->
      </li>

      <li class="feature-block">
        <home-icon icon="automated-backup" />
        <h3 class="title">Automated daily backup of all your data</h3>
        <!-- <p class="text">just in case...</p> -->
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
  background: #b3c1dc;
  border-radius: 0.5rem;
  padding: 0 2rem 2rem;

  @media (max-width: 767px) {
    padding-bottom: 80px;
  }

  .section-header {
    font-size: 1rem;
    text-align: center;
    max-width: 900px;
    margin: 3rem auto 2rem;
    letter-spacing: -0.02em;
    .title {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.1;
      color: #1a1f36;
      padding: 1.5rem 0 0;

      @media (max-width: 670px) {
        font-size: 2em;
        line-height: 1.2;
      }
    }
    .text {
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 1.7rem;
      opacity: 0.7;
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
        margin-left: 5rem;
        margin-top: 1rem;
      }
      .text {
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 1.75rem;
        opacity: 0.78;
        // font-family: var(--font-family-cursive);
      }
      .icon {
        margin: 1rem 0 1.5rem;
        position: absolute;
        color: #1952be;
        font-size: 2rem;
        overflow: visible;
        -webkit-flex: none;
        -ms-flex: none;
        flex: none;
        display: block;
        width: 3rem;
        height: 3rem;
        i {
        }
      }
      h3,
      p {
        margin-bottom: 10px;
      }
      p:last-child {
        margin-bottom: 0;
        margin-left: 5rem;
      }
    }
  }
}
</style>
