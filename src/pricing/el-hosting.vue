<template>
  <div class="hosting">
    <div class="header">
      <h2 class="title">Free hosting available for open source project communities</h2>
      <div
        class="sub"
      >If you run a popular open source project and are interested in a free hosting account from NodeBB to help grow your community, please drop us a line.</div>
    </div>
    <div class="figure">
      <p class="font-semibold list-outside list-square ml-5 text-base leading-relaxed">Requirements:</p>
      <ul class="font-normal list-outside list-square mt-5 ml-5 text-base leading-relaxed">
        <li>Qualified projects will be hosted on GitHub or GitLab, and demonstrate a clear need for better interaction within their contributor community</li>
        <li>Hosting provided will be equivalent to our 'Village' level plan – upgraded plans may be provided at a discounted rate</li>
        <li>Your forum URL must retain the "project.nodebb.com" format, with no other NodeBB branding required</li>
        <li>Qualification will be at the discretion of NodeBB Inc.</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="less">
.hosting {
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  // background: #e3e8ee;
  border-radius: 5px;
  margin-bottom: 3rem;
  // background: rgba(81, 130, 248, 0.2);

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
    // color: rgb(0, 27, 93);
  }
  .sub {
    color: var(--color-text-secondary);
    // color: rgba(0, 27, 93, 0.5);
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
