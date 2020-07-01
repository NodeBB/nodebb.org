<template>
  <figure ref="wrapper" class="header-figure splash-figure-container splash-figure-main">
    <div class="stage-wrap">
      <div class="stage">
        <div class="figure-wrap">
          <div class="splash-figure code">
            <div class="stage-icons-wrap">
              <div class="stage-icons">
                <div class="icons">
                  <div v-for="icon in icons" :key="icon.name" class="icon-wrap">
                    <div class="icon">
                      <img :src="icon.img" :alt="`${icon.name} icon`" />
                    </div>
                    <div class="name">{{ icon.name }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="main wrap">
                <div class="scroller" :style="`backgroundImage: url(${scrollerBg})`" />
              </div>
              <img src="../home/img/terminal.svg" alt class="terminal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </figure>
</template>

<script lang="ts">
export default {
  data() {
    return {
      icons: [
        // { name: "NodeBB", img: require("./img/icon-nodebb.svg") },
        { name: "Node.js", img: require("./img/icon-nodejs.svg") },
        { name: "Mongo", img: require("./img/icon-mongodb.svg") },
        { name: "Redis", img: require("./img/icon-redis.svg") },
        { name: "Websockets", img: require("./img/icon-websocket.svg") }
        // { name: "Varnish", img: require("./img/icon-varnish.svg") },
        // { name: "Elastic", img: require("./img/icon-elastic.svg") }
      ],
      width: 500,
      active: 0,
      figures: [{ id: "code", caption: "NodeBB" }],
      timer: false,
      animationInterval: 10000
    };
  },
  computed: {
    scale(this: any) {
      return Math.max(Math.min(this.width / 900, 1), 0.5);
    },
    activeSlide(this: any) {
      return this.figures[this.active];
    },
    scrollerBg(this: any) {
      return require("../home/img/code.svg");
    }
  },

  mounted() {
    this.width = window.innerWidth;

    window.addEventListener("resize", () => {
      this.width = window.innerWidth < 900 ? window.innerWidth : 900;
    });

    this.runTimer();
  },
  methods: {
    getWidth(this: any) {
      return this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 100;
    },

    nextSlide(this: any) {
      if (this.active == this.figures.length - 1) {
        this.active = 0;
      } else {
        this.active++;
      }

      this.runTimer();
    },

    runTimer(this: any) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.nextSlide(), this.animationInterval);
    }
  }
};
</script>

<style lang="less">
figure.splash-figure-container.splash-figure-main {
  position: relative;

  .figure-wrap {
    margin: 0 auto;
    width: 700px;
    height: 520px;
    transform-origin: left center;
    @media (max-width: 1200px) {
      width: 600px;
      height: 400px;
      transform: translateX(9.25rem);
    }
    @media (max-width: 900px) {
      margin: 4rem auto 2rem;
      width: 450px;
      height: 300px;
      transform: translateX(2.25rem);
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
    transform: scale(0.9) translateX(-1rem) translateY(-2.45rem);
  }

  .splash-figure.themes,
  .splash-figure.code {
    img {
      position: absolute;
    }

    .main {
      border-radius: 12px;
      z-index: 10;
      box-shadow: 0px 50px 100px rgba(50, 50, 93, 0.13),
        0px 15px 35px rgba(50, 50, 93, 0.11), 0px 5px 15px rgba(0, 0, 0, 0.07);
      transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
      animation: themeTransform 1s 1 forwards;
      overflow: hidden;
      &.wrap {
        width: 100%;
        height: 100%;
        .scroller {
          overflow: hidden;
          box-shadow: none;
          width: 100%;
          height: 1000%;
          animation: codeScrollTransform 60s 0s linear;
          background-size: contain;
        }
      }
      img {
        animation: codeScrollTransform 60s 1s linear;
        width: 100%;
      }
    }

    .tablet,
    .pricing,
    .terminal {
      position: absolute;
      border-radius: 4px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05),
        0px 7px 14px rgba(50, 50, 93, 0.1);
    }
    .tablet {
      max-width: 410px;
      border-radius: 8px;
      bottom: 0;
      left: 0;
      //    animation: tabletTransform 1s 1 forwards;
      // transform: perspective(1040px) rotate(-2deg) rotateX(-2deg) rotateY(11deg)
      //    translateZ(20px) scale(1);
    }
    .terminal {
      max-width: 35%;
      z-index: 100;
      bottom: 9%;
      left: 0rem;
      animation: tabletTransform 1s 1 forwards;
      box-shadow: 0 5px 15px rgba(27, 34, 60, 0.1),
        0 15px 35px rgba(27, 34, 60, 0.1),
        20px -20px 35px rgba(80, 102, 119, 0.15);
    }
    .pricing {
      max-width: 240px;
      top: 0;
      right: 0;

      animation: themeTransform 1s 1 forwards;
      //  transform: rotateY(-13deg);
    }

    @keyframes themeTransform {
      from {
        transform: scale(0.9);
      }
      to {
        transform: scale(1) perspective(500px) rotateX(1deg) rotateY(-2deg)
          rotateZ(0deg) translateZ(-35px);
      }
    }

    @keyframes tabletTransform {
      from {
        transform: scale(0.9);
      }
      to {
        transform: perspective(1040px) rotate(-2deg) rotateX(-2deg)
          rotateY(11deg) translateZ(20px) scale(1);
      }
    }
  }
  .stage-icons-wrap {
    position: absolute;
    width: 100%;
    height: auto;
    bottom: -7.25rem;
    @media (max-width: 900px) {
      bottom: -10.25rem;
    }
    //transform-style: preserve-3d;
    .stage-icons {
      width: 100%;
      height: 100%;
      perspective: 700px;
      transform: translateX(0rem);
    }
    .flying-icon {
      transform-origin: center;
      opacity: 0;
      transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
      position: absolute;
      border-radius: 50%;
      box-shadow: 0px 30px 100px rgba(50, 50, 93, 0.13),
        0px 15px 35px rgba(50, 50, 93, 0.11), 0px 5px 15px rgba(0, 0, 0, 0.07);
    }
    .icon-wrap {
      &:nth-child(1) {
        top: 0;
        left: 5%;
        // transform: scale(0.5) rotate3d(0, 0, 0, 18deg) translate3d(47%, 0px, 0);
        animation: iconTransform 0.3s 0s forwards;
      }
      &:nth-child(2) {
        top: 0;
        left: 16%;
        // transform: scale(1) rotate3d(-1, -1, 0, -18deg)
        //   translate3d(56%, -75%, 0);
        animation: iconTransform 0.3s 0.1s forwards;
      }
      &:nth-child(3) {
        top: 0;
        left: 49%;
        // transform: scale(1.4) rotate3d(1, 0, 1, 49deg) translateY(-40%);
        animation: iconTransform 0.3s 0.3s forwards;
      }
      &:nth-child(4) {
        top: 0;
        left: 83%;
        // transform: scale(2.4) rotate(20deg) rotateY(-50deg);
        animation: iconTransform 0.3s 0.6s forwards;
      }
      &:nth-child(5) {
        top: 0;
        left: 36%;
        // transform: scale(1.3) translateY(-36%) rotateY(17deg)
        //   rotate3d(1, 0, 1, 34deg);
        animation: iconTransform 0.3s 0.2s forwards;
      }
      // &:nth-child(6) {
      //   top: 0;
      //   left: 66%;
      //   transform: scale(1.6) translateY(-61%) rotateY(-61deg) rotate(-15deg);
      //   animation: iconTransform 0.3s 0.4s forwards;
      // }
    }
  }
  .splash-figure.dashboard .stage {
    .main {
      border-radius: 4px;
      z-index: 10;
      box-shadow: 0px 50px 100px rgba(50, 50, 93, 0.13),
        0px 15px 35px rgba(50, 50, 93, 0.11), 0px 5px 15px rgba(0, 0, 0, 0.07);

      animation: mainTransform 1s 1 forwards;
    }
    .mobile-device {
      max-width: 18%;
      position: absolute;
      left: 32px;
      bottom: 10px;
      border-radius: 12px;
      box-shadow: 0px 5px 15px rgba(27, 34, 60, 0.1),
        0px 15px 35px rgba(27, 34, 60, 0.1),
        0px 50px 100px rgba(27, 34, 60, 0.1),
        20px -20px 35px rgba(80, 102, 119, 0.15);
      transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

      //Animation
      animation: mobileTransform 1s 1 forwards;

      &:hover {
        box-shadow: 0px 5px 15px rgba(4, 150, 255, 0.3),
          0px 15px 35px rgba(4, 150, 255, 0.1),
          0px 50px 100px rgba(27, 34, 60, 0.1),
          20px -20px 35px rgba(80, 102, 119, 0.15);

        transform: rotate(0deg) rotateX(0deg) rotateY(0deg) translateX(2em)
          translateZ(60px) scale(1.2);
      }
    }

    @keyframes codeScrollTransform {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-50%);
      }
    }

    @keyframes iconTransform {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes mainTransform {
      from {
        transform: scale(0.9);
      }
      to {
        transform: scale(1) perspective(500px) rotateX(1deg) rotateY(-2deg)
          rotateZ(0deg) translateZ(-45px);
      }
    }

    @keyframes mobileTransform {
      from {
        transform: scale(0.9);
      }
      to {
        transform: perspective(1040px) rotate(-2deg) rotateX(-2deg)
          rotateY(11deg) translateZ(20px) scale(1);
      }
    }
  }
  .splash-caption {
    font-size: 1.5em;
    letter-spacing: -0.02em;
    text-align: center;
    color: #8ba8bf;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 70%;

    .next,
    .prev {
      font-size: 1.3em;
      opacity: 0.1;
      cursor: pointer;
      &:hover {
        opacity: 1;
        color: #0471ff;
      }
    }
  }
}

.header-figure {
  max-width: 625px;
  margin: 0 auto;
  .stage {
    transform-style: preserve-3d;
    perspective: 600px;
    position: relative;

    .dot-circle {
      position: absolute;
      top: 10px;
      z-index: 0;
    }
    .code-bg {
      position: absolute;
      top: 0;
      right: 4em;
      z-index: 0;

      // transform: scale(1) perspective(1000px) rotateY(3deg) rotateX(2deg)
      //   rotate(-1deg) translateZ(-40px);
    }
    .icons {
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      transform: translate(-3rem, -4rem) translateZ(-8rem);

      @media (max-width: 900px) {
        transform: translate(-2rem, -4rem) translateZ(-20rem);
      }
      .icon-wrap {
        text-align: center;
        .name {
          transition: opacity 0.3s;
          opacity: 0;
          font-size: 1rem;
          font-weight: 700;
          margin-top: 0.5rem;
        }

        &:hover {
          .name {
            opacity: 1;
          }
          .icon {
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }
      .icon {
        transition: all 0.3s;
        background-color: #2a2f44;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        box-shadow: 0 0 1px 0 hsla(0, 0%, 100%, 0.01), 0 0 1px 0 #2a2f44;
        background-image: linear-gradient(90deg, #2a2f44, #2a2f44);
        position: relative;
        margin: 0 auto;
        img {
          // max-width: 25px;
          // max-height: 32px;
          max-width: none;
          max-height: none;
        }
      }
    }
  }
  @media (max-width: 900px) {
    .stage {
      min-height: 370px;
      .icons {
        top: 0;
      }
      .panel {
        transform: none;
        padding: 2em 0 0;
        img.dashboard {
          margin-bottom: 2em;
        }
      }
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
