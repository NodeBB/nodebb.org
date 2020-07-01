<template>
  <div class="view-product-extend">
    <!-- <section-splash /> -->

    <!-- <section class="benefits content">
      <section-benefits class="content-pad" />
    </section>-->

    <section
      v-for="(feature, index) in features"
      :id="feature.id"
      :key="index"
      class="features content"
      :data-extend="`feature-` + index"
      :class="[index == features.length - 1 ? 'last' : '']"
    >
      <div class="split-feature" :class="[index % 2 == 0 ? 'odd' : 'even']">
        <div class="feature-figure-container">
          <div v-if="feature.figure" class="figure-container">
            <component :is="feature.figure" />
          </div>
        </div>
        <div class="feature-content-container">
          <div class="feature-content">
            <h2 class="title">{{ feature.title }}</h2>
            <div class="text">{{ feature.text }}</div>
            <div v-if="feature.link" class="action">
              <factor-link :path="feature.link.path">{{ feature.link.text }} &rarr;</factor-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <el-cta id="cta" /> -->
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui";

export default {
  components: {
    factorLink,
    factorIcon,
    sectionSplash: () => import("./splash.vue"),
    // sectionBenefits: () => import("./figure-benefits.vue"),
    elCta: () => import("./el-cta.vue")
  },
  data(this: any) {
    return {
      loading: true,
      loadingButtons: true,
      features: [
        {
          id: "plugins",
          // title: `Supercharge your community with plugins.`,
          title: `Have access to more power with plugins and extensions.`,
          // text: `Extend your forum's functionality with our robust NodeBB plugins.`,
          text: `NodeBB has over 500 plugins and themes to choose from. Download and install them directly from the control panel in one click.`,
          figure: () => import("./figure-plugins.vue"),
          // link: { path: "/plugins", text: "View all plugins" },
          link: { path: "/pricing", text: "Learn more" }
        }
        // {
        //   id: "themes",
        //   title: "Make your forum stand out with themes.",
        //   text: `Choose your favorite theme from our collection of both premium and community made NodeBB themes.`,
        //   figure: () => import("./figure-themes.vue"),
        //   link: { path: "/themes", text: "View all themes" }
        // }
        // {
        //   title: `Mentions`,
        //   text: `Mentioning another user with "@username" will send them a notification allowing them to join the conversation instantly. You can even mention groups, handy for getting the attention of a handful of people at a time.`,
        //   // figure: () => import("./figure-.vue"),
        //   link: { path: "/plugins", text: "Learn more" }
        // },
        // {
        //   title: `Question and Answer`,
        //   text: `Users can post topics as a question, and then mark it as solved when their query has been answered by another community member. A new page is made available for users to easily browse all answered questions.`,
        //   // figure: () => import("./figure-.vue"),
        //   link: { path: "/plugins", text: "Learn more" }
        // },
        // {
        //   title: `Desktop Notifications`,
        //   text: `Receive notification alerts even while NodeBB is in the background so that you never miss a conversation important to you.`,
        //   // figure: () => import("./figure-.vue"),
        //   link: { path: "/plugins", text: "Learn more" }
        // },
        // {
        //   title: `NS Awards`,
        //   text: `Gamify your community by awarding users with badges and medals for contributing content, helping out other members, or simply being a role-model user.`,
        //   // figure: () => import("./figure-.vue"),
        //   link: { path: "/plugins", text: "Learn more" }
        // }
      ]
    };
  },
  mounted(this: any) {
    setTimeout(() => {
      this.loadingButtons = false;
    }, 1000);
  },
  methods: {},
  metaInfo() {
    return {
      title: "",
      description: ""
    };
  }
};
</script>
<style lang="less">
.view-product-extend {
  // overflow: hidden;
  .content-pad {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5em;
    width: 100%;
    z-index: 10;
    position: relative;
  }

  .benefits {
    .content-pad {
      padding-top: 3rem;
      padding-bottom: 6rem;
      @media (max-width: 900px) {
        padding-top: 6rem;
        padding-bottom: 3rem;
      }
    }
  }

  .features {
    &.content {
      &.last {
        box-shadow: none;
      }
      &:not(.last) {
        --bg-opacity: 1;
        background-color: #dbe6fb;
        background-color: rgba(219, 230, 251, var(--bg-opacity));
        overflow: hidden;
      }
      @media (max-width: 900px) {
        padding: 4rem 0;
        box-shadow: none;
      }
    }
    .split-feature {
      display: grid;
      grid-column-gap: 3rem;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b";
      align-items: center;
      // min-height: 80vh;
      &.even {
        .feature-content-container {
          justify-self: flex-end;
        }
      }
      &.odd {
        grid-template-areas: "b a";
        .feature-figure-container {
          justify-content: flex-end;
          @media (max-width: 900px) {
            justify-content: center;
          }
        }
      }
      .feature-content-container {
        grid-area: a;
        min-width: 0;
        .feature-content {
          padding: 5rem 1.5rem;
          max-width: 500px;
        }
      }
      .feature-figure-container {
        grid-area: b;
        min-width: 0; // defaults content width
        height: 100%;
        position: relative;
        // width: 100%;
        display: flex;
        align-items: center;
        .figure-container {
          max-width: 100%;
        }
      }
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-areas: "a" "b";
        &.odd {
          grid-template-areas: "a" "b";
        }
        .feature-content-container {
          .feature-content {
            padding: 3rem 1.5rem 1rem;
            max-width: 100%;
          }
        }
        .feature-figure-container {
          justify-content: center;
        }
      }
    }

    .feature-content {
      // letter-spacing: -0.01em;
    }
    .title {
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }
    .text {
      margin-top: 2rem;
      font-size: 1.4rem;
      font-weight: 400;
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    .action {
      font-weight: 700;
      font-size: 1.35rem;
      margin-top: 2rem;
    }
    @media (max-width: 900px) {
      .title {
        font-size: 1.8em;
      }
      .text {
        font-size: 1.1em;
      }
    }
  }

  .quotes {
    padding: 6rem 0 4rem;
    .quotes-pad {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 900px) {
      .quotes-pad {
        grid-template-columns: 1fr;
        article {
          margin: 0 auto;
          blockquote {
            padding: 2rem 0;
          }
        }
      }
    }
    article {
      position: relative;
      display: flex;

      blockquote {
        max-width: 550px;
        padding: 2rem;
        font-size: 1.1em;
        line-height: 1.8;
        background: #fff;

        .quote-body {
          padding: 2rem;
          box-shadow: 0px 0px 3px rgba(50, 50, 93, 0.2);
          border-radius: 6px 6px 6px 0;
        }

        .quote-media {
          display: block;
          text-align: center;
          a {
            display: block;
            width: 40px;

            img {
              display: block;
              width: 100%;
              border-radius: 50%;
            }
          }
        }
        footer {
          display: grid;
          grid-template-columns: 1fr 6fr;
          align-items: center;
          margin-top: 1rem;
          font-size: 0.8em;
          font-weight: 500;
          a {
            color: inherit;
          }
        }
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
