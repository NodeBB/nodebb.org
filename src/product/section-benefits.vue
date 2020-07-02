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
import img from "./img/_.svg";
export default {
  components: {
    homeIcon: () => import("./icon.vue")
  },
  data() {
    return {
      img,
      features: [
        {
          icon: "key",
          title: "Single Sign-On",
          text:
            "Users can register using over 30 services including Google, Facebook, LinkedIn, and Twitter."
        },
        {
          icon: "search",
          title: "Advanced Search",
          text:
            "Find the content you're looking for with the help of several search filters designed to fine-tune your search results."
        },
        {
          icon: "spam",
          title: "Spam Prevention",
          text:
            "NodeBB integrates with several spam prevention tools including Akismet, StopForumSpam, and Project Honeypot."
        },
        {
          icon: "api",
          title: "API",
          text:
            "NodeBB has a publically facing read-only API as well as a REST write API, making it easy to integrate with your software."
        },
        {
          icon: "roles",
          title: "Roles & Permissions",
          text:
            "Create private or read-only categories with access control. Give users or groups special roles to view or moderate content."
        },
        {
          icon: "tags",
          title: "Tags",
          text:
            "Users can tag topics, adding an extra dimension beyond categorization and making it easy to find related content."
        }
      ]
    };
  }
};
</script>
<style lang="less">
.nodebb-product-benefits {
  position: relative;

  // @media (max-width: 767px) {
  //   padding-bottom: 80px;
  // }

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
        font-size: 1.5rem;
        line-height: 2.35em;
      }
      .text {
        font-size: 1.15rem;
        line-height: 1.7em;
        font-weight: 400;
      }
      .icon {
        width: 2.825rem;
        height: 3.225rem;
        margin: 1rem 0;
        overflow: hidden;
        position: relative;
        color: #1952be;
        font-size: 1.5rem;
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
