<template>
  <figure ref="wrapper" class="analytics-figure">
    <div class="stage-wrap" :style="{ transform: `scale(${scale})` }">
      <div class="stage">
        <div class="screenshot analytics-tabs-mockup">
          <img src="../img/analytics.svg" alt />
        </div>
        <div class="screenshot analytics-tabs-mockup-alt">
          <img src="../img/analytics-unique.svg" alt />
        </div>
        <div class="screenshot analytics-mockup">
          <img src="../img/analytics-presence.svg" alt />
        </div>
        <div class="screenshot analytics-code-mockup">
          <img src="../img/analytics-users.svg" alt />
        </div>
        <div class="screenshot analytics-code-mockup-alt">
          <img src="../img/analytics-vs.svg" alt />
        </div>
      </div>
    </div>
  </figure>
</template>

<script lang="ts">
export default {
  data() {
    return {
      width: 500
    };
  },
  computed: {
    scale(this: any) {
      return Math.max(Math.min(this.width / 500, 1), 0.5);
    }
  },
  mounted() {
    this.width = this.getWidth();

    window.addEventListener("resize", () => {
      this.width = this.getWidth();
    });
  },
  methods: {
    getWidth(this: any) {
      return this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 100;
    }
  }
};
</script>

<style lang="less">
figure.analytics-figure {
  --color-wire: #e6ebf1;
  --color-shaded: #ced2dd;
  max-width: 100%;
  .stage-wrap {
    transform-origin: center left;
  }
  .stage {
    padding: 30% 0;
    width: 500px;
    position: relative;
    transform: translate(7rem, -5rem) scale(0.84);
    transform-style: preserve-3d;
    perspective: 1024px;
    @media (max-width: 900px) {
      transform: translate(1.75rem, -0.5rem) scale(0.7);
    }
    .annotation {
      position: absolute;
      top: 0;
      left: 15%;
      z-index: 10;
      img {
        width: 300px;
      }
    }
    .screenshot {
      top: 35px;
      background: #fff;
      position: absolute;
      img {
        max-width: 100%;
        // filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1));
      }

      &.analytics-mockup {
        right: -2.25rem;
        top: 0.855rem;
        padding: 1rem;
        transform: scale(0.62) perspective(1200px) rotateY(-12deg) rotateX(4deg)
          rotate(2deg) translateZ(4rem);
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          19px 25.5px 15px -25px rgba(50, 50, 93, 0.3),
          13.4px 25.5px 75px -37.5px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        border-radius: 0.5rem;
      }
      &.analytics-tabs-mockup {
        left: -8rem;
        padding: 1rem;
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        border-radius: 0.5rem;

        top: -4rem;
        transform: perspective(800px) rotateY(0) rotateX(10deg)
          translateZ(-96px) translateY(162px) translateX(44px);
      }
      &.analytics-tabs-mockup-alt {
        left: -8rem;
        padding: 1rem;
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        border-radius: 0.5rem;

        top: 12rem;
        transform: perspective(1200px) rotateY(0) rotateX(10deg)
          translateZ(1rem) translateY(3.5rem) translateX(-6rem) scale(0.6);
      }
      &.analytics-code-mockup {
        left: 7.85rem;
        right: auto;
        border-radius: 0.5rem;
        padding: 1rem;
        overflow: hidden;
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
        transform: scale(0.52) perspective(1200px) rotateY(0) rotateX(16deg)
          translateZ(2rem) translateX(6rem) translateX(-1rem);
        top: 18rem;
      }
      &.analytics-code-mockup-alt {
        left: 7.5rem;
        right: auto;
        border-radius: 0.5rem;
        padding: 1rem;
        overflow: hidden;
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
        transform: scale(0.7) perspective(1200px) rotateY(-18deg) rotateX(16deg)
          rotate(-3deg) translateZ(1.35rem) translateX(6rem);
        top: 0;
      }
    }
  }
}
</style>