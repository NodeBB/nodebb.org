<template>
  <figure ref="wrapper" class="figure-splash">
    <div class="stage-wrap">
      <div class="stage">
        <div v-for="(card, i) in cards" :key="i" class="card">
          <!-- <div class="icon" :style="{backgroundImage: `url(${card.image})`}" /> -->
          <div class="text">{{ card.text }}</div>
        </div>
      </div>
    </div>
  </figure>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // cards: [
      // { text: "", image: require("./img/_.svg") },
      // ],
    };
  }
};
</script>

<style lang="less">
figure.figure-splash {
  max-width: 100%;
  @media (max-width: 900px) {
    margin: 1rem auto 4rem;
    width: 450px;
  }

  .stage-wrap {
    transform-origin: center left;
    perspective: 800px;
    transform-style: preserve-3d;
  }
  .stage {
    width: 100%;
    position: relative;
    transform: scale(1);

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media (max-width: 900px) {
      transform: scale(1) translate(-0, -0px);
    }
    transform: rotateY(-12deg) rotateX(5deg);
    .card {
      //border-radius: 10px;
      background: #fff;
      //box-shadow: 0px 2px 2px rgba(50, 50, 93, 0.3), 0px 3px 10px rgba(0, 0, 0, 0.07);
      display: grid;
      grid-template-columns: 1fr;

      align-items: center;
      overflow: hidden;
      .icon {
        background-size: cover;
        background-position: 50%;
        border-radius: 10px;
        box-shadow: 0 2px 3px rgba(50, 50, 93, 0.13),
          0 2px 5px rgba(50, 50, 93, 0.11), 0 5px 15px rgba(0, 0, 0, 0.07);
        height: 7rem;
        @media (max-width: 900px) {
          height: 8rem;
        }
        img {
          max-width: 100%;
          display: block;
        }
      }
      .text {
        display: grid;
        padding: 0.4rem 1rem;
        font-size: 1.2em;
        line-height: 1.2;
        font-weight: 700;
        text-align: center;
      }
    }
  }
}
</style>
