<template>
  <section class="product-splash">
    <div class="product-splash-inner">
      <div class="content">
        <h1 class="page-title">Enable great conversation and community interaction.</h1>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { factorLink } from "@factor/ui";

export default {
  components: {
    factorLink
  }
};
</script>

<style lang="less">
.product-splash {
  position: relative;

  .product-splash-inner {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 4em;
    padding: 8rem 3rem 2rem;
    align-items: center;

    @media (min-height: 1000px) {
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      text-align: left;
      padding: 3rem 0 0;
    }
    .figure-container {
      min-width: 0;
      display: grid;
      justify-content: center;
    }
    .content {
      justify-self: center;

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
        margin-bottom: 0rem;
      }

      .page-title-sub {
        margin-top: 2rem;
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 1rem;
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
        padding: 2rem 1rem;
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
</style>
