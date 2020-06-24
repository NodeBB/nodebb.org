<template>
  <div class="nodebb-product-benefits">
    <ul class="features-list">
      <li v-for="(feature, i) in features" :key="i" class="feature-block">
        <home-icon :icon="feature.icon" />
        <h3 class="title">{{ feature.title }}</h3>
        <p class="text">{{ feature.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import img from "../img/_.svg";
export default {
  components: {
    homeIcon: () => import("../icon.vue")
  },
  data() {
    return {
      img,
      features: [
        // {
        //   icon: "analytic-dashboard",
        //   title: "Real-time analytics dashboard",
        //   text: `Be in control with access to trending content, user activity, and other forum metrics. See what your users are doing with via NodeBB's real-time graphs. Create custom reports for virtually any action a user does, with APIs available to export into your favourite analytics software.`
        // },
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
        // {
        //   icon: "code",
        //   title: "Drag-and-drop widgets",
        //   text: `Add new functionality to your forum via the widgets system. You can add new content via an HTML widget or customize your forum's presentation with over a dozen other widgets by dragging and dropping it onto a widget area on your forum.`
        // },
        {
          icon: "apis",
          title: "API",
          text: `NodeBB has a publically facing read-only API as well as a REST write API, making it easy to integrate with your software.`
        },
        {
          icon: "spam-prevention",
          title: "Spam prevention",
          text: `NodeBB integrates with several spam prevention tools including Akismet, StopForumSpam, and Project Honeypot.`
        }
      ]
    };
  }
};
</script>
<style lang="less">
.nodebb-product-benefits {
  position: relative;

  @media (max-width: 767px) {
    padding-bottom: 80px;
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
