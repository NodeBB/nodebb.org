<template>
  <div class="view-product">
    <section-product-splash />

    <!-- <section
      v-for="(feature, index) in features"
      :id="feature.id"
      :key="index"
      class="features content"
      :data-test="`feature-` + index"
      :class="[index == features.length - 1 ? 'last' : '']"
    >
      <div class="split-feature" :class="[index % 2 == 0 ? 'even' : 'odd']">
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
    </section>-->

    <!-- <section class="benefits content">
      <section-benefits class="content-pad" />
    </section>-->
    <section-design />
    <section-interact />
    <section-control />
    <section-extend />
    <section-integrate />

    <!-- <el-cta id="cta" /> -->
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui";

export default {
  components: {
    factorLink,
    factorIcon,
    sectionProductSplash: () => import("./splash.vue"),
    sectionBenefits: () => import("./section-benefits.vue"),
    sectionControl: () => import("./control/v-control.vue"),
    sectionDesign: () => import("./design/v-design.vue"),
    sectionExtend: () => import("./extend/v-extend.vue"),
    sectionIntegrate: () => import("./integrate/v-integrate.vue"),
    sectionInteract: () => import("./interact/v-interact.vue"),
    elCta: () => import("./el-cta.vue")
  },
  data(this: any) {
    return {
      loading: true,
      loadingButtons: true,
      features: [
        // {
        //   title: `Floating composer`,
        //   text: `Choose between a "What You See is What You Get" (WYSIWYG) editor or a Markdown editor to compose topics and replies.`,
        //   // figure: () => import("./figure-composer.vue"),
        //   link: { path: "/pricing", text: "Learn more" }
        // },
        // {
        //   title: "Built-in realtime chat",
        //   text: `Chats take private messaging to a whole new level. Native multi-tasking support allows you to have streaming conversations with multiple people side-by-side.`,
        //   // figure: () => import("./figure-chat.vue"),
        //   link: { path: "/pricing", text: "Learn more" }
        // },
        // {
        //   title: "User-created groups",
        //   text: `Keep your users engaged and connected with each other via groups. Each group page has an activity feed and plugins can extend functionality with features such as a calendar and a photo gallery.`,
        //   // figure: () => import("./figure-groups.vue"),
        //   link: { path: "/pricing", text: "Learn more" }
        // },
        // {
        //   title: "Social interactions",
        //   text: `NodeBB makes it easy to share and interact with content. Users earn reputation from others when posting helpful comments - gamifying and engaging your community. Choose between our "favourite", "like", or "upvote" interaction engines (or use all three!)`,
        //   // figure: () => import("./figure-social.vue"),
        //   link: { path: "/pricing", text: "Learn more" }
        // },
        // {
        //   title: "Real-time notifications",
        //   text: `NodeBB integrates real-time events in the background - your users are notified instantly when someone follows them, likes their post, or subscribes to their topics.`,
        //   // figure: () => import("./figure-notifications.vue"),
        //   link: { path: "/pricing", text: "Learn more" }
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
.view-product {
  overflow: hidden;
  max-width: 1660px;
  margin: 0 auto;
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
          max-width: 550px;
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
      font-size: 3rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    .text {
      font-size: 1.15rem;
      line-height: 1.7em;
      font-weight: 400;
    }
    .action {
      font-weight: 500;
      font-size: 1.3em;
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
}
</style>
