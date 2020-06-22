<template>
  <div class="pricing-open">
    <div class="header">
      <h2 class="title">Open source</h2>
      <div
        class="sub"
      >NodeBB is open source software that is free for anyone to download and install on their own server under the terms of the GNU General Public Licence (GPLv3).</div>
      <div class="mt-3">
        <div class="actions">
          <github-stars />
        </div>
      </div>
    </div>

    <div class="figure font-normal">
      <p>The code can be found at our project repository on GitHub, and installation instructions can be found in our Documentation Portal.</p>
      <p>
        If you do not have a server, we recommend using DigitalOcean to host NodeBB. They do charge based on your usage, but you can get a month of free hosting from them by
        <a
          href="https://www.digitalocean.com/?refcode=98bdc9454647"
          target="_blank"
        >following this link</a>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { factorLink } from "@factor/ui";
export default {
  components: {
    factorLink,
    githubStars: () => import("../el/github-stars.vue")
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
.pricing-open {
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  // background: #e3e8ee;
  border-radius: 5px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  // background: rgba(255, 179, 0, 0.2);

  ul {
    li {
      margin-bottom: 1rem;
    }
  }
  p {
    margin-bottom: 1rem;
  }

  .title {
    font-size: 2.355rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1a1f36;
  }
  .sub {
    // color: var(--color-text-secondary);
    // color: rgba(95, 67, 0, 0.5);
    font-size: 1.25rem;
    font-weight: 400;
  }
  .figure {
    justify-self: center;
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
