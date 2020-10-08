<template>
  <div class="el-table">
    <div class="max-w-xl">
      <div class="header">
        <home-icon icon="model-instant" />
        <h2>Instant Hosting</h2>
        <p class="text-lg font-normal mb-10">
          The quickest way to get your forum up and running today. Launch your forum in
          minutes using one of our great looking themes, and leave the server maintenance
          and upgrades to us.
        </p>
      </div>
    </div>
    <div class="view-table-version-2">
      <div class="compare content">
        <div class="content-pad">
          <div class="feature-table-wrap">
            <div class="feature-table">
              <div
                v-for="(col, index) in compare"
                :key="index"
                class="column"
                :class="index == 0 ? 'data' : 'data'"
              >
                <!-- label : data -->
                <div
                  v-for="(row, rowIndex) in col.items"
                  :key="rowIndex"
                  v-formatted-text="row"
                  class="row"
                  :class="row ? 'has-content' : 'empty'"
                />
                <div v-if="col.link" class="footer-row row">
                  <factor-link
                    btn="primary"
                    size="medium"
                    class="font-bold"
                    :path="col.link.path"
                  >
                    <span v-formatted-text="col.link.text" />
                  </factor-link>
                  <span class="text-xs mt-3 font-bold" v-formatted-text="col.link.meta" />
                </div>

                <div v-if="col.external" class="footer-row row">
                  <factor-link
                    btn="primary"
                    size="medium"
                    class="font-bold"
                    @click="vis = !vis"
                    :path="col.external.path"
                  >
                    <span v-formatted-text="col.external.text" />
                  </factor-link>
                  <span
                    class="text-xs mt-3 font-bold"
                    v-formatted-text="col.external.meta"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <plan-benefits />

    <div class="discount">
      <div class="text">
        <h2 class="discount-title">Non-profit or start-up company?</h2>
        <div class="sub">Please contact us for discounted pricing.</div>
      </div>
      <div class="action">
        <factor-link btn="primary" @click="vis = !vis">Contact us</factor-link>
      </div>
    </div>
    <factor-modal class="pricing-cta-contact" :vis.sync="vis">
      <iframe class="pricing-cta-iframe" src="/contact"></iframe>
    </factor-modal>
  </div>
</template>

<script lang="ts">
import { toLabel } from "@factor/api"
import { factorModal, factorIcon, factorLink } from "@factor/ui"
export default {
  components: {
    factorModal,
    factorIcon,
    factorLink,
    homeIcon: () => import("../product/icon.vue"),
    planIcon: () => import("./icons.vue"),
    planBenefits: () => import("./section-benefits.vue"),
  },
  metaInfo() {
    return {
      title: "Pricing that scales with your business.",
      description:
        "The quickest way to get your forum up and running today. Launch your forum in minutes using one of our great looking themes, and leave the server maintenance and upgrades to us. Choose the plan that suits your needs.",
    }
  },
  data(this: any) {
    return {
      vis: false,
      header: [
        // {
        //   super: "Hobbyists",
        //   id: "homestead",
        //   price: "",
        //   sub: "Open source, self-managed"
        // },
        {
          super: "Startups",
          id: "village",
          price: "$250",
          gutter: "Instant setup",
          sub: "Small startups, businesses, and groups",
        },
        {
          super: "Businesses",
          id: "city",
          price: "$750",
          gutter: "Instant setup",
          sub: "Great value for growing businesses and groups",
        },
        {
          super: "Custom",
          id: "metropolis",
          price: "",
          gutter: "Custom install",
          sub: "Larger organizations that need a custom solution",
        },
      ],
      groups: [
        {
          children: [
            {
              title: "Price",
              content: "All prices in USD",
              village: "$250 / mo",
              city: "$750 / mo",
            },
            {
              title: "Monthly page views",
              content: "",
              village: "Up to 2 million",
              city: "Up to 10 million",
              metropolis: "Over 10 million",
            },
          ],
        },
        // {
        //   title: "Plugins",
        //   icon: "plugins",
        //   children: [
        //     {
        //       title: "Community plugins",
        //       level: 0
        //     },
        //     {
        //       title: "Free plugins",
        //       level: 0
        //     },
        //     {
        //       title: "Paid plugins",
        //       level: 10
        //     },
        //     {
        //       title: "Additional features &amp; settings",
        //       level: 10
        //     }
        //   ]
        // },
        {
          title: "Features",
          icon: "features",
          children: [
            // {
            //   title: "Core platform",
            //   level: 0
            // }
            {
              title: "Unlimited community staff and users",
              content: "",
              level: 0,
            },
            {
              title: "SSL encryption",
              content: "",
              level: 0,
            },
            {
              title: "Automated daily backup",
              content: "",
              level: 0,
            },
            // {
            //   title: "Migration services",
            //   content:
            //     "Migration services from existing forums – we'll make the move from your old software as painless as possible.",
            //   level: 20
            // },
            // {
            //   title: "Theme customization",
            //   content:
            //     "Theme customization to match your brand identity perfectly.",
            //   level: 20
            // },
            // {
            //   title: "Custom features",
            //   content:
            //     "Custom feature development to integrate with your current systems",
            //   level: 20
            // },
            // {
            //   title: "Custom installation",
            //   content:
            //     "Premium hosting or self-hosting options to best suit your requirements and security policies.",
            //   level: 20
            // }
            // {
            //   title: "Admin control panel",
            //   level: 0
            // },
            // {
            //   title: "White label",
            //   level: 20
            // }
            // {
            //   title: "",
            //   level: 20
            // }
          ],
        },
        {
          title: "Support",
          icon: "support",
          children: [
            {
              title: "Email, community support",
              content: "",
              level: 0,
            },
            {
              title: "Premium support",
              content: "",
              level: 10,
            },
            // {
            //   title: "Customized support with debugging*",
            //   content: "",
            //   level: 20
            // }
          ],
        },
        // {
        //   title: "",
        //   icon: "",
        //   children: [
        //     // {
        //     //   title: "",
        //     //   level: 0
        //     // },
        //   ]
        // }
      ],
      compare: [
        {
          items: [
            "Village",
            "$250 / mo",
            "Small startups, businesses, and groups",
            `Up to 2 million monthly page views`,
            `Email and community forum support`,
          ],
          link: {
            path: "https://manage.nodebb.org/register",
            text: "Start for free",
            meta: "Free for 14 days. Credit card required. All prices in USD.",
          },
        },
        {
          items: [
            "City <span class='popular'>Popular</span>",
            "$750 / mo",
            "Great value for growing businesses and groups",
            `Up to 10 million monthly page views`,
            `Premium support`,
          ],
          link: {
            path: "https://manage.nodebb.org/register",
            text: "Start for free",
            meta: "Free for 14 days. Credit card required. All prices in USD.",
          },
        },
        {
          items: [
            "Metropolis",
            "Custom",
            "Larger organizations that need a custom solution",
            `10 million monthly page views`,
            `Customised support`,
          ],
          external: {
            path: "",
            text: "Contact us",
            meta: "Contact us directly for customised support plans (SLAs, etc.)",
          },
        },
      ],
    }
  },
  methods: { toLabel },
}
</script>
<style lang="less">
.el-table {
  padding: 2rem 2rem 0;
  border-radius: 0.5rem;
  background: rgba(25, 82, 190, 0.25);
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    padding: 1rem 1rem 0;
  }
  &:before {
    content: "";
    background-image: url(../home/img/nbb-bg-b.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0;

    display: block;
    z-index: auto;
    position: absolute;
    height: 700px;
    width: 450px;
    right: 0rem;
    top: -8.5rem;
    opacity: 0.72;
    @media (max-width: 900px) {
      z-index: -1;
      right: -10rem;
      top: -10.5rem;
      height: 400px;
      width: 400px;
      opacity: 0.72;
    }
  }
  .header {
    padding-left: 5rem;
    position: relative;
    @media (max-width: 900px) {
      padding-left: 0;
    }
    .icon {
      width: 3.5rem;
      height: 4.225rem;
      margin: 0;
      font-size: 1.5rem;
      position: absolute;
      left: 0;
      @media (max-width: 900px) {
        position: relative;
      }
    }
  }
  h1,
  h2 {
    padding: 0;
    font-size: 2rem;
    font-weight: var(--font-weight-bold, 700);
    margin-bottom: 1rem;
  }

  .feature-group {
    padding: 1rem 0 2rem;
  }
  .group-header {
    padding: 1rem;
    display: grid;
    position: sticky;
    top: 44px;
    grid-template-columns: 2rem 1fr;
    background: #fff;
    z-index: 1;
    i {
      position: relative;
      padding: 0.4rem 0;
    }
    &:before,
    &:after {
      content: "";
      z-index: -1;
      pointer-events: none;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      will-change: opacity;
      transition: opacity 0.2s ease 0s;
    }
    &:before {
      box-shadow: 0 1px var(--color-border, rgba(0, 0, 0, 0.05));
    }
    &:after {
      background: #fff;
    }
    .group-title {
      font-size: 1.3em;
      font-weight: var(--font-weight-bold, 700);
    }
    .group-description {
      padding-left: 2rem;
    }
    @media (max-width: 900px) {
      display: flex;
      justify-content: center;
      align-items: center;
      .group-title {
        margin-left: 0.5rem;
      }
    }
  }

  .table-header {
    margin: 0 0 0.5rem;
  }
  .area-title {
    font-size: 1.2em;
    font-weight: var(--font-weight-bold, 700);
    color: var(--color-text-secondary);
    opacity: 0.6;
    padding: 1rem 0 0.5rem;
  }
  .table-row {
    display: grid;
    grid-template-columns: minmax(auto, 1fr) repeat(3, 1fr);
    grid-gap: 1rem;

    &.feature-row {
      &:hover {
        background: var(--color-bg-contrast);
        border-radius: 8px;
        cursor: pointer;
      }

      .col-label {
        display: grid;
        grid-template-columns: 2rem 1fr;
        font-weight: var(--font-weight-bold, 700);
        .label-wrap {
          grid-column: ~"2 / 3";
          .label {
            position: relative;
          }
          .label:before {
            background-image: linear-gradient(90deg, #e3e8ee 33%, transparent 0);
            background-position: bottom;
            background-repeat: repeat-x;
            background-size: 3px 1px;
            content: "";
            display: block;
            height: 1px;
            left: 0;
            position: absolute;
            top: 100%;
            width: 100%;
          }
        }
      }
      .mobile-label {
        font-size: 0.8em;
        text-transform: uppercase;
        color: var(--color-primary);
        font-weight: var(--font-weight-bold, 700);
      }
    }
    @media (max-width: 900px) {
      grid-gap: 0.5rem;
      grid-template-columns: 1fr;
      &.feature-row {
        grid-template-columns: repeat(3, 1fr);
        .col-label {
          text-align: center;
          display: block;
          padding: 1.5rem 0 0;
          grid-column: ~"1 / 4";
        }
        .mobile-label {
          display: block;
        }
      }
      .col {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        .factor-icon {
          display: none;
        }
      }
    }

    .col {
      padding: 1rem;
      min-width: 0;
    }
    .col-header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 1px 1px rgba(50, 50, 93, 0.11), 0 5px 5px rgba(50, 50, 93, 0.05),
        0 5px 15px rgba(50, 50, 93, 0.11);
      border-radius: 5px;
      padding: 2rem;
      h2 {
        font-size: 1.45rem;
        font-weight: var(--font-weight-bold, 700);
      }
      .super {
        text-transform: uppercase;
        font-size: 12px;
        color: var(--color-text-secondary);
        opacity: 0.7;
      }
      .sub {
        margin-top: 0.5rem;
        font-size: 0.925rem;
        line-height: 1.3;
      }
      .gutter {
        font-size: 0.855rem;
        margin-top: 0.5rem;
        color: var(--color-text-secondary);
      }
      .action {
        margin-top: 1rem;
      }
    }

    .col-icon {
      text-align: center;
      .fa-check {
        color: var(--color-primary);
        margin-right: 0.35rem;
      }
      .fa-minus {
        opacity: 0.1;
      }
    }
  }

  .discount {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin: 2rem -2rem 0;
    background: #1a1f36;
    border-radius: 0 0 0.5rem 0.5rem;
    @media (max-width: 900px) {
      flex-direction: column;
      display: block;
      text-align: center;
      .btn-link,
      .btn-link button {
        width: 100%;
        display: block;
        margin-top: 0.5rem;
      }
    }
    a {
      color: #fff;
    }
    .text {
      margin-right: 2rem;
      @media (max-width: 900px) {
        margin-right: 0;
      }
      .discount-title {
        font-size: 1.5rem;
        font-weight: var(--font-weight-bold, 700);
        color: #fff;
        @media (max-width: 900px) {
          font-size: 1.25rem;
        }
      }
      .action {
        color: #fff;
        font-weight: 700;
        @media (max-width: 900px) {
          margin-top: 2rem;
        }
      }
      .sub {
        color: #8192b3;
      }
    }
    .action {
      @media (max-width: 900px) {
        margin-top: 1rem;
      }
      @media (max-width: 768px) {
        margin-top: 1rem;
        text-align: left;
      }
    }
  }
}
.view-table-version-2 {
  --color-bg-splash: #1952be;
  --color-bg-splash-contrast: #233575;
  --gutter-columns: 4;
  --content-columns: 12;
  --row-height: 64px;
  --content-column-width: minmax(0, calc(1200px / var(--content-columns)));
  --gutter-column-width: var(--content-column-width);
  .features,
  .header {
    overflow: hidden;
  }
  .content-pad {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
    width: 100%;

    &.wide {
      max-width: 1200px;
    }
    @media (max-width: 900px) {
      padding: 0;
    }
  }
  .header {
    .header-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        35deg,
        var(--color-bg-splash) 70%,
        var(--color-bg-splash-contrast)
      );
      transform: translateY(-4rem);
      perspective: 1000px;
      .grid {
        backface-visibility: none;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotateY(30deg) translateX(10rem) rotate(2deg) rotateX(34deg);
        display: grid;
        grid-template-rows: repeat(auto-fill, var(--row-height));
        grid-template-columns:
          [viewport-start] 1fr [left-gutter-start] repeat(
            var(--gutter-columns),
            var(--gutter-column-width)
          )
          [left-gutter-end content-start] repeat(
            var(--content-columns),
            var(--content-column-width)
          )
          [content-end right-gutter-start] repeat(
            var(--gutter-columns),
            var(--gutter-column-width)
          )
          [right-gutter-end] 1fr [viewport-end];
        grid-auto-rows: 1fr;
        .row {
          border-radius: 5px;
          &:first-child {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"16 / 17";
            grid-row: ~"-3 / -4";
          }
          &:nth-child(2) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"4/5";
            grid-row: ~"-6/-5";
            opacity: 0.4;
          }
          &:nth-child(3) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"6/7";
            grid-row: ~"-4/-5";
            opacity: 0.4;
          }
          &:nth-child(4) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"12/13";
            grid-row: ~"-1/-2";
          }
          &:nth-child(5) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"6/7";
            grid-row: ~"1/2";
          }
          &:nth-child(6) {
            background-color: #ff0076;
            grid-column: ~"10/11";
            grid-row: ~"-4/-5";
          }
          &:nth-child(8) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"14 / 15";
            grid-row: ~"-2 / -3";
          }
          &:nth-child(9) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"6/7";
            grid-row: ~"-2/-3";
          }
          &:nth-child(10) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"13 / 14";
            grid-row: ~"-6 / -7";
          }
          &:nth-child(11) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"11 / 12";
            grid-row: ~"-7 / -8";
          }
          &:nth-child(11) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"3 / 4";
            grid-row: ~"-2 / -3";
          }
          &:nth-child(12) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"5 / 6";
            grid-row: ~"3 / 4";
          }
          &:nth-child(13) {
            background-color: var(--color-bg-splash-contrast);
            grid-column: ~"9 / 10";
            grid-row: ~"4 / 5";
          }
        }
      }
    }
    position: relative;
    z-index: 0;
    padding: 8rem 0 14rem;
    color: #fff;
    @media (max-width: 900px) {
      padding: 5rem 0 9rem;
    }
    .content-pad {
      z-index: 1;
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 4rem;
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        .header-figure {
          min-width: 0;
        }
      }
    }
    .header-text {
      flex: 1;
      min-width: 520px;
      @media (max-width: 900px) {
        min-width: 320px;
        margin: 0 0 40px;
      }
      .header-tag {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 32px;
        opacity: 0.4;
        .icon {
          display: none;
        }
        .header-icon-text {
          font-size: 1.2em;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
      }
      .title {
        font-size: 2.5em;
        line-height: 1.1;
        margin: 0 0 0.5em;
        letter-spacing: -0.02em;
        font-weight: var(--font-weight-bold, 700);
      }
      .text {
        font-size: 1.5em;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.6);
        a {
          color: #fff;
        }
      }
      .header-actions {
        font-size: 1.1em;
        margin-top: 2em;
        .email-list-form {
          font-size: 1.2em;
          input {
            margin: 0;
            background: #fff;
          }
          @media (max-width: 900px) {
            .app-btn {
              width: 100%;
            }
          }
        }
      }
      @media (max-width: 900px) {
        font-size: 1em;
        .title {
          font-size: 2em;
          .alt {
            color: var(--color-primary);
            display: block;
          }
        }
        .text {
          font-size: 1.2em;
          line-height: 1.5;
          opacity: 0.8;
        }
        .header-tag {
          opacity: 0.4;
          .icon {
            display: none;
          }
        }
      }
    }
    .header-figure {
      figure.screencast {
        width: 800px;
        background: #fff;
        padding-top: 56.25%;
        padding-top: calc(9 / 16 * 100%);
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 15px 35px rgba(0, 0, 0, 0.1),
          0 50px 100px rgba(50, 50, 93, 0.1);
        background-size: cover;
        transition: opacity 0.2s;
        @media (max-width: 900px) {
          width: 100%;
        }
        &:hover {
          cursor: pointer;
          .play-button {
            opacity: 0.8;
          }
        }
        video {
          position: absolute;
          left: 0;
          top: 0;
          min-width: 100%;
          max-width: 100%;
          height: auto;
          border-radius: 7px;
        }
        .play-button {
          transition: opacity 0.2s;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          background: var(--color-text);
          opacity: 0.9;
          border-radius: 50%;
          box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
          width: 72px;
          height: 72px;
        }
      }
    }
  }
  .nodebb-actions {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 5px;
    padding: 1rem;
    line-height: 1;
    margin-top: 2rem;
    width: 500px;
    margin: 1rem auto 0;
    .nodebb-btn {
      padding-top: 6px;
      padding-bottom: 7px;
    }
    @media (max-width: 900px) {
      width: auto;
      grid-template-columns: 1fr;
    }
  }
  .benefits {
    margin: -7rem 1rem 0;
    .content-pad {
      z-index: 100;
      position: relative;
      border-radius: 7px;
      box-shadow: var(--box-shadow-panel);
      background: #fff;
      padding: 2rem 2.5rem;
      .benefit-grid {
        display: grid;
        grid-gap: 0 2em;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
      }
      .benefit {
        max-width: 500px;
        font-size: 1.1em;
        .feature-icon svg {
          width: 3rem;
          margin-bottom: 0.75rem;
        }
        .title {
          font-size: 1.1em;
          font-weight: var(--font-weight-bold, 700);
        }
        .text {
          font-weight: 400;
          opacity: 0.7;
          margin: 1rem 0;
        }
      }
      @media (max-width: 900px) {
        padding: 1rem;
        .benefit-grid {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(3, auto);
          grid-gap: 1rem 0;
          padding: 1rem;
        }
      }
    }
  }
  .features {
    &.content {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    }
    .split-feature {
      min-height: 90vh;
      display: grid;
      grid-column-gap: 4rem;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b";
      align-items: center;
      &.odd {
        grid-template-areas: "b a";
      }
      .feature-content-container {
        grid-area: a;
        padding: 10rem 0;
      }
      .feature-figure-container {
        grid-area: b;
        position: relative;
        height: 100%;
      }
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-areas: "a" "b";
        &.odd {
          grid-template-areas: "a" "b";
        }
        .feature-content-container {
          padding: 0;
          .feature-content {
            padding: 5rem 0 1rem;
            max-width: 100%;
          }
        }
        .feature-figure-container {
          justify-content: center;
        }
      }
    }
    .feature-content {
      max-width: 500px;
      .bullets {
        margin: 2rem 0;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr;
        @media (max-width: 900px) {
          grid-template-columns: 1fr;
        }
        .bullet {
          font-weight: 600;
          display: flex;
          .bullet-text {
            opacity: 0.7;
          }
          .bullet-icon {
            background: #ff0076;
            border-radius: 50%;
            width: 1.5rem;
            height: 1.5rem;
            display: inline-block;
            text-align: center;
            margin-right: 0.5rem;
          }
        }
      }
    }
    .feature-icon {
      margin: 0 auto;
      margin-bottom: 1rem;
      box-shadow: 0 2px 3px rgba(25, 82, 190, 0.13), 0 2px 5px rgba(25, 82, 190, 0.11),
        0 5px 15px rgba(0, 0, 0, 0.07);
      overflow: hidden;
      position: relative;
      color: #1952be;
      background: #fff;
      i {
        font-size: 2rem;
        position: absolute;
        left: 50%;
        margin-left: -15px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .action {
      margin-top: 2rem;
    }
  }
  .compare {
    .feature-content {
      margin: 0 auto;
      max-width: 550px;
    }
    .feature-table {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1rem;
      .column {
        text-align: center;
        background: #fff;
        border-radius: 0.5rem;
        overflow: hidden;
        &.label {
          box-shadow: none;
          background: none;
          text-align: right;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--color-primary);
          z-index: 0;
          margin-right: -1em;
          .has-content {
            background: var(--color-bg-contrast);
          }
        }
        .popular {
          position: absolute;
          right: -2.85rem;
          top: 1rem;
          padding: 0.25rem 1rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1rem;
          border-radius: 0.25rem;
          background: rgba(81, 45, 168, 0.08);
          color: #512da8;
          transform: rotate(45deg);
          width: 10rem;
          text-align: center;
          text-indent: 0.5rem;
        }

        &.data {
          position: relative;
          z-index: 1;
          box-shadow: 0 4px 35px 0 rgba(23, 55, 87, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.07);
          transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

          &:not(:first-child),
          &:not(:last-child) {
            background: #fff;
          }
          &:first-child {
            // background: #d5dff3;
            background: #fff;
            .row:first-child {
              // color: #ffb300;
            }
            .row:last-child {
              a {
                // background: #ffb300;
                // box-shadow: 0 0 0 1px #ffb300;
                // border-radius: 4px;
              }
            }
          }
          &:not(:last-child) {
            .row:last-child {
              // background: #f6fafd;
            }
          }
          &:last-child {
            background: #2a2f45;
            .row {
              color: #fff;
            }
            .row:first-child {
              color: #fff;
              i {
                color: #fff;
              }
            }
            .row:last-child {
              button {
                background: #1a1f36;
                box-shadow: 0 0 0 1px #1a1f36;
                width: 100%;
              }
            }
          }
          i {
            width: 48px;
            height: 48px;
            margin: 1rem auto;
            border-radius: 0.5rem;
            overflow: hidden;
            position: relative;
            color: #1952be;
            font-size: 2rem;
          }
          .row {
            transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
            &:nth-child(2) {
              font-size: 1.75rem;
              font-weight: 700;
              padding-top: 0;
              height: auto;
            }

            .row:nth-child(3) {
              font-weight: 700;
              font-size: 1.15rem;
            }
            &:nth-child(4),
            &:nth-child(5) {
              font-weight: normal;
            }
            &:last-child {
              border: none;
            }
          }
          .row:first-child {
            font-size: 0.9rem;
            text-transform: uppercase;
            font-weight: 700;
            border-bottom-color: transparent;
            border-bottom-style: solid;
            padding-top: 2rem;
            height: auto;
          }
          .footer-row {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: auto;
            transform: translateY(50%);
            opacity: 1;
            border: none;
            position: relative;
            transform: translate(0);
            a {
              button {
                color: #fff;
                width: 100%;
              }
            }
          }
          .row:nth-last-child(2) {
            border-bottom: none;
          }
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
              0 30px 60px -30px rgba(0, 0, 0, 0.3),
              0 -18px 60px -10px rgba(0, 0, 0, 0.025);
            .row:nth-last-child(2) {
              padding-bottom: 4em;
            }
            .footer-row {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
      }
      .row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90px;
        padding: 1rem 2rem;
        text-align: left;
        font-size: 1.185rem;
        &:first-child {
          font-size: 0.9rem;
          padding-bottom: 0;
        }
        &:nth-child(1) {
          height: auto;
          min-height: 70px;
        }
      }
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        .row {
          height: auto;
        }
        .column {
          text-align: left;
          &:nth-child(1) {
            // display: none;
          }
          &.data {
            .footer-row {
              position: relative;
              opacity: 1;
              transform: none;
            }
          }
        }
      }
    }

    ~ .cta {
      margin-top: 2rem;
    }
  }
}
</style>
