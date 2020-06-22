<template>
  <figure ref="wrapper" class="custom-design">
    <div class="stage-wrap" :style="{ transform: `scale(${scale})` }">
      <div class="stage">
        <div v-for="(screenshot, i) in screenshots" :key="i" class="custom-design-wrap">
          <img :src="screenshot.img" alt="custom design" />
        </div>
      </div>
    </div>
  </figure>
</template>

<script lang="ts">
export default {
  data() {
    return {
      width: 500,
      screenshots: [
        {
          img: require("../img/theme-convoe.svg")
        },
        {
          img: require("../img/theme-convoe-alt.svg")
        }
      ]
    };
  },
  computed: {
    scale(this: any) {
      return Math.max(Math.min(this.width / 500, 1), 0.5);
    }
  },
  mounted(this: any) {
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
figure.custom-design {
  max-width: 100%;
  .stage-wrap {
    transform-origin: 0;
  }
  .stage {
    padding: 30% 0;
    width: 800px;
    position: relative;
    transform: translateX(-3.25rem) translateY(-12rem) translateZ(12rem)
      scale(0.68);
    perspective: 1012px;
    @media (max-width: 1200px) {
      padding: 30% 0;
      width: 800px;
      position: relative;
      transform: translateX(-17.5rem) translateY(-10.5rem) translateZ(12rem)
        scale(0.6);
      perspective: 1012px;
    }
    @media (max-width: 900px) {
      width: 500px;
      // transform: translate(-9.5rem, -7.5rem) scale(0.48);
      transform: translate(-6.5rem, -7.5rem) scale(0.48);
    }

    .custom-design-wrap {
      width: 500px;
      top: 0;
      left: 0;
      position: absolute;

      box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
        -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
        13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      border-radius: 0.75rem;
      background: #fff;

      img,
      svg {
        width: 100%;
        display: block;
      }
      &:nth-child(1) {
        z-index: 6;
        transform: rotate(0deg) rotateY(4deg) rotateX(3.5deg) translateZ(-2rem)
          translateX(4rem) translateY(8.5rem);
        width: 780px;
      }
      &:nth-child(2) {
        transform: rotate(0deg) rotateY(-4deg) rotateX(-3deg) translateZ(-22rem)
          translateX(8.5rem) translateY(34rem);
        top: -3.5rem;
        left: 17.75rem;
        z-index: 6;
        transform: rotate(0deg) rotateY(4deg) rotateX(3.5deg) translateZ(-22rem)
          translateX(2rem) translateY(18.5rem);
      }
      &:nth-child(3) {
        transform: rotate(0deg) rotateY(0deg) rotateX(1.5deg) translateZ(-74rem)
          translateX(-2.5rem) translateY(31.5rem);
        top: 4rem;
        z-index: 6;
        border-radius: 1rem;
      }
    }
  }
}
</style>