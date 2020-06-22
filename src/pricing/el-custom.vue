<template>
  <div class="pricing-custom">
    <div class="header">
      <h2 class="title">Custom solutions</h2>
      <div class="sub">We will work closely with you to create the perfect solution.</div>
      <div class="mt-5">
        <factor-link btn="primary" path="/contact">Contact us &rarr;</factor-link>
      </div>
    </div>
    <div class="figure">
      <p
        class="font-normal text-base leading-relaxed"
      >Custom enterprise packages for larger businesses and organizations. Includes:</p>
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
    factorIcon
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
  // background: #e3e8ee;
  border-radius: 5px;
  background: rgba(0, 150, 136, 0.25);
  a {
    button {
      background: #00423c !important;
      box-shadow: 0 0 0 1px #00423c !important;
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
    color: #00423c;
  }
  .sub {
    // color: var(--color-text-secondary);
    color: rgba(0, 62, 56, 0.5);
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
