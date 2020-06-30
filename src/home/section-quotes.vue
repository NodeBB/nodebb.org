<template>
  <div class="nodebb-quotes" @click="nextSlide()">
    <article
      v-for="(quote, index) in quotes"
      :id="`quote`+(index+1)"
      :key="index"
      itemprop="review"
      itemscope
      itemtype="http://schema.org/Review"
      :class="{ 'active': active === index }"
    >
      <blockquote itemprop="reviewRating" itemscope itemtype="http://schema.org/Review">
        <!-- <p class="quote-body" v-formatted-text="quote.text" itemprop="reviewBody"></p> -->
        <footer>
          <div class="quote-media">
            <a class="quote-image" :href="quote.link">
              <!-- <img :src="quote.img" alt="quote" /> -->
            </a>
          </div>
          <a
            :href="quote.link"
            target="_blank"
            rel="noopener"
            itemprop="author"
            itemscope
            itemtype="https://schema.org/Person"
          >{{ quote.attribution }}</a>
        </footer>
      </blockquote>
    </article>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      active: 0,
      timer: null,
      animationInterval: 8000,
      quotes: [
        {
          // I have been deploying services on the Internet since the 90's, during which time I have worn numerous hats, critically evaluated more forum software offerings than I can remember, deployed several, and been community member of yet others.
          text: `<span>NodeBB is hands down the best I have ever used from both management and user perspectives
          Due to the need for GDPR compliance, and a desire to update the technology base from PHP, wanted to migrate the pfSense community to a new forum, and NodeBB fit our needs.</span>
          <span>
          The migration process was surprisingly simple, and customizing the colors and icons was painless.  The UI is great, our users really like it, and the performance is excellent.
          </span>
          <span>NodeBB makes GDPR compliance exceedingly simple, everything is mobile and SEO-friendly out of the box, and general maintenance is a lot easier compared to our old forum. As a bonus, the NodeBB support team is available whenever we run into trouble.</span>
					<span>NodeBB is the most attractive piece of open source forum software we’ve found.</span>`,
          attribution: "Ken G."
          // img: require("./img/patrick.jpg")
        },
        {
          text: `NodeBB proved to be a cut above other outdated forum building tools in its speed and modern integrations.`,
          attribution: "Artur Matczak, Software Engineer, Opera Forums"
          // img: require("./img/melissa.jpg")
        }
        // {
        //   text: `For my business providing an intuitive, flexible and adaptable UI to the users is key. I have found this software meets all my needs and the NodeBB team are experts in what they do, "they know their stuff".`,
        //   //I found that they will make your idea become reality, providing you with feedback on a possible alternative ways of meeting your needs, I have found the NodeBB team participate with what you are trying to achieve, you don't feel like your on your own, they help you get there.
        //   attribution: "Mukesh V."
        //   // img: require("./img/joshua.jpg")
        // }
        // {
        //   text: ``,
        //   attribution: ""
        //   // img: require("./img/daniel.jpg")
        // }
      ]
    };
  },
  computed: {
    currentQuote: function(this: any) {
      return this.quotes[Math.abs(this.active) % this.quotes.length];
    },
    activeSlide(this: any) {
      return this.quotes[this.active];
    }
  },
  methods: {
    nextSlide(this: any) {
      if (this.active == this.quotes.length - 1) {
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
.nodebb-quotes {
  display: grid;
  grid-template-columns: 1fr;
  perspective: 1000px;
  transform-style: preserve-3d;
  margin: 3rem 0;

  article {
    margin: 0 auto;
    grid-row-start: 1;
    grid-column-start: 1;
    cursor: pointer;
    background: #fff;
    border-radius: 8px;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

    blockquote {
      width: 100%;
      max-width: 550px;
      padding: 3rem 4rem;
      font-size: 1.3em;
      line-height: 1.8;
      @media (max-width: 900px) {
        padding: 3rem;
      }

      .quote-media {
        display: none;
        text-align: center;
        a {
          display: block;
          width: 40px;
          img {
            display: block;
            width: 100%;
            border-radius: 50%;
          }
        }
      }
      .quote-body {
        font-size: 1.2em;
        font-weight: var(--font-weight-bold, 700);
      }
      footer {
        color: var(--color-text-secondary);
        text-transform: uppercase;
        display: grid;
        grid-template-columns: auto;
        grid-gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        font-size: 0.7em;
        font-weight: 500;
        a {
          color: inherit;
          &:hover {
            color: inherit;
          }
        }
      }
    }

    &.active {
      box-shadow: 0 1px 1px rgba(50, 50, 93, 0.11),
        0px 50px 100px rgba(50, 50, 93, 0.13),
        0px 15px 35px rgba(50, 50, 93, 0.11), 0px -5px 15px rgba(0, 0, 0, 0.07);
      transform: scale(1.1) translateY(-30px);
      @media (max-width: 900px) {
        transform: scale(1) translateY(-30px);
      }
    }
    &:not(.active) {
      //filter: blur(2px);
      box-shadow: 0 1px 1px rgba(50, 50, 93, 0.11),
        0px 5px 5px rgba(50, 50, 93, 0.05), 0px 5px 15px rgba(50, 50, 93, 0.11);
      @media (max-width: 900px) {
        box-shadow: 0 0px 26px rgba(50, 50, 93, 0.05);
      }
    }

    &:nth-child(odd):not(.active) {
      transform: scale(0.9) translate3d(-400px, 100px, -250px) rotateX(30deg);
      @media (max-width: 900px) {
        transform: translate3d(0, 100px, -250px);
      }
    }

    &:nth-child(even):not(.active) {
      transform: scale(0.9) translate3d(400px, 100px, -250px) rotateX(30deg);
      @media (max-width: 900px) {
        transform: translate3d(0, 100px, -250px);
      }
    }
  }
}
</style>