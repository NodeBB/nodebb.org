import { addFilter, setting, addRoutes } from "@factor/api"
import { addPageTemplate } from "@factor/templates"
import "./extend"


if (setting("headTags") != "") {
  addFilter({
    key: "addNBBFont",
    hook: "factor_head",
    callback: (_: []) => {
      return [..._, setting("headTags.font")]
    },
    priority: 200,
  })
}

addPageTemplate({
  slug: "example",
  component: (): Promise<any> => import("./page-template-default.vue"),
})

addRoutes({
  key: "factorAppRoutes",
  routes: () => {
    return [
      {
        path: "/",
        component: (): Promise<any> => import("./home/v-home.vue"),
      },
      {
        path: "/pricing",
        component: (): Promise<any> => import("./pricing/v-pricing.vue"),
      },
      {
        path: "/product",
        component: (): Promise<any> => import("./product/v-product.vue"),
      },
      {
        path: "/about",
        component: (): Promise<any> => import("./v-about.vue"),
      },
      {
        path: `/themes`,
        component: (): Promise<any> => import("./extend/wrap.vue"),
        children: [
          {
            path: `/`,
            component: (): Promise<any> => import("./extend/index.vue"),
          },
          {
            path: `/theme/:permalink`,
            component: (): Promise<any> => import("./extend/single.vue"),
          },
        ],
      },
      {
        path: `/plugins`,
        component: (): Promise<any> => import("./extend/wrap.vue"),
        children: [
          {
            path: `/`,
            component: (): Promise<any> => import("./extend/index.vue"),
          },
          {
            path: `/plugin/:permalink`,
            component: (): Promise<any> => import("./extend/single.vue"),
          },
        ],
      },
    ]
  },
})
