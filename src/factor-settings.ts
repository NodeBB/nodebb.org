export default {
  serverAnalytics: {
    trackingId: "UA-45914244-5",
  },
  googleTagManager: {
    googleTagManagerId: "GTM-P7Z7DPH",
    developmentMode: false
  },
  tailwind: {
    config: require("./tailwind.config"),
    directives: require("./tailwind.css"),
  },
  app: { url: "https://nodebb.org" },
  metaInfo: {
    default: {
      image: require("./static/logo-nodebb.jpg"),
    },
  },
  emailList: {
    alphaProgram: { tags: ["nodebb-dev"] },
  },
  site: {
    logo: (): Promise<any> => import("./el/logo-nodebb.vue"),
  },
  footer: {
    legal:
      `&copy 2020 <a href='https://www.nodebb.org/' target='_blank'>NodeBB, Inc.</a> &mdash; Made in Canada.`,
  },
}
