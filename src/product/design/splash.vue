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
          <!-- <factor-link btn-link="primary" path="/pricing" size="medium">Learn more &rarr;</factor-link> -->
          <!-- <factor-link btn-link="default" path="/contact" size="medium">Contact us &rarr;</factor-link> -->
          <factor-link btn-link="default" @click="vis = !vis" size="medium">Contact us &rarr;</factor-link>
        </div>
      </div>

      <div class="figure-container">
        <splash-figure />
      </div>
    </div>
    <factor-modal class="product-cta-contact" :vis.sync="vis">
      <iframe class="product-cta-iframe" src="/contact"></iframe>
    </factor-modal>
  </section>
</template>

<script lang="ts">
import { factorModal, factorLink } from "@factor/ui";

export default {
  components: {
    factorModal,
    factorLink,
    splashFigure: () => import("./figure-splash.vue"),
    splashFigureMini: () => import("./figure-splash-mini.vue")
  },
  data() {
    return {
      vis: false
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
      grid-gap: 3rem;
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
        grid-area: a;
        justify-self: self-end;

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
          font-weight: 700;
          font-size: 2.5rem;
          line-height: 1.1;
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
          margin-top: 2rem;
          font-size: 1.35rem;
          color: var(--color-primary);
          .factor-btn,
          .factor-link {
            margin-right: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
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
            font-size: 2.5rem;
          }
          .page-title-sub {
            font-size: 1.5rem;
          }
          .actions {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 900px) {
          padding: 1rem;
          justify-self: center;
          max-width: 100%;
          grid-area: auto;
          .page-title {
            font-size: 2rem;
            line-height: 1.2;
          }
          .page-title-sub {
            font-size: 1.25rem;
            line-height: 1.4;
          }
          .actions {
            font-size: 1.15rem;
          }
        }
      }
    }
  }
  .product-cta-iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
