
import docNav from "./@docs/_nav"
import injectedComponents from "./@docs/_components"
export default {
  docsEngine: {
    nav: docNav,
    components: injectedComponents,
  },
  headTags: {
    // font: `<link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet" />`,
  },
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
      `&copy 2020 <a href='https://www.nodebb.org/' rel='noopener' target='_blank'>NodeBB, Inc.</a> &mdash; Made in Canada.`,
  },
}
