<template>
  <div class="plugins-gallery-container">
    <div class="plugins-gallery-header">
      <div class="text">
        <h2 class="title">{{ title }}</h2>
        <div class="sub">{{ text }}</div>
      </div>
      <!-- <div class="action">
        <factor-link btn="default" path="/plugins">Browse All &rarr;</factor-link>
      </div>-->
    </div>

    <factor-spinner v-if="loading" />
    <div class="plugins-gallery">
      <div class="gallery-item-plugin" v-for="(item, index) in items" :key="index">
        <!-- ":" /${encodeURIComponent(item.permalink)}`" -->
        <!-- <img :src="item.icon" :alt="`${item.title} Icon`" class="plugin-icon" /> -->
        <icon-integrate
          v-if="item.icon"
          :alt="`${item.title} Icon`"
          :class="`plugin-icon icon-${item.icon}`"
          :icon="item.icon"
        />
        <div class="entry-content">
          <h1 class="title">{{ item.title }}</h1>
          <p class="description">{{ item.synopsis }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { stored } from "@factor/api";
import { factorLink, factorSpinner } from "@factor/ui";
import { figureMixin } from "../../util";
// import { requestIndex } from "../../extend/request";

export default {
  components: {
    factorLink,
    factorSpinner,
    "icon-integrate": () => import("./icon-integrate.vue")
  },
  props: {
    title: { type: String, default: "Integrations" },
    text: {
      type: String,
      default:
        "NodeBB integrates with several popular third-party cloud based services, apps, and products."
    }
  },
  data() {
    return {
      loading: false,
      // postType: "extension",
      // extensionType: "plugin",
      items: [
        {
          icon: "slack",
          title: `Slack`,
          synopsis: `Notify forum administrators of new posts in the community on their Slack channel.`,
          permalink: ``
        },
        {
          icon: "mailchimp",
          title: `Mailchimp`,
          synopsis: `Auto-subscribe new user registrations to your MailChimp email list.`,
          permalink: ``
        },
        {
          icon: "ghost",
          title: `Ghost`,
          synopsis: `Use NodeBB as a commenting engine for the Ghost blogging platform.`,
          permalink: ``
        },
        // {
        //   icon: "adsense",
        //   title: `Google Adsense`,
        //   synopsis: `Monetize your community by placing Adsense ads on any page on your forum.`,
        //   permalink: ``
        // },
        {
          icon: "wordpress",
          title: `WordPress`,
          synopsis: `Use NodeBB as a commenting engine for the Wordpress CMS platform.`,
          permalink: ``
        },
        {
          icon: "twilio",
          title: `Twilio`,
          synopsis: `Mobile verification of users via an SMS text containing a random pin code.`,
          permalink: ``
        },
        {
          icon: "amazon-s3",
          title: `Amazon S3`,
          synopsis: `Store images and file uploads on the cloud via Amazon S3.`,
          permalink: ``
        },
        {
          icon: "sendgrid",
          title: `SendGrid`,
          synopsis: `Allow your users to register with the SSO provider of their choice.`,
          permalink: ``
        }
        // {
        //   icon: "zendesk",
        //   title: `Zendesk`,
        //   synopsis: `Allow your users to register with the SSO provider of their choice.`,
        //   permalink: ``
        // }
        // {
        //   icon: "sign",
        //   title: `SSO`,
        //   synopsis: `Allow your users to register with the SSO provider of their choice.`,
        //   permalink: ``
        // }
      ]
    };
  }
  // serverPrefetch(this: any) {
  //   return this.getPosts();
  // },
  // computed: {
  //   extensions(this: any) {
  //     const storeKey = [this.postType, this.extensionType].join("");
  //     const index = stored(storeKey) || {};
  //     return index.posts ?? [];
  //   }
  // },
  // watch: {
  //   $route: {
  //     handler: function(this: any) {
  //       this.getPosts();
  //     }
  //   }
  // },
  // mounted() {
  //   if (this.extensions.length == 0) {
  //     this.getPosts();
  //   }
  // },
  // methods: {
  //   async getPosts(this: any) {
  //     this.loading = true;

  //     await requestIndex({ extensionType: this.extensionType });

  //     this.loading = false;
  //   }
  // }
};
</script>
<style lang="less">
.plugins-gallery-container {
  padding-bottom: 5rem;
  .plugins-gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    .title {
      font-weight: 700;
      font-size: 2rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    .sub {
      // color: var(--color-text-secondary);

      margin-top: 1rem;
      font-size: 1.4rem;
      font-weight: 400;
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  }

  .spinner-wrap {
    min-height: 400px;
  }

  .plugins-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  .gallery-item-plugin {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 1rem 1rem 1rem 0;
    color: var(--color-text);

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
      z-index: -1;
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.07);
      // border-radius: 4px;
      border-radius: 0.5rem;
      opacity: 0;
      transform: scale(0.95);
      transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    &:hover {
      .plugin-icon {
        transform: scale(0.75);
      }
      .title,
      .description {
        color: var(--color-text);
      }
      &:before {
        transform: scale(1);
        opacity: 1;
      }
    }
    // &:nth-child(1) {
    //   .plugin-icon {
    //     background: #611f69;
    //   }
    // }
    // &:nth-child(2) {
    //   .plugin-icon {
    //     background: #000;
    //   }
    // }
    // &:nth-child(5) {
    //   .plugin-icon {
    //     background: #135e96;
    //   }
    // }

    .plugin-icon {
      width: 64px;
      height: 64px;
      border-radius: 0.5rem;
      box-shadow: 0 2.5px 5px -1px rgba(50, 50, 93, 0.25),
        0 1.5px 3px -1.5px rgba(0, 0, 0, 0.3);
      background-color: #fff;
      margin: 0 20px 0 0;
      display: block;
      flex-shrink: 0;
      transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform-origin: right top;
      position: relative;
      overflow: hidden;
      &.icon-mailchimp {
        background: #fde01c;
      }
      &.icon-ghost {
        background: #15212a;
      }
      &.icon-wordpress {
        background: #135e96;
      }
      svg {
        // height: 48px;
        margin: 0 auto;
        padding: 0.5rem;
        transform: translateY(-50%) scale(1.2);
        position: absolute;
        top: 50%;
        width: 100%;
      }
    }

    .title {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.35;
      margin-bottom: 0.5rem;
      color: #2a2f45;
    }
    .description {
      display: -webkit-box;
      /* -webkit-line-clamp: 2; */
      /* -webkit-box-orient: vertical; */
      /* height: 4.5rem; */
      text-overflow: -o-ellipsis-lastline;
      /* overflow: hidden; */
      font-size: 0.9rem;
      // color: var(--color-text-secondary);
    }
  }
}
</style>
