<template>
  <div class="pricing-open">
    <div class="header">
      <home-icon icon="model-open" />
      <h2 class="title">Open Source</h2>
      <div
        class="sub"
      >NodeBB is open source software that is free for anyone to download and install on their own server under the terms of the GNU General Public Licence (GPLv3).</div>

      <div class="mt-5">
        <factor-link
          btn="primary"
          size="medium"
          path="https://github.com/NodeBB/NodeBB"
          target="_blank"
          rel="noopener"
        >Go to GitHub repo &rarr;</factor-link>
        <!-- <div class="actions">
          <github-stars />
        </div>-->
      </div>
    </div>

    <div class="figure">
      <p>
        The code can be found at our project repository on GitHub, and installation instructions can be found in our
        <factor-link
          path="https://docs.nodebb.org"
          target="_blank"
          rel="noopener"
        >Documentation Portal</factor-link>.
      </p>
      <p>
        If you do not have a server, we recommend using DigitalOcean to host NodeBB. They do charge based on your usage, but you can get a month of free hosting from them by
        <factor-link
          path="https://www.digitalocean.com/?refcode=98bdc9454647"
          target="_blank"
          rel="noopener"
        >following this link</factor-link>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui";
export default {
  components: {
    factorLink,
    factorIcon,
    homeIcon: () => import("../product/icon.vue"),
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
  background: #fff;
  border-radius: 0.5rem;
  margin-top: 8rem;
  margin-bottom: 12rem;
  position: relative;
  box-shadow: 0 4px 35px 0 rgba(23, 55, 87, 0.1),
    0 5px 15px 0 rgba(0, 0, 0, 0.07);
  &:before {
    content: "";
    background-image: url(../home/img/nbb-bg-c.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0;
    display: block;
    z-index: -1;
    position: absolute;
    height: 400px;
    width: 700px;
    left: -12rem;
    top: -9.5rem;
  }
  &:after {
    content: "";
    background-image: url(../home/img/nbb-bg-c.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0;
    transform: rotate(32deg);
    display: block;
    z-index: -1;
    position: absolute;
    height: 400px;
    width: 700px;

    transform: rotate(32deg);
    right: -32rem;
    top: 7rem;
  }

  .header {
    padding-left: 5rem;
    position: relative;
    .icon {
      width: 3.5rem;
      height: 4.225rem;
      margin: -0.25rem 0;
      font-size: 1.5rem;
      position: absolute;
      left: 0;
    }
  }

  ul {
    li {
      margin-bottom: 1rem;
    }
  }
  p {
    margin-bottom: 1rem;
  }

  .title {
    font-size: 2rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1a1f36;
  }
  .sub {
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
      font-size: 1.5rem;
    }
  }
}
</style>
