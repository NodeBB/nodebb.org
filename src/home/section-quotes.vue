<template>
  <div class="quotes-wrap">
    <div class="quotes">
      <div class="quotes-pad">
        <article
          v-for="(quote, index) in quotes"
          :key="index"
          :class="[
              index % 2 == 0 ? 'odd' : 'even',
              index % 4 == 0 || index % 4 == 3 ? 'diagonal' : '',
            ]"
          itemprop="review"
          itemscope
          itemtype="http://schema.org/Review"
        >
          <blockquote itemprop="reviewRating" itemscope itemtype="http://schema.org/Review">
            <p class="quote-body" v-formatted-text="quote.text" itemprop="reviewBody"></p>
            <div
              class="rating hidden"
              itemprop="reviewRating"
              itemscope
              itemtype="https://schema.org/Rating"
            >
              <factor-icon icon="fas fa-star" />
              <factor-icon icon="fas fa-star" />
              <factor-icon icon="fas fa-star" />
              <factor-icon icon="fas fa-star" />
              <factor-icon icon="fas fa-star" />
              <span class="rating-value" itemprop="ratingValue">5</span>
            </div>
            <!-- <div class="quote-media">
              <div class="quote-image">
                <img :src="quote.img" alt="quote" />
              </div>
              <a
                class="quote-image quote-company"
                target="_blank"
                rel="noopener"
                :href="quote.companylink"
              >
                <img :src="quote.company" alt="quote" />
              </a>
            </div>-->
            <!-- <footer>
              <a
                :href="quote.link"
                v-formatted-text="quote.attribution"
                target="_blank"
                itemprop="author"
                itemscope
                itemtype="https://schema.org/Person"
              >
                <span v-formatted-text="quote.attribution"></span>
              </a>
            </footer>-->

            <div class="md:flex md:items-center md:justify-center mt-10">
              <div class="md:flex-shrink-0 relative">
                <img
                  class="client-picture mx-auto h-16 w-16 rounded-full"
                  :src="quote.img"
                  :alt="quote.author"
                />
                <img
                  class="client-company"
                  :src="quote.company"
                  :alt="quote.companyName"
                />
              </div>
              <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div class="text-base leading-6 font-bold text-gray-900">
                  <span v-formatted-text="quote.author"></span>
                </div>

                <svg
                  class="hidden md:block mx-1 h-5 w-5 text-gray-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div class="text-base leading-6 font-medium">
                  <a
                    :href="quote.link"
                    v-formatted-text="quote.attribution"
                    target="_blank"
                    class="text-gray-500"
                    itemprop="author"
                    rel="noopener"
                    itemscope
                    itemtype="https://schema.org/Person"
                  ></a>
                </div>
              </div>
            </div>
          </blockquote>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui"

export default {
  components: {
    factorLink,
    factorIcon
  },
  data() {
    return {
      loading: true,
      loadingButtons: true,
      active: 0,
      timer: null,
      animationInterval: 8000,

      quotes: [
        {
          text: `<span>“NodeBB is hands down the best I have ever used from both management and user perspectives
          Due to the need for GDPR compliance, and a desire to update the technology base from PHP, wanted to migrate the pfSense community to a new forum, and NodeBB fit our needs.</span>
          <span>The migration process was surprisingly simple, and customizing the colors and icons was painless.  The UI is great, our users really like it, and the performance is excellent.</span>
          <span>NodeBB makes GDPR compliance exceedingly simple, everything is mobile and SEO-friendly out of the box, and general maintenance is a lot easier compared to our old forum. As a bonus, the NodeBB support team is available whenever we run into trouble.</span>
					<span>NodeBB is the most attractive piece of open source forum software we’ve found.”</span>`,
          attribution: `Netgate, CTO`,
          author: `Jim Thompson`,
          img: require("./img/jim.jpg"),
          companyName: `Netgate`,
          company: require("./img/netgate.svg"),
          companylink: "https://netgate.com",
          link: "https://forum.netgate.com"
        },
        {
          text: `<span>“When we decided it was time to revamp our community we contemplated several possible solutions. We finally opted for NodeBB, and we couldn't be happier.</span>
          <span>We're using a modern, actively developed forum software. Numbers confirm that our user engagement skyrocketed and there was not a single comment from our users that would say that the old forums were better which, I think, speaks for itself.”</span>`,
          attribution: `Opera, Software Engineer`,
          author: `Artur Matczak`,
          img: require("./img/attis.jpg"),
          companyName: `Opera`,
          company: require("./img/opera.svg"),
          companylink: "https://opera.com",
          link: "https://forums.opera.com"
        }
      ]
    }
  },
  computed: {
    currentQuote: function(this: any) {
      return this.quotes[Math.abs(this.active) % this.quotes.length]
    },
    activeSlide(this: any) {
      return this.quotes[this.active]
    }
  },

  mounted(this: any) {
    setTimeout(() => {
      this.loadingButtons = false
    }, 1000)
  },

  methods: {
    nextSlide(this: any) {
      if (this.active == this.quotes.length - 1) {
        this.active = 0
      } else {
        this.active++
      }

      this.runTimer()
    },
    runTimer(this: any) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => this.nextSlide(), this.animationInterval)
    }
  }
}
</script>
<style lang="less">
.quotes-wrap {
  position: relative;
  background-image: url("./img/dot.svg");
  margin-top: 0;
  padding-top: 4rem;
  .quotes {
    transform: skewY(-10deg);
    .quotes-pad {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 4em;
      perspective: 800px;
    }
    .quote-body {
      font-size: 1rem;
      span {
        margin-bottom: 0.75rem;
        display: block;
      }
    }
    @media (max-width: 900px) {
      .quotes-pad {
        grid-template-columns: 1fr;
        grid-gap: 0;
        article:nth-child(odd),
        article:nth-child(even) {
          transform: none;
          margin: 0 auto;
        }
        article {
          blockquote {
            padding: 4rem 2rem;
            text-align: left;
            .quote-media {
              text-align: left;
            }
          }
        }
      }
    }
    article {
      position: relative;
      display: flex;
      &:nth-child(odd) {
        transform: rotateX(2deg) rotateY(7deg);
        blockquote {
          box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
            -5px 22.5px 65px 0 rgba(50, 50, 93, 0.2);
          transform: skewY(10deg) translateY(-6rem);
        }
      }
      &:nth-child(even) {
        transform: rotateX(1deg) rotateY(-7deg);
        blockquote {
          box-shadow: 1px 1px 4px 0 rgba(26, 26, 67, 0.1),
            19px 22.5px 75px -5px rgba(50, 50, 93, 0.2);
        }
      }
      &.odd {
        justify-content: flex-end;
      }
      .rating {
        // display: block;
        text-align: center;
        padding: 0.5rem;
        font-size: 1.35rem;
        color: rgb(255, 179, 0);
      }
      blockquote {
        transform: skewY(10deg);
        max-width: 500px;
        padding: 2rem 2.5rem;
        font-size: 1.15rem;
        line-height: 1.8;
        text-align: left;
        background: #fff;
        border-radius: 0.5rem;
        height: fit-content;
        overflow: auto;
        .quote-media {
          text-align: center;
          margin-bottom: 0;
          margin-top: 0.75rem;
          float: left;
          position: relative;

          .quote-image {
            &:not(.quote-company) {
              display: block;
              width: 70px;
              border-radius: 999rem;
              overflow: hidden;
              position: relative;
              img {
                display: block;
                width: 100%;
              }
            }
            &.quote-company {
              width: 32px;
              position: absolute;
              right: -0.5rem;
              border-radius: 999rem;
              bottom: 0;
              background: #fff;
              border: 0.175rem solid #fff;
              opacity: 1;
              overflow: hidden;
            }
          }
        }

        .client-company {
          width: 32px;
          position: absolute;
          right: -0.5rem;
          border-radius: 999rem;
          bottom: 0;
          background: #fff;
          border: 0.175rem solid #fff;
          opacity: 1;
          overflow: hidden;

          @media (max-width: 900px) {
            left: calc(50% + 1rem);
          }
        }
        footer {
          margin-top: 2.75rem;
          text-transform: uppercase;
          font-size: 0.9rem;
          font-weight: 700;
          text-align: left;
          margin-left: 5.5rem;
        }
        .rating-value {
          display: none;
        }
      }
    }
  }
}
</style>