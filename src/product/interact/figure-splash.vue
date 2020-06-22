<template>
  <figure ref="wrapper" class="interact-graph">
    <div class="stage-wrap" :style="{ transform: `scale(${scale})` }">
      <div class="stage">
        <div v-for="(screenshot, i) in screenshots" :key="i" class="interact-wrap">
          <img :src="screenshot.img" alt="interact" />
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
          img: require("../img/view-topic.svg")
        },
        {
          img: require("../img/view-topic-qna.svg")
        },
        // {
        //   img: require("../img/composer-mentions-alt.svg")
        // },
        {
          img: require("../img/view-topic-qna-clip.svg")
        },
        {
          img: require("../img/view-topic-favorite-clip.svg")
        }
        // {
        //   img: require("../img/composer-mention-clip.svg")
        // }
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
figure.interact-graph {
  max-width: 100%;
  .stage-wrap {
    transform-origin: 0;
  }
  .stage {
    padding: 30% 0;
    width: 700px;
    position: relative;
    transform: translateX(-8.75rem) translateY(-6rem) scale(0.78);
    perspective: 1108px;
    @media (max-width: 1200px) {
      transform: translateX(0.25rem) translateY(-6rem) translateZ(4rem)
        scale(0.74);
    }
    @media (max-width: 900px) {
      width: 500px;
      transform: translateX(-4.75rem) translateY(-8.35rem) scale(0.76);
    }

    .interact-wrap {
      width: 560px;
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
        transform: rotateX(8deg) rotateY(-6deg) translateZ(-20rem)
          translateY(0.45rem) translateX(-6.5rem) scale(0.8);
        width: auto;
        padding-top: 0.5rem;
      }
      &:nth-child(2) {
        transform: rotateX(4deg) rotateY(-2deg) translateZ(-21.5rem)
          translateY(16rem) translateX(8rem);
        top: 5.5rem;
        z-index: 6;
      }
      &:nth-child(3) {
        transform: rotateX(-2deg) rotateY(-20deg) translateZ(-5.5rem)
          translateY(9rem) translateX(17.85rem) scale(0.28);
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.2),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.2);
        top: -6rem;
        z-index: 13;
        border-radius: 1rem;
      }
      &:nth-child(4) {
        transform: rotate(-4deg) rotateY(6deg) rotateX(16deg) translateZ(-32rem)
          translateX(18rem) translateY(-8.5rem) scale(0.38);
        box-shadow: 0 50px 100px rgba(50, 50, 93, 0.13),
          0 15px 35px rgba(50, 50, 93, 0.11), 0 5px 15px rgba(0, 0, 0, 0.07);
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        top: 14rem;
        border-radius: 1rem;
        z-index: 12;
      }
    }
  }
}
</style>