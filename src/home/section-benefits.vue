<template>
  <div class="nodebb-benefits">
    <header class="section-header">
      <h1 class="title">Why NodeBB?</h1>
      <!-- <p class="text"></p> -->
    </header>

    <ul class="features-list">
      <li class="feature-block">
        <home-icon icon="responsive" />
        <!-- <h5 class="suptitle">Responsive</h5> -->
        <h3 class="title">Mobile-first responsive</h3>
        <p
          class="text"
        >NodeBB is mobile-first, allowing for a perfect experience on every device and screen.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="i18n" />
        <!-- <h5 class="suptitle">i18n</h5> -->
        <h3 class="title">Internationalization</h3>
        <p class="text">Built-in localization support with over 50 languages actively translated.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="seo" />
        <!-- <h5 class="suptitle">SEO</h5> -->
        <h3 class="title">Search optimized</h3>
        <p
          class="text"
        >Enhance your rankings with human-readable URLs, semantic HTML with embedded microdata, and more.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="sso" />
        <!-- <h5 class="suptitle">SSO</h5> -->
        <h3 class="title">Social authentication integration</h3>
        <p
          class="text"
        >Easy sharing of content to Facebook, Google, and Twitter, bringing more visitors to your community.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="stream" />
        <!-- <h5 class="suptitle">Live</h5> -->
        <h3 class="title">Real-time streaming</h3>
        <p
          class="text"
        >Interact faster with instant notifications, streaming posts, and real-time chats.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="analytics" />
        <!-- <h5 class="suptitle">Stats</h5> -->
        <h3 class="title">Native analytics</h3>
        <p
          class="text"
        >Your analytics dashboard has the real-time tools to show what content your users enjoy most.</p>
      </li>
    </ul>

    <!-- cta -->
    <div class="interstitial-cta">
      <div class="text">
        <h2 class="title">Grow your community</h2>
        <h2 class="title-sub">Drive user engagement with NodeBB.</h2>
      </div>

      <div class="buttons">
        <factor-link btn="primary" size="medim" path="/product">Learn more &rarr;</factor-link>
      </div>
    </div>
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
.nodebb-benefits {
  position: relative;

  @media (max-width: 767px) {
    padding-bottom: 80px;
  }

  .section-header {
    font-size: 1em;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 50px;
    letter-spacing: -0.02em;
    .title {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.025em;

      @media (max-width: 670px) {
        font-size: 2em;
        line-height: 1.2;
      }
    }
    .text {
      margin-top: 20px;
      font-weight: 400;
      font-size: 1.4em;
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
      .suptitle {
        margin-bottom: 0.5rem;
        font-family: var(--font-family-cursive);
        font-size: 1.5rem;
        opacity: 0.38;
      }
      .title {
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.5rem;
      }
      .text {
        font-size: 1.15rem;
        line-height: 1.7em;
        font-weight: 400;
      }
      .icon {
        margin: 1rem 0 1.5rem;
        position: relative;
        color: #1952be;
        font-size: 2rem;
        width: 48px;
        height: 48px;
        border-radius: 0.5rem;
        // box-shadow: 0 2px 3px rgba(50, 50, 93, 0.13),
        //   0 2px 5px rgba(50, 50, 93, 0.11), 0 5px 15px rgba(0, 0, 0, 0.07);
        overflow: hidden;
        i {
          // top: 12px;
          // width: 48px;
          // height: 48px;
          text-align: center;
          // position: absolute;
          left: 0;
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
  .interstitial-cta {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 2rem 2rem;
    max-width: 700px;
    margin: 4rem auto 0rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 8px 10px 0px,
      rgba(34, 34, 34, 0.07) 0px 0px 0px 1px inset;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
    .text h2 {
      &.title {
        color: var(--color-primary);
        font-weight: 700;
        font-size: 1.3rem;
      }
      font-size: 1.15rem;
      font-weight: 400;
    }
    .buttons {
      margin: 0 0 0 20px;
      @media (max-width: 767px) {
        margin: 20px 0 0 0;
      }
    }
  }
}
</style>
