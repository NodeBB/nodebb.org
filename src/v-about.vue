<template>
  <div class="view-company">
    <div class="hhh">
      <div class="stripes">
        <div class="wedge" />
      </div>
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-left lg:w-3/4 w-full">
          <h1 class="title">Community forum software for the modern web.</h1>
          <div
            class="sub-title"
          >Online forums or bulletin boards were the place where communities first gathered and thrived on the Internet. Forums pre-date blogs, social networks and smartphones. And millions of them are still going strong. From brand communities to product support boards, forums continue to be a great way to engage and provide value for communities.</div>
        </div>
      </div>
    </div>
    <div class="company-wrap">
      <div class="company-area">
        <div class="grid">
          <div class="aside">
            <div class="title" />
            <!-- <div class="sub-title">This is NodeBB.</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { setting } from "@factor/api";

export default {
  data() {
    return {
      loading: true
    };
  },
  created: function() {},
  methods: { setting },
  metaInfo() {
    return {
      title: "Forum software for today's web - About NodeBB",
      description:
        "Community forum software for today's web: flexible, scalable and user-friendly."
    };
  }
};
</script>
<style lang="less">
.view-company {
  padding-top: 4rem;
  canvas {
    margin: -60px auto;
  }
  .hhh {
    position: relative;
    text-align: center;
    line-height: 1.4;
    letter-spacing: -0.03em;
    padding: 0 0 4rem;

    @media (max-width: 900px) {
      padding: 1em 0;
      text-align: left;
    }

    .text {
      max-width: 600px;
      margin: 0 auto;
      position: relative;
      z-index: 10;
      padding: 0 1rem;
      letter-spacing: -0.03em;

      .arrow {
        color: var(--color-primary);
      }
    }
    .title {
      font-size: 5em;
      letter-spacing: -0.045em;
      line-height: 1.1;
      font-weight: 700;
      margin-bottom: 1rem;

      @media (max-width: 900px) {
        font-size: 2em;
      }
    }

    .sub-title {
      font-weight: 400;
      font-size: 1.4em;
      line-height: 1.6;
      margin-bottom: 1rem;
      opacity: 0.8;

      @media (max-width: 900px) {
        font-size: 1.2em;
      }
    }
  }
  .company-wrap {
    padding: 2em 0 4em;
  }
  .company-area {
    position: relative;
    z-index: 10;
    .grid {
      padding: 0 1em;
      max-width: 600px;
      margin: 0 auto;
      align-items: center;
    }
    .aside {
      padding: 1.5em;
      font-size: 1.8em;
      line-height: 1.2;
      .title {
        font-size: 1.5em;
      }
      .sub-title {
        font-weight: 500;
        opacity: 0.5;
        color: var(--color-text-secondary);
      }
    }
  }
  .company-form {
    padding: 1.5em;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 0 0.4px rgba(50, 50, 93, 0.05),
      0 50px 100px -20px rgba(50, 50, 93, 0.25),
      0 30px 60px -30px rgba(0, 0, 0, 0.3);
  }
  .confirm {
    padding: 8em 2em;
    text-align: center;
    .title {
      font-size: 1.7em;
    }

    .description {
      opacity: 0.5;
    }
    .actions {
      margin-top: 1em;
    }
  }
  .support {
    text-align: center;
    margin-top: 3em;
    font-weight: 500;
    .description {
      font-size: 0.85em;
      opacity: 0.6;
    }
  }
}
</style>
