<template>
  <div class="view-contact">
    <div class="hhh">
      <div class="stripes">
        <div class="wedge" />
      </div>
      <div class="text">
        <h1 class="title">
          Contact NodeBB
          <!-- <span class="arrow ">&darr;</span> -->
        </h1>
        <div class="sub-title">I'd like to speak to someone about...</div>
      </div>
    </div>
    <div class="contact-wrap">
      <div class="contact-area">
        <div class="grid">
          <!-- <component :is="setting('contactForm.form')" /> -->
          <div class="zd-embedded-form">
            <iframe src="/contact"></iframe>
          </div>

          <div class="aside">
            <div class="title" />
            <div class="sub-title">We're looking forward to hearing from you...</div>
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
  metaInfo() {
    return {
      title: "Contact Sales or Support",
      description:
        "Get in touch with us with questions regarding sales, support, or anything NodeBB related."
    };
  },
  methods: { setting }
};
</script>
<style lang="less">
.view-contact {
  padding-top: 4rem;
  .hhh {
    position: relative;
    text-align: center;
    line-height: 1.4;
    letter-spacing: -0.03em;
    padding: 5em 0;

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
      font-weight: var(--font-weight-bold);
      font-size: 3em;
      margin-bottom: 1rem;
      line-height: 1;
      @media (max-width: 900px) {
        font-size: 2em;
      }
    }

    .sub-title {
      color: var(--color-text-secondary);
      font-size: 1.3em;
      font-weight: 500;
      opacity: 0.6;
      @media (max-width: 900px) {
        font-size: 1.2em;
      }
    }
  }
  .contact-wrap {
    padding: 0;
  }
  .contact-area {
    position: relative;
    z-index: 10;
    .grid {
      // padding: 0 1em;
      // max-width: 600px;
      // margin: 0 auto;
      // align-items: center;

      padding: 1rem;
      max-width: 600px;
      margin: 0 auto;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 8px 10px 0px,
        rgba(34, 34, 34, 0.07) 0px 0px 0px 1px inset;
      background: #fff;
      border-radius: 0.5rem;
      overflow: hidden;
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
        font-family: var(--font-family-cursive);
      }
    }
  }
  .contact-form {
    // padding: 1.5em;
    // background: #fff;
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
.zd-embedded-form {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  min-height: 70vh;
  iframe {
  }
}
</style>
