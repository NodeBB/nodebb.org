<template>
  <figure ref="wrapper" class="figure-notifications">
    <div class="stage-wrap" :style="{ transform: `scale(${scale})` }">
      <div class="notifications">
        <div class="screenshot card-notifications-list">
          <img src="../img/notifications.svg" alt="Notifications" />
        </div>
        <div class="screenshot card-notifications-page">
          <img src="../img/notifications-full.svg" alt="Notifications" />
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
figure.figure-notifications {
  max-width: 100%;
  @media (max-width: 900px) {
    margin: 1rem auto 4rem;
    width: 450px;
  }
  .stage-wrap {
    transform-origin: center right;
    perspective: 1000px;
    transform-style: preserve-3d;
    @media (max-width: 900px) {
      transform-origin: center;
    }
  }
  .notifications {
    padding: 30% 0;
    width: 500px;
    position: relative;
    transform-style: preserve-3d;
    transform: scale(0.58) translateX(2rem) translateY(-3rem);
    @media (max-width: 900px) {
      // transform: translateZ(-16rem) translateY(2rem) translateX(-4rem);
      transform: translate(-1rem, 2rem) scale(0.72);
    }
    .screenshot {
      background: #fff;
      display: inline-block;
      &.card-notifications-list {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 0;
        transform: rotateX(8deg) rotateY(-8deg) translateZ(3rem)
          translateY(1rem) translateX(4rem);
        box-shadow: 0 50px 100px rgba(50, 50, 93, 0.13),
          0 15px 35px rgba(50, 50, 93, 0.11), 0 5px 15px rgba(0, 0, 0, 0.07);
        overflow: hidden;
        border-radius: 0.5rem;
        padding-right: 1rem;
      }
      &.card-notifications-page {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotateX(2deg) rotateY(20deg) translateZ(3rem)
          translateY(-12rem) translateX(-13.75rem) scale(0.46);
        background: #fff;
        box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
          -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
          13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        border-radius: 1rem;
      }
    }
  }
}
</style>