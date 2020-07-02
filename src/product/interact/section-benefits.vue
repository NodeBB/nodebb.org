<template>
  <div class="interact-benefits">
    <ul class="features-list">
      <li class="feature-block">
        <home-icon icon="user-created-groups" />
        <h3 class="title">User-created Groups</h3>
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
        <h3 class="title">Advanced Search</h3>
        <p
          class="text"
        >Find the content you're looking for with the help of several search filters designed to fine-tune your search results.</p>
      </li>

      <li class="feature-block">
        <home-icon icon="roles-permissions" />
        <h3 class="title">Roles &amp; Permissions</h3>
        <p
          class="text"
        >Grant privileges to individual users or groups, allowing you to create read-only categories or hide them altogether. Give forum members elevated roles such as "Moderator" to allow them to help police your community.</p>
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
    homeIcon: () => import("../icon.vue")
  },
  methods: {}
};
</script>
<style lang="less">
.interact-benefits {
  position: relative;
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
    grid-gap: 3rem;
    list-style: none;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
    .feature-block {
      position: relative;
      padding: 2rem;
      border-radius: 0.5rem;
      @media (max-width: 900px) {
        padding: 1rem 0;
      }
      .title {
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.95rem;
        margin-left: 5rem;
        margin-bottom: 0.75rem;
        margin-top: 0;
      }
      .text {
        font-size: 1.15rem;
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
}
</style>
