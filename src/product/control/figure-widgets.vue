<template>
  <figure ref="wrapper" class="widgets-figure">
    <div class="stage-wrap" :style="{ transform: `scale(${scale})` }">
      <div class="stage">
        <div class="screenshot widgets-tabs-mockup">
          <img src="../img/widget-left.svg" alt />
        </div>
        <div class="screenshot widgets-mockup">
          <img src="../img/widget-center.svg" alt />
        </div>
        <div class="screenshot code-mockup">
          <img src="../img/widget-right.svg" alt />
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
figure.widgets-figure {
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
    transform: translate(6rem, -1rem) scale(0.74);
    transform-style: preserve-3d;
    perspective: 1000px;
    @media (max-width: 900px) {
      transform: translateX(4rem) translateY(1rem) scale(0.68);
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
      &.code-mockup {
        transform: scale(0.72) perspective(1166px) rotateY(-15deg) rotateX(2deg)
          rotate(3deg) translateZ(0.5rem);
        top: -1.25rem;
        left: 4.85rem;
        right: auto;
        overflow: hidden;
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
        border-radius: 0.5rem;
        padding: 1rem 1rem 0;
        background: #fff;
      }
      &.widgets-mockup {
        right: 6rem;
        top: 0rem;
        transform: scale(0.62) rotateY(-12deg) rotateX(11.5deg) rotate(2deg)
          translateZ(10rem) translateY(1rem);
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          19px 25.5px 15px -25px rgba(50, 50, 93, 0.3),
          13.4px 25.5px 75px -37.5px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        background: #fff;
        border-radius: 0.5rem;
        padding: 1rem 1rem 0;
      }
      &.widgets-tabs-mockup {
        top: 0rem;
        left: 6rem;
        transform: scale(0.88) rotateY(0) rotateX(0) translateZ(-10.45rem)
          translateY(-6rem) translateX(-23.5rem);
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        background: #fff;
        border-radius: 0.65rem;
        padding: 1rem 1rem 0;
      }
    }
  }
}
</style>