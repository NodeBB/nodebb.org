<template>
  <div class="mobile-menu">
    <div class="menu-panel" @click.stop>
      <div class="menu-panel-pad">
        <site-brand class="mobile-brand" />
        <div
          v-for="menu in menus"
          :key="menu._id"
          class="menu-area"
          :class="activeMenu[menu._id] ? 'active' : ''"
        >
          <div v-if="activeMenu[menu._id]" class="menu-items" @click="clickLink()">
            <div
              v-for="(item, itemIndex) in filteredMenu(menu.items)"
              :key="itemIndex"
              class="menu-item"
            >
              <div v-if="item.group" class="group-title">{{ toLabel(item.group) }}</div>
              <div v-else-if="item.component" class="menu-component">
                <component :is="item.component" />
              </div>
              <factor-link
                v-else
                class="menu-link primary-doc-link"
                :path="item.path"
                :target="item.target"
                :rel="item.rel"
                :event="item.event"
              >
                <span v-if="item.name" v-formatted-text="item.name" />
              </factor-link>
            </div>
          </div>
          <factor-link
            btn="link"
            path="https://try.nodebb.org"
            target="_blank"
            rel="noopener"
            >Demo site</factor-link
          >
          <factor-link v-if="$route.path != '/pricing'" path="/pricing" btn="link"
            >Start free trial &rarr;</factor-link
          >
          <factor-link
            btn="link"
            path="https://manage.nodebb.org"
            target="_blank"
            rel="noopener"
            >Sign in</factor-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { factorLink, factorBtn } from "@factor/ui"
import { toLabel, emitEvent } from "@factor/api"

export default {
  components: {
    factorLink,
    factorBtn,
    siteBrand: () => import("./el/brand.vue"),
  },
  data() {
    return {
      menus: {},
      activeMenu: { docs: true, pages: true },
    }
  },
  computed: {},
  mounted() {
    this.menus = [
      {
        _id: "pages",
        title: "Pages",
        items: [
          { path: "/", name: "Home" },
          { path: "/product", name: "Product" },
          { path: "/pricing", name: "Pricing" },
          { path: "/about", name: "About" },

          {
            path: "https://community.nodebb.org",
            name: "Community",
            target: "_blank",
            rel: "noopener",
          },
          // {
          //   path: "https://try.nodebb.org",
          //   name: `Demo Site`,
          //   target: "_blank",
          // },
          {
            path: "https://blog.nodebb.org",
            name: "Blog",
            target: "_blank",
            rel: "noopener",
          },
          {
            path: "https://answers.nodebb.org",
            name: "Answers",
            target: "_blank",
            rel: "noopener",
          },

          // { component: () => import("./el/github-stars.vue") }
        ],
      },
    ]
  },
  methods: {
    filteredMenu(items: any) {
      return items.filter((item) => {
        const condition = item.condition ? item.condition() : true

        return condition
      })
    },
    toLabel,
    clickLink(this: any) {
      emitEvent("reset-ui")
    },
    toggleMenuArea(this: any, area: string) {
      const newValue = this.activeMenu[area] ? false : true
      this.$set(this.activeMenu, area, newValue)
    },
  },
}
</script>
<style lang="less">
.mobile-menu {
  position: absolute;
  top: 0;
  width: 325px;
  min-height: 4rem;
  position: absolute;
  right: 1rem;
  top: 0;
  z-index: 1000;
  @media (max-width: 767px) {
    width: calc(~"100% - 1rem");
  }
  .menu-panel {
    font-size: 1.2em;
    margin: 0.25rem 0.5rem;
    min-height: 100px;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(136, 152, 170, 0.1), 0 15px 35px 0 rgba(49, 49, 93, 0.1),
      0 5px 15px 0 rgba(0, 0, 0, 0.08);

    .menu-panel-pad {
      padding: 1rem 1.5rem;
    }
  }

  .menu-title {
    cursor: pointer;
    &:hover {
      color: var(--color-secondary);
    }
    font-size: 1.2em;
    font-weight: 700;
    margin: 1.5rem 0 0.3rem;
    button {
      padding-left: 0;
    }
    .factor-icon {
      opacity: 0.3;
    }
  }

  .menu-area {
    margin-top: 1.5rem;
    .factor-link.btn-link {
      display: block;
    }
  }

  .menu-items {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    box-shadow: inset 0 -1px #e3e8ee;
    + .factor-link {
      button {
        padding-left: 0;
      }
      .btn-content {
        --highlight-background: linear-gradient(102deg, #1952be 0%, #265bc2 100%);
        color: inherit;
        background: var(--highlight-background);
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        padding-right: 0.04em;
        margin-right: -0.04em;
        padding-bottom: 0.02em;
        margin-bottom: -0.02em;
        -webkit-background-clip: text;
      }
      + .factor-link {
        button {
          padding-left: 0;
        }
      }
    }
  }
  .menu-link,
  .group-title {
    padding: 0.65rem 0;
  }
  .menu-component {
    padding: 1rem 0 0;
  }
  .menu-link {
    display: block;
    color: #8792a2;
    &.active-path {
      font-weight: 600;
      --highlight-background: linear-gradient(102deg, #1952be 0%, #265bc2 100%);
      color: inherit;
      background: var(--highlight-background);
      -webkit-text-fill-color: transparent;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      -webkit-background-clip: text;
    }
  }
  .group-title {
    margin: 1rem 0 0.5rem;
    opacity: 0.2;
    font-weight: 700;
  }
}
</style>