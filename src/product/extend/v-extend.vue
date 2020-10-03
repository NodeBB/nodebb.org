<template>
  <div class="view-product-extend">
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
            <h3 class="title" v-formatted-text="feature.title"></h3>
            <div class="text" v-formatted-text="feature.text"></div>
            <div v-if="feature.link" class="action">
              <factor-link :path="feature.link.path">{{ feature.link.text }} &rarr;</factor-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui"

export default {
  components: {
    factorLink,
    factorIcon
    // sectionSplash: () => import("./splash.vue")
  },
  data(this: any) {
    return {
      loading: true,
      loadingButtons: true,
      features: [
        {
          id: "plugins",
          title: `...have access to more power with plugins and extensions`,
          text: `NodeBB has <a target="_blank" class="factor-link" href="https://www.npmjs.com/search?q=nodebb-plugin-">over 500 plugins</a> and themes to choose from. Download and install them directly from the control panel in one click.`,
          figure: () => import("./figure-plugins.vue"),
          link: { path: "/pricing", text: "Learn more" }
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
.view-product-extend {
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
        @media (max-width: 900px) {
          padding: 2rem 0 1.5rem;
        }
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
            padding: 3rem 1.5rem 1rem;
            max-width: 100%;
          }
        }
        .feature-figure-container {
          justify-content: center;
        }
      }
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
        font-size: 2rem;
      }
      .text {
        font-size: 1.25rem;
        line-height: 1.4;
      }
    }
  }
}
</style>
