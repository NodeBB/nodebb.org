<template>
  <section class="product-splash">
    <div class="product-splash-inner">
      <div class="content">
        <h3 class="page-sup">Integrate</h3>
        <h1 class="page-title">
          Integrate to your favorite apps
          <!-- Make running your community even easier with integrations. -->
        </h1>
        <!-- <h3
          class="page-title-sub"
        >Integrate NodeBB to your favorite apps.</h3>-->

        <div class="actions">
          <!-- <factor-link btn="primary" path="/pricing" size="large">Learn more &rarr;</factor-link> -->
          <!-- <factor-link btn="primary" path="/plugins" size="large">&rarr;</factor-link> -->
        </div>
      </div>

      <div class="figure-container">
        <!-- <splash-figure /> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { factorLink } from "@factor/ui";

export default {
  components: {
    factorLink,
    splashFigure: () => import("./figure-splash.vue")
  }
};
</script>

<style lang="less">
.product-splash {
  position: relative;

  .product-splash-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
    padding: 4rem 3rem 6rem;
    align-items: center;

    @media (min-height: 1000px) {
      padding-top: 170px;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      text-align: left;
      padding: 3rem 0 6rem;
    }
    .figure-container {
      min-width: 0;
      display: grid;
      justify-content: center;
    }
    .content {
      max-width: 550px;
      justify-self: flex-end;

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
        margin-bottom: 1rem;
        // color: var(--color-text-secondary);
        .highlight {
          color: #5c84a4;
        }
      }

      .actions {
        font-size: 1.35rem;
        margin-top: 2rem;
        .factor-btn {
          margin-right: 1rem;
          margin-bottom: 1rem;
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
          font-size: 1.5em;
        }
        .actions {
          font-size: 1.25rem;
        }
      }

      @media (max-width: 900px) {
        padding: 1rem;
        justify-self: center;
        max-width: 100%;
        .page-title {
          font-size: 2.6rem;
          line-height: 1.2;
        }
        .page-title-sub {
          font-size: 1.4em;
          line-height: 1.4;
        }

        .actions {
          font-size: 1.15rem;
        }
      }
    }
  }
}
</style>
