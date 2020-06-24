<template>
  <div class="interact-benefits">
    <ul class="features-list">
      <li class="feature-block">
        <home-icon icon="user-created-groups" />
        <h3 class="title">User-created groups</h3>
        <p
          class="text"
        >Keep your users engaged and connected with each other via groups. Each group page has an activity feed and plugins can extend functionality with features such as a calendar and a photo gallery.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="tagging" />
        <h3 class="title">Tags</h3>
        <p
          class="text"
        >Users can tag topics, adding an extra dimension beyond categorization and making it easy to find related content.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="advanced-search" />
        <h3 class="title">Advanced search</h3>
        <p
          class="text"
        >Find the content you're looking for with the help of several search filters designed to fine-tune your search results.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="roles-permissions" />
        <h3 class="title">Roles &amp; permissions</h3>
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
    font-size: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    list-style: none;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
    .feature-block {
      position: relative;
      padding: 2rem;
      border-radius: 0.5rem;
      /* background-color: rgba(219, 230, 251, 0.15); */
      /* background-image: linear-gradient(45deg, #f6fafd 0%, #ffffff00 50%); */
      box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.02),
        inset 0 0 0 1px rgba(34, 34, 34, 0.07);
      .title {
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.75rem;
        margin-left: 5rem;
        margin-bottom: 0.75rem;
        margin-top: 0;
      }
      .text {
        font-size: 1rem;
        line-height: 1.7rem;
        font-weight: 400;
      }
      .icon {
        width: 3.5rem;
        height: 4.225rem;
        margin: 0.5rem 0;
        overflow: hidden;
        color: #1952be;
        font-size: 1.5rem;
        position: absolute;
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
        margin-left: 5rem;
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
