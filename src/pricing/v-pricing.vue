<template>
  <div class="plans">
    <div class="plans-content">
      <section class="pricing-splash">
        <div class="pricing-splash-inner">
          <div class="content">
            <h1 class="page-title">Plans &amp; Pricing</h1>
            <h3
              class="page-title-sub"
            >Thousands of organizations big and small power their communities with NodeBB. From free self-service to full customization, we have the perfect forum solution for you:</h3>
          </div>

          <div class="figure-container">
            <!-- <splash-figure /> -->
          </div>
        </div>
      </section>

      <plan-table class="plans-table" />
      <plan-hosting />
      <plan-custom />
      <plan-open />
      <!-- <plan-testimonial /> -->
      <!-- <plan-faq /> -->
    </div>
    <!-- <el-cta id="cta" /> -->
  </div>
</template>

<script lang="ts">
export default {
  components: {
    // elCta: () => import("../home/el-cta.vue"),
    sectionSplash: () => import("./splash.vue"),
    planTable: () => import("./el-table.vue"),
    planFaq: () => import("./el-faq.vue"),
    planTestimonial: () => import("./el-testimonial.vue"),
    planHosting: () => import("./el-hosting.vue"),
    planCustom: () => import("./el-custom.vue"),
    planOpen: () => import("./el-open.vue")
  },
  metaInfo() {
    return {
      title: "Forum software plans & pricing - NodeBB",
      description:
        "Get the forum software package that works for you. NodeBB provides hosting, support and development for your community forum."
    };
  }
};
</script>

<style lang="less">
.plans {
  padding: 5rem 1rem 0;
  overflow: hidden;
  .plans-content {
    margin: 0 auto;
    max-width: 1100px;
  }
}
.pricing-splash {
  position: relative;

  .pricing-splash-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    padding: 0 2rem 1rem;
    align-items: center;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      text-align: left;
      padding: 0;
    }
    .figure-container {
      min-width: 0;
      display: grid;
      justify-content: center;
    }
    .content {
      justify-self: flex-end;

      h1 {
        z-index: 5;
        position: relative;
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
        margin-bottom: 0;
        .highlight {
          color: #5c84a4;
        }
      }

      .actions {
        margin-top: 2rem;
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
        .page-title {
          font-size: 2.5rem;
        }
        .page-title-sub {
          font-size: 1.5em;
        }
      }

      @media (max-width: 900px) {
        justify-self: center;
        max-width: 100%;
        .page-title {
          font-size: 2.6rem;
          line-height: 1.2;
        }
        .page-title-sub {
          font-size: 1.25rem;
          line-height: 1.4;
        }
      }
    }
  }
}
</style>
