<template>
  <figure ref="wrapper" class="figure-chat">
    <div class="stage-wrap" :style="{ transform: `scale(${scale})` }">
      <div class="chat">
        <div class="screenshot card-chat-list">
          <img src="../img/chat-full.svg" alt />
        </div>
        <div class="screenshot card-chat-page">
          <img src="../img/chat.svg" alt />
        </div>
        <div class="screenshot card-chat-clip">
          <img src="../img/chat-full-clip.svg" alt />
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
figure.figure-chat {
  max-width: 100%;
  @media (max-width: 900px) {
    margin: 1rem auto 4rem;
    width: 450px;
  }
  .stage-wrap {
    transform-origin: center right;
    perspective: 1000px;
    transform-style: preserve-3d;
    position: relative;
    left: -8.5rem;
    @media (max-width: 900px) {
      transform-origin: center;
    }
  }
  .chat {
    padding: 30% 0;
    width: 500px;
    position: relative;
    transform-style: preserve-3d;
    transform: scale(0.6) translateX(6rem) translateY(-6rem);
    @media (max-width: 1200px) {
    }
    @media (max-width: 900px) {
      transform: translateX(6rem) translateY(4rem) translateZ(-42rem);
    }
    .screenshot {
      background: #fff;
      display: inline-block;
      &.card-chat-list {
        position: absolute;
        top: 4.5rem;
        right: 0;
        z-index: 0;
        transform: rotateX(8deg) rotateY(6deg) scale(0.9);
        box-shadow: 0 50px 100px rgba(50, 50, 93, 0.13),
          0 15px 35px rgba(50, 50, 93, 0.11), 0 5px 15px rgba(0, 0, 0, 0.07);
        overflow: hidden;
        border-radius: 0.5rem;
        @media (max-width: 900px) {
          top: -3.5rem;
        }
      }
      &.card-chat-page {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotateX(0) rotateY(0) translateZ(-84rem) translateY(-19rem)
          translateX(47.35rem);
        background: #fff;
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        border-radius: 0.8rem;
        @media (max-width: 900px) {
          transform: rotateX(0) rotateY(0) translateZ(-84rem) translateY(-19rem)
            translateX(34.35rem);
          top: -7rem;
          left: 2rem;
        }
      }
      &.card-chat-clip {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotateX(-2deg) rotateY(-2deg) translateZ(14.5rem)
          translateY(10rem) translateX(6rem) rotateX(10deg) rotateY(12deg)
          scale(0.34);
        padding: 1rem;
        padding-right: 1.5rem;
        background: #fff;
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        border-radius: 0.5rem;

        @media (max-width: 900px) {
          top: -7rem;
          left: 2rem;
        }
      }
    }
  }
}
</style>