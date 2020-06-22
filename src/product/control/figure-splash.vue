<template>
  <figure ref="wrapper" class="figure-control">
    <div class="stage-wrap">
      <div class="control">
        <div class="screenshot acp-dashboard">
          <img src="../img/acp-dashboard.svg" alt />
        </div>
        <!-- <div class="screenshot acp-install">
          <img src="./img/.svg" alt="" />
        </div>-->
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
figure.figure-control {
  max-width: 100%;

  .stage-wrap {
    transform-origin: center left;
  }
  .control {
    padding: 30% 0;
    width: 520px;
    position: relative;
    transform: scale(1);
    transform-style: preserve-3d;
    @media (max-width: 1200px) {
    }
    @media (max-width: 900px) {
    }
    .screenshot {
      background: #fff;
      display: inline-block;
      &.acp-dashboard {
        position: absolute;
        bottom: 0;
        left: 0;
        right: auto;
        z-index: 0;
        // transform: rotateX(0) rotateY(0) rotate(0deg) translateY(1rem)
        //   translateY(1rem) translateX(0rem) scale(0.8);
        transform: rotateX(0) rotateY(0) rotate(0deg) translateY(1rem)
          translateX(-2.25rem);
        box-shadow: 0 20px 90px rgba(50, 50, 93, 0.13),
          0 15px 35px rgba(50, 50, 93, 0.11), 0 5px 15px rgba(0, 0, 0, 0.07);
        overflow: hidden;
        border-radius: 0.5rem;
        @media (max-width: 1200px) {
          transform: rotateX(0) rotateY(0) rotate(0deg) translateX(5.35rem)
            translateY(0rem) translateX(0);
        }
        @media (max-width: 900px) {
          transform: rotateX(0) rotateY(0) rotate(0deg) translateY(1rem)
            translateY(1rem) translateX(0rem) scale(0.8);
        }
      }

      // &.acp-install {
      //   position: absolute;
      //   bottom: 0px;
      //   left: 60px;
      //   transform: rotateX(2deg) rotateY(15deg) translateY(36px)
      //     translateX(-30px) scale(1) perspective(1050px);
      //   background: #ffffff;
      //   box-shadow: -5px -5px 27px rgba(0, 0, 0, 0.1),
      //     -1px -1px 3px rgba(50, 50, 93, 0.2);
      //   overflow: hidden;
      //   border-radius: 4px 4px 0 0;
      // }
    }
  }
}
</style>
