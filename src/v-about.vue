<template>
  <div class="about">
    <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
      <div class="text-left lg:w-3/4 w-full">
        <h1
          class="tracking-tight leading-tight text-center font-bold mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >Community forum software for the modern web.</h1>
        <div
          class="leading-normal my-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
        >Online forums or bulletin boards were the place where communities first gathered and thrived on the Internet. Forums pre-date blogs, social networks and smartphones. And millions of them are still going strong. From brand communities to product support boards, forums continue to be a great way to engage and provide value for communities.</div>
        <p
          class="max-w-2xl mx-auto text-center leading-8 text-gray-900 leading-relaxed font-bold my-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        >Our mission is to take the spirit and energy of those great online communities, and give them all the modern features and performance they’ve come to expect from the social and mobile web.</p>
        <p
          class="leading-normal my-12 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
        >NodeBB is a company founded by three developers who are passionate about creating great software. We were extremely proud to be named winners of the 2015 CMS Critic People's Choice Awards for Best Forum Software.</p>
        <p
          class="leading-normal my-12 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
        >We built NodeBB using the Node.js server-side Javascript platform. Sounds like nerdy stuff, so why should you care? Because Node.js delivers unmatched performance – just ask the folks at a little company called Walmart, who ran all their 2013 Black Friday mobile traffic through Node.js systems.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { setting } from "@factor/api"

export default {
  data() {
    return {
      loading: true
    }
  },
  created: function() {},
  methods: { setting },
  metaInfo() {
    return {
      title: "Forum software for today's web - About NodeBB",
      description:
        "Community forum software for today's web: flexible, scalable and user-friendly."
    }
  }
}
</script>
<style lang="less">
.about {
  padding-top: 4rem;
}
</style>
