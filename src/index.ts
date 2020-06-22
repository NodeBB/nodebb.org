import { addRoutes } from "@factor/api"
import { addPageTemplate } from "@factor/templates"

import "./extend"

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
        path: "/install",
        component: (): Promise<any> => import("./home/v-install.vue"),
        meta: { auth: true, allowBots: true },
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
        path: "/product/design",
        component: (): Promise<any> => import("./product/design/v-design.vue"),
      },
      {
        path: "/product/control",
        component: (): Promise<any> => import("./product/control/v-control.vue"),
      },
      {
        path: "/product/integrate",
        component: (): Promise<any> => import("./product/integrate/v-integrate.vue"),
      },
      {
        path: "/product/extend",
        component: (): Promise<any> => import("./product/extend/v-extend.vue"),
      },
      {
        path: "/about",
        component: (): Promise<any> => import("./v-company.vue"),
      },
      {
        path: "/contact",
        component: (): Promise<any> => import("./v-contact.vue"),
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
            meta: { auth: true, allowBots: true },
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
            meta: { auth: true, allowBots: true },
          },
        ],
      },
    ]
  },
})
