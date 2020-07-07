<template>
  <div class="nodebb-product-benefits">
    <ul class="features-list">
      <li v-for="(feature, i) in features" :key="i" class="feature-block">
        <home-icon :icon="feature.icon" :alt="feature.title" />
        <h3 class="title">{{ feature.title }}</h3>
        <p class="text">{{ feature.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import img from "../img/_.svg"
export default {
  components: {
    homeIcon: () => import("../icon.vue")
  },
  data() {
    return {
      img,
      features: [
        {
          icon: "moderating",
          title: "Moderation",
          text: `Unparalleled moderation tools give your moderators full control over the content of your forum. Designed for both small and large-scale teams in mind.` // - for example, the ability to assign moderation tasks to individuals and mark tasks with statuses such as "solved" or "work in progress" allows your team to distribute and organize moderation duties.`
        },
        {
          icon: "customization",
          title: "Customise with HTML, CSS, and JavaScript",
          text:
            "Tweak your forum's design to your heart's content. Don't worry - if something goes wrong, reverting is a snap. You can even include scripts from third party vendors such as Google Analytics."
        },
        {
          icon: "apis",
          title: "API",
          text: `NodeBB has a publically facing read-only API as well as a REST write API, making it easy to integrate with your software.`
        },
        {
          icon: "spam-prevention",
          title: "Spam Prevention",
          text: `NodeBB integrates with several spam prevention tools including Akismet, StopForumSpam, and Project Honeypot.`
        }
      ]
    }
  }
}
</script>
<style lang="less">
.nodebb-product-benefits {
  position: relative;

  .features-list {
    font-size: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    list-style: none;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    .feature-block {
      position: relative;
      padding: 2rem;
      border-radius: 0.5rem;
      @media (max-width: 900px) {
        padding: 1rem 0rem;
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
        width: 3.25rem;
        height: 3.25rem;
        margin: 0.5rem 0;
        overflow: hidden;
        color: #1952be;
        font-size: 1.5rem;
        position: absolute;
        @media (max-width: 1200px) {
          width: 2.75rem;
          height: 2.75rem;
        }
        @media (max-width: 900px) {
          width: 2.5rem;
          height: 2.75rem;
        }
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
