<template>
  <div class="plans">
    <div class="plans-content">
      <section class="pricing-splash">
        <div class="pricing-splash-inner">
          <div class="content">
            <h1 class="page-title">Plans and pricing</h1>
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
      title: "Plans and Pricing - NodeBB",
      description:
        "The quickest way to get your forum up and running today. Launch your forum in minutes using one of our great looking themes, and leave the server maintenance and upgrades to us."
    };
  }
};
</script>

<style lang="less">
.plans {
  padding: 5rem 1rem 0;
  .plans-content {
    margin: 0 auto;
    max-width: 1100px;
  }
}
.pricing-splash {
  position: relative;

  .pricing-splash-inner {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 4em;
    // padding: 4rem 3rem 6rem;
    padding: 0 0 2rem;
    align-items: center;

    @media (min-height: 1000px) {
      // padding-top: 170px;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      text-align: left;
      // padding: 3rem 0 6rem;
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

      .page-title,
      .page-title-sub {
        // letter-spacing: -0.035em;
      }

      .page-title {
        font-size: 3rem;
        letter-spacing: -0.045em;
        line-height: 1.1;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      .page-title-sub {
        font-weight: 400;
        font-size: 1.4em;
        line-height: 1.6;
        margin-bottom: 1rem;
        opacity: 0.8;
        // letter-spacing: -0.01em;
        .highlight {
          color: #5c84a4;
        }
      }

      .actions {
        font-size: 1.3em;
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
        // padding: 1em 2em;
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
