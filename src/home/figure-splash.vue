<template>
  <figure ref="wrapper" class="splash-figure-container splash-figure-home">
    <div class="figure-wrap">
      <div class="splash-figure dashboard">
        <div class="stage">
          <img
            src="../product/img/desktop-view.svg"
            alt="NodeBB Community Product Desktop View"
            class="main"
          />
          <img
            src="../product/img/category-topic-view-clip-b.svg"
            alt="NodeBB Community Category Topic View"
            class="main-clip"
          />

          <img
            src="../product/img/tablet-view.svg"
            alt="NodeBB Community Tablet View"
            class="tablet-device"
          />
          <img
            src="../product/img/tablet-composer-view.svg"
            alt="NodeBB Community Composer View"
            class="tablet-device-clip"
          />

          <img
            src="../product/img/mobile-view.svg"
            alt="NodeBB Community Mobile View"
            class="mobile-device"
          />
          <img
            src="../product/img/category-topic-view-clip-a.svg"
            alt="NodeBB Community ategory Topic View"
            class="mobile-device-clip"
          />
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
      animationInterval: 10000
    }
  },
  computed: {
    scale(this: any) {
      return Math.max(Math.min(this.width / 900, 1), 0.5)
    }
  },

  mounted() {
    this.width = window.innerWidth

    window.addEventListener("resize", () => {
      this.width = window.innerWidth < 900 ? window.innerWidth : 900
    })
  },
  methods: {
    getWidth(this: any) {
      return this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 100
    }
  }
}
</script>

<style lang="less">
figure {
  &.splash-figure-home {
    position: relative;

    .figure-wrap {
      margin: 0 auto;
      width: 800px;
      height: 500px;
      transform-origin: left center;
      @media (max-width: 1200px) {
        width: 600px;
        height: 400px;
      }
      @media (max-width: 900px) {
        margin: 4rem auto 2rem;
        width: 450px;
        height: 300px;
      }
    }

    .splash-figure,
    .stage {
      width: 100%;
      height: 100%;
    }

    .splash-figure {
      position: relative;
      transform-origin: center;
      perspective: 1400px;
    }
    .stage {
      perspective: 800px;
      @media (max-width: 900px) {
        perspective: 780px;
        transform: scale(0.8) translate(1rem, -3rem);
      }
    }

    .splash-figure {
      &.dashboard {
        .stage {
          .main {
            z-index: 10;
            animation: mainTransformHome 0s 1 forwards;
            background: transparent;
            box-shadow: none;
          }
          .main-clip {
            z-index: 10;
            animation: mainClipTransformHome 0s 1 forwards;
            padding: 1rem;
            border-radius: 0.75rem;
          }
          .tablet-device {
            position: absolute;
            transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
            animation: tabletTransformHome 0s 1 forwards;
          }
          .tablet-device-clip {
            position: absolute;
            transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
            animation: tabletClipTransformHome 0s 1 forwards;

            position: absolute;
            top: 1288px;
            left: 0;
            transform: scale(0.8) rotateX(0deg) rotateY(0deg) translateZ(-306px)
              translateY(32px) translateX(-148px) rotate(0deg);
            overflow: hidden;
            border-radius: 0.5rem;
            padding: 1rem;
            z-index: 1;
            @media (max-width: 1200px) {
              top: 1024px;
            }
            @media (max-width: 900px) {
              top: 314px;
              transform: scale(0.8) rotateX(0deg) rotateY(0deg) translateZ(-586px)
                translateY(114px) translateX(-148px) rotate(0deg);
            }
          }
          .main-clip,
          .mobile-device-clip,
          .tablet-device-clip {
            box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
              -19px 32.5px 105px -5px rgba(50, 50, 93, 0.3),
              13.4px 37.5px 55px -37.5px rgba(0, 0, 0, 0.3);
            background: #fff;
          }

          .mobile-device {
            max-width: 18%;
            position: absolute;
            left: 32px;
            bottom: 10px;
            transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
            animation: mobileTransformHome 0s 1 forwards;
            @media (max-width: 1200px) {
              left: 0;
              bottom: 0;
            }
          }
          .mobile-device-clip {
            position: absolute;
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
            top: -180px;
            left: 0;
            transform: scale(0.6) rotateX(0) rotateY(0) translateZ(-376px)
              translateY(58px) translateX(-538px) rotate(0deg);
            overflow: hidden;
            border-radius: 0.5rem;
            padding: 1rem;
            z-index: 1;
            position: absolute;
            transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
            animation: mobileClipTransformHome 0s 1 forwards;
            @media (max-width: 900px) {
              transform: scale(0.6) rotateX(0) rotateY(0) translateZ(-406px)
                translateY(32px) translateX(-368px) rotate(0deg);
            }
          }

          @keyframes codeScrollTransformHome {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-50%);
            }
          }
          @keyframes iconTransformHome {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes mainTransformHome {
            from {
              transform: scale(0.9);
            }
            to {
              transform: scale(1) perspective(1200px) rotateX(0deg) rotateY(0deg)
                translateZ(-74px) translateY(14px) rotate(-12deg) translateX(98px);
            }
          }
          @keyframes mainClipTransformHome {
            from {
              transform: scale(0.9);
            }
            to {
              transform: scale(1) perspective(1200px) rotateX(0deg) rotateY(-6deg)
                translateZ(-24rem) translateY(-18rem) rotate(0) translateX(9rem);
            }
          }
          @keyframes tabletTransformHome {
            from {
              transform: scale(0.9);
            }
            to {
              transform: scale(0.8) perspective(1200px) rotateX(0deg) rotateY(0deg)
                translateZ(-134px) translateY(-16rem) rotate(-12deg) translateX(-128px);
            }
          }
          @keyframes tabletClipTransformHome {
            from {
              transform: scale(0.9);
            }
            to {
              // transform: scale(0.8) perspective(1200px) rotateX(0deg) rotateY(0deg)
              //   translateZ(-134px) translateY(12px) rotate(-12deg) translateX(-128px);
            }
          }
          @keyframes mobileTransformHome {
            from {
              transform: scale(0.9);
            }
            to {
              transform: perspective(1200px) scale(1) rotateY(0deg) translateZ(230px)
                translateY(-164px) rotate(-12deg) translateX(62px);
            }
          }
          @media (max-width: 1200px) {
            from {
              transform: scale(0.9);
            }
            to {
              transform: scale(0.8) perspective(1200px) rotateX(0deg) rotateY(0deg)
                translateZ(-9rem) translateY(-12rem) rotate(-12deg) translateX(-9rem);
            }
          }

          @media (max-width: 900px) {
            @keyframes mainTransformHome {
              from {
                transform: scale(0.9);
              }
              to {
                transform: scale(1) perspective(1200px) rotateX(0deg) rotateY(0deg)
                  translateZ(-64px) translateY(-28px) rotate(-12deg) translateX(78px);
              }
            }
            @keyframes tabletTransformHome {
              from {
                transform: scale(0.9);
              }
              to {
                transform: scale(0.6) perspective(1200px) rotateX(0deg) rotateY(0deg)
                  translateZ(-134px) translateY(-548px) rotate(-12deg) translateX(-128px);
              }
            }
          }
        }
      }
    }
  }
}
</style>