<template>
  <div class="interact-benefits">
    <!-- <header class="section-header">
      <h1 class="title">Why NodeBB?</h1>
      <p class="text"></p>
    </header>-->

    <ul class="features-list">
      <li class="feature-block">
        <home-icon icon="groups" />
        <h3 class="title">User-created groups</h3>
        <p
          class="text"
        >Keep your users engaged and connected with each other via groups. Each group page has an activity feed and plugins can extend functionality with features such as a calendar and a photo gallery.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="tags" />
        <h3 class="title">Tags</h3>
        <p
          class="text"
        >Users can tag topics, adding an extra dimension beyond categorization and making it easy to find related content.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="search" />
        <h3 class="title">Advanced search</h3>
        <p
          class="text"
        >Find the content you're looking for with the help of several search filters designed to fine-tune your search results.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="roles" />
        <h3 class="title">Roles & permissions</h3>
        <p
          class="text"
        >Grant privileges to individual users or groups, allowing you to create read-only categories or hide them altogether. Give forum members elevated roles such as "Moderator" to allow them to help police your community.</p>
      </li>
    </ul>

    <!-- cta -->
    <!-- <div class="interstitial-cta">
      <div class="text">
        <h2 class="title">Plans and pricing</h2>
        <h2 class="title-sub">Jumpstart your community today with NodeBB.</h2>
      </div>

      <div class="buttons">
        <factor-link btn="primary" size="large" path="/pricing">Learn more &rarr;</factor-link>
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui";

export default {
  components: {
    factorLink,
    factorIcon,
    homeIcon: () => import("../icon.vue")
  },
  methods: {}
};
</script>
<style lang="less">
.interact-benefits {
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
      font-size: 3em;
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
      font-size: 1.3em;
      line-height: 1.6;
    }
    @media (max-width: 767px) {
      text-align: left;
    }
  }
  .features-list {
    font-size: 1.1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
    list-style: none;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
    .feature-block {
      position: relative;
      .title {
        font-weight: 700;
        font-size: 1.2em;
        line-height: 1.5em;
      }
      .text {
        font-size: 1.15rem;
        line-height: 1.7em;
        font-weight: 400;
      }
      .icon {
        width: 48px;
        height: 48px;
        margin: 1rem 0 1rem;
        border-radius: 0.5rem;
        /* box-shadow: 0 2px 3px rgba(25,82,190,.13), 0 2px 5px rgba(25,82,190,.11), 0 5px 15px rgba(0,0,0,.07); */
        overflow: hidden;
        position: relative;
        color: #1952be;
        /* background: #f6fafd; */
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
  .interstitial-cta {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-top: 2px solid #f6f9fc;
    padding: 60px 20px 0;
    max-width: 700px;
    margin: 60px auto 0;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
    .text h2 {
      &.title {
        color: var(--color-primary);
      }
      font-size: 1.5em;
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
