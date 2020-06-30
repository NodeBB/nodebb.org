<template>
  <section class="product-performance">
    <div class="product-performance-inner">
      <div class="content">
        <!-- <h3 class="page-sup">Product</h3> -->
        <span class="page-sup">With NodeBB, you...</span>
        <h1 class="page-title">
          Never worry about
          <span>performance</span> and scalability.
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
  // background: #000810;
  h1.page-title {
    span {
      // background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTYiIGhlaWdodD0iNjQiPjxkZWZzLz48cGF0aCBmaWxsPSIjRkZCMzAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOTQgNWwyIDItMiAyIDIgMi0zIDQgMyAzLTEgMyAxIDMtMSAyIDEgMi0zIDEgMyAzLTEgMyAxIDItMiAzIDIgNC0zIDMgMiA0IDEgMS0zIDEgMiAyLTIgMiAzIDMtNSAzLTM5LTItMzIgMWgtNDlsLTM1IDFjLTEwIDAgMy0xLTIwLTFsLTQ3IDItMTYtMS0yMyAxLTIzLTItMy0zLTMtMiAzLTItMi0zLTItMSA0LTMtMi0yIDItMi0yLTItMi0xIDMtMi0yLTMgMi0yLTEtMiAyLTItMi0yIDEtMS0zLTEgNC0yLTMtMSAyLTIgMS0xLTItMSAyLTItMy0yaDRsLTItMS0xLTIgMi0ySDFsMi0yLTItMSAzLTItMi0yIDM4LTJjNSAwLTctMSA4LTFsMzIgMSA4IDFjNSAwLTItMiA5LTJsMjMgMSAyNS0xIDM5IDEgMjQtMSA0MCAxYzE2IDAgMzEgMSA0NiA0eiIgb3BhY2l0eT0iLjIiLz48L3N2Zz4=);
      background-size: 100%;
      background-position: 50% 75%;
      background-repeat: no-repeat;
    }
  }

  .product-performance-inner {
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
      max-width: 500px;
      justify-self: flex-end;

      h1 {
        z-index: 5;
        position: relative;
      }

      .page-sup {
        margin-bottom: 1rem;
        font-size: 1.35rem;
        font-weight: 300;
        font-family: var(--font-family-cursive);
        opacity: 0.9;
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
        // color: #fff;
      }

      .page-title-sub {
        margin-top: 2rem;
        font-size: 1.4rem;
        line-height: 1.6;

        font-weight: 400;
        margin-bottom: 1rem;
        // color: var(--color-text-secondary);
        // color: #fff;
        // color: rgba(255, 255, 255, 0.66);
        // a {
        //   color: #fff;
        // }
        .highlight {
          color: #5c84a4;
        }
      }

      .actions {
        font-size: 1.3em;
        margin-top: 2rem;
        // a {
        //   color: #fff;
        // }
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
          font-size: 2.6rem;
          line-height: 1.2;
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
</style>
