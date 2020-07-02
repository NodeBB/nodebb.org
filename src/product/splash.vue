<template>
  <section class="product-performance">
    <div class="product-performance-inner">
      <div class="content">
        <span class="page-sup">With NodeBB, you...</span>
        <h1 class="page-title">
          ...will never worry about
          <span>performance</span> and scalability
        </h1>
        <h3
          class="page-title-sub"
        >NodeBB is built using the Node.js server-side Javascript platform, delivering unmatched performance.</h3>
        <h3
          class="page-title-sub"
        >Building on this high performance platform means fast and dependable performance that will support even the biggest and most active community.</h3>

        <div class="actions">
          <factor-link btn-link="primary" path="/pricing" size="medium">Try it now for free &rarr;</factor-link>
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
    splashFigure: () => import("./figure-splash.vue")
  }
};
</script>

<style lang="less">
.product-performance {
  position: relative;
  h1.page-title {
    span {
      background-size: 100%;
      background-position: 50% 75%;
      background-repeat: no-repeat;
    }
  }

  .product-performance-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    padding: 4rem 3rem 6rem;
    align-items: center;

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
      max-width: 500px;
      justify-self: flex-end;

      h1 {
        z-index: 5;
        position: relative;
      }

      .page-sup {
        font-size: 1.5rem;
        font-weight: 300;
        font-family: var(--font-family-cursive);
        opacity: 0.9;
        display: flex;
        margin-bottom: 0.25rem;
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
        line-height: 1.6;

        font-weight: 400;
        margin-bottom: 1rem;
        .highlight {
          color: #5c84a4;
        }
      }

      .actions {
        font-weight: 700;
        font-size: 1.3em;
        margin-top: 2rem;
        a,
        .factor-btn {
          margin-right: 1rem;
          margin-bottom: 1rem;
          font-weight: 700;
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
</style>
