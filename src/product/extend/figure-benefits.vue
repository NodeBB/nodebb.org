<template>
  <div class="nodebb-benefits">
    <header class="section-header">
      <h1 class="title">Why NodeBB?</h1>
      <!-- <p class="text"></p> -->
    </header>

    <ul class="features-list">
      <li class="feature-block">
        <!-- <home-icon icon="mentions" /> -->
        <h3 class="title">Mentions</h3>
        <p
          class="text"
        >Mentioning another user with "@username" will send them a notification allowing them to join the conversation instantly.</p>
        <p
          class="text"
        >You can even mention groups, handy for getting the attention of a handful of people at a time.</p>
      </li>

      <li class="feature-block">
        <!-- <home-icon icon="qna" /> -->
        <h3 class="title">Question and Answer</h3>
        <p
          class="text"
        >Users can post topics as a question, and then mark it as solved when their query has been answered by another community member.</p>
        <p
          class="text"
        >A new page is made available for users to easily browse all answered questions.</p>
      </li>

      <li class="feature-block">
        <!-- <home-icon icon="seo" /> -->
        <h3 class="title">Desktop Notifications</h3>
        <p
          class="text"
        >Receive notification alerts even while NodeBB is in the background so that you never miss a conversation important to you.</p>
      </li>

      <li class="feature-block">
        <!-- <home-icon icon="answers" /> -->
        <h3 class="title">NS Awards</h3>
        <p
          class="text"
        >Gamify your community by awarding users with badges and medals for contributing content, helping out other members, or simply being a role-model user.</p>
      </li>

      <li class="feature-block">
        <!-- <home-icon icon="streaming" /> -->
        <h3 class="title">Real-time streaming</h3>
        <p
          class="text"
        >Interact faster with instant notifications, streaming posts, and real-time chats.</p>
      </li>

      <li class="feature-block">
        <!-- <home-icon icon="analytics" /> -->
        <h3 class="title">Native analytics</h3>
        <p
          class="text"
        >Your analytics dashboard has the real-time tools to show what content your users enjoy most.</p>
      </li>
    </ul>

    <div class="interstitial-cta">
      <div class="text">
        <!-- <h2 class="title"></h2> -->
        <h2 class="title-sub">Jumpstart your community with NodeBB today.</h2>
      </div>

      <div class="buttons">
        <factor-link btn="primary" size="large" path="/pricing">Plans and pricing &rarr;</factor-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { factorLink } from "@factor/ui";

export default {
  components: {
    factorLink,
    homeIcon: () => import("./icon.vue")
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
    grid-template-columns: 1fr 1fr 1fr;
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
        font-size: 0.94em;
        line-height: 1.7em;
        opacity: 0.85;
      }
      .icon {
        width: 48px;
        height: 48px;

        margin: 10px 0 20px 0;
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
    margin: 60px -20px 0;
    padding: 60px 20px 0;
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
