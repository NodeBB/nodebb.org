<template>
  <section class="splash">
    <div class="splash-inner">
      <div class="content">
        <h1 class="page-title">A better community platform for the modern web.</h1>
        <h3
          class="page-title-sub"
        >NodeBB is next generation forum software. It's powerful, mobile-ready and easy to use.</h3>
        <div class="actions">
          <factor-link btn="primary" path="/pricing">Start Free Trial</factor-link>
          <factor-link btn="link" path="/product">Learn more &rarr;</factor-link>
          <!-- <factor-link btn="primary" path="/install">Install NodeBB &rarr;</factor-link>
          <factor-link btn="link" path="https://go.nodebb.org/github" target="_blank">
            <factor-icon icon="fab fa-github" />&nbsp;
            {{ version }}
          </factor-link>-->
        </div>
      </div>

      <div class="figure-container">
        <splash-figure />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { factorVersion } from "@factor/api/about";
import { factorLink, factorIcon } from "@factor/ui";

export default {
  components: {
    factorLink,
    factorIcon,
    splashFigure: () => import("./figure-splash.vue")
  },
  computed: {
    version() {
      return `v${factorVersion()}`;
    }
  }
};
</script>

<style lang="less">
.splash {
  position: relative;

  .splash-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
    padding: 10rem 3rem 3rem;
    align-items: center;

    @media (min-height: 1000px) {
      padding-top: 170px;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      text-align: left;
      padding: 3rem 0 0;
    }
    .figure-container {
      min-width: 0;
      max-width: 800px;
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
        opacity: 0.5;
      }
      .page-title,
      .page-title-sub {
        letter-spacing: -0.045rem;
      }

      .page-title {
        font-size: 2.5rem;
        letter-spacing: -0.0425rem;
        line-height: 1.1;
        font-weight: 700;
        margin-bottom: 1.5rem;
      }

      .page-title-sub {
        // font-weight: 400;
        // font-size: 1.4rem;
        // line-height: 1.6;
        // margin-bottom: 1rem;
        font-weight: 300;
        font-size: 1.35rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        opacity: 0.9;
        letter-spacing: 0;
        .highlight {
          color: #5c84a4;
        }
      }

      .actions {
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
          font-size: 2.35rem;
        }
        .page-title-sub {
          font-size: 1.5em;
        }
      }

      @media (max-width: 900px) {
        padding: 1em 2em;
        justify-self: center;
        max-width: 100%;
        .page-title {
          font-size: 2rem;
          line-height: 1.2;
        }
        .page-title-sub {
          font-size: 1.4em;
          line-height: 1.4;
        }
      }
    }
  }
}
</style>
