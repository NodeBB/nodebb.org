import docNav from "./@docs/_nav"
import injectedComponents from "./@docs/_components"
export default {
  //30ecb03d-abfd-4841-93e5-c5b22c4987b8
  serverAnalytics: {
    trackingId: "UA-45914244-5",
  },
  googleTagManager: {
    googleTagManagerId: "GTM-P7Z7DPH",
    developmentMode: false
  },
  docsEngine: {
    nav: docNav,
    baseRoute: "/docs",
    metaInfo: {
      title: "NodeBB Documentation",
      description: "Learn how to install NodeBB.",
    },
    components: {
      wrap: (): Promise<any> => import("./@docs/wrap.vue"),
      home: (): Promise<any> => import("./@docs/home.vue"),
      doc: (): Promise<any> => import("./@docs/doc.vue"),
    },
    // components: injectedComponents,
    requireLoggedIn: false,
  },
  tailwind: {
    config: require("./tailwind.config"),
    directives: require("./tailwind.css"),
  },
  checkout: {
    production: {
      publishableKey: "",
      plans: {
        pro: { year: "", month: "" },
        business: { year: "", month: "" },
      },
    },
    development: {
      publishableKey: "",
      plans: {
        pro: { year: "", month: "" },
        business: { year: "", month: "" },
      },
    },
  },
  answers: {
    title: "NodeBB Answers",
    notify: {
      newTopic: ["support@nodebb.com"],
      newReply: ["support@nodebb.com"],
    },
  },
  // app: { url: "https://nodebb.org" },
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
  blog: {
    pretitle: "The future is here",
    title: "NodeBB Blog",
    content:
      "Discover the latest product updates, announcements, and articles from the NodeBB team",
    indexRoute: "/blog",
    postRoute: "/entry",
    limit: 6,
    returnLinkText: "Back",
    notFound: {
      title: "No Posts",
      subTitle: "Hmm, we couldn't find any blog posts.",
    },
    promo: {
      pretitle: "Modern Forum Software",
      title: "About NodeBB",
      content:
        "Drive deep user engagement with a highly customizable, modern community platform.",
      button: {
        link: "/about",
        text: "Learn more",
        classes: "btn bg-gray-100 rounded text-blue-500 hover:text-blue-600",
      },
    },
    components: {
      blogIndex: (): Promise<any> => import("./blog/blog-index.vue"),
      blogSingle: (): Promise<any> => import("./blog/blog-single.vue"),
      featuredImage: (): Promise<any> => import("./blog/el-featured-image.vue"),
      title: (): Promise<any> => import("./blog/widget-title.vue"),
      date: (): Promise<any> => import("./blog/widget-date.vue"),
      author: (): Promise<any> => import("./blog/widget-author.vue"),
      singleHeader: (): Promise<any> => import("./blog/el-single-header.vue"),
      entry: (): Promise<any> => import("./blog/widget-entry.vue"),
      social: (): Promise<any> => import("./blog/widget-social.vue"),
      pagination: (): Promise<any> => import("./blog/widget-pagination.vue"),
    },
    layout: {
      index: ["featuredImage", "date", "title", "author"],
      single: ["singleHeader", "entry", "social"],
    },
    metatags: {
      index: {
        title: "Blog - The Latest from NodeBB",
        description:
          "Discover the latest product updates, announcements, and articles from the NodeBB team",
        image: require("./static/logo-nodebb.png"),
      },
    },
  },
  plugins: {
    cta: {
      title: "Develop and share your plugin",
      subtitle:
        "Learn about plugin development and how to submit your extension to the NodeBB library.",
    },
  },
  footer: {
    legal:
      `&copy 2020 <a href='https://www.nodebb.org/' target='_blank'>NodeBB, Inc.</a> &mdash; Made in Canada.`,
  },
}
