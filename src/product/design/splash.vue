<template>
  <section class="product-splash product-design-splash">
    <div class="product-splash-inner">
      <div class="content">
        <!-- <h3 class="page-sup">Design</h3> -->
        <h1 class="page-title">Get a platform that supports modern responsive design.</h1>
        <h3
          class="page-title-sub"
        >NodeBB forums are built from the ground up to work on all devices - phone, tablet, or desktop.</h3>
        <!-- <splash-figure-mini /> -->
        <p
          class="page-title-sub"
        >Need an even more customized look? No problem, we provide full in-house design services for our Enterprise clients, contact us for more details.</p>
        <div class="actions">
          <factor-link btn-link="primary" path="/pricing" size="medium">Learn more &rarr;</factor-link>
          <factor-link btn-link="default" path="/contact" size="medium">Contact us &rarr;</factor-link>
        </div>
      </div>

      <div class="figure-container">
        <splash-figure />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { factorLink } from "@factor/ui";

export default {
  components: {
    factorLink,
    splashFigure: () => import("./figure-splash.vue"),
    splashFigureMini: () => import("./figure-splash-mini.vue")
  },
  metaInfo() {
    return {
      // titleTemplate: "%s",
      // image: require("./static/_.jpg"),
      // link: [
      //   {
      //     vmid: "font",
      //     rel: "stylesheet",
      //     href:
      //       "https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
      //   }
      // ]
    };
  }
};
</script>

<style lang="less">
.product-splash {
  position: relative;
  &.product-design-splash {
    // background-color: rgba(255, 179, 0, 0.2);
    // background-color: rgb(248, 247, 252);
    // background-color: #000306;
    overflow: visible;

    .product-splash-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b";

      grid-gap: 4em;
      padding: 4rem 3rem 0;

      align-items: center;

      @media (min-height: 1000px) {
        padding-top: 170px;
      }

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        text-align: left;
        padding: 3rem 0 6rem;
        grid-template-areas: none;
      }
      .figure-container {
        min-width: 0;
        display: grid;
        // justify-content: center;

        grid-area: a;
        justify-self: flex-start;
        @media (max-width: 900px) {
          grid-area: auto;
          justify-self: center;
        }
      }
      .content {
        max-width: 500px;
        justify-self: flex-start;

        grid-area: b;
        min-width: 0;
        height: 100%;
        position: relative;
        // display: flex;
        align-items: center;
        justify-self: flex-start;
        flex-direction: column;

        h1 {
          z-index: 5;
          position: relative;
        }

        .page-sup {
          text-transform: uppercase;
          font-weight: 700;
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
        }
        .page-title,
        .page-title-sub {
          // letter-spacing: -0.035em;
        }

        .page-title {
          font-size: 3rem;
          letter-spacing: -0.045em;
          line-height: 1.1;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .page-title-sub {
          margin-top: 2rem;
          font-size: 1.4rem;
          font-weight: 400;
          // color: var(--color-text-secondary);
          // color: rgba(255, 255, 255, 0.97);
          .highlight {
            color: #5c84a4;
          }
        }

        .actions {
          font-size: 1.3em;
          margin-top: 2rem;
          .factor-btn,
          .factor-link {
            margin-right: 3rem;
            margin-bottom: 1rem;
            @media (max-width: 900px) {
              margin-right: 1rem;
            }
          }
        }

        .sub-actions {
          margin-top: 1.5rem;
        }

        @media (max-width: 1200px) {
          max-width: 450px;
          .page-title {
            font-size: 3em;
          }
          .page-title-sub {
            font-size: 1.5em;
          }

          .actions {
            font-size: 1.1em;
          }
        }

        @media (max-width: 900px) {
          padding: 1em 2em;
          justify-self: center;
          max-width: 100%;
          grid-area: auto;
          .page-title {
            font-size: 2.6rem;
            line-height: 1.2;
          }
          .page-title-sub {
            font-size: 1.4em;
            line-height: 1.4;
          }

          .actions {
            font-size: 1em;
          }
        }
      }
    }
  }
}
</style>
