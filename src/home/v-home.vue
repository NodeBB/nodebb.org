<template>
  <div class="view-home">
    <home-splash />

    <section
      v-for="(feature, index) in features"
      :id="feature.id"
      :key="index"
      class="features content"
      :data-home="`feature-` + index"
      :class="[index == features.length - 1 ? 'last' : '']"
    >
      <div class="split-feature" :class="[index % 2 == 0 ? 'even' : 'odd']">
        <div class="feature-content-container">
          <div class="feature-content">
            <!-- <home-icon v-if="feature.icon" class="feature-icon" :icon="feature.icon" /> -->
            <h2 class="title">{{ feature.title }}</h2>
            <div class="text" v-formatted-text="feature.text"></div>
            <div class="action">
              <factor-link v-if="feature.external" path="#" @click="vis = !vis">
                <span v-formatted-text="feature.external.text" />
              </factor-link>
              <factor-link
                v-if="feature.linkvideo"
                :path="feature.linkvideo.path"
                target="_blank"
                rel="noopener"
              >
                {{ feature.linkvideo.text }}
                <home-icon icon="play" />
              </factor-link>
              <factor-link
                v-if="feature.link"
                :path="feature.link.path"
              >{{ feature.link.text }} &rarr;</factor-link>
            </div>
          </div>
        </div>
        <div class="feature-figure-container">
          <div v-if="feature.figure" class="figure-container">
            <component :is="feature.figure" />
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="poweredby content">
      <section-poweredby class="content-pad" />
    </section>-->

    <div class="view-home-version-2">
      <div class="compare content">
        <div class="content-pad">
          <div class="features mx-4 mb-12 pt-4">
            <div class="feature-content items-center text-center">
              <!-- <div class="feature-icon align-center">
                <home-icon icon="stars" />
              </div>-->
              <div class="title">Start your community with NodeBB.</div>
              <div class="text">Select the forum option that works best for you:</div>
            </div>
          </div>
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
                  :class="row ? 'has-content text-sm' : 'empty'"
                />
                <div v-if="col.link" class="footer-row row">
                  <!-- <factor-link class="font-bold" :path="col.link.path">
                    <span v-formatted-text="col.link.text" />
                  </factor-link>-->
                  <factor-link
                    btn="primary"
                    size="medium"
                    class="font-bold"
                    rel="noopener"
                    :path="col.link.path"
                    :target="col.link.target"
                  >
                    <span v-formatted-text="col.link.text" />
                  </factor-link>
                </div>
                <div v-if="col.external" class="footer-row row">
                  <factor-link btn="primary" size="medium" class="font-bold" @click="vis = !vis">
                    <span v-formatted-text="col.external.text" />
                  </factor-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="quotes">
      <!-- <h2 class="title">What people are saying about us</h2> -->
      <section-quotes />
    </section>
    <section class="benefits content">
      <section-benefits class="content-pad" />
    </section>

    <el-cta id="cta" />

    <factor-modal class="content-footer-contact" :vis.sync="vis">
      <iframe class="content-footer-iframe" src="/contact"></iframe>
    </factor-modal>
  </div>
</template>

<script lang="ts">
import { factorModal, factorLink, factorIcon } from "@factor/ui";

export default {
  components: {
    factorModal,
    factorLink,
    factorIcon,
    elCta: () => import("./el-cta.vue"),
    homeSplash: () => import("./splash.vue"),
    homeIcon: () => import("../product/icon.vue"),
    sectionBenefits: () => import("./section-benefits.vue"),
    sectionQuotes: () => import("./section-quotes.vue")
    // sectionPoweredby: () => import("./section-poweredby.vue")
  },
  data(this: any) {
    return {
      vis: false,
      loading: true,
      loadingButtons: true,
      features: [
        {
          icon: "engage",
          title: "The best solution for engaging and retaining customers.",
          text: `From brand communities to product support boards, forums are a great way to engage and provide value to your audience.<br/><br/><em>At NodeBB, our mission is to provide forum software with all the modern features and performance you’ve come to expect from the social and mobile web.</em>`,
          external: {
            text: `Contact us`
          },
          linkvideo: {
            path: "https://youtu.be/uwgdWPeVuJE",
            text: "Watch video"
          }
        }
      ],
      compare: [
        {
          items: [
            "Open Source",
            "Self-starters and developers, nodejs enthusiasts",
            "For the tech savvy DIY pro, install and maintain NodeBB on your own server."
          ],
          link: {
            path: "https://github.com/NodeBB/NodeBB",
            text: "Go to GitHub repo &rarr;",
            target: "_blank"
          }
        },
        {
          items: [
            "Instant Hosting",
            "Growing businesses and groups",
            "Want to get your forum going right away without any set-up hassles? Our monthly hosting plans are for you."
          ],
          link: {
            path: "/pricing",
            text: "Learn more &rarr;"
          }
        },
        {
          items: [
            "Enterprise",
            "Large organizations that prefer custom-built solutions",
            "A tailored, high-performance forum for enterprise customers that integrates with your existing infrastructure."
          ],
          external: {
            text: `Contact us`
          }
        }
      ]
    };
  },

  mounted(this: any) {
    setTimeout(() => {
      this.loadingButtons = false;
    }, 1000);
  },
  methods: {},
  metaInfo() {
    return {
      title:
        "NodeBB Forum Software | Drive user engagement with a modern community platform",
      description:
        "NodeBB Forum Software - A better community platform for the modern web. NodeBB is a next generation forum software that's free and easy to use."
    };
  }
};
</script>
<style lang="less">
.view-home {
  overflow: hidden;
  .content-pad {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5em;
    width: 100%;
    z-index: 10;
    position: relative;
  }

  .benefits {
    .content-pad {
      padding-top: 4rem;
      padding-bottom: 3rem;
      @media (max-width: 900px) {
        padding-top: 4rem;
        padding-bottom: 1.5rem;
      }
      @media (max-width: 768px) {
        padding-top: 2rem;
        padding-bottom: 4rem;
      }
    }
  }

  .features {
    &.content {
      &.last {
        box-shadow: none;
      }
      @media (max-width: 900px) {
        padding: 4rem 0;
        box-shadow: none;
      }
    }
    .split-feature {
      display: grid;
      grid-column-gap: 3rem;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a b";
      align-items: center;
      // min-height: 80vh;
      &.even {
        .feature-content-container {
          justify-self: flex-end;
        }
      }
      &.odd {
        grid-template-areas: "b a";
        .feature-figure-container {
          justify-content: flex-end;
          @media (max-width: 900px) {
            justify-content: center;
          }
        }
      }
      .feature-content-container {
        grid-area: a;
        min-width: 0;
        .feature-content {
          padding: 5rem 1.5rem;
          // max-width: 550px;
          max-width: 620px;
        }
      }
      .feature-figure-container {
        grid-area: b;
        min-width: 0; // defaults content width
        height: 100%;
        position: relative;
        // width: 100%;
        display: flex;
        align-items: center;
        .figure-container {
          max-width: 100%;
        }
      }
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-areas: "a" "b";
        &.odd {
          grid-template-areas: "a" "b";
        }
        .feature-content-container {
          .feature-content {
            padding: 3rem 1.5rem 1rem;
            max-width: 100%;
          }
        }
        .feature-figure-container {
          justify-content: center;
        }
      }
    }

    .feature-content {
      // letter-spacing: -0.01em;
    }
    .feature-icon {
      height: 72px;
      width: 72px;
      margin-bottom: 1rem;
      box-shadow: 0px 2px 3px rgba(50, 50, 93, 0.13),
        0px 2px 5px rgba(50, 50, 93, 0.11), 0px 5px 15px rgba(0, 0, 0, 0.07);
      border-radius: 6px;
    }
    .title {
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      // color: #fff;
    }
    .text {
      // font-weight: 300;
      font-size: 1.35rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }
    .action {
      font-weight: 700;
      font-size: 1.35rem;
      .factor-link {
        display: inline-block;
        line-height: 1;
        margin-right: 2.5rem;
        margin-bottom: 1rem;
        font-weight: 700;
        @media (max-width: 900px) {
          margin-bottom: 2rem;
        }
        .icon {
          display: inline-block;
          margin-left: 0.25rem;
        }
      }
    }
    @media (max-width: 900px) {
      .title {
        font-size: 1.75rem;
      }
      .text {
        font-size: 1.15rem;
      }
    }
  }

  .quotes {
    padding: 3rem 0;
    @media (max-width: 900px) {
      padding: 3rem 1rem;
    }
    h2.title {
      text-align: center;
      font-weight: var(--font-weight-bold, 700);
      margin-bottom: 6rem;
      text-transform: uppercase;
      color: var(--color-text-secondary);
      @media (max-width: 900px) {
        margin-bottom: 4rem;
      }
    }
  }
}
.view-home-version-2 {
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
      // opacity: 0.1;
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
        font-size: 2.5rem;
        line-height: 1.1;
        margin: 0 0 0.5em;
        letter-spacing: -0.02em;
        font-weight: var(--font-weight-bold, 700);
      }
      .text {
        font-size: 1.5rem;
        line-height: 1.5;

        a {
          color: #fff;
        }
      }
      .header-actions {
        font-size: 1.1em;
        margin-top: 2em;
        // display: grid;
        // grid-template-columns: 1fr 200px;
        // grid-gap: 1.5em;
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
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1),
          0 15px 35px rgba(0, 0, 0, 0.1), 0 50px 100px rgba(50, 50, 93, 0.1);
        // background: #f6f9fc url(./img/screencast-poster.jpg) 50%/100%;
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
            0 8px 16px -8px rgba(0, 0, 0, 0.3),
            0 -6px 16px -6px rgba(0, 0, 0, 0.025);
          width: 72px;
          height: 72px;
        }
      }
    }
  }
  //
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
    // background: url("./img/dot.svg");
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
      // min-height: 90vh;
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
      // letter-spacing: -0.01em;
      // max-width: 500px;
      max-width: 620px;
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

      box-shadow: 0 2px 3px rgba(25, 82, 190, 0.13),
        0 2px 5px rgba(25, 82, 190, 0.11), 0 5px 15px rgba(0, 0, 0, 0.07);
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
    // .super {
    //   text-transform: uppercase;
    //   font-weight: 600;
    //   font-size: 1.3em;
    //   color: var(--color-primary);
    //   margin-bottom: 0.6em;
    // }
    // .title {
    //   font-size: 2em;
    //   line-height: 1.3;
    //   margin-bottom: 1.5rem;
    //   font-weight: var(--font-weight-bold, 700);
    // }
    // .text {
    //   font-weight: 400;
    //   font-size: 1.4em;
    //   line-height: 1.6;
    //   margin-bottom: 1rem;
    //   opacity: 0.8;
    // }
    .action {
      margin-top: 2rem;
    }
  }
  .compare {
    // background-color: var(--color-bg-alt);
    background-color: #1a1f36;
    // background-image: linear-gradient(#e3e8ee 80%, #e3e8ee);
    // box-shadow: inset 0px -1px 1px #e3e8ee;
    padding: 4rem;
    // margin: 0 0 -2rem 0;
    @media (max-width: 900px) {
      padding: 2.5rem 1rem;
    }
    .feature-content {
      // padding: 10rem 1.5rem;
      margin: 0 auto;
      // max-width: 550px;
      max-width: 620px;
      .title {
        color: #fff;
      }
      .text {
        color: #fff;
        // font-family: var(--font-family-cursive);
        font-size: 1.75rem;
        margin-bottom: 0;
      }
      @media (max-width: 900px) {
        .text {
          color: #fff;
          font-size: 1.25rem;
          margin-bottom: 0;
          line-height: 1.4;
        }
      }
    }
    .feature-table {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1rem;
      position: relative;
      &:before {
        content: "";
        background-image: url(./img/nbb-bg-a-dark.svg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        height: 400px;
        width: 700px;
        display: block;
        z-index: -1;
        left: -12rem;
        position: absolute;
        top: -9.5rem;
        opacity: 0.72;
      }
      &:after {
        content: "";
        background-image: url(./img/nbb-bg-d-dark.svg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;

        display: block;
        z-index: -1;
        position: absolute;
        opacity: 0.72;

        right: -17rem;
        bottom: -13.5rem;
        width: 400px;
        height: 700px;
      }
      .column {
        text-align: left;
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
          // color: #1952be;
          z-index: 0;
          margin-right: -1em;
          .has-content {
            background: var(--color-bg-contrast);
          }
        }
        &.data {
          position: relative;
          z-index: 1;
          box-shadow: 0 4px 35px 0 rgba(23, 55, 87, 0.1),
            0 5px 15px 0 rgba(0, 0, 0, 0.07);
          transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
          // background: rgb(197, 211, 239);
          background: #d5dff3;

          &:first-child {
            background: #fff;
            &:before {
              content: "";
              background-size: contain;
              background-repeat: no-repeat;
              background-position: 0;
              background-image: url(./img/icon-opensource.svg);
              flex: none;
              display: block;
              width: 3.45rem;
              height: 3.45rem;
              margin-left: 2rem;
              margin-top: 1.5rem;
              margin-bottom: -1rem;
            }
            .row {
              &.footer-row {
                background: #fff;
                a {
                  button {
                    // background: #00423c;
                    // box-shadow: 0 0 0 1px #00423c;
                  }
                }
              }
            }
          }
          &:nth-child(2) {
            &:before {
              content: "";
              background-size: contain;
              background-repeat: no-repeat;
              background-position: 0;
              background-image: url(./img/icon-instanthosting.svg);
              flex: none;
              display: block;
              width: 3.45rem;
              height: 3.45rem;
              margin-left: 2rem;
              margin-top: 1.5rem;
              margin-bottom: -1rem;
            }
            .row {
              &.footer-row {
                a {
                  button {
                    // color: var(--color-bg, #fff);
                    // background: #1a1f36;
                    // box-shadow: 0 0 0 1px #1a1f36;
                  }
                }
              }
            }
          }
          &:nth-child(3) {
            &:before {
              content: "";
              background-size: contain;
              background-repeat: no-repeat;
              background-position: 0;
              background-image: url(./img/icon-enterprise.svg);
              flex: none;
              display: block;
              width: 3.45rem;
              height: 3.45rem;
              margin-left: 2rem;
              margin-top: 1.5rem;
              margin-bottom: -1rem;
            }
          }
          &:last-child {
            background: #2a2f45;
            .row {
              &.has-content {
                color: #fff;
              }
              &.footer-row {
                background: #242940;
                a {
                  button {
                    background: #5534a7;
                    box-shadow: 0 0 0 1px #5534a7;
                    color: #fff;
                  }
                }
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
            font-size: 1.5rem;
          }
          .row {
            // border-bottom: 1px solid #e3e8ee;
            transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
            font-size: 1rem;
            &:last-child {
              border: none;
              background: rgb(197, 211, 239);
              margin-top: 2rem;
              padding-bottom: 1.5rem;
              text-align: right;
            }
            @media (max-width: 900px) {
              font-size: 1rem;
            }
          }
          .row:first-child {
            font-size: 1.4rem;
            // background: var(--color-bg-splash);
            // color: #fff;
            font-weight: 700;
            border-bottom-color: #e3e8ee;
            border-bottom-style: solid;
          }
          .footer-row {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            //padding: 8px 10px;
            height: 56px;
            transform: translateY(50%);
            opacity: 1;

            border: none;
            position: relative;
            transform: translate(0);

            // background: var(--color-primary, #0471ff);
            // color: #fff;
            a {
              // color: #fff;
            }
          }
          .row {
            &:nth-last-child(1),
            &:nth-last-child(2) {
              border-bottom: none;
            }
          }
          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
              0 30px 60px -30px rgba(0, 0, 0, 0.3),
              0 -18px 60px -10px rgba(0, 0, 0, 0.025);
            .row:nth-last-child(2) {
              // padding-bottom: 1rem;
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
        height: 100px;
        padding: 1.5rem 2rem 0;
        &:nth-child(1) {
          height: 100px;
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
        &:hover {
          transform: translateY(0);

          .row:nth-last-child(2) {
            padding-bottom: 0;
          }
          .footer-row {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }

    ~ .cta {
      margin-top: 2rem;
    }
  }
}
.view-tour {
  font-weight: 400;
  --color-bg-splash: #1b223c;
  --color-bg-splash-contrast: #233575;
  --color-bg-contast: #f5f8fc;
  --color-text-splash: #949cb8;
  .email-list-form {
    font-size: 1.3em;
    max-width: 600px;
    margin: 0 auto;
  }
  .content-pad {
    line-height: 1.2;
    font-size: 1.2em;
    .content-width {
      max-width: 1200px;
      margin: 0 auto;
    }
    .title {
      font-size: 1.2em;
      line-height: 1.4;
      margin: 0.5em 0;
      font-weight: 600;
    }
    p {
      line-height: 1.6em;
      opacity: 0.8;
    }
    .actions {
      margin-top: 1em;
    }
    img {
      width: 100%;
      margin: 0 auto;
    }
    @media (max-width: 900px) {
      font-size: 1em;
      .title {
        font-size: 1.1em;
        .alt {
          display: block;
        }
      }
    }
  }
  .skew-bg {
    // transform: translateY(-5em) skewY(-4deg);
    // .unskew-bg {
    //   transform: skewY(4deg) scale(0.8);
    // }
  }
  .stark-bg {
    background-image: linear-gradient(
      35deg,
      var(--color-bg-splash) 70%,
      var(--color-bg-splash-contrast)
    );
    color: #fff;
    .stark-bg-image {
      // background-image: url(./img/rectangles.svg);
      background-repeat: no-repeat;
      background-size: 80%;
      @media (max-width: 900px) {
        background-size: 100%;
      }
    }
  }
  .hhh {
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5em;
    height: 5em;
    background-color: #fff;
    background-image: linear-gradient(15deg, #fff, var(--color-bg-contast) 90%);
  }
  .stripes-wrap {
    position: relative;
    .stripes {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      top: 0;
      transform: skewY(-5deg);
      background: #fff;
    }
    .content-pad {
      position: relative;
    }
  }
  .svg-wrap {
    display: inline-block;
    width: 2.5em;
    height: 2.5em;
    line-height: 2.5em;
    svg {
      min-height: 2.5em;
      min-width: 2.5em;
    }
  }
  pre {
    font-size: 1em;
    text-align: left;
    background: #1b223c;
    margin-top: 1em;
    border-radius: 4px;
    code {
      overflow-x: auto;
      opacity: 0.7;
      color: #fff;
      white-space: pre;
      padding: 1.4em;
      line-height: 1.5em;
      display: block;
    }
  }
  .label {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    &.label-blue {
      color: var(--color-primary);
    }
  }
  .splash-wrap {
    position: relative;
    .splash {
      position: relative;
      z-index: 1;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      padding: 7em 0 10em;
      @media (max-width: 900px) {
        padding: 6em 2em 15em;
        text-align: left;
      }
      .title {
        font-size: 2.5em;
        letter-spacing: -0.03em;
        line-height: 1.3;
        margin: 0.3em 0;
        color: var(--color-light);
        .alt {
          display: block;
          opacity: 0.75;
          font-size: 0.9em;
        }
        @media (max-width: 900px) {
          font-size: 1.8em;
        }
      }
      .subtitle {
        opacity: 0.7;
        font-size: 1.4em;
        line-height: 1.6em;
        margin-bottom: 1.5em;
        color: var(--color-text-splash);
        @media (max-width: 900px) {
          font-size: 1.2em;
        }
      }
    }
  }
  .banner-wrap {
    position: relative;
    margin-top: -140px;
    z-index: 60;
    .banner {
      padding: 2em 0;
      box-shadow: var(--box-shadow-panel);
      background: #fff;
      border-radius: 5px;
      padding-right: 3em;
      padding-left: 3em;
      display: grid;
      grid-gap: 4em;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 900px) {
      .banner {
        grid-template-columns: 1fr;
        padding: 1em;
        border-radius: 0;
      }
      margin-top: -170px;
    }
  }
  .features-wrap {
    // &.stripes-wrap {
    //   background-image: linear-gradient(
    //     35deg,
    //     var(--color-bg-splash) 70%,
    //     var(--color-bg-splash-contrast)
    //   );
    //   color: #fff;
    // }
    overflow-x: hidden;
    overflow: visible;
    .feature {
      overflow-x: visible;
      .feature-wrap {
        position: relative;
        z-index: 1;
        min-height: 90vh;
        display: grid;
        grid-column-gap: 4rem;
        grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr);
        grid-template-areas: "a b";
        align-items: center;
      }
      @media (max-width: 900px) {
      }
      .figure {
        display: flex;
        padding: 3em 0;
        width: 100%;
        @media (max-width: 900px) {
          padding: 2em;
          max-width: 600px;
        }
      }
      &.even {
        .feature-content-container {
          justify-self: flex-end;
        }
      }
      &.odd {
        background-color: #fff;
        background-image: linear-gradient(
          45deg,
          var(--color-bg-contast),
          #fff 90%
        );
        transform: skewY(-3deg);
        .feature-wrap {
          grid-template-areas: "b a";
          transform: skewY(3deg);
        }
        .feature-figure-container {
          min-width: 0;
          width: 100%;
          justify-self: flex-end;
          figure {
            justify-content: flex-end;
          }
        }
        &.power {
          @media (min-width: 900px) {
            .feature-content-container {
              padding-bottom: 12em;
            }
          }
        }
        &.hello {
          transform: skewY(0);
          background-image: url("../extend/img/dot.svg");
          .feature-wrap {
            transform: skewY(0);
            background: #fff;
            max-width: 1100px;
            margin: 0 auto;
            padding: 3em;
            min-height: auto;
            box-shadow: var(--box-shadow-panel);
            @media (max-width: 900px) {
              padding: 3em 1em;
              overflow: hidden;
            }
          }
          .feature-content-container {
            padding: 0;
          }
          .feature-content {
            padding: 0;
          }
          pre {
            overflow: inherit;
            background: white;
            transform: scale(1) perspective(1040px) rotateY(11deg) rotateX(2deg)
              rotate(-2deg) translateZ(-40px);
            box-shadow: -1px 1px 4px 0 rgba(26, 26, 67, 0.1),
              -9px 25.5px 15px -25px rgba(50, 50, 93, 0.3),
              -10.4px 25.5px 75px -37.5px rgba(0, 0, 0, 0.3);
            code {
              color: var(--color-text);
              font-size: 1.6em;
              span {
                color: #ff0076;
                &.a {
                  color: #0496ff;
                }
              }
              @media (max-width: 900px) {
                font-size: 1.4em;
              }
            }
          }
        }
      }
      .feature-content-container {
        grid-area: a;
        padding: 6rem 0;
      }
      .feature-figure-container {
        grid-area: b;
        position: relative;
      }
      .feature-content {
        max-width: 500px;
        padding: 4em 1em;
        font-size: 1.3em;
      }
      @media (max-width: 900px) {
        .feature-wrap {
          grid-template-columns: 1fr;
          grid-template-areas: "a" "b";
        }
        &.odd {
          .feature-wrap {
            grid-template-areas: "a" "b";
          }
        }
        .feature-content-container {
          padding: 0;
          .feature-content {
            padding: 5rem 1em 1rem;
            max-width: 100%;
          }
        }
        .feature-figure-container {
          justify-content: center;
          .figure {
            justify-content: flex-start;
          }
        }
      }
      perspective: 1000px;
    }
  }
  .testimonial {
    margin: -10em 0 5em;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    background: #233575;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3);
    z-index: 10;
    figure {
      height: 100%;
      position: absolute;
      overflow: hidden;
      z-index: 2;
      right: -40px;
      top: 0;
      left: calc(50% + 100px);
      transform: skewX(-8deg);
      @media (max-width: 900px) {
        position: relative;
        height: 200px;
        background: #525f7f;
        overflow: hidden;
        right: 0;
        top: 0;
        left: 0;
        -webkit-transform: skewX(0);
        transform: skewX(0);
      }
      span {
        display: block;
        position: absolute;
        // background-image: url(./img/_);
        background-size: cover;
        background-position: center center;
        height: 100%;
        right: 30px;
        top: 0;
        bottom: 0;
        left: -110px;
        transform: skewX(8deg);
        @media (max-width: 900px) {
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-position: 50%;
          background-size: cover;
          -webkit-transform: skewX(0);
          transform: skewX(0);
        }
      }
    }
    blockquote {
      width: 50%;
      // background-image: url(./img/_quote);
      background-repeat: no-repeat;
      background-position: 3em 3em;
      background-size: 25px 25px;
      padding: 5em 3em 3em;
      @media (max-width: 900px) {
        background-position: 2em 2em;
        width: 100%;
        padding: 4em 2em 2em;
      }
      p {
        font-size: 1.3em;
        line-height: 1.6;
      }
      .attribution {
        margin-top: 2em;
        font-weight: 500;
        a {
          color: inherit;
          opacity: 0.5;
        }
      }
    }
  }
  .cta-wrap {
    transform: skewY(-3deg);
    padding: 8em 1em;
    color: var(--color-light);
    // background: #1b223c url(./img/rectangles.svg) no-repeat center center;
    background-size: 80%;
    .content-pad {
      transform: skewY(3deg);
    }
    .cta {
      margin: 0 auto;
      max-width: 600px;
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 60px;
      text-align: center;
      @media (max-width: 900px) {
        text-align: left;
        grid-template-columns: 1fr;
      }
      .title {
        font-weight: 600;
        font-size: 1.6em;
        letter-spacing: -0.03em;
        line-height: 1.4em;
        margin-bottom: 0.2em;
        .alt {
          opacity: 0.7;
        }
      }
      .subtitle {
        opacity: 0.7;
        font-size: 1.2em;
        line-height: 1.6em;
        font-weight: 400;
      }
      .actions {
        margin-top: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 900px) {
          display: block;
          margin-top: 1.5em;
          a {
            display: inline-block;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
