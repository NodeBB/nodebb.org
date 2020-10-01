<template>
  <div class="content-layout">
    <header-primary class="nav-show-desktop" />
    <header-mobile class="nav-show-mobile" />
    <div class="content-main">
      <div class="content-main-content">
        <router-view />
      </div>
      <footer-primary />
      <footer-contact v-if="$route.path != '/contact'" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "ContentWrap",

  components: {
    "header-primary": () => import("./header.vue"),
    "footer-primary": () => import("./footer.vue"),
    "footer-contact": () => import("./footer-contact.vue"),
    "header-mobile": () => import("./header-mobile.vue"),
  },
  metaInfo() {
    return {
      titleTemplate: "%s - NodeBB",
      image: require("./static/og-image.jpg"),
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        {
          name: "author",
          content: "NodeBB, LLC",
        },
        {
          name: "generator",
          content: "NodeBB",
        },
      ],
      htmlAttrs: { lang: "en" },
      // link: [
      //   {
      //     vmid: "my-key",
      //     rel: "stylesheet",
      //     href: "https://cdn.jsdelivr.net/some-external-stylesheet/css.min.css",
      //   },
      // ],
      // script: [
      //   {
      //     vmid: "my-key",
      //     src: "https://cdn.jsdelivr.net/some-external-script/script.js",
      //     async: true,
      //     defer: true,
      //   },
      // ],
    }
  },
}
</script>

<style lang="less">
.content-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 45px;
  .logo-nodebb {
    transition: all 0.15s cubic-bezier(0, 0, 0.58, 1);
  }
  .nav-show-mobile {
    display: none;
    &.active {
      .mobile-bar {
        .logo-nodebb {
          opacity: 0;
          transition: all 0.15s cubic-bezier(0, 0, 0.58, 1);
        }
      }
    }
    @media (max-width: 1100px) {
      display: block;
    }
  }
  @media (max-width: 1100px) {
    padding-top: 0;
  }

  .nav-show-desktop {
    display: block;
    @media (max-width: 1100px) {
      display: none;
    }
  }

  .content-content {
    display: flex;
    flex-grow: 1;
    .content-nav,
    .content-main {
      overflow-y: scroll;
    }
    .content-nav {
      flex: 0 0 250px;
      padding: 1em 1.5em;
      background: rgba(38, 67, 89, 0.08);
    }
    .content-main {
      min-height: 100vh;
      flex: 1 1 100%;
      display: flex;
      flex-direction: column;
      .content-main-content {
        padding: 1.5em;
        flex-grow: 1;
      }
      .content-footer {
        padding: 1em 1.5em;
        font-size: 0.85em;
        color: rgba(38, 67, 89, 0.2);
        text-align: center;
      }
    }
  }
}
</style>
