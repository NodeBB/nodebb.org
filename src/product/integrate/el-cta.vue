<template>
  <div class="product-cta-wrap content">
    <div class="content-pad">
      <div class="product-cta">
        <div v-if="figure" class="figure-container">
          <component :is="figure" />
        </div>
        <div class="text">
          <h2 class="title font-bold">Next up: Extend your forum</h2>
          <h2
            class="title-sub font-normal"
          >Supercharge your forum with one-click installable plugins.</h2>
        </div>

        <div class="buttons">
          <factor-link btn="primary" size="large" path="/product/extend">Extensibility &rarr;</factor-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { factorLink } from "@factor/ui";
export default {
  components: {
    factorLink
  },
  data(this: any) {
    return {
      figure: () => import("./figure-extend.vue")
    };
  }
};
</script>

<style lang="less">
.product-cta-wrap {
  padding: 0 2rem 6rem;

  @media (max-width: 767px) {
    padding: 6rem 2rem;
  }

  .product-cta {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    border: none;
    margin: 0 -20px;
    padding: 2rem 5rem;
    overflow: hidden;
    border-radius: 8px;
    background: #f3f6fc;
    // box-shadow: 0 0 3px rgba(50, 50, 93, 0.2), 0 14px 32px rgba(50, 50, 93, 0.1);

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      padding: 2rem;
    }
    @media (max-width: 900px) {
      .figure-container {
        display: none;
      }
    }

    .text {
      margin-left: 3rem;
      @media (max-width: 900px) {
        margin-left: 0;
      }
      h2 {
        &.title {
          color: var(--color-primary);
        }
        font-size: 1.5em;
      }
    }
    .buttons {
      margin: 0 0 0 20px;
      @media (max-width: 767px) {
        margin: 20px 0 0 0;
      }
    }
  }
}
</style>
