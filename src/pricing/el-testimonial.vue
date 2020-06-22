<template>
  <div class="testimonial">
    <div class="header">
      <h2 class="title">What customers are saying...</h2>
      <div class="sub">Professionals and businesses love using NodeBB.</div>
    </div>
    <div class="figure">
      <div v-for="(item, i) in testimonials" :key="i" class="single">
        <div class="text">{{ item.text }}</div>
        <div class="citation">
          <factor-avatar email="hello@example.com" />
          <div class="name">
            <div class="name">{{ item.name }}</div>
            <div class="link">
              <factor-link :path="item.link">{{ item.linkText }}</factor-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { factorLink, factorAvatar } from "@factor/ui";
export default {
  components: { factorLink, factorAvatar },
  data() {
    return {
      testimonials: [
        {
          text:
            "When we decided it was time to revamp our community we contemplated several possible solutions. We finally opted for NodeBB, and we couldn’t be happier.",
          name: "Artur Matczak, Software Engineer",
          link: "https://forums.opera.com",
          linkText: "Opera Forums"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.testimonial {
  margin: 8rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  .title {
    font-size: 2em;
    font-weight: var(--font-weight-bold);
    line-height: 1.1;
    margin-bottom: 1rem;
  }
  .sub {
    color: var(--color-text-secondary);
  }
  .figure {
    justify-self: center;
    .text {
      font-size: 1.3em;
      margin-bottom: 1rem;
      font-style: italic;
      color: var(--color-text-secondary);
    }
    .citation {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .factor-avatar {
        margin-right: 1rem;
      }
      .name {
        font-weight: var(--font-weight-bold);
        line-height: 1.5;
      }
    }
  }
  @media (max-width: 900px) {
    margin: 4rem 0;
    grid-template-columns: 1fr;
    .title {
      font-size: 1.5em;
    }
  }
}
</style>
