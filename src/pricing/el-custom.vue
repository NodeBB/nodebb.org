<template>
  <div class="pricing-custom">
    <div class="header">
      <home-icon icon="model-custom" />
      <h2 class="title">Custom solutions</h2>
      <div
        class="sub"
      >Custom enterprise packages for larger businesses and organizations. We will work closely with you to create the perfect solution.</div>
      <div class="mt-5">
        <factor-link btn="primary" size="medium" path="/contact">Contact us &rarr;</factor-link>
      </div>
    </div>
    <div class="figure">
      <p class="font-semibold list-outside list-square ml-5 text-base leading-relaxed">Includes:</p>
      <ul class="font-normal list-outside list-square mt-5 ml-5 text-base leading-relaxed">
        <li>
          <strong>Custom feature development</strong> to integrate with your current systems.
        </li>

        <li>
          <strong>Theme customization</strong> to match your brand identity perfectly.
        </li>
        <li>
          <strong>Single Sign-On</strong> with your existing services to provide your users with a seamless experience.
        </li>
        <li>
          <strong>Migration services</strong> from existing forums – we'll make the move from your old software as painless as possible.
        </li>
        <li>
          <strong>Premium hosting or self-hosting options</strong> to best suit your requirements and security policies.
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { factorLink, factorIcon } from "@factor/ui";

export default {
  components: {
    factorLink,
    factorIcon,
    homeIcon: () => import("../product/icon.vue")
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
.pricing-custom {
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  border-radius: 0.5rem;
  background: #2a2f45;
  color: #fff;
  .header {
    padding-left: 5rem;
    position: relative;
    .icon {
      margin: 0rem 0 1.5rem;
      position: absolute;
      color: #5534a7;
      font-size: 2rem;
      left: 0;
      overflow: visible;
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      display: block;
      width: 3rem;
      height: 3rem;
    }
  }
  a {
    button {
      background: #5534a7 !important;
      box-shadow: 0 0 0 1px #5534a7 !important;
    }
  }
  ul {
    li {
      margin-bottom: 1rem;
    }
  }

  .title {
    font-size: 2.355rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #fff;
  }
  .sub {
    // color: var(--color-text-secondary);
    // color: #5534a7;
    color: #a0a6c3;
    font-size: 1.25rem;
    font-weight: 400;
    // opacity: 0.72;
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
