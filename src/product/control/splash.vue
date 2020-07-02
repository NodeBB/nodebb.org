<template>
  <section class="product-splash product-control">
    <div class="product-splash-inner">
      <div class="content">
        <h1 class="page-title">...be in complete control</h1>
        <h3
          class="page-title-sub"
        >NodeBB’s administration system makes it easy to control all aspects of your forum. You can create an unlimited number of administrator and moderator accounts, and you can set permissions on each account according to your needs.</h3>

        <div class="actions">
          <factor-link btn-link="primary" path="/pricing" size="large">Get started for free &rarr;</factor-link>
        </div>
      </div>

      <div class="figure-container">
        <splash-figure />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { factorLink } from "@factor/ui"

export default {
  components: {
    factorLink,
    splashFigure: () => import("./figure-splash.vue")
  }
}
</script>

<style lang="less">
.product-splash {
  position: relative;
  &.product-control {
    .product-splash-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 4em;
      align-items: center;
      padding-bottom: 6rem;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        text-align: left;
        padding: 3rem 0 6rem;
        grid-gap: 0;
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
          .highlight {
            color: #5c84a4;
          }
        }

        .actions {
          margin-top: 2rem;
          font-weight: 700;
          font-size: 1.35rem;
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
}
</style>
