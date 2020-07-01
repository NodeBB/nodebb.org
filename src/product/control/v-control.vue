<template>
  <div class="view-product-control">
    <section-splash />

    <section
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
    </section>

    <section class="benefits content">
      <section-benefits class="content-pad" />
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
    sectionBenefits: () => import("./section-benefits.vue"),
    elCta: () => import("./el-cta.vue")
  },
  data(this: any) {
    return {
      loading: true,
      loadingButtons: true,
      features: [
        {
          title: "Real-time analytics dashboard",
          text: `Be in control with access to trending content, user activity, and other forum metrics. See what your users are doing with via NodeBB's real-time graphs. Create custom reports for virtually any action a user does, with APIs available to export into your favourite analytics software.`,
          figure: () => import("./figure-analytics.vue")
        },
        {
          title: `Drag-and-drop widgets`,
          text: `Add new functionality to your forum via the widgets system. You can add new content via an HTML widget or customize your forum's presentation with over a dozen other widgets by dragging and dropping it onto a widget area on your forum.`,
          figure: () => import("./figure-widgets.vue")
          // link: { path: "/pricing", text: "Learn more" }
        }
      ]
      // quotes: [
      //   {
      //     text: `When I moved from a legacy forum to NodeBB, traffic blew up. Once you see what NodeBB can do for you, you won't want to use anything else.`,
      //     attribution: "Trevor Williams, Designer",
      //     // img: require("./img/_.jpg"),
      //     link: "https://nodebb.org"
      //   },
      //   {
      //     text: `NodeBB gives me the right technology and a robust set of plugins. NodeBB helps me build and get paid faster.`,
      //     attribution: "Jane Doe Carter, Full-stack Developer"
      //     // img: require("./img/_.jpg")
      //   },
      //   {
      //     text: `Its just one the of the best forum platforms out there.`,
      //     attribution: "John Doe, Front-end Developer"
      //     // img: require("./img/_.jpg")
      //   },
      //   {
      //     text: `My community loves NodeBB.`,
      //     attribution: "New Doe, UI Designer"
      //     // img: require("./img/_.jpg")
      //   }
      // ]
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
.view-product-control {
  overflow: hidden;
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
      min-height: inherit;
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
      font-size: 1.75rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    .text {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 1rem;
      // opacity: 0.8;
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
}
</style>
