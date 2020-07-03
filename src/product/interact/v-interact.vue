<template>
  <div class="view-product-interact">
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
            <!-- <home-icon v-if="feature.icon" class="feature-icon" :icon="feature.icon" /> -->
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
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui"

export default {
  components: {
    factorLink,
    factorIcon,
    sectionSplash: () => import("./splash.vue"),
    sectionBenefits: () => import("./section-benefits.vue"),
    homeIcon: () => import("../../home/icon.vue")
  },
  data(this: any) {
    return {
      loading: true,
      loadingButtons: true,
      features: [
        {
          icon: "post",
          title: `Posting Topics and Replies`,
          text: `Choose between a "What You See is What You Get" editor or a Markdown editor to compose topics and replies.`,
          figure: () => import("./figure-posting.vue")
        },
        {
          icon: "chat",
          title: "Built-in Realtime Chat",
          text: `Chats take private messaging to a whole new level. Native multi-tasking support allows you to have streaming conversations with multiple people side-by-side.`,
          figure: () => import("./figure-chat.vue")
        },
        {
          icon: "notifications",
          title: "Real-time Notifications",
          text: `NodeBB integrates real-time events in the background - your users are notified instantly when someone follows them, likes their post, or subscribes to their topics.`,
          figure: () => import("./figure-notifications.vue")
        }
      ]
    }
  },
  mounted(this: any) {
    setTimeout(() => {
      this.loadingButtons = false
    }, 1000)
  },
  methods: {}
  // metaInfo() {
  //   return {
  //     title: "",
  //     description: ""
  //   };
  // }
}
</script>
<style lang="less">
.view-product-interact {
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
      padding-bottom: 0rem;
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
        padding: 0 0 4rem;
        box-shadow: none;
      }
    }
    .split-feature {
      display: grid;
      grid-column-gap: 3rem;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b";
      align-items: center;
      margin-bottom: 2rem;
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
          position: relative;
        }
      }
      .feature-figure-container {
        grid-area: b;
        min-width: 0;
        height: 100%;
        position: relative;
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
            padding: 0 1rem 1rem;
            max-width: 100%;
          }
        }
        .feature-figure-container {
          justify-content: center;
        }
      }
    }

    // @TODO:
    // .feature-icon {
    //   height: 72px;
    //   width: 72px;
    //   margin-bottom: 1rem;
    //   box-shadow: 0px 2px 3px rgba(50, 50, 93, 0.13),
    //     0px 2px 5px rgba(50, 50, 93, 0.11), 0px 5px 15px rgba(0, 0, 0, 0.07);
    //   border-radius: 999rem;
    //   display: none;
    // }
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
    }
    .actions {
      font-weight: 700;
      font-size: 1.35rem;
    }
    @media (max-width: 900px) {
      .title {
        font-size: 1.5rem;
      }
      .text {
        font-size: 1.15rem;
      }
    }
  }
}
</style>
