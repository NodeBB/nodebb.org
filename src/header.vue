<template>
  <div class="site-head">
    <div class="site-head-pad">
      <site-brand class="site-brand" />
      <div class="head-nav page-nav">
        <factor-link v-for="navItem in pageNav" :key="navItem.path" :path="navItem.path">
          <span v-formatted-text="navItem.name" />
        </factor-link>
      </div>
      <div class="head-nav action-nav">
        <account-menu v-if="!userLoading && isLoggedIn()" />
        <factor-link
          v-else-if="!userLoading"
          _event="sign-in-modal"
          path="https://manage.nodebb.org"
          target="_blank"
          rel="noopener"
          data-test="signin-link"
        >Sign In</factor-link>
        <factor-link
          v-if="$route.path != '/pricing'"
          path="/pricing"
          btn="primary"
        >Start Free Trial &rarr;</factor-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { factorLink } from "@factor/ui"
import { isLoggedIn, userInitialized } from "@factor/user"
import { accountMenu } from "@factor/plugin-standard-signin"
export default {
  components: {
    factorLink,
    accountMenu,
    headerBanner: () => import("./banner.vue"),
    siteBrand: () => import("./el/brand.vue"),
    githubStars: () => import("./el/github-stars.vue")
  },
  data() {
    return {
      userLoading: true,
      user: false,
      pageNav: [
        { path: "/", name: "Home" },
        { path: "/product", name: "Product" },
        { path: "/pricing", name: "Pricing" },
        { path: "/about", name: "About" },

        {
          path: "https://community.nodebb.org",
          name: "Community",
          target: "_blank",
          rel: "noopener"
        },
        { path: "https://blog.nodebb.org", name: "Blog", target: "_blank" },
        {
          path: "https://answers.nodebb.org",
          name: "Answers",
          target: "_blank",
          rel: "noopener"
        }
      ],
      actionNav: [
        {
          path: "https://manage.nodebb.org",
          name: "Sign In &rarr;"
        },
        { component: accountMenu, condition: (): boolean => isLoggedIn() }
      ]
    }
  },
  computed: {},
  async mounted() {
    await userInitialized()

    this.userLoading = false
  },
  methods: { isLoggedIn }
}
</script>
<style lang="less">
.nav-light:not(.scrolled) .site-head {
  color: #fff;
  background: transparent;
}

.site-head {
  transition: all 0.1s;
  padding: 0 1.5em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5000;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.9);
}

.nodebb-site {
  .site-head {
    opacity: 0;
  }
  &.scrolled,
  &.top {
    .site-head {
      opacity: 1;
    }
  }
  &.scrolled {
    .site-head {
      padding: 0 2rem;
      background-color: rgba(255, 255, 255, 0.97);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      z-index: 2;
      // backdrop-filter: blur(0.15rem);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: border-bottom 150ms ease 0s, top 250ms ease 0s,
        background-color 300ms ease 0s;
    }
  }
}

.nav-white.top {
  .head-nav {
    color: #fff;
  }
}

.site-head-pad {
  height: 45px;
  align-items: center;
  display: grid;
  grid-template-columns: minmax(150px, 300px) 1fr minmax(150px, 300px);

  .head-nav {
    display: flex;
    align-items: center;

    &.page-nav {
      justify-content: center;
      .github-actions {
        margin-left: 1rem;
        width: 140px;
      }
    }
    &.action-nav {
      justify-content: flex-end;
    }

    @media (max-width: 767px) {
      flex-grow: 2;
      justify-content: flex-end;
    }
    > .factor-link {
      color: inherit;
      margin: 0 0.25em;
      padding: 0.25em 0.7em;
      border-radius: 6px;
      &:last-child {
        margin-right: 0;
      }
      @media (max-width: 767px) {
        .fa {
          display: none;
        }
      }
      &:hover,
      &.router-link-active {
        color: var(--color-primary);
        background: var(--color-bg-contrast);
        &:not(.active-path) {
          background: inherit;
          color: inherit;
        }
      }
      &:active {
        opacity: 0.5;
      }
      &.factor-link {
        .fa {
          margin-right: 4px;
          opacity: 0.7;
        }
      }
    }
    .account-menu {
      margin-left: 1em;
    }
  }
}
.scrolled {
  .site-head {
    padding: 0 2rem;
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    // backdrop-filter: blur(0.15rem);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: border-bottom 150ms ease 0s, top 250ms ease 0s,
      background-color 300ms ease 0s;
  }
}
</style>
