<template>
  <figure ref="wrapper" class="plugins-graph">
    <div class="stage-wrap" :style="{ transform: `scale(${scale})` }">
      <div class="stage">
        <div v-for="(screenshot, i) in screenshots" :key="i" class="plugins-wrap">
          <img :src="screenshot.img" alt="plugins" />
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
          img: require("../img/acp-plugins.svg")
        },
        {
          img: require("../img/acp-plugins-clip.svg")
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
figure.plugins-graph {
  max-width: 100%;
  .stage-wrap {
    transform-origin: 0;
  }
  .stage {
    padding: 30% 0;
    width: 500px;
    position: relative;
    transform: translateY(-4rem) translateX(-7rem) scale(0.8);
    transform-style: preserve-3d;
    perspective: 1000px;

    @media (max-width: 1200px) {
      transform: translateX(-8.75rem) translateY(-6rem) scale(0.9);
      perspective: 1024px;
    }
    @media (max-width: 900px) {
      width: 500px;
      transform: translate(-4.25rem, -3rem) scale(0.68);
    }

    .plugins-wrap {
      width: 500px;
      top: 0;
      left: 0;
      position: absolute;

      background: #fff;
      box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
        -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
        13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      border-radius: 0.5rem;

      img,
      svg {
        width: 100%;
        display: block;
      }
      &:nth-child(1) {
        z-index: 6;
        transform: rotateX(6deg) rotateY(0) translateZ(4rem) translateY(1.45rem)
          translateX(3.5rem) scale(0.9);
        width: auto;
      }
      &:nth-child(2) {
        transform: rotateX(9.55deg) rotateY(2.55deg) translateZ(6.5rem)
          translateY(16.85rem) translateX(4.25rem) scale(1);
        top: 0.5rem;
        z-index: 6;
        border-radius: 0.45rem;
        padding: 1rem;
      }
    }
  }
}
</style>