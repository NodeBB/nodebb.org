<template>
  <div class="view-product-design">
    <section-splash />
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui"

export default {
  components: {
    factorLink,
    factorIcon,
    sectionSplash: () => import("./splash.vue")
  },
  data(this: any) {
    return {
      loading: true,
      loadingButtons: true
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
.view-product-design {
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
      font-size: 3rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    .text {
      font-weight: 400;
      font-size: 1.4em;
      line-height: 1.6;
      margin-bottom: 1rem;
      opacity: 0.8;
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
}
</style>
